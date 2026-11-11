import { site, telHref } from './site'
import { absUrl, GROUNDS_URL } from './paths'
import { areas } from './areas'
import { services, servicePath, type Service } from './services'
import type { Faq } from './types'

const id = (frag: string) => `${absUrl('/')}#${frag}`
/** Site-root files (logo, share image) live at the origin, outside the /grounds prefix. */
const origin = () => { try { return new URL(GROUNDS_URL).origin } catch { return '' } }
const areaServed = () => areas.map((a) => ({ '@type': 'City', name: a.name, containedInPlace: { '@type': 'State', name: a.state === 'QLD' ? 'Queensland' : 'New South Wales' } }))

export function businessSchema() {
  const b: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    additionalType: 'https://en.wikipedia.org/wiki/Landscape_maintenance',
    '@id': id('business'),
    name: site.name,
    url: absUrl('/'),
    logo: `${origin()}/logo-grounds.webp`,
    image: `${origin()}/grounds/og-image.jpg`,
    description: site.description,
    areaServed: areaServed(),
    knowsLanguage: 'en-AU',
    parentOrganization: { '@type': 'Organization', name: 'Swept' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: site.openingHours.days.map((d) => `https://schema.org/${d}`),
      opens: site.openingHours.opens,
      closes: site.openingHours.closes,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Lawn, garden and grounds care',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: absUrl(servicePath(s.slug)) } })),
    },
    potentialAction: { '@type': 'QuoteAction', target: absUrl('/quote'), name: 'Request a free lawn and garden quote' },
  }
  if (site.phone) b.telephone = telHref(site.phone).replace('tel:', '')
  if (site.email) b.email = site.email
  return b
}

export function websiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': id('website'), url: absUrl('/'), name: site.name, inLanguage: 'en-AU', publisher: { '@id': id('business') } }
}

export function serviceSchema(s: Pick<Service, 'name' | 'metaDescription'> & { path: string; type?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.type ?? s.name,
    description: s.metaDescription,
    url: absUrl(s.path),
    provider: { '@id': id('business') },
    areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
  }
}

export function faqSchema(faqs: Faq[]) {
  // Strip [text](link) markup so answers read as plain text
  const plain = (t: string) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '')
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })) }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: absUrl(it.path) })) }
}
