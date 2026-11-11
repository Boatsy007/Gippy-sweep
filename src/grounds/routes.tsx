import type { ReactElement } from 'react'
import { absUrl, canonicalPath, GROUNDS_URL } from './lib/paths'
import { services, servicePath } from './lib/services'
import { commercialHub, commercialPages, commercialPath } from './lib/commercial'
import { areas, areaPath } from './lib/areas'
import { areaFor, suburbPath, suburbs, suburbsIn } from './lib/suburbs'
import { contactFaqs, generalFaqs } from './lib/content'
import type { Img } from './lib/types'
import { breadcrumbSchema, businessSchema, faqSchema, serviceSchema, websiteSchema } from './lib/schema'
import { Home } from './pages/Home'
import { ResidentialHub, ServicePage, residentialCrumbs } from './pages/Residential'
import { CommercialHub, CommercialPageView, commercialCrumbs } from './pages/Commercial'
import { AreaPage, AreasIndex, SuburbPage, areasCrumbs, suburbFaqs } from './pages/Areas'
import { About, Contact, FaqPage, NotFound, Privacy, Thanks } from './pages/Info'
import { QuotePage } from './pages/Quote'

/** What a page puts in <head>. */
export type PageMeta = {
  title: string
  description: string
  path: string
  image?: { img: Img; alt: string }
  article?: { published: string; modified?: string; tags: string[] }
  schema: object[]
  /** Always noindex (thanks/404) regardless of the site-wide launch setting */
  noindex?: boolean
}

export type GroundsRoute = { path: string; meta: PageMeta; render: () => ReactElement }

const origin = () => { try { return new URL(GROUNDS_URL).origin } catch { return '' } }

/** Default share image, served from the site root (public/grounds/og-image.jpg). */
export const defaultImage = { img: { src: '/grounds/og-image.jpg', width: 1200, height: 630 }, alt: 'Grounds by Swept – lawn, garden and grounds care in Brisbane, Logan, the Gold Coast and Tweed Heads' }
export const imageUrl = (src: string) => (/^https?:/.test(src) ? src : `${origin()}${src}`)

/** Keeps suburb titles within about 60 characters for long suburb names. */
const suburbTitle = (name: string, postcode: string) => {
  const full = `Lawn Mowing & Gardening ${name} ${postcode} | Grounds by Swept`
  return full.length <= 60 ? full : `Lawn Mowing ${name} ${postcode} | Grounds by Swept`
}
const provider = () => ({ '@id': `${absUrl('/')}#business` })
const home = { name: 'Home', path: '/' }

