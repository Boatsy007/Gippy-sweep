import type { ReactElement } from 'react'
import { absUrl, canonicalPath, CLEANED_URL } from './lib/paths'
import { services } from './lib/services'
import { residentialServices, servicePath } from './lib/catalogue'
import { commercialHub, commercialPages, commercialPath } from './lib/commercial'
import { areas } from './lib/areas'
import { areaFor, suburbPath, suburbs, suburbsIn } from './lib/suburbs'
import { guideAuthor, guidePath, guides, wordCount } from './lib/guides'
import { generalFaqs } from './lib/faqs'
import { servicePhotos, photos, type Img } from './lib/photos'
import { site } from './lib/site'
import { promiseFaqs, contactFaqs } from './lib/content'
import { breadcrumbSchema, businessSchema, faqSchema, serviceSchema, websiteSchema } from './lib/schema'
import { Home } from './pages/Home'
import { ResidentialHub, ServicePage, residentialCrumbs } from './pages/Residential'
import { CommercialHub, CommercialPageView, commercialCrumbs } from './pages/Commercial'
import { AreaPage, AreasIndex, SuburbPage, areasCrumbs, suburbFaqs } from './pages/Areas'
import { GuidePage, GuidesIndex, guidesCrumbs } from './pages/Guides'
import { About, Contact, FaqPage, NotFound, PromisePage, Privacy, Thanks } from './pages/Info'
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

export type CleanedRoute = { path: string; meta: PageMeta; render: () => ReactElement }

const origin = () => { try { return new URL(CLEANED_URL).origin } catch { return '' } }

/** Default share image: the regular-clean photo, served from the site root (see public/cleaned/og-image.jpg). */
export const defaultImage = { img: { src: '/cleaned/og-image.jpg', width: 1200, height: 630 }, alt: 'Cleaned by Swept – residential and commercial cleaning in Brisbane, Logan, the Gold Coast and Tweed Heads' }
export const imageUrl = (src: string) => (/^https?:/.test(src) ? src : `${origin()}${src}`)

const crumbsSchema = (items: { name: string; path: string }[]) => breadcrumbSchema(items)

