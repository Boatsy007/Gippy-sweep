import type { ChecklistGroup, Faq } from './services'
import { services } from './services'

/*
 * Commercial cleaning pages for Cleaned by Swept.
 *
 * The hub (/commercial) uses sweepclean's "commercial-cleaning" service content
 * as-is. Each facility page starts from the matching description on the Swept
 * commercial site (src/serviceBrands.ts, Cleaned section) and the commercial
 * checklist below. Keep claims to what's confirmed: no certifications,
 * compliance guarantees or dedicated-team claims.
 */

export type CommercialPage = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  /** From the Swept commercial site's Cleaned service list */
  summary: string
  intro: string
  suits: string[]
  checklist: ChecklistGroup[]
  faqs: Faq[]
  /** Related Swept divisions on the commercial site (section ids) */
  divisions: { id: string; name: string; why: string }[]
}

/** sweepclean's commercial-cleaning service – the hub page content. */
export const commercialHub = services.find((s) => s.slug === 'commercial-cleaning')!

const hubFaqs = commercialHub.faqs

const groups = Object.fromEntries(commercialHub.checklist.map((g) => [g.room, g]))

export const commercialPages: CommercialPage[] = [
  {
    slug: 'office-cleaning',
    name: 'Office cleaning',
    metaTitle: 'Office Cleaning Gold Coast & Brisbane | Cleaned by Swept',
    metaDescription:
      'Scheduled office cleaning on the Gold Coast and in Brisbane, Logan and Tweed Heads: desks, kitchens, meeting rooms and bathrooms. Free written quote.',
    h1: 'Office cleaning, on a schedule that suits your business',
    summary:
      'Scheduled cleaning for offices and corporate workspaces — desks, floors, kitchens and meeting rooms kept spotless so your team and visitors walk into a professional space.',
    intro:
      'Regular office cleaning for workspaces of every size, from a single suite to a full floor. We agree a written checklist for your desks, meeting rooms, kitchens and bathrooms, then clean to it on the days and times that work around your team.',
    suits: ['Offices and co-working spaces', 'Professional and consulting suites', 'Reception and client-facing areas', 'Meeting rooms and boardrooms'],
    checklist: [groups['Work areas & reception'], groups['Kitchen & breakroom'], groups['Bathrooms'], groups['Floors']],
    faqs: hubFaqs,
    divisions: [],
  },
  {
    slug: 'warehouse-industrial-cleaning',
    name: 'Warehouse & industrial cleaning',
    metaTitle: 'Warehouse & Industrial Cleaning Gold Coast | Cleaned by Swept',
    metaDescription:
      'Internal cleaning for warehouses, factories and distribution centres: staff areas, offices, amenities and break rooms, scheduled around your shifts.',
    h1: 'Warehouse and industrial cleaning, scheduled around your shifts',
    summary:
      'Internal cleaning for warehouses, factories and distribution centres, covering staff areas, offices, floors and break rooms — scheduled around shifts and operating hours.',
    intro:
      'Cleaning for the people-spaces of warehouses, factories and distribution centres: site offices, lunchrooms, amenities and staff areas. We plan visits around shift changes and operating hours so the work carries on uninterrupted.',
    suits: ['Warehouses and distribution centres', 'Factories and workshops', 'Site offices and lunchrooms', 'Staff amenities and change rooms'],
    checklist: [groups['Kitchen & breakroom'], groups['Bathrooms'], groups['Work areas & reception'], groups['Floors']],
    faqs: hubFaqs,
    divisions: [
      { id: 'scrubbed', name: 'Scrubbed — commercial floor scrubbing', why: 'Machine scrubbing for large warehouse and industrial floors.' },
      { id: 'sweeping', name: 'SWEPT — commercial sweeping', why: 'Mechanical sweeping for hardstands, loading areas and car parks.' },
    ],
  },
  {
    slug: 'retail-showroom-cleaning',
    name: 'Retail & showroom cleaning',
    metaTitle: 'Retail & Showroom Cleaning Gold Coast | Cleaned by Swept',
    metaDescription:
      'Before-open and after-close cleaning for shops, showrooms and shopping centre tenancies. Floors, counters, glass and entries kept presentable.',
    h1: 'Retail and showroom cleaning, before the doors open',
    summary:
      'Before-open and after-close cleaning for shops, showrooms and shopping centre tenancies — keeping floors, counters and entries presentable for customers.',
    intro:
      'Customers notice a clean shop. We clean retail stores, showrooms and shopping centre tenancies before you open or after you close, so floors, counters, glass and entries are ready for the day without getting in the way of trade.',
    suits: ['Shops and boutiques', 'Showrooms and display spaces', 'Shopping centre tenancies', 'Customer-facing service counters'],
    checklist: [groups['Work areas & reception'], groups['Floors'], groups['Bathrooms'], groups['Kitchen & breakroom']],
    faqs: hubFaqs,
    divisions: [
      { id: 'washed', name: 'Washed — commercial pressure cleaning', why: 'Pressure cleaning for shopfront paving, entries and walkways.' },
    ],
  },
  {
    slug: 'strata-common-area-cleaning',
    name: 'Strata & common area cleaning',
    metaTitle: 'Strata & Common Area Cleaning Gold Coast | Cleaned by Swept',
    metaDescription:
      'Common area cleaning for strata and body corporate properties: lobbies, corridors, stairwells, lifts and shared facilities on a regular schedule.',
    h1: 'Strata and common area cleaning for body corporates',
    summary:
      'Common area cleaning for strata and body corporate properties — lobbies, corridors, stairwells, lifts and shared facilities maintained to a consistent standard.',
    intro:
      'Regular cleaning for the shared spaces of strata and body corporate properties — lobbies, corridors, stairwells, lifts and common facilities. Tell us what the common property includes and we’ll agree a written checklist and schedule with your building or strata manager.',
    suits: ['Apartment and townhouse complexes', 'Body corporate common property', 'Lobbies, lifts and corridors', 'Shared facilities such as gyms and BBQ areas'],
    checklist: [
      { room: 'Lobbies & corridors', items: ['Glass doors and partitions spot-cleaned', 'Skirting boards, sills and vents dusted', 'Bins emptied', 'Entry mats cleaned'] },
      groups['Floors'],
      groups['Bathrooms'],
      groups['Kitchen & breakroom'],
    ],
    faqs: hubFaqs,
    divisions: [
      { id: 'grounds', name: 'Grounds — commercial grounds maintenance', why: 'Lawns, gardens, hedges and grounds upkeep for the outdoor common property.' },
      { id: 'washed', name: 'Washed — commercial pressure cleaning', why: 'Pressure cleaning for driveways, paths, pool surrounds and basement car parks.' },
    ],
  },
  {
    slug: 'bathroom-amenities-cleaning',
    name: 'Bathroom & amenities cleaning',
    metaTitle: 'Bathroom & Amenities Cleaning Gold Coast | Cleaned by Swept',
    metaDescription:
      'Cleaning and restocking of workplace toilets, showers, change rooms and kitchenettes for offices, shops, warehouses and strata properties.',
    h1: 'Bathroom and amenities cleaning for busy workplaces',
    summary:
      'Hygienic cleaning and restocking of toilets, showers, change rooms and kitchenettes — keeping high-use amenities clean, fresh and compliant.',
    intro:
      'Washrooms, toilets, showers, change rooms and shared kitchens get the heaviest use in any workplace. We clean and restock them on a schedule that matches how busy your site is, as a standalone service or as part of a wider commercial clean.',
    suits: ['Workplace washrooms and toilets', 'Shower facilities and change rooms', 'Shared kitchens and kitchenettes', 'High-traffic public-facing amenities'],
    checklist: [groups['Bathrooms'], groups['Kitchen & breakroom'], groups['Floors']],
    faqs: hubFaqs,
    divisions: [],
  },
]

export const getCommercialPage = (slug: string) => commercialPages.find((p) => p.slug === slug)
export const commercialPath = (slug: string) => `/commercial/${slug}`
