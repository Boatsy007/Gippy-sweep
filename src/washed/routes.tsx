import type { ReactElement } from 'react'
import { absUrl, canonicalPath, WASHED_URL } from './lib/paths'
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

export type WashedRoute = { path: string; meta: PageMeta; render: () => ReactElement }

const origin = () => { try { return new URL(WASHED_URL).origin } catch { return '' } }

/** Default share image, served from the site root (public/washed/og-image.jpg). */
export const defaultImage = { img: { src: '/washed/og-image.jpg', width: 1200, height: 630 }, alt: 'Washed by Swept – residential and commercial pressure cleaning in Brisbane, Logan, the Gold Coast and Tweed Heads' }
export const imageUrl = (src: string) => (/^https?:/.test(src) ? src : `${origin()}${src}`)

/** Keeps suburb titles within about 60 characters for long suburb names. */
const suburbTitle = (name: string, postcode: string) => {
  const full = `Pressure Cleaning ${name} ${postcode} | Washed by Swept`
  return full.length <= 60 ? full : `Pressure Cleaning ${name} | Washed by Swept`
}
const provider = () => ({ '@id': `${absUrl('/')}#business` })
const home = { name: 'Home', path: '/' }

function buildRoutes(): WashedRoute[] {
  const r: WashedRoute[] = []
  const add = (path: string, meta: Omit<PageMeta, 'path'>, render: () => ReactElement) => r.push({ path: canonicalPath(path), meta: { ...meta, path: canonicalPath(path) }, render })

  add('/', {
    title: 'Pressure Cleaning Gold Coast & Brisbane | Washed by Swept',
    description: 'Pressure cleaning and soft washing for homes and commercial properties in Brisbane, Logan, the Gold Coast and Tweed Heads: driveways, houses, car parks and more.',
    schema: [businessSchema(), websiteSchema()],
  }, () => <Home />)

  // Residential
  add('/residential', {
    title: 'Home Pressure Cleaning & House Washing | Washed by Swept',
    description: 'Driveway cleaning, house washing, patios, pavers, pool surrounds, decks, fences and stain treatment for homes in Brisbane, Logan, Gold Coast and Tweed Heads.',
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
    title: 'Areas We Service: Brisbane to Tweed Heads | Washed by Swept',
    description: `Washed by Swept pressure cleans homes and businesses in ${suburbs.length} suburbs across Brisbane, Logan, the Gold Coast and Tweed Heads. Find your suburb and get a free quote.`,
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
          name: `Pressure cleaning in ${a.name}`,
          serviceType: 'Pressure washing',
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
      description: `Pressure cleaning and soft washing in ${s.name} ${a.state} ${s.postcode}: driveways, paths, house exteriors, patios and pool surrounds. Free written quote.`,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absUrl(path)}#service`,
          name: `Pressure cleaning in ${s.name}`,
          serviceType: 'Pressure washing',
          description: `Driveway and concrete cleaning, house washing, patio, paver and pool surround cleaning, deck, fence and wall cleaning and stain treatment in ${s.name} ${a.state} ${s.postcode}.`,
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
            name: `Pressure cleaning services in ${s.name}`,
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
    schema: [serviceSchema({ name: 'Commercial pressure cleaning', metaDescription: commercialHub.metaDescription, path: '/commercial' }), faqSchema(commercialHub.faqs), breadcrumbSchema(commercialCrumbs)],
  }, () => <CommercialHub />)
  for (const p of commercialPages) {
    const path = commercialPath(p.slug)
    add(path, {
      title: p.metaTitle,
      description: p.metaDescription,
      schema: [
        serviceSchema({ name: p.name, metaDescription: p.metaDescription, path, type: 'Commercial pressure cleaning' }),
        faqSchema(p.faqs),
        breadcrumbSchema([...commercialCrumbs, { name: p.name, path }]),
      ],
    }, () => <CommercialPageView p={p} />)
  }

  // Company and help pages
  add('/about', {
    title: 'About Us: How We Work | Washed by Swept',
    description: 'Washed by Swept is the pressure cleaning division of Swept, for homes and commercial properties from Brisbane to Tweed Heads. Here is how we work.',
    schema: [breadcrumbSchema([home, { name: 'About', path: '/about' }])],
  }, () => <About />)
  add('/faq', {
    title: 'Pressure Cleaning FAQs | Washed by Swept',
    description: 'Answers to common questions about Washed by Swept: soft washing, surfaces, stains, quotes, water and run-off, access and commercial pressure cleaning.',
    schema: [faqSchema(generalFaqs), breadcrumbSchema([home, { name: 'FAQs', path: '/faq' }])],
  }, () => <FaqPage />)
  add('/contact', {
    title: 'Contact Us: Quotes, Calls & Email | Washed by Swept',
    description: 'Contact Washed by Swept by phone, email or online for a free pressure cleaning quote – Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [faqSchema(contactFaqs), breadcrumbSchema([home, { name: 'Contact', path: '/contact' }])],
  }, () => <Contact />)
  add('/privacy', {
    title: 'Privacy Policy | Washed by Swept',
    description: 'How Washed by Swept collects, uses, stores and protects the personal information you share when you request a quote, under the Australian Privacy Principles.',
    schema: [breadcrumbSchema([home, { name: 'Privacy', path: '/privacy' }])],
  }, () => <Privacy />)
  add('/quote', {
    title: 'Free Pressure Cleaning Quote | Washed by Swept',
    description: 'Request a free, no-obligation quote for residential or commercial pressure cleaning and soft washing. Tell us what you need in about two minutes.',
    schema: [breadcrumbSchema([home, { name: 'Get a Quote', path: '/quote' }])],
  }, () => <QuotePage />)
  add('/quote/thanks', {
    title: "Thanks – We've Got Your Request | Washed by Swept",
    description: 'Thanks for requesting a quote from Washed by Swept. Here is what happens next.',
    noindex: true,
    schema: [],
  }, () => <Thanks />)

  return r
}

let cache: WashedRoute[] | null = null
export const washedRoutes = () => (cache ??= buildRoutes())

export const notFoundRoute: WashedRoute = {
  path: '/404',
  meta: { title: 'Page not found | Washed by Swept', description: 'This page could not be found.', path: '/404', noindex: true, schema: [] },
  render: () => <NotFound />,
}

/** Route for a path relative to the washed site's base (e.g. "/residential/"). */
export function findRoute(path: string): WashedRoute {
  const p = canonicalPath(path.split(/[?#]/)[0])
  return washedRoutes().find((r) => r.path === p) ?? notFoundRoute
}
