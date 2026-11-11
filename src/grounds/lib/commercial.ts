import type { ChecklistGroup, Faq } from './types'

/*
 * Commercial grounds pages for Grounds by Swept.
 *
 * The task list comes from the Grounds section of the Swept commercial site
 * (src/serviceBrands.ts), which is the confirmed commercial offer. No
 * certifications, compliance guarantees or response-time promises.
 */

export type CommercialPage = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  summary: string
  intro: string
  suits: string[]
  checklist: ChecklistGroup[]
  faqs: Faq[]
  /** Related Swept divisions on the commercial site (section ids) */
  divisions: string[]
  icon: string
}

const groups = {
  lawns: { room: 'Lawns & verges', items: ['Mowing, edging and clippings removal', 'Nature strips and verges', 'Whipper-snipping around signs, bollards and fences'] },
  gardens: { room: 'Gardens & hedges', items: ['Garden beds weeded and tidied', 'Hedges and screening plants trimmed', 'Leaf litter, dead material and rubbish removed from beds'] },
  hard: { room: 'Hard surfaces', items: ['Weed control on kerbs, joints and car park seams', 'Leaf blowing of paths, car parks and hardstands', 'Kerb and edge tidy-ups'] },
  site: { room: 'Site presentation', items: ['Litter picking across the grounds', 'External bin areas tidied', 'Stormwater grates cleared of leaf litter and debris', 'Sticks, branches and storm debris removed'] },
}