function buildRoutes(): CleanedRoute[] {
  const r: CleanedRoute[] = []
  const add = (path: string, meta: Omit<PageMeta, 'path'>, render: () => ReactElement) => r.push({ path: canonicalPath(path), meta: { ...meta, path: canonicalPath(path) }, render })

  add('/', {
    title: 'House & Commercial Cleaning Gold Coast | Cleaned by Swept',
    description: 'House and commercial cleaning across Brisbane, Logan, the Gold Coast and Tweed Heads: regular, deep and bond cleans, offices and strata. Free written quote.',
    schema: [businessSchema(), websiteSchema()],
  }, () => <Home />)

  // Residential
  add('/residential', {
    title: 'Home Cleaning: Regular, Deep & Bond | Cleaned by Swept',
    description: 'House cleaning in Brisbane, Logan, the Gold Coast and Tweed Heads: regular, deep, NDIS, bond, Airbnb and carpet cleaning. Weekly, fortnightly or monthly.',
    image: photos.regularClean.src ? { img: photos.regularClean.src, alt: photos.regularClean.alt } : undefined,
    schema: [crumbsSchema(residentialCrumbs)],
  }, () => <ResidentialHub />)
  for (const s of residentialServices) {
    const ph = servicePhotos[s.slug]
    add(servicePath(s.slug), {
      title: s.metaTitle,
      description: s.metaDescription,
      image: ph ? { img: ph.src, alt: ph.alt } : undefined,
      schema: [serviceSchema(s), faqSchema(s.faqs), crumbsSchema([...residentialCrumbs, { name: s.name, path: servicePath(s.slug) }])],
    }, () => <ServicePage s={s} />)
  }

  // Areas and suburbs (residential)
  add('/residential/areas', {
    title: 'Areas We Clean: Brisbane to Tweed Heads | Cleaned by Swept',
    description: `Cleaned by Swept cleans homes in ${suburbs.length} suburbs across Brisbane, Logan, the Gold Coast and Tweed Heads. Find your suburb and get a free, no-obligation quote.`,
    schema: [crumbsSchema(areasCrumbs)],
  }, () => <AreasIndex />)
  for (const a of areas) {
    const path = `/residential/areas/${a.slug}`
    add(path, {
      title: a.metaTitle,
      description: a.metaDescription,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: `House cleaning in ${a.name}`,
          serviceType: 'House cleaning',
          provider: { '@id': `${absUrl('/')}#business` },
          areaServed: suburbsIn(a.slug).map((sb) => ({ '@type': 'Place', name: `${sb.name} ${a.state} ${sb.postcode}`, url: absUrl(suburbPath(sb)) })),
          url: absUrl(path),
        },
        faqSchema(a.faqs),
        crumbsSchema([...areasCrumbs, { name: a.name, path }]),
      ],
    }, () => <AreaPage a={a} />)
  }
  for (const s of suburbs) {
    const a = areaFor(s)
    const path = suburbPath(s)
    add(path, {
      title: `House Cleaning ${s.name} ${s.postcode} | Cleaned by Swept`,
      description: `House cleaning in ${s.name} ${a.state} ${s.postcode}: weekly, fortnightly or monthly cleans, deep cleans and bond cleaning. No lock-in contract. Free written quote.`,
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absUrl(path)}#service`,
          name: `House cleaning in ${s.name}`,
          serviceType: 'House cleaning',
          description: `Regular, deep, NDIS, bond, Airbnb, carpet and commercial cleaning in ${s.name} ${a.state} ${s.postcode}.`,
          url: absUrl(path),
          provider: { '@id': `${absUrl('/')}#business` },
          areaServed: {
            '@type': 'Place',
            name: `${s.name}, ${a.state === 'QLD' ? 'Queensland' : 'New South Wales'}`,
            address: { '@type': 'PostalAddress', addressLocality: s.name, postalCode: s.postcode, addressRegion: a.state, addressCountry: 'AU' },
            containedInPlace: { '@type': 'AdministrativeArea', name: s.council },
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Cleaning services in ${s.name}`,
            itemListElement: services.map((sv) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: `${sv.name} in ${s.name}`, url: absUrl(servicePath(sv.slug)) } })),
          },
        },
        faqSchema(suburbFaqs(s)),
        crumbsSchema([...areasCrumbs, { name: a.name, path: `/residential/areas/${a.slug}` }, { name: s.name, path }]),
      ],
    }, () => <SuburbPage s={s} />)
  }

  // Commercial
  add('/commercial', {
    title: commercialHub.metaTitle,
    description: commercialHub.metaDescription,
    image: { img: photos.cleaner.src, alt: photos.cleaner.alt },
    schema: [serviceSchema(commercialHub), faqSchema(commercialHub.faqs), crumbsSchema(commercialCrumbs)],
  }, () => <CommercialHub />)
  for (const p of commercialPages) {
    const path = commercialPath(p.slug)
    add(path, {
      title: p.metaTitle,
      description: p.metaDescription,
      schema: [
        { '@context': 'https://schema.org', '@type': 'Service', name: p.name, serviceType: 'Commercial cleaning', description: p.metaDescription, url: absUrl(path), provider: { '@id': `${absUrl('/')}#business` }, areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })) },
        faqSchema(p.faqs),
        crumbsSchema([...commercialCrumbs, { name: p.name, path }]),
      ],
    }, () => <CommercialPageView p={p} />)
  }

  // Guides
  add('/guides', {
    title: 'Cleaning Guides & Advice | Cleaned by Swept',
    description: 'Helpful tips, practical advice and answers to your house cleaning questions from Cleaned by Swept – Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Cleaning Guides & Advice',
        url: absUrl('/guides'),
        publisher: { '@id': `${absUrl('/')}#business` },
        mainEntity: { '@type': 'ItemList', itemListElement: guides.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: absUrl(guidePath(g.slug)), name: g.title })) },
      },
      crumbsSchema(guidesCrumbs),
    ],
  }, () => <GuidesIndex />)
  for (const g of guides) {
    const path = guidePath(g.slug)
    const img = g.image ? (typeof g.image.src === 'string' ? { src: g.image.src, width: g.image.width ?? 1200, height: g.image.height ?? 800 } : g.image.src) : undefined
    add(path, {
      title: g.metaTitle ?? `${g.title} | Cleaned by Swept`,
      description: g.description,
      image: img && g.image ? { img, alt: g.image.alt } : undefined,
      article: { published: g.published, modified: g.updated, tags: g.categories },
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${absUrl(path)}#article`,
          headline: g.title,
          description: g.description,
          image: imageUrl(img?.src ?? defaultImage.img.src),
          datePublished: g.published,
          dateModified: g.updated ?? g.published,
          author: { '@type': 'Organization', name: guideAuthor.name, url: absUrl('/about'), parentOrganization: { '@id': `${absUrl('/')}#business` } },
          publisher: { '@id': `${absUrl('/')}#business` },
          mainEntityOfPage: absUrl(path),
          articleSection: g.categories,
          keywords: g.categories.join(', '),
          wordCount: wordCount(g),
          inLanguage: 'en-AU',
          ...(g.sources?.length ? { citation: g.sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url, ...(s.publisher ? { publisher: { '@type': 'Organization', name: s.publisher } } : {}) })) } : {}),
        },
        crumbsSchema([...guidesCrumbs, { name: g.title, path }]),
        ...(g.faqs?.length ? [faqSchema(g.faqs)] : []),
      ],
    }, () => <GuidePage g={g} />)
  }

  // Company and help pages
  add('/about', {
    title: 'Why Choose Us: Our Commitments | Cleaned by Swept',
    description: 'Cleaned by Swept is a new residential cleaning service for Brisbane, Logan, the Gold Coast and Tweed Heads. Here is how we work and what we commit to on every clean.',
    image: { img: photos.cleaner.src, alt: photos.cleaner.alt },
    schema: [crumbsSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])],
  }, () => <About />)
  add(site.promise.path, {
    title: 'The Swept Promise: Our Cleaning Guarantee | Cleaned by Swept',
    description: "If an agreed cleaning task isn't done right, tell us by the end of the next business day and we'll come back and fix it at no extra charge.",
    schema: [faqSchema(promiseFaqs), crumbsSchema([{ name: 'Home', path: '/' }, { name: site.promise.name, path: site.promise.path }])],
  }, () => <PromisePage />)
  add('/faq', {
    title: 'Cleaning FAQs: Pricing, Bond & NDIS | Cleaned by Swept',
    description: 'Answers to common questions about Cleaned by Swept house cleaning: pricing, scheduling, contracts, access, products, bond cleaning and NDIS cleaning.',
    schema: [faqSchema(generalFaqs), crumbsSchema([{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faq' }])],
  }, () => <FaqPage />)
  add('/contact', {
    title: 'Contact Us: Quotes, Calls & Email | Cleaned by Swept',
    description: 'Contact Cleaned by Swept by phone, email or online for a free quote – homes and businesses in Brisbane, Logan, the Gold Coast and Tweed Heads.',
    schema: [faqSchema(contactFaqs), crumbsSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])],
  }, () => <Contact />)
  add('/privacy', {
    title: 'Privacy Policy | Cleaned by Swept',
    description: 'How Cleaned by Swept collects, uses, stores and protects the personal information you share when you request a quote, under the Australian Privacy Principles.',
    schema: [crumbsSchema([{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy' }])],
  }, () => <Privacy />)
  add('/quote', {
    title: 'Free Cleaning Quote | Cleaned by Swept',
    description: 'Request a free, no-obligation cleaning quote for your home or business. Tell us what you need in about two minutes – Brisbane, Logan, Gold Coast and Tweed Heads.',
    schema: [crumbsSchema([{ name: 'Home', path: '/' }, { name: 'Get a Quote', path: '/quote' }])],
  }, () => <QuotePage />)
  add('/quote/thanks', {
    title: "Thanks – We've Got Your Request | Cleaned by Swept",
    description: 'Thanks for requesting a quote from Cleaned by Swept. Here is what happens next.',
    noindex: true,
    schema: [],
  }, () => <Thanks />)

  return r
}

let cache: CleanedRoute[] | null = null
export const cleanedRoutes = () => (cache ??= buildRoutes())

export const notFoundRoute: CleanedRoute = {
  path: '/404',
  meta: { title: 'Page not found | Cleaned by Swept', description: 'This page could not be found.', path: '/404', noindex: true, schema: [] },
  render: () => <NotFound />,
}

/** Route for a path relative to the cleaning site's base (e.g. "/residential/"). */
export function findRoute(path: string): CleanedRoute {
  const p = canonicalPath(path.split(/[?#]/)[0])
  return cleanedRoutes().find((r) => r.path === p) ?? notFoundRoute
}
