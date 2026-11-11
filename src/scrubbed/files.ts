import { absUrl, SCRUBBED_URL } from './lib/paths'
import { site } from './lib/site'
import { services, servicePath } from './lib/services'
import { areas, areaPath, suburbsIn } from './lib/areas'
import { floorTypes, generalFaqs, method } from './lib/content'
import { scrubbedRoutes } from './routes'

/* Text files for the scrubbed site, written to dist/scrubbed/ by scripts/prerender.mjs. */

export function sitemapXml() {
  const urls = scrubbedRoutes()
    .filter((r) => !r.meta.noindex)
    .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${site.contentUpdated}</lastmod>\n  </url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function robotsTxt() {
  return ['User-agent: *', 'Allow: /', 'Disallow: /api/', `Disallow: ${new URL(absUrl('/quote/thanks')).pathname}`, '', `Sitemap: ${SCRUBBED_URL}/sitemap.xml`, ''].join('\n')
}

const plain = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

/** llms.txt – a plain-text summary of the business for AI assistants and answer engines. */
export function llmsTxt() {
  const lines = [
    '# Scrubbed by Swept',
    '',
    `> ${site.description}`,
    '',
    'Scrubbed by Swept is the commercial floor scrubbing division of Swept, covering South East Queensland and the Tweed in northern NSW: Brisbane, Logan, the Gold Coast and Tweed Heads. It provides machine floor scrubbing with scrubber-driers (which apply solution, scrub and recover the dirty water in one pass) for warehouses and distribution centres, factories and workshops, shopping centres and food courts, car park levels, and polished concrete, vinyl and tiled floors in showrooms and offices. Work is offered as one-off deep cleans or weekly, fortnightly or monthly programs, scheduled around operating hours, with no lock-in contracts and a written scope and quote before booking. It is commercial only and does not grind, polish, strip or re-coat floors.',
    '',
    '## Key facts',
    '- Service area: Brisbane, Logan, Gold Coast (QLD) and Tweed Heads (NSW)',
    '- Customers: commercial and industrial sites only',
    `- Quote: free, written, sent ${site.quoteResponse}`,
    `- Enquiry hours: ${site.responseHours}`,
    ...(site.insured ? ['- Insurance: Swept holds current public liability insurance'] : []),
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    ...(site.email ? [`- Email: ${site.email}`] : []),
    `- Request a quote: ${absUrl('/quote')}`,
    '',
    '## Services',
    `- [All floor scrubbing services](${absUrl('/services')})`,
    ...services.map((s) => `- [${s.name}](${absUrl(servicePath(s.slug))}): ${s.summary}`),
    '',
    '## How machine floor scrubbing works',
    ...method.map((m) => `- ${m.title}: ${m.body}`),
    '',
    '## Floor types (general guide)',
    ...floorTypes.map((t) => `- ${t.name}: ${t.body}`),
    '',
    '## Areas',
    ...areas.map((a) => `- [${a.name}](${absUrl(areaPath(a.slug))}) (${a.state}): ${suburbsIn(a.slug).length} suburbs, including industrial areas such as ${a.precincts.join(', ')}`),
    '',
    '## Frequently asked questions',
    ...generalFaqs.flatMap((f) => [`- Q: ${f.q}`, `  A: ${plain(f.a)}`]),
    '',
    '## More',
    `- [About Scrubbed by Swept](${absUrl('/about')})`,
    `- [All FAQs](${absUrl('/faq')})`,
    `- [Contact](${absUrl('/contact')})`,
    `- [Sitemap](${SCRUBBED_URL}/sitemap.xml)`,
    '',
  ]
  return lines.join('\n')
}
