/**
 * Where the Cleaned by Swept site lives.
 *
 * Until cleaned.swept.com.au is connected, the cleaning site is served under
 * /cleaned on the commercial site's address (and on Vercel preview URLs). At
 * launch, build with VITE_CLEANED_BASE="" and VITE_CLEANED_SITE_URL set to the
 * subdomain, and set CLEANED_HOST in Vercel so middleware.ts routes the host.
 * See docs/CLEANED-LAUNCH.md.
 */

const env = import.meta.env

/** Path prefix for every cleaning-site link: "/cleaned" now, "" on the subdomain. */
export const BASE = (env.VITE_CLEANED_BASE ?? '/cleaned').replace(/\/+$/, '')

/** Public address of the cleaning site, used for canonical URLs, sitemap and schema. */
export const CLEANED_URL = (env.VITE_CLEANED_SITE_URL || `${env.VITE_SITE_URL ?? ''}${BASE}`).replace(/\/+$/, '')

/** Address of the main Swept commercial site. */
export const COMMERCIAL_URL = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '') || '/'

/** Keep the cleaning site out of search results until launch is approved. */
export const NOINDEX = env.VITE_CLEANED_NOINDEX !== 'false'

/** Absolute site address without trailing slash (replaces sweepclean's siteUrl()). */
export const siteUrl = () => CLEANED_URL

/** Normalise a site path to its canonical form: leading and trailing slash, no doubles. */
export function canonicalPath(path: string): string {
  const [p, rest = ''] = path.split(/(?=[?#])/)
  const clean = ('/' + p).replace(/\/{2,}/g, '/')
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith('/') ? clean : `${clean}/`
  return withSlash + rest
}

/** Link to a cleaning-site page: "/residential" -> "/cleaned/residential/". */
export const href = (path: string) => `${BASE}${canonicalPath(path)}`

/** Absolute URL of a cleaning-site page, for canonicals, sitemap and schema. */
export const absUrl = (path: string) => `${CLEANED_URL}${canonicalPath(path)}`

/**
 * sweepclean URLs -> Cleaned by Swept URLs. Guide text and data written for
 * sweepclean keep their original links; they are mapped here when rendered, and
 * the same table drives the redirect plan in docs/CLEANED-LAUNCH.md.
 */
export function remap(oldPath: string): string {
  const [p, rest = ''] = oldPath.split(/(?=[?#])/)
  const path = p.replace(/\/+$/, '') || '/'
  const rules: [RegExp, string][] = [
    [/^\/services\/commercial-cleaning$/, '/commercial'],
    [/^\/services\/([^/]+)$/, '/residential/$1'],
    [/^\/services$/, '/residential'],
    [/^\/areas\/([^/]+)\/([^/]+)$/, '/residential/areas/$1/$2'],
    [/^\/areas\/([^/]+)$/, '/residential/areas/$1'],
    [/^\/areas$/, '/residential/areas'],
    [/^\/cleaning-guides\/([^/]+)$/, '/guides/$1'],
    [/^\/cleaning-guides$/, '/guides'],
    [/^\/why-swept$/, '/about'],
    [/^\/(end-of-lease-cleaning|services\/end-of-lease-cleaning)$/, '/residential/bond-cleaning'],
    [/^\/(book|get-a-quote)$/, '/quote'],
  ]
  for (const [re, to] of rules) if (re.test(path)) return path.replace(re, to) + rest
  return path + rest
}

/** Link for a sweepclean-style path: remapped, then prefixed. */
export const legacyHref = (oldPath: string) => href(remap(oldPath))
