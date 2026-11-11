/**
 * Where the Scrubbed by Swept site lives.
 *
 * Until scrubbed.swept.com.au is connected, the scrubbed site is served under
 * /scrubbed on the commercial site's address (and on Vercel preview URLs). At
 * launch, build with VITE_SCRUBBED_BASE="" and VITE_SCRUBBED_SITE_URL set to the
 * subdomain, and set SCRUBBED_HOST in Vercel so middleware.ts routes the host.
 * See docs/SCRUBBED-LAUNCH.md.
 */

const env = import.meta.env

/** Path prefix for every scrubbed-site link: "/scrubbed" now, "" on the subdomain. */
export const BASE = (env.VITE_SCRUBBED_BASE ?? '/scrubbed').replace(/\/+$/, '')

/** Public address of the scrubbed site, used for canonical URLs, sitemap and schema. */
export const SCRUBBED_URL = (env.VITE_SCRUBBED_SITE_URL || `${env.VITE_SITE_URL ?? ''}${BASE}`).replace(/\/+$/, '')

/** Address of the main Swept commercial site. */
export const COMMERCIAL_URL = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '') || '/'

/** Keep the scrubbed site out of search results until launch is approved. */
export const NOINDEX = env.VITE_SCRUBBED_NOINDEX !== 'false'

/** Absolute site address without trailing slash (replaces sweepclean's siteUrl()). */
export const siteUrl = () => SCRUBBED_URL

/** Normalise a site path to its canonical form: leading and trailing slash, no doubles. */
export function canonicalPath(path: string): string {
  const [p, rest = ''] = path.split(/(?=[?#])/)
  const clean = ('/' + p).replace(/\/{2,}/g, '/')
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith('/') ? clean : `${clean}/`
  return withSlash + rest
}

/** Link to a scrubbed-site page: "/services" -> "/scrubbed/services/". */
export const href = (path: string) => `${BASE}${canonicalPath(path)}`

/** Absolute URL of a scrubbed-site page, for canonicals, sitemap and schema. */
export const absUrl = (path: string) => `${SCRUBBED_URL}${canonicalPath(path)}`
