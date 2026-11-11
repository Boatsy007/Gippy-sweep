/**
 * Vercel Routing Middleware – serves Cleaned by Swept on its own hostname.
 *
 * INACTIVE until CLEANED_HOST is set in Vercel (e.g. "cleaned.swept.com.au").
 * Without it every request passes straight through, so the commercial site and
 * the /cleaned preview pages behave exactly as they do today.
 *
 * Once set:
 *  - On CLEANED_HOST, page requests map onto the prerendered pages under /cleaned
 *    (cleaned.swept.com.au/residential/ -> /cleaned/residential/). Shared files
 *    (/assets/, /api/, favicon, fonts, images) are served as they are.
 *  - On CLEANED_HOST, a /cleaned/... page URL redirects to the clean URL, so no
 *    page is published at two addresses.
 *  - On the production commercial host, /cleaned/... pages redirect to
 *    CLEANED_HOST (preview deployments keep serving /cleaned for review).
 *
 * See docs/CLEANED-LAUNCH.md for the full launch steps.
 */

const env = (name: string): string | undefined => (globalThis as unknown as { process?: { env: Record<string, string | undefined> } }).process?.env[name]

/** Files that belong to the cleaning site even though they have an extension. */
const CLEANED_FILES = new Set(['/robots.txt', '/sitemap.xml', '/llms.txt'])
const PREFIX = '/cleaned'

const isPage = (pathname: string) => !/\.[a-z0-9]+$/i.test(pathname) || CLEANED_FILES.has(pathname)
const underPrefix = (pathname: string) => pathname === PREFIX || pathname.startsWith(`${PREFIX}/`)
const stripPrefix = (pathname: string) => pathname.slice(PREFIX.length) || '/'

const next = () => new Response(null, { headers: { 'x-middleware-next': '1' } })
const rewrite = (url: URL) => new Response(null, { headers: { 'x-middleware-rewrite': url.toString() } })

export default function middleware(request: Request): Response {
  const cleanedHost = env('CLEANED_HOST')
  if (!cleanedHost) return next()

  const url = new URL(request.url)
  const host = (request.headers.get('host') ?? url.host).toLowerCase()

  if (host === cleanedHost.toLowerCase()) {
    if (underPrefix(url.pathname)) {
      // /cleaned/images/... etc. are real files; /cleaned/<page> is a duplicate address
      if (!isPage(stripPrefix(url.pathname))) return next()
      return Response.redirect(new URL(stripPrefix(url.pathname) + url.search, url), 308)
    }
    if (!isPage(url.pathname)) return next()
    const target = new URL(url)
    target.pathname = `${PREFIX}${url.pathname}`
    return rewrite(target)
  }

  if (env('VERCEL_ENV') === 'production' && underPrefix(url.pathname) && isPage(stripPrefix(url.pathname))) {
    return Response.redirect(`https://${cleanedHost}${stripPrefix(url.pathname)}${url.search}`, 301)
  }
  return next()
}

export const config = {
  // Shared build assets and API routes never need routing
  matcher: ['/((?!assets/|api/).*)'],
}
