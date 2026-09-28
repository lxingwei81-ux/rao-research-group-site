import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const deploymentSite = site || new URL('http://localhost:4321');
  const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, deploymentSite);

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  });
};
