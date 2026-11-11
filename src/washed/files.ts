import { absUrl, WASHED_URL } from './lib/paths'
import { site } from './lib/site'
import { services, servicePath } from './lib/services'
import { commercialPages, commercialPath } from './lib/commercial'
import { areas, areaPath } from './lib/areas'
import { generalFaqs, surfaces, tasks } from './lib/content'
import { suburbPath, suburbsIn } from './lib/suburbs'
import { washedRoutes } from './routes'

/* Text files for the washed site, written to dist/washed/ by scripts/prerender.mjs. */

export function sitemapXml() {
  const urls = washedRoutes()
    .filter((r) => !r.meta.noindex)
    .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${site.contentUpdated}</lastmod>\n  </url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function robotsTxt() {
  return ['User-agent: *', 'Allow: /', 'Disallow: /api/', `Disallow: ${new URL(absUrl('/quote/thanks')).pathname}`, '', `Sitemap: ${WASHED_URL}/sitemap.xml`, ''].join('\n')
}

const plain = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

/** llms.txt – a plain-text summary of the business for AI assistants and answer engines. */
export function llmsTxt() {
  const lines = [
    '# Washed by Swept',
    '',
    `> ${site.description}`,
    '',
    'Washed by Swept is the pressure cleaning division of Swept, covering South East Queensland and the Tweed in northern NSW: Brisbane, Logan, the Gold Coast and Tweed Heads. For homes it offers driveway and concrete cleaning, house washing and soft washing, patio, paver and pool surround cleaning, deck and timber cleaning, fence and wall cleaning, oil, rust and stain treatment, and exterior clean-ups before a sale or the end of a lease. For commercial properties it offers car park wash-downs, building exterior washing and graffiti removal, strata, resort and body corporate cleaning, retail centre and footpath cleaning, and loading dock, bin bay and warehouse wash-downs. The cleaning method is matched to each surface (soft washing for paint and render, low pressure for timber and natural stone), run-off is planned to keep wash water away from stormwater drains where practical, and every customer receives a written quote before booking. It does not promise that every stain will come out.',
    '',
    '## Key facts',
    '- Service area: Brisbane, Logan, Gold Coast (QLD) and Tweed Heads (NSW)',
    `- Quote: free, written, sent ${site.quoteResponse}`,
    `- Enquiry hours: ${site.responseHours}`,
    ...(site.insured ? ['- Insurance: Swept holds current public liability insurance'] : []),
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    ...(site.email ? [`- Email: ${site.email}`] : []),
    `- Request a quote: ${absUrl('/quote')}`,
    '',
    '## Residential services',
    ...services.map((s) => `- [${s.name}](${absUrl(servicePath(s.slug))}): ${s.summary}`),
    '',
    '## Commercial pressure cleaning',
    `- [Commercial pressure cleaning](${absUrl('/commercial')})`,
    ...commercialPages.map((p) => `- [${p.name}](${absUrl(commercialPath(p.slug))}): ${p.summary}`),
    '',
    '## What every clean includes',
    ...tasks.map((t) => `- ${t.name}: ${t.detail}`),
    '',
    '## Matching the method to the surface (general guide)',
    ...surfaces.map((s) => `- ${s.name} (${s.method}): ${s.body}`),
    '',
    '## Areas and suburbs',
    ...areas.flatMap((a) => [
      `### [${a.name}](${absUrl(areaPath(a.slug))})`,
      ...suburbsIn(a.slug).map((s) => `- [${s.name} ${a.state} ${s.postcode}](${absUrl(suburbPath(s))}) – ${s.council}`),
      '',
    ]),
    '## Frequently asked questions',
    ...generalFaqs.flatMap((f) => [`- Q: ${f.q}`, `  A: ${plain(f.a)}`]),
    '',
    '## More',
    `- [About Washed by Swept](${absUrl('/about')})`,
    `- [All FAQs](${absUrl('/faq')})`,
    `- [Contact](${absUrl('/contact')})`,
    `- [Sitemap](${WASHED_URL}/sitemap.xml)`,
    '',
  ]
  return lines.join('\n')
}
