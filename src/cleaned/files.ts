import { absUrl, CLEANED_URL } from './lib/paths'
import { site, trustLabel } from './lib/site'
import { services } from './lib/services'
import { servicePath } from './lib/catalogue'
import { commercialPages, commercialPath } from './lib/commercial'
import { areas } from './lib/areas'
import { generalFaqs } from './lib/faqs'
import { suburbPath, suburbsIn } from './lib/suburbs'
import { tasks } from './lib/tasks'
import { guidePath, guides } from './lib/guides'
import { cleanedRoutes } from './routes'

/* Text files for the cleaning site, ported from sweepclean's sitemap.ts, robots.ts
   and llms.txt route. Written to dist/cleaned/ by scripts/prerender.mjs. */

/** Last meaningful update for a page: the guide's own date, otherwise the site content date. */
function lastmod(path: string) {
  const g = guides.find((x) => absUrl(guidePath(x.slug)) === absUrl(path))
  return g ? g.updated ?? g.published : site.contentUpdated
}

export function sitemapXml() {
  const urls = cleanedRoutes()
    .filter((r) => !r.meta.noindex)
    .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${lastmod(r.path)}</lastmod>\n  </url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function robotsTxt() {
  return ['User-agent: *', 'Allow: /', 'Disallow: /api/', `Disallow: ${new URL(absUrl('/quote/thanks')).pathname}`, '', `Sitemap: ${CLEANED_URL}/sitemap.xml`, ''].join('\n')
}

/** llms.txt – a plain-text summary of the business for AI assistants and answer engines. */
export function llmsTxt() {
  const lines = [
    '# Cleaned by Swept',
    '',
    `> ${site.description}`,
    '',
    'Cleaned by Swept is the cleaning division of Swept, covering South East Queensland and the Tweed in northern NSW: Brisbane, Logan, the Gold Coast and Tweed Heads. It offers regular home cleaning, deep cleaning, NDIS and home care cleaning, bond cleaning, Airbnb and holiday rental turnovers, carpet steam cleaning and commercial cleaning. Homes can book weekly, fortnightly, monthly or one-off cleans. There are no lock-in contracts, every clean follows a written room-by-room checklist, and customers receive a written quote before booking.',
    '',
    '## Key facts',
    '- Service area: Brisbane, Logan, Gold Coast (QLD) and Tweed Heads (NSW)',
    `- Quote: free, written, sent ${site.quoteResponse}`,
    `- Enquiry hours: ${site.responseHours}`,
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    ...(site.email ? [`- Email: ${site.email}`] : []),
    `- Request a quote: ${absUrl('/quote')}`,
    '',
    '## Services',
    ...services.map((s) => `- [${s.name}](${absUrl(servicePath(s.slug))}): ${s.summary} Best for: ${s.bestFor}.`),
    ...commercialPages.map((p) => `- [${p.name}](${absUrl(commercialPath(p.slug))}): ${p.summary}`),
    '',
    '## What we clean',
    ...tasks.map((t) => `- ${t.name}: ${t.detail}`),
    '',
    '## Areas and suburbs',
    ...areas.flatMap((a) => [
      `### [${a.name}](${absUrl(`/residential/areas/${a.slug}`)})`,
      ...suburbsIn(a.slug).map((s) => `- [${s.name} ${a.state} ${s.postcode}](${absUrl(suburbPath(s))}) – ${s.council}`),
      '',
    ]),
    ...(guides.length ? ['## Cleaning guides', ...guides.map((g) => `- [${g.title}](${absUrl(guidePath(g.slug))}): ${g.description}`), ''] : []),
    '## Frequently asked questions',
    ...generalFaqs.flatMap((f) => [`- Q: ${f.q}`, `  A: ${f.a}`]),
    '',
    ...(trustLabel() ? [`Trust: ${[site.insured && 'Swept holds current public liability insurance', site.policeChecked && 'every cleaner holds a current national police check'].filter(Boolean).join('; ')}.`, ''] : []),
    `## ${site.promise.name}`,
    `${site.promise.tagline} ${site.promise.body} ${site.promise.acl} Details: ${absUrl(site.promise.path)}`,
    '',
    '## More',
    `- [About Cleaned by Swept](${absUrl('/about')})`,
    `- [All FAQs](${absUrl('/faq')})`,
    `- [Contact](${absUrl('/contact')})`,
    `- [Sitemap](${CLEANED_URL}/sitemap.xml)`,
    '',
  ]
  return lines.join('\n')
}
