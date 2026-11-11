import type { ChecklistGroup, Faq } from './types'

/*
 * Commercial pressure cleaning pages for Washed by Swept.
 *
 * The task list comes from the Washed section of the Swept commercial site
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

const runoff = { room: 'Site & run-off', items: ['Work areas barricaded or signed as agreed', 'Wash water directed away from stormwater drains where practical', 'Debris and residue collected and removed'] }

const sharedFaqs: Faq[] = [
  { q: 'How often should a commercial site be pressure cleaned?', a: 'It depends on traffic and use. Busy entries, bin bays and car parks often suit monthly or quarterly cleaning; building exteriors are usually cleaned less often. We can set up a schedule that matches the site.' },
  { q: 'Can you work outside trading hours?', a: 'Yes. Tell us your opening hours and quiet times and we will plan the work around them, including early mornings where the site allows.' },
  { q: 'Do you provide a written scope?', a: 'Yes. Every site gets a written scope listing the areas, the method and how often each area is cleaned.' },
  { q: 'What happens to the wash water?', a: 'We plan run-off for each site and direct wash water away from stormwater drains where practical, which flow to local creeks, rivers and the ocean. Tell us about site drainage, triple interceptors or wash bays.' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance. We can provide a certificate of currency on request.' },
]

export const commercialHub = {
  metaTitle: 'Commercial Pressure Cleaning Gold Coast | Washed by Swept',
  metaDescription: 'Commercial pressure cleaning for car parks, building exteriors, footpaths, loading docks, bin bays, strata and resorts across Brisbane, Logan and the Gold Coast.',
  intro: 'Pressure cleaning, wash-downs and graffiti removal for car parks, building exteriors, footpaths, loading docks, bin bays, strata and resort properties. Every site gets a written scope and a schedule agreed before work starts.',
  suits: ['Facility and property managers', 'Strata and body corporate committees', 'Retail centre, hospitality and resort operators', 'Warehouse, industrial and logistics sites'],
  quoteFactors: ['The areas and surfaces to be cleaned', 'The size of each area', 'The type of soiling – oil, gum, mould, graffiti', 'How often each area is cleaned', 'Access, operating hours, water supply and run-off'],
  checklist: [
    { room: 'Car parks & hardstands', items: ['Basement and multi-level car park wash-downs', 'Oil, grime and tyre mark treatment', 'Drainage channels and column bases'] },
    { room: 'Paths & entries', items: ['Footpaths, walkways and entries', 'Gum and staining treatment', 'Pedestrian areas and outdoor dining'] },
    { room: 'Buildings', items: ['Facade, wall and awning washing', 'Soft washing for render and painted surfaces', 'Graffiti removal'] },
    { room: 'Service areas', items: ['Loading docks and delivery bays', 'Bin bays and waste enclosures', 'Warehouse floor wash-downs'] },
  ] as ChecklistGroup[],
  steps: [
    { title: 'Site walk and brief', body: 'Tell us about the property, or walk it with us, and point out the areas and problems that matter most.' },
    { title: 'Written scope and schedule', body: 'A written scope listing each area, the method, how often it is cleaned and when.' },
    { title: 'Scheduled cleans', body: 'We work to the scope on the agreed days and let you know about anything that needs attention.' },
  ],
  faqs: sharedFaqs,
}

export const commercialPages: CommercialPage[] = [
  {
    slug: 'car-park-cleaning',
    name: 'Car park wash-downs',
    metaTitle: 'Car Park Pressure Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Basement and multi-level car park wash-downs for commercial, retail and strata properties: oil, grime and debris removed from concrete. Free written quote.',
    h1: 'Car park pressure cleaning and wash-downs',
    summary: 'Basement, multi-level and open car parks washed down, with oil, grime and tyre marks treated and drainage channels cleared.',
    intro: 'High-pressure wash-downs for basement, multi-level and open car parks – concrete floors, ramps, drainage channels and column bases. Oil, grime and tyre marks are treated, and the work is planned around the hours the car park is in use.',
    suits: ['Basement car parks in apartment and office buildings', 'Multi-level and shopping centre car parks', 'Open-air staff and customer car parks', 'Hardstands and vehicle areas'],
    checklist: [
      { room: 'Floors & ramps', items: ['Concrete floors and ramps washed down', 'Oil and tyre marks pre-treated', 'Bay lines and kerbs cleaned'] },
      { room: 'Details', items: ['Drainage channels and grates cleared', 'Column bases and wheel stops cleaned', 'Stairwell entries washed'] },
      runoff,
    ],
    faqs: [
      { q: 'Do cars need to be moved?', a: 'Yes, from the bays being cleaned. We can clean in sections so part of the car park stays open, and agree the plan with you or your building manager.' },
      { q: 'Can you work around residents and tenants?', a: 'Yes. We agree times and sections in advance so notices can go out to residents or tenants.' },
      { q: 'Do you also sweep car parks?', a: 'Regular mechanical sweeping is handled by SWEPT commercial sweeping, another Swept division, through the same point of contact.' },
      ...sharedFaqs.slice(1, 4),
    ],
    divisions: ['sweeping', 'marked'],
    icon: 'car',
  },
  {
    slug: 'building-exterior-cleaning',
    name: 'Building exteriors & graffiti removal',
    metaTitle: 'Building Washing & Graffiti Removal | Washed by Swept',
    metaDescription: 'Commercial building exterior washing, soft washing and graffiti removal for facades, walls, awnings and signage across Brisbane, Logan and the Gold Coast.',
    h1: 'Building exterior washing and graffiti removal',
    summary: 'Facades, walls, awnings and signage cleaned of dirt, mould and weathering, and graffiti removed from common commercial surfaces.',
    intro: 'Exterior washing for commercial buildings – facades, walls, awnings, entries and signage – using a low-pressure soft wash for render and painted surfaces and controlled pressure for masonry and concrete. Graffiti is removed from rendered walls, concrete, brick, cladding and signage, with the method matched to the surface.',
    suits: ['Office buildings and business parks', 'Shopfronts and retail facades', 'Warehouses and industrial buildings', 'Walls, fences and signage hit by graffiti'],
    checklist: [
      { room: 'Facades & walls', items: ['Render and painted walls soft washed', 'Brick, block and concrete washed with controlled pressure', 'Awnings and canopies cleaned'] },
      { room: 'Graffiti', items: ['Surface identified and tested first', 'Graffiti remover suited to the surface', 'Area cleaned to blend with its surroundings'] },
      runoff,
    ],
    faqs: [
      { q: 'Can all graffiti be removed?', a: 'Not always completely. Results depend on the paint used, how long it has been there and the surface – porous brick and render are harder than sealed or painted surfaces. We test first and tell you what to expect.' },
      { q: 'Do you clean high facades?', a: 'We clean areas we can reach safely from the ground and with standard access equipment. If a building needs elevated work platforms or rope access, we will tell you when we quote.' },
      ...sharedFaqs.slice(0, 2),
      sharedFaqs[4],
    ],
    divisions: ['cleaned'],
    icon: 'city',
  },
  {
    slug: 'strata-resort-cleaning',
    name: 'Strata, resort & body corporate',
    metaTitle: 'Strata & Resort Pressure Cleaning | Washed by Swept',
    metaDescription: 'Pressure cleaning for strata, body corporate and resort properties: driveways, paths, pool surrounds and common areas on a written schedule. Free quote.',
    h1: 'Pressure cleaning for strata, resort and body corporate properties',
    summary: 'Driveways, pathways, pool surrounds, entries and common areas kept presentable for residents and guests.',
    intro: 'Pressure cleaning for the common property of apartment buildings, townhouse complexes and resorts – driveways, pathways, entries, pool surrounds, BBQ areas and basement car parks. We agree the scope and schedule with your committee, building manager or resort manager and plan around residents and guests.',
    suits: ['Apartment buildings and townhouse complexes', 'Resorts and holiday apartment complexes', 'Pool surrounds and BBQ areas', 'Common driveways, pathways and entries'],
    checklist: [
      { room: 'Common areas', items: ['Driveways and pathways', 'Entries and lobbies (external)', 'BBQ and outdoor dining areas'] },
      { room: 'Pool areas', items: ['Pool surrounds and coping', 'Run-off kept out of the pool', 'Pool fencing bases'] },
      runoff,
    ],
    faqs: [
      { q: 'Who do you deal with at a strata property?', a: 'Whoever the body corporate nominates – usually the strata manager, building manager or a committee member. The scope and schedule are agreed with them in writing.' },
      { q: 'Can you clean individual balconies?', a: 'We can quote for owners, but many buildings have by-laws about washing balconies because water runs onto balconies below. Check with your building manager first.' },
      ...sharedFaqs.slice(0, 4),
    ],
    divisions: ['grounds', 'cleaned'],
    icon: 'hotel',
  },
  {
    slug: 'retail-footpath-cleaning',
    name: 'Retail centres & footpaths',
    metaTitle: 'Footpath & Retail Pressure Cleaning | Washed by Swept',
    metaDescription: 'Pressure cleaning for retail centres, footpaths, walkways, entries and outdoor dining: grime, gum and staining removed. Free written quote.',
    h1: 'Pressure cleaning for retail centres and footpaths',
    summary: 'External paving, footpaths, entries and outdoor dining areas cleaned of grime, gum and staining for shopping centres and precincts.',
    intro: 'Customers notice the footpath before they reach the door. We clean external paving, footpaths, walkways, entries and outdoor dining areas for shopping centres, retail strips and hospitality venues, treating gum, food and drink spills and general grime, with the work scheduled around trading hours.',
    suits: ['Shopping centres and retail strips', 'Cafés, restaurants and outdoor dining', 'Shop entries and forecourts', 'Pedestrian walkways and precincts'],
    checklist: [
      { room: 'Paving & entries', items: ['Footpaths, walkways and forecourts', 'Shop entries and thresholds', 'Outdoor dining areas'] },
      { room: 'Spot treatment', items: ['Gum treated and removed', 'Food, drink and grease spills treated', 'Bin surrounds cleaned'] },
      runoff,
    ],
    faqs: [
      { q: 'Can you clean before the centre opens?', a: 'Yes. Early-morning cleaning is common for retail and hospitality. Tell us your trading hours when you request a quote.' },
      { q: 'Do you remove chewing gum?', a: 'Yes. Gum is treated and removed as part of footpath cleaning. Old, flattened gum can leave a faint mark on some surfaces.' },
      ...sharedFaqs.slice(0, 1),
      ...sharedFaqs.slice(2, 5),
    ],
    divisions: ['sweeping', 'grounds'],
    icon: 'store',
  },
  {
    slug: 'loading-dock-bin-bay-cleaning',
    name: 'Loading docks, bin bays & warehouses',
    metaTitle: 'Loading Dock & Bin Bay Cleaning Gold Coast | Washed by Swept',
    metaDescription: 'Pressure cleaning for loading docks, delivery bays, bin bays and warehouse floors: spills, residue and heavy soiling removed. Free written quote.',
    h1: 'Loading dock, bin bay and warehouse wash-downs',
    summary: 'Loading docks, delivery bays, bin bays and warehouse floors washed down to remove spills, residue, odours and heavy soiling.',
    intro: 'Heavy-duty wash-downs for the hardest-working parts of a commercial site – loading docks and delivery bays, bin bays and waste enclosures, and warehouse and distribution centre floors. Spills, residue and built-up soiling are removed, and the work is planned around deliveries and shifts.',
    suits: ['Warehouses and distribution centres', 'Supermarkets, restaurants and hospitality venues', 'Shopping centre service areas', 'Industrial and manufacturing sites'],
    checklist: [
      { room: 'Docks & bays', items: ['Loading docks and delivery bays washed down', 'Oil and spill residue treated', 'Dock edges and bollards cleaned'] },
      { room: 'Bin bays', items: ['Floors, walls and kerbs washed', 'Odour-causing residue removed', 'Drains and grates cleared'] },
      { room: 'Warehouse floors', items: ['Floor wash-downs in agreed zones', 'Dust and residue removed', 'Areas left to dry before use'] },
      runoff,
    ],
    faqs: [
      { q: 'Can you work around deliveries and shifts?', a: 'Yes. Tell us when the docks are busiest and which areas must stay open, and we will plan around them.' },
      { q: 'Do you follow site inductions and safety rules?', a: 'Yes. Let us know about inductions, sign-in, PPE and traffic management rules for your site, and we will follow them.' },
      { q: 'Can you scrub warehouse floors instead?', a: 'For regular machine scrubbing of large internal floors, Scrubbed – another Swept division – may suit better. We can quote both.' },
      ...sharedFaqs.slice(0, 1),
      ...sharedFaqs.slice(3, 5),
    ],
    divisions: ['scrubbed', 'sweeping'],
    icon: 'truck',
  },
]

export const commercialPath = (slug: string) => `/commercial/${slug}`
