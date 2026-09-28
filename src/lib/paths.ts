const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/**
 * Prefix site-local URLs with Astro's deployment base path.
 * External URLs, email links and same-page fragments are left unchanged.
 */
export function withBase(path: string): string {
  if (!path || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  if (path === base || path.startsWith(base)) return path;

  return `${base}${path.replace(/^\.?\//, '')}`;
}