const sharedFaqs: Faq[] = [
  { q: 'How often can you visit?', a: 'Weekly, fortnightly or monthly, or on a schedule that changes with the seasons – more often in the warm, wet months when grass and weeds grow fastest, less often in winter.' },
  { q: 'Do you provide a written scope?', a: 'Yes. Every site gets a written scope listing the areas and tasks included and how often each is done, so everyone knows what to expect on each visit.' },
  { q: 'Can you work around our trading or operating hours?', a: 'Yes. Tell us your opening hours, quiet times and any areas we need to avoid, and we will plan visits around them.' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance. We can provide a certificate of currency on request.' },
  { q: 'Can you look after the inside of the property as well?', a: 'Yes. Cleaned by Swept handles commercial cleaning, and the other Swept divisions cover sweeping, pressure cleaning, floor scrubbing and line marking – all through the same point of contact.' },
]

export const commercialHub = {
  metaTitle: 'Commercial Grounds Maintenance Gold Coast | Grounds by Swept',
  metaDescription: 'Commercial grounds maintenance for strata, industrial, retail and managed properties across Brisbane, Logan, the Gold Coast and Tweed Heads. Free quote.',
  intro: 'Scheduled grounds care for commercial and managed properties, from strata complexes and business parks to shopping centres and rental portfolios. Every site gets a written scope and a visit schedule agreed before work starts.',
  suits: ['Strata and body corporate committees', 'Facility and property managers', 'Industrial, warehouse and business park owners', 'Retail centres, shops and car park operators'],
  quoteFactors: ['The size and layout of the grounds', 'Lawn, garden and hedge areas included', 'Hard surfaces, car parks and kerbs in scope', 'How often each task is done', 'Access, operating hours and site rules'],
  checklist: [groups.lawns, groups.gardens, groups.hard, groups.site] as ChecklistGroup[],
  steps: [
    { title: 'Site walk and brief', body: 'Tell us about the property, or walk it with us, and point out the areas and issues that matter most.' },
    { title: 'Written scope and schedule', body: 'A written scope listing each area and task, how often it is done and the visit days.' },
    { title: 'Scheduled visits', body: 'We arrive on the agreed days, work to the scope and let you know about anything that needs attention.' },
  ],
  faqs: sharedFaqs,
}

export const commercialPages: CommercialPage[] = [
  {
    slug: 'strata-body-corporate',
    name: 'Strata & body corporate grounds',
    metaTitle: 'Strata & Body Corporate Grounds Care | Grounds by Swept',
    metaDescription: 'Grounds maintenance for strata and body corporate properties: common property lawns, gardens, hedges and paths on a written schedule. Free written quote.',
    h1: 'Strata and body corporate grounds maintenance',
    summary: 'Common property lawns, gardens, hedges, paths and pool surrounds kept to one consistent standard on a written schedule.',
    intro: 'Regular grounds care for the common property of apartment, townhouse and villa complexes. We agree a written scope and schedule with your committee, building manager or strata manager, then keep the entry, gardens, lawns and shared outdoor areas presentable for residents and visitors.',
    suits: ['Townhouse and villa complexes', 'Apartment buildings with landscaped common property', 'Entry gardens, driveways and visitor parking', 'Shared outdoor areas such as BBQ and pool surrounds'],
    checklist: [
      groups.lawns,
      groups.gardens,
      { room: 'Common areas', items: ['Paths, driveways and visitor parks blown clear', 'Leaf litter cleared from shared outdoor areas', 'Pool surrounds and BBQ areas tidied (grounds only)'] },
      groups.site,
    ],
    faqs: [
      { q: 'Who do you deal with at a strata property?', a: 'Whoever the body corporate nominates – usually the strata manager, building manager or a committee member. Your scope and schedule are agreed with them in writing.' },
      { q: 'Can residents raise issues?', a: 'We work to the scope agreed with the body corporate. Requests outside it go through your nominated contact so the committee stays in control of the work and the budget.' },
      ...sharedFaqs.slice(0, 4),
    ],
    divisions: ['cleaned', 'washed'],
    icon: 'city',
  },
  {
    slug: 'commercial-industrial',
    name: 'Commercial & industrial sites',
    metaTitle: 'Commercial & Industrial Grounds Care | Grounds by Swept',
    metaDescription: 'Grounds maintenance for offices, warehouses, factories and business parks: lawns, gardens, weed control and site tidy-ups on schedule. Free written quote.',
    h1: 'Grounds maintenance for commercial and industrial sites',
    summary: 'Lawns, frontages, boundaries, kerbs and hardstand edges kept tidy around offices, warehouses, factories and business parks.',
    intro: 'Scheduled grounds care for offices, warehouses, factories and business parks – from the street frontage and entry gardens to boundary fence lines, kerbs and hardstand edges. Visits are planned around deliveries, shifts and operating hours so the site keeps running.',
    suits: ['Warehouses and distribution centres', 'Factories and workshops', 'Office buildings and business parks', 'Industrial estates with shared landscaping'],
    checklist: [
      groups.lawns,
      { room: 'Frontage & boundaries', items: ['Entry gardens and frontage landscaping maintained', 'Boundary fence lines whipper-snipped', 'Hedges and screens trimmed to keep sightlines clear'] },
      groups.hard,
      groups.site,
    ],
    faqs: [
      { q: 'Can you work around deliveries and shifts?', a: 'Yes. Tell us when the site is busiest and which areas must stay clear, and we will plan visits around them.' },
      { q: 'Do you follow site inductions and safety rules?', a: 'Yes. Let us know about inductions, sign-in procedures, PPE requirements and traffic management rules for your site, and we will follow them.' },
      ...sharedFaqs.slice(0, 4),
    ],
    divisions: ['sweeping', 'scrubbed'],
    icon: 'warehouse',
  },
  {
    slug: 'retail-car-parks',
    name: 'Retail centres & car parks',
    metaTitle: 'Retail & Car Park Grounds Maintenance | Grounds by Swept',
    metaDescription: 'Grounds care for shopping centres, retail strips and car parks: gardens, hedges, litter, leaves, kerbs and bin areas kept presentable. Free written quote.',
    h1: 'Grounds care for retail centres and car parks',
    summary: 'Car park gardens, islands, hedges, kerbs, litter and bin areas kept presentable for customers, scheduled around trading hours.',
    intro: 'Customers notice the car park before they reach the door. We look after car park gardens and islands, hedges, kerbs, litter, leaf build-up and external bin areas for shopping centres, retail strips and standalone stores, with visits scheduled around trading hours.',
    suits: ['Shopping centres and retail strips', 'Standalone stores and showrooms', 'Fast food and service station sites', 'Customer and staff car parks'],
    checklist: [
      { room: 'Car park gardens', items: ['Garden islands and medians weeded and tidied', 'Hedges and shrubs trimmed to keep sightlines clear', 'Lawns and verges mowed and edged'] },
      { room: 'Car park surfaces', items: ['Litter picked across the car park', 'Leaves and debris blown from bays and walkways', 'Weed control on kerbs and car park seams', 'Kerb and edge tidy-ups'] },
      { room: 'Service areas', items: ['External bin areas and waste enclosures tidied', 'Stormwater grates cleared of leaf litter and debris'] },
    ],
    faqs: [
      { q: 'Can you visit before the centre opens?', a: 'Yes. We can schedule visits for early mornings or quieter trading times. Tell us your hours when you request a quote.' },
      { q: 'Do you sweep car parks?', a: 'Grounds by Swept handles litter, leaves and garden areas. For mechanical sweeping of the car park surface, SWEPT commercial sweeping can be added through the same point of contact.' },
      ...sharedFaqs.slice(0, 4),
    ],
    divisions: ['sweeping', 'marked', 'washed'],
    icon: 'cart',
  },
  {
    slug: 'property-managers-rentals',
    name: 'Property managers & rentals',
    metaTitle: 'Rental Property Lawn Care Gold Coast | Grounds by Swept',
    metaDescription: 'Lawn and garden care for property managers and landlords: vacant properties, between-tenancy clean-ups and regular rental upkeep. Free written quote.',
    h1: 'Lawn and garden care for property managers and landlords',
    summary: 'Regular upkeep for vacant and tenanted rentals, between-tenancy yard clean-ups and pre-sale tidy-ups across a portfolio.',
    intro: 'Lawn mowing, garden tidy-ups and green waste removal for rental properties – vacant homes between tenancies, pre-sale and pre-listing tidy-ups, and regular upkeep where the landlord looks after the yard. One point of contact for every property in your portfolio.',
    suits: ['Property managers and real estate agencies', 'Landlords with one or more rentals', 'Vacant properties between tenancies or awaiting sale', 'Properties where the landlord maintains the grounds'],
    checklist: [
      { room: 'Between tenancies', items: ['Lawns mowed and edged', 'Garden beds weeded and tidied', 'Hedges and shrubs trimmed', 'Green waste removed'] },
      { room: 'Vacant properties', items: ['Regular mowing so the property never looks empty', 'Leaves and debris cleared from paths and driveway', 'Notes on anything that needs the owner’s attention'] },
      { room: 'Pre-sale & listing', items: ['Yard clean-up before photos and open homes', 'Fresh edges and tidy garden beds', 'Mulching to lift garden beds (quoted separately)'] },
    ],
    faqs: [
      { q: 'Who is responsible for the lawns at a rental?', a: 'It depends on the tenancy agreement. In many residential tenancies in Queensland and NSW the tenant looks after routine lawn and garden care, while the landlord is responsible for larger work such as tree pruning. Check the agreement for each property.' },
      { q: 'Can you manage several properties at once?', a: 'Yes. We can quote a portfolio of properties and keep a separate scope and schedule for each one.' },
      { q: 'Can you invoice the owner directly?', a: 'Tell us how you would like work invoiced when you request a quote, and we will confirm what we can set up.' },
      ...sharedFaqs.slice(0, 3),
    ],
    divisions: ['cleaned', 'washed'],
    icon: 'key',
  },
]

export const commercialPath = (slug: string) => `/commercial/${slug}`
