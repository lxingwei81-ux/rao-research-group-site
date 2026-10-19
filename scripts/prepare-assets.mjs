import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [require.resolve('astro')] }));

for (const [index, name] of ['bioelectronics', 'soft-electronics', 'curvy-electronics'].entries()) {
  await sharp('public/images/research/Slide' + (index + 1) + '.JPG')
    .resize(1800, 1200, { fit: 'contain', background: '#ffffff', withoutEnlargement: true })
    .webp({ quality: 84 })
    .toFile('public/images/research/research-' + name + '.webp');
}

const social = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="75" y="75" width="1050" height="1" fill="#d7d7d7"/>
  <text x="75" y="175" font-family="Arial,Helvetica,sans-serif" font-size="24" fill="#666666">CITY UNIVERSITY OF HONG KONG · DEPARTMENT OF CHEMISTRY</text>
  <text x="75" y="310" font-family="Arial,Helvetica,sans-serif" font-size="66" font-weight="600" fill="#262626">Rao Research Group</text>
  <text x="75" y="385" font-family="Arial,Helvetica,sans-serif" font-size="31" fill="#555555">Electronic materials and devices for biological systems</text>
  <rect x="75" y="535" width="1050" height="1" fill="#d7d7d7"/>
</svg>`);
await sharp(social).png().toFile('public/images/social-preview.png');
console.log('Research WebP images and text-only social preview generated.');
