/**
 * Where the Washed by Swept site lives.
 *
 * Until washed.swept.com.au is connected, the washed site is served under
 * /washed on the commercial site's address (and on Vercel preview URLs). At
 * launch, build with VITE_WASHED_BASE="" and VITE_WASHED_SITE_URL set to the
 * subdomain, and set WASHED_HOST in Vercel so middleware.ts routes the host.
 * See docs/WASHED-LAUNCH.md.
 */

const env = import.meta.env

/** Path prefix for every washed-site link: "/washed" now, "" on the subdomain. */
export const BASE = (env.VITE_WASHED_BASE ?? '/washed').replace(/\/+$/, '')

/** Public address of the washed site, used for canonical URLs, sitemap and schema. */
export const WASHED_URL = (env.VITE_WASHED_SITE_URL || `${env.VITE_SITE_URL ?? ''}${BASE}`).replace(/\/+$/, '')

/** Address of the main Swept commercial site. */
export const COMMERCIAL_URL = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '') || '/'

/** Keep the washed site out of search results until launch is approved. */
export const NOINDEX = env.VITE_WASHED_NOINDEX !== 'false'

/** Absolute site address without trailing slash (replaces sweepclean's siteUrl()). */
export const siteUrl = () => WASHED_URL

/** Normalise a site path to its canonical form: leading and trailing slash, no doubles. */
export function canonicalPath(path: string): string {
  const [p, rest = ''] = path.split(/(?=[?#])/)
  const clean = ('/' + p).replace(/\/{2,}/g, '/')
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith('/') ? clean : `${clean}/`
  return withSlash + rest
}

/** Link to a washed-site page: "/residential" -> "/washed/residential/". */
export const href = (path: string) => `${BASE}${canonicalPath(path)}`

/** Absolute URL of a washed-site page, for canonicals, sitemap and schema. */
export const absUrl = (path: string) => `${WASHED_URL}${canonicalPath(path)}`
