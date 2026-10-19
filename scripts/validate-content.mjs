import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';
const pubs=parse(fs.readFileSync('src/data/publications.yml','utf8'));
const seen=new Set();
function url(value,label,{asset=false}={}){
if(!value)return;
if(value.startsWith('/') && !value.startsWith('//')){
if(!asset)throw Error(label+' must be an absolute HTTPS URL');
if(!fs.existsSync(path.join('public',value)))throw Error(label+' asset is missing: '+value);
return;
}
const parsed=new URL(value);if(!['http:','https:'].includes(parsed.protocol))throw Error(label+' must use HTTP(S)');
}
for(const p of pubs){
if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.id)||seen.has(p.id))throw Error('Invalid or duplicate publication ID: '+p.id);seen.add(p.id);
for(const key of ['title','authors','journal'])if(!p[key]?.trim())throw Error(p.id+': missing '+key);
if(/\bet\s+al\b|…|\.{3}/i.test(p.authors))throw Error(p.id+': list every author; abbreviated author lists are not allowed');
if(!Number.isInteger(p.year)||p.year<1900||p.year>2100)throw Error(p.id+': invalid year');
if(p.doi&&!/^10\.\d{4,9}\/\S+$/.test(p.doi))throw Error(p.id+': use a bare DOI, not a URL');
url(p.url,p.id+' publisher');url(p.pdf_url,p.id+' PDF',{asset:true});url(p.cover_image,p.id+' image',{asset:true});
}
for(const file of fs.readdirSync('src/content/research')){
const raw=fs.readFileSync('src/content/research/'+file,'utf8');const data=parse(raw.split(/---\r?\n/)[1]);
if(!data.published)continue;
for(const id of data.representative_publications||[])if(!seen.has(id))throw Error(file+': unknown publication '+id);
url(data.image,file+' image',{asset:true});
}
const site=parse(fs.readFileSync('src/data/site.yml','utf8'));
for(const key of ['social_image','official_logo','department_logo'])url(site[key],key,{asset:true});
for(const key of ['faculty_url','scholar_url','orcid_url'])url(site[key],key);
console.log('Content validation passed: '+pubs.length+' publications; linked research and image assets verified.');