function buildRoutes(): GroundsRoute[] {
  const r: GroundsRoute[] = []
  const add = (path: string, meta: Omit<PageMeta, 'path'>, render: () => ReactElement) => r.push({ path: canonicalPath(path), meta: { ...meta, path: canonicalPath(path) }, render })

  add('/', {
    title: 'Lawn Mowing & Grounds Care Gold Coast | Grounds by Swept',
    description: 'Lawn mowing, garden maintenance, hedge trimming and grounds care for homes and commercial properties in Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [businessSchema(), websiteSchema()],
  }, () => <Home />)

  // Residential
  add('/residential', {
    title: 'Home Lawn Mowing & Garden Care | Grounds by Swept',
    description: 'Lawn mowing, garden maintenance, hedges, pruning, mulching, turf, weed control and yard clean-ups for homes in Brisbane, Logan, Gold Coast and Tweed Heads.',
    schema: [breadcrumbSchema(residentialCrumbs)],
  }, () => <ResidentialHub />)
  for (const s of services) {
    const path = servicePath(s.slug)
    add(path, {
      title: s.metaTitle,
      description: s.metaDescription,
      schema: [serviceSchema({ ...s, path }), faqSchema(s.faqs), breadcrumbSchema([...residentialCrumbs, { name: s.name, path }])],
    }, () => <ServicePage s={s} />)
  }

  // Areas and suburbs
  add('/residential/areas', {
    title: 'Areas We Service: Brisbane to Tweed Heads | Grounds by Swept',
    description: `Grounds by Swept looks after lawns and gardens in ${suburbs.length} suburbs across Brisbane, Logan, the Gold Coast and Tweed Heads. Find your suburb and get a free quote.`,
    schema: [breadcrumbSchema(areasCrumbs)],
  }, () => <AreasIndex />)
  for (const a of areas) {
    const path = areaPath(a.slug)
    add(path, {
      title: a.metaTitle,
      description: a.metaDescription,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `Lawn mowing and garden care in ${a.name}`,
          serviceType: 'Lawn and garden maintenance',
          provider: provider(),
          areaServed: suburbsIn(a.slug).map((sb) => ({ '@type': 'Place', name: `${sb.name} ${a.state} ${sb.postcode}`, url: absUrl(suburbPath(sb)) })),
          url: absUrl(path),
        },
        faqSchema(a.faqs),
        breadcrumbSchema([...areasCrumbs, { name: a.name, path }]),
      ],
    }, () => <AreaPage a={a} />)
  }
  for (const s of suburbs) {
    const a = areaFor(s)
    const path = suburbPath(s)
    add(path, {
      title: suburbTitle(s.name, s.postcode),
      description: `Lawn mowing, garden maintenance, hedge trimming and yard clean-ups in ${s.name} ${a.state} ${s.postcode}. Regular or one-off, no lock-in contract. Free written quote.`,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absUrl(path)}#service`,
          name: `Lawn mowing and garden care in ${s.name}`,
          serviceType: 'Lawn and garden maintenance',
          description: `Lawn mowing, garden maintenance, hedge trimming, pruning, mulching, turf, weed control, green waste removal and yard clean-ups in ${s.name} ${a.state} ${s.postcode}.`,
          url: absUrl(path),
          provider: provider(),
          areaServed: {
            '@type': 'Place',
            name: `${s.name}, ${a.state === 'QLD' ? 'Queensland' : 'New South Wales'}`,
            address: { '@type': 'PostalAddress', addressLocality: s.name, postalCode: s.postcode, addressRegion: a.state, addressCountry: 'AU' },
            containedInPlace: { '@type': 'AdministrativeArea', name: s.council },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Lawn and garden services in ${s.name}`,
            itemListElement: services.map((sv) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${sv.name} in ${s.name}`, url: absUrl(servicePath(sv.slug)) } })),
          },
        },
        faqSchema(suburbFaqs(s)),
        breadcrumbSchema([...areasCrumbs, { name: a.name, path: areaPath(a.slug) }, { name: s.name, path }]),
      ],
    }, () => <SuburbPage s={s} />)
  }

  // Commercial
  add('/commercial', {
    title: commercialHub.metaTitle,
    description: commercialHub.metaDescription,
    schema: [serviceSchema({ name: 'Commercial grounds maintenance', metaDescription: commercialHub.metaDescription, path: '/commercial' }), faqSchema(commercialHub.faqs), breadcrumbSchema(commercialCrumbs)],
  }, () => <CommercialHub />)
  for (const p of commercialPages) {
    const path = commercialPath(p.slug)
    add(path, {
      title: p.metaTitle,
      description: p.metaDescription,
      schema: [
        serviceSchema({ name: p.name, metaDescription: p.metaDescription, path, type: 'Commercial grounds maintenance' }),
        faqSchema(p.faqs),
        breadcrumbSchema([...commercialCrumbs, { name: p.name, path }]),
      ],
    }, () => <CommercialPageView p={p} />)
  }

  // Company and help pages
  add('/about', {
    title: 'About Us: How We Work | Grounds by Swept',
    description: 'Grounds by Swept is the lawn, garden and grounds care division of Swept, for homes and commercial properties from Brisbane to Tweed Heads. Here is how we work.',
    schema: [breadcrumbSchema([home, { name: 'About', path: '/about' }])],
  }, () => <About />)
  add('/faq', {
    title: 'Lawn & Garden FAQs | Grounds by Swept',
    description: 'Answers to common questions about Grounds by Swept: services, areas, quotes, contracts, access, weather, green waste and commercial grounds maintenance.',
    schema: [faqSchema(generalFaqs), breadcrumbSchema([home, { name: 'FAQs', path: '/faq' }])],
  }, () => <FaqPage />)
  add('/contact', {
    title: 'Contact Us: Quotes, Calls & Email | Grounds by Swept',
    description: 'Contact Grounds by Swept by phone, email or online for a free lawn, garden or grounds quote – Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [faqSchema(contactFaqs), breadcrumbSchema([home, { name: 'Contact', path: '/contact' }])],
  }, () => <Contact />)
  add('/privacy', {
    title: 'Privacy Policy | Grounds by Swept',
    description: 'How Grounds by Swept collects, uses, stores and protects the personal information you share when you request a quote, under the Australian Privacy Principles.',
    schema: [breadcrumbSchema([home, { name: 'Privacy', path: '/privacy' }])],
  }, () => <Privacy />)
  add('/quote', {
    title: 'Free Lawn & Garden Quote | Grounds by Swept',
    description: 'Request a free, no-obligation quote for lawn mowing, garden care or commercial grounds maintenance. Tell us what you need in about two minutes.',
    schema: [breadcrumbSchema([home, { name: 'Get a Quote', path: '/quote' }])],
  }, () => <QuotePage />)
  add('/quote/thanks', {
    title: "Thanks – We've Got Your Request | Grounds by Swept",
    description: 'Thanks for requesting a quote from Grounds by Swept. Here is what happens next.',
    noindex: true,
    schema: [],
  }, () => <Thanks />)

  return r
}

let cache: GroundsRoute[] | null = null
export const groundsRoutes = () => (cache ??= buildRoutes())

export const notFoundRoute: GroundsRoute = {
  path: '/404',
  meta: { title: 'Page not found | Grounds by Swept', description: 'This page could not be found.', path: '/404', noindex: true, schema: [] },
  render: () => <NotFound />,
}

/** Route for a path relative to the grounds site's base (e.g. "/residential/"). */
export function findRoute(path: string): GroundsRoute {
  const p = canonicalPath(path.split(/[?#]/)[0])
  return groundsRoutes().find((r) => r.path === p) ?? notFoundRoute
}
