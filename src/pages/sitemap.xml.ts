import type { APIRoute } from 'astro';

const routes = ['', 'dr-rao/', 'research/', 'people/', 'publications/', 'positions/', 'news/'];

export const GET: APIRoute = ({ site }) => {
  const deploymentSite = site || new URL('http://localhost:4321');
  const urls = routes
    .map((route) => `  <url><loc>${new URL(`${import.meta.env.BASE_URL}${route}`, deploymentSite)}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
