import { absUrl, GROUNDS_URL } from './lib/paths'
import { site } from './lib/site'
import { services, servicePath } from './lib/services'
import { commercialPages, commercialPath } from './lib/commercial'
import { areas, areaPath } from './lib/areas'
import { generalFaqs, seasons, tasks } from './lib/content'
import { suburbPath, suburbsIn } from './lib/suburbs'
import { groundsRoutes } from './routes'

/* Text files for the grounds site, written to dist/grounds/ by scripts/prerender.mjs. */

export function sitemapXml() {
  const urls = groundsRoutes()
    .filter((r) => !r.meta.noindex)
    .map((r) => `  <url>\n    <loc>${absUrl(r.path)}</loc>\n    <lastmod>${site.contentUpdated}</lastmod>\n  </url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function robotsTxt() {
  return ['User-agent: *', 'Allow: /', 'Disallow: /api/', `Disallow: ${new URL(absUrl('/quote/thanks')).pathname}`, '', `Sitemap: ${GROUNDS_URL}/sitemap.xml`, ''].join('\n')
}

const plain = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

/** llms.txt – a plain-text summary of the business for AI assistants and answer engines. */
export function llmsTxt() {
  const lines = [
    '# Grounds by Swept',
    '',
    `> ${site.description}`,
    '',
    'Grounds by Swept is the lawn, garden and grounds care division of Swept, covering South East Queensland and the Tweed in northern NSW: Brisbane, Logan, the Gold Coast and Tweed Heads. For homes it offers lawn mowing and edging, garden maintenance and weeding, hedge and shrub trimming, pruning and small tree work, mulching, turf laying and lawn repair, fertilising and weed control, green waste removal and yard clean-ups. For commercial properties it offers scheduled grounds maintenance for strata and body corporate properties, commercial and industrial sites, retail centres and car parks, and rental portfolios. Regular visits can be weekly, fortnightly, monthly or seasonal, there are no lock-in contracts, and every customer receives a written quote and scope before booking. It does not climb or fell large trees, grind stumps or work near overhead power lines.',
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
    '## Commercial grounds maintenance',
    `- [Commercial grounds maintenance](${absUrl('/commercial')})`,
    ...commercialPages.map((p) => `- [${p.name}](${absUrl(commercialPath(p.slug))}): ${p.summary}`),
    '',
    '## What a regular visit can include',
    ...tasks.map((t) => `- ${t.name}: ${t.detail}`),
    '',
    '## The garden year in South East Queensland (general guide)',
    ...seasons.map((s) => `- ${s.name} (${s.months}): ${s.body}`),
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
    `- [About Grounds by Swept](${absUrl('/about')})`,
    `- [All FAQs](${absUrl('/faq')})`,
    `- [Contact](${absUrl('/contact')})`,
    `- [Sitemap](${GROUNDS_URL}/sitemap.xml)`,
    '',
  ]
  return lines.join('\n')
}
