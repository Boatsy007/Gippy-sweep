/**
 * Vercel Routing Middleware – serves each Swept division site on its own hostname.
 *
 *   CLEANED_HOST  e.g. "cleaned.swept.com.au"  -> pages under /cleaned
 *   GROUNDS_HOST  e.g. "grounds.swept.com.au"  -> pages under /grounds
 *   WASHED_HOST   e.g. "washed.swept.com.au"   -> pages under /washed
 *   SCRUBBED_HOST e.g. "scrubbed.swept.com.au" -> pages under /scrubbed
 *
 * INACTIVE until a host is set in Vercel. Without them every request passes
 * straight through, so the commercial site and the /cleaned, /grounds, /washed and /scrubbed preview
 * pages behave exactly as they do today. Each division switches on separately.
 *
 * Once a division's host is set:
 *  - On that host, page requests map onto the prerendered pages under its prefix
 *    (grounds.swept.com.au/residential/ -> /grounds/residential/). Shared files
 *    (/assets/, /api/, favicon, fonts, images) are served as they are.
 *  - On that host, a /<prefix>/... page URL redirects to the clean URL, so no
 *    page is published at two addresses.
 *  - On any other production host, /<prefix>/... pages redirect to the division
 *    host (preview deployments keep serving the prefix for review).
 *
 * See docs/CLEANED-LAUNCH.md, GROUNDS-LAUNCH.md, WASHED-LAUNCH.md and SCRUBBED-LAUNCH.md.
 */

const env = (name: string): string | undefined => (globalThis as unknown as { process?: { env: Record<string, string | undefined> } }).process?.env[name]

/** Files that belong to a division site even though they have an extension. */
const SITE_FILES = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt'])
const SITES = [
  { hostVar: 'CLEANED_HOST', prefix: '/cleaned' },
  { hostVar: 'GROUNDS_HOST', prefix: '/grounds' },
  { hostVar: 'WASHED_HOST', prefix: '/washed' },
  { hostVar: 'SCRUBBED_HOST', prefix: '/scrubbed' },
]

const isPage = (pathname: string) => !/\.[a-z0-9]+$/i.test(pathname) || SITE_FILES.has(pathname)
const underPrefix = (pathname: string, prefix: string) => pathname === prefix || pathname.startsWith(`${prefix}/`)
const stripPrefix = (pathname: string, prefix: string) => pathname.slice(prefix.length) || '/'

const next = () => new Response(null, { headers: { 'x-middleware-next': '1' } })
const rewrite = (url: URL) => new Response(null, { headers: { 'x-middleware-rewrite': url.toString() } })

export default function middleware(request: Request): Response {
  const active = SITES.map((s) => ({ ...s, host: env(s.hostVar)?.toLowerCase() })).filter((s) => s.host)
  if (!active.length) return next()

  const url = new URL(request.url)
  const host = (request.headers.get('host') ?? url.host).toLowerCase()

  const own = active.find((s) => s.host === host)
  if (own) {
    const { prefix } = own
    if (underPrefix(url.pathname, prefix)) {
      // /<prefix>/images/... etc. are real files; /<prefix>/<page> is a duplicate address
      if (!isPage(stripPrefix(url.pathname, prefix))) return next()
      return Response.redirect(new URL(stripPrefix(url.pathname, prefix) + url.search, url), 308)
    }
    if (!isPage(url.pathname)) return next()
    const target = new URL(url)
    target.pathname = `${prefix}${url.pathname}`
    return rewrite(target)
  }

  if (env('VERCEL_ENV') === 'production') {
    const site = active.find((s) => underPrefix(url.pathname, s.prefix) && isPage(stripPrefix(url.pathname, s.prefix)))
    if (site) return Response.redirect(`https://${site.host}${stripPrefix(url.pathname, site.prefix)}${url.search}`, 301)
  }
  return next()
}

export const config = {
  // Shared build assets and API routes never need routing
  matcher: ['/((?!assets/|api/).*)'],
}
