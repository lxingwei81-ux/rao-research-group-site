import { chromium } from '@playwright/test';
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { parse } from 'yaml';
const totalPublications = parse(fs.readFileSync('src/data/publications.yml', 'utf8')).length;
const origin=process.env.TEST_URL || 'http://127.0.0.1:4322';
const screenshotMode=process.env.SCREENSHOT_MODE || 'full';
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL || (process.platform === 'win32' ? 'msedge' : 'chromium'),headless:true});
const page=await browser.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
fs.mkdirSync('tmp/screenshots',{recursive:true});
const routes=['/','/research/','/people/','/publications/','/positions/','/news/'];
const localTargets=new Set();
for(const width of [1440,390,320]){
await page.setViewportSize({width,height:1000});
for(const route of routes){
const response=await page.goto(origin+route);assert.equal(response.status(),200);
await page.evaluate(()=>document.fonts.ready);
assert(await page.locator('body').evaluate(element => getComputedStyle(element).fontFamily.includes('Arial')), route+' stylesheet failed at '+width);
assert.equal(await page.locator('main h1').count(),1,route+' should have one main heading');
assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),route+' overflow at '+width);
assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>!i.complete||i.naturalWidth===0).length),0,route+' image failed');
if(route==='/positions/') {
  assert.equal(await page.getByText('Enquire about this position').count(),0);
  assert.equal(await page.locator('main a[href^="mailto:"]').count(),1);
}
for(const href of await page.locator('a[href]').evaluateAll(as=>as.map(a=>a.href)))if(href.startsWith(origin))localTargets.add(href);
if(screenshotMode!=='none'&&(route==='/'||route==='/publications/'))await page.screenshot({path:'tmp/screenshots/'+(route==='/'?'home':'publications')+'-'+width+'.png',fullPage:screenshotMode==='full'});
}
}
await page.goto(origin+'/');
const toggle=page.getByRole('button',{name:'Toggle navigation'});
await toggle.click();assert.equal(await toggle.getAttribute('aria-expanded'),'true');
await page.getByRole('navigation',{name:'Primary navigation'}).getByRole('link',{name:'Join Us'}).click();
assert(page.url().includes('/positions/'));
await page.goto(origin+'/publications/');
await page.locator('[data-query]').fill('zz-no-match-zz');
await page.waitForFunction(()=>document.querySelector('[data-results]').textContent.includes('No publications'));
assert.equal(await page.locator('[data-publication]:visible').count(),0);
await page.getByRole('button',{name:'Clear filters'}).click();
await page.waitForFunction(total=>document.querySelectorAll('[data-publication]:not([hidden])').length===total,totalPublications);
await page.locator('[data-year]').first().selectOption('2026');
assert.equal(await page.locator('[data-publication]:visible').count(),1);
await page.locator('.year-nav a').filter({hasText:'2022'}).click();
await page.waitForFunction(total=>document.querySelectorAll('[data-publication]:not([hidden])').length===total,totalPublications);
await page.locator('select[data-area]').selectOption('Bioelectronics & Bio-optoelectronics');
const visible=await page.locator('[data-publication]:visible').evaluateAll(items=>items.map(i=>i.dataset.area));
assert(visible.length>0&&visible.every(a=>a==='Bioelectronics & Bio-optoelectronics'));
await page.goto(origin+'/dr-rao/');await page.waitForURL('**/people/#pi');
await page.goto(origin+'/join-us/');await page.waitForURL('**/positions/');
for(const target of localTargets){
const url=new URL(target);const response=await page.request.get(url.href);assert.equal(response.status(),200,'Broken link '+target);
if(url.hash){const html=await response.text();assert(html.includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'),'Missing anchor '+target);}
}
assert.deepEqual(errors,[]);
await browser.close();
console.log('Passed: 6 pages × 3 viewports; images, links/anchors, mobile navigation, filters and redirects.');
