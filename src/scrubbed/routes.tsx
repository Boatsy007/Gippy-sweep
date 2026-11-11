import type { ReactElement } from 'react'
import { absUrl, canonicalPath, SCRUBBED_URL } from './lib/paths'
import { services, servicePath } from './lib/services'
import { areas, areaPath, suburbsIn } from './lib/areas'
import { contactFaqs, generalFaqs } from './lib/content'
import type { Img } from './lib/types'
import { breadcrumbSchema, businessSchema, faqSchema, serviceSchema, websiteSchema } from './lib/schema'
import { Home } from './pages/Home'
import { ServicePage, ServicesHub, servicesCrumbs } from './pages/Services'
import { AreaPage, AreasIndex, areasCrumbs } from './pages/Areas'
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

export type ScrubbedRoute = { path: string; meta: PageMeta; render: () => ReactElement }

const origin = () => { try { return new URL(SCRUBBED_URL).origin } catch { return '' } }

/** Default share image, served from the site root (public/scrubbed/og-image.jpg). */
export const defaultImage = { img: { src: '/scrubbed/og-image.jpg', width: 1200, height: 630 }, alt: 'Scrubbed by Swept – commercial floor scrubbing in Brisbane, Logan, the Gold Coast and Tweed Heads' }
export const imageUrl = (src: string) => (/^https?:/.test(src) ? src : `${origin()}${src}`)

const home = { name: 'Home', path: '/' }

function buildRoutes(): ScrubbedRoute[] {
  const r: ScrubbedRoute[] = []
  const add = (path: string, meta: Omit<PageMeta, 'path'>, render: () => ReactElement) => r.push({ path: canonicalPath(path), meta: { ...meta, path: canonicalPath(path) }, render })

  add('/', {
    title: 'Floor Scrubbing Gold Coast & Brisbane | Scrubbed by Swept',
    description: 'Commercial machine floor scrubbing for warehouses, factories, shopping centres, car parks and hard floors in Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [businessSchema(), websiteSchema()],
  }, () => <Home />)

  add('/services', {
    title: 'Floor Scrubbing Services | Scrubbed by Swept',
    description: 'Warehouse, industrial, shopping centre, car park and commercial hard-floor scrubbing, one-off deep cleans and scheduled maintenance programs across SEQ.',
    schema: [serviceSchema({ name: 'Commercial floor scrubbing', metaDescription: 'Commercial machine floor scrubbing for warehouses, factories, shopping centres, car parks and commercial hard floors.', path: '/services' }), breadcrumbSchema(servicesCrumbs)],
  }, () => <ServicesHub />)
  for (const s of services) {
    const path = servicePath(s.slug)
    add(path, {
      title: s.metaTitle,
      description: s.metaDescription,
      schema: [serviceSchema({ ...s, path, type: 'Commercial floor scrubbing' }), faqSchema(s.faqs), breadcrumbSchema([...servicesCrumbs, { name: s.name, path }])],
    }, () => <ServicePage s={s} />)
  }

  add('/areas', {
    title: 'Areas We Service | Scrubbed by Swept',
    description: 'Scrubbed by Swept scrubs commercial and industrial floors across Brisbane, Logan, the Gold Coast and Tweed Heads. Find your region and get a free quote.',
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
          name: `Commercial floor scrubbing in ${a.name}`,
          serviceType: 'Commercial floor scrubbing',
          provider: { '@id': `${absUrl('/')}#business` },
          areaServed: [
            { '@type': 'AdministrativeArea', name: a.council },
            ...suburbsIn(a.slug).map((sb) => ({ '@type': 'Place', name: `${sb.name} ${a.state} ${sb.postcode}` })),
          ],
          url: absUrl(path),
        },
        faqSchema(a.faqs),
        breadcrumbSchema([...areasCrumbs, { name: a.name, path }]),
      ],
    }, () => <AreaPage a={a} />)
  }

  add('/about', {
    title: 'About Us: How We Work | Scrubbed by Swept',
    description: 'Scrubbed by Swept is the commercial floor scrubbing division of Swept, for warehouses, industrial, retail and commercial sites from Brisbane to Tweed Heads.',
    schema: [breadcrumbSchema([home, { name: 'About', path: '/about' }])],
  }, () => <About />)
  add('/faq', {
    title: 'Floor Scrubbing FAQs | Scrubbed by Swept',
    description: 'Answers to common questions about Scrubbed by Swept: scrubber-driers, floor types, scheduling, quotes, contracts, insurance and the areas we cover.',
    schema: [faqSchema(generalFaqs), breadcrumbSchema([home, { name: 'FAQs', path: '/faq' }])],
  }, () => <FaqPage />)
  add('/contact', {
    title: 'Contact Us: Quotes, Calls & Email | Scrubbed by Swept',
    description: 'Contact Scrubbed by Swept by phone, email or online for a free commercial floor scrubbing quote – Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [faqSchema(contactFaqs), breadcrumbSchema([home, { name: 'Contact', path: '/contact' }])],
  }, () => <Contact />)
  add('/privacy', {
    title: 'Privacy Policy | Scrubbed by Swept',
    description: 'How Scrubbed by Swept collects, uses, stores and protects the personal information you share when you request a quote, under the Australian Privacy Principles.',
    schema: [breadcrumbSchema([home, { name: 'Privacy', path: '/privacy' }])],
  }, () => <Privacy />)
  add('/quote', {
    title: 'Free Floor Scrubbing Quote | Scrubbed by Swept',
    description: 'Request a free, no-obligation quote for commercial floor scrubbing – one-off deep cleans or scheduled programs. Tell us about your site in about two minutes.',
    schema: [breadcrumbSchema([home, { name: 'Get a Quote', path: '/quote' }])],
  }, () => <QuotePage />)
  add('/quote/thanks', {
    title: "Thanks – We've Got Your Request | Scrubbed by Swept",
    description: 'Thanks for requesting a quote from Scrubbed by Swept. Here is what happens next.',
    noindex: true,
    schema: [],
  }, () => <Thanks />)

  return r
}

let cache: ScrubbedRoute[] | null = null
export const scrubbedRoutes = () => (cache ??= buildRoutes())

export const notFoundRoute: ScrubbedRoute = {
  path: '/404',
  meta: { title: 'Page not found | Scrubbed by Swept', description: 'This page could not be found.', path: '/404', noindex: true, schema: [] },
  render: () => <NotFound />,
}

/** Route for a path relative to the scrubbed site's base (e.g. "/services/"). */
export function findRoute(path: string): ScrubbedRoute {
  const p = canonicalPath(path.split(/[?#]/)[0])
  return scrubbedRoutes().find((r) => r.path === p) ?? notFoundRoute
}
