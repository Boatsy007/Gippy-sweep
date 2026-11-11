/**
 * Where the Grounds by Swept site lives.
 *
 * Until grounds.swept.com.au is connected, the grounds site is served under
 * /grounds on the commercial site's address (and on Vercel preview URLs). At
 * launch, build with VITE_GROUNDS_BASE="" and VITE_GROUNDS_SITE_URL set to the
 * subdomain, and set GROUNDS_HOST in Vercel so middleware.ts routes the host.
 * See docs/GROUNDS-LAUNCH.md.
 */

const env = import.meta.env

/** Path prefix for every grounds-site link: "/grounds" now, "" on the subdomain. */
export const BASE = (env.VITE_GROUNDS_BASE ?? '/grounds').replace(/\/+$/, '')

/** Public address of the grounds site, used for canonical URLs, sitemap and schema. */
export const GROUNDS_URL = (env.VITE_GROUNDS_SITE_URL || `${env.VITE_SITE_URL ?? ''}${BASE}`).replace(/\/+$/, '')

/** Address of the main Swept commercial site. */
export const COMMERCIAL_URL = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '') || '/'

/** Keep the grounds site out of search results until launch is approved. */
export const NOINDEX = env.VITE_GROUNDS_NOINDEX !== 'false'

/** Absolute site address without trailing slash (replaces sweepclean's siteUrl()). */
export const siteUrl = () => GROUNDS_URL

/** Normalise a site path to its canonical form: leading and trailing slash, no doubles. */
export function canonicalPath(path: string): string {
  const [p, rest = ''] = path.split(/(?=[?#])/)
  const clean = ('/' + p).replace(/\/{2,}/g, '/')
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith('/') ? clean : `${clean}/`
  return withSlash + rest
}

/** Link to a grounds-site page: "/residential" -> "/grounds/residential/". */
export const href = (path: string) => `${BASE}${canonicalPath(path)}`

/** Absolute URL of a grounds-site page, for canonicals, sitemap and schema. */
export const absUrl = (path: string) => `${GROUNDS_URL}${canonicalPath(path)}`
