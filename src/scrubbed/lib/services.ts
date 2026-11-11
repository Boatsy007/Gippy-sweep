import type { ChecklistGroup, Faq } from './types'

/*
 * Commercial floor scrubbing services for Scrubbed by Swept.
 *
 * The service list comes from the Scrubbed section of the Swept commercial site
 * (src/serviceBrands.ts), which is the confirmed offer. Copy rules: describe the
 * work plainly, no prices, no certifications or compliance guarantees, no promise
 * that every mark will come out. Floor-care advice is limited to well-established
 * general practice (sweep before scrubbing, match pads and solutions to the floor,
 * recover the water, keep wet areas signed).
 */

export type Service = {
  slug: string
  name: string
  /** Short label for forms */
  label: string
  summary: string
  bestFor: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  suits: string[]
  checklist: ChecklistGroup[]
  /** What the quote depends on – no figures */
  quoteFactors: string[]
  /** Practical, factual notes for this kind of floor */
  tips: { title: string; body: string }[]
  faqs: Faq[]
  /** Related Swept divisions (commercial-site section ids) */
  divisions: string[]
  icon: string
}

const prep = { room: 'Before scrubbing', items: ['Loose debris swept or vacuumed first', 'Wet floor signs and barriers set up', 'Spills and heavy marks pre-treated where needed'] }
const finish = { room: 'After scrubbing', items: ['Dirty water recovered by the machine, not left on the floor', 'Edges and corners detailed', 'Recovery water emptied to an agreed drain point, not stormwater'] }

const shared: Faq[] = [
  { q: 'What is a scrubber-drier?', a: 'A floor cleaning machine that applies cleaning solution, scrubs with rotating brushes or pads, then recovers the dirty water with a squeegee and vacuum – all in one pass. Floors are left clean and close to dry, rather than wet like after mopping.' },
  { q: 'Can you work outside operating hours?', a: 'Yes. Tell us when the site is quietest – before opening, after close, between shifts or on weekends – and we will plan the work around it.' },
  { q: 'Do you provide a written scope?', a: 'Yes. Every site gets a written scope listing the areas, the method and how often each area is scrubbed.' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance. We can provide a certificate of currency on request.' },
]

export const services: Service[] = [
  {
    slug: 'warehouse-floor-scrubbing',
    name: 'Warehouse floor scrubbing',
    label: 'Warehouse / distribution centre',
    summary: 'Machine scrubbing for warehouse and distribution centre floors – lifting ground-in dirt, tyre marks and spills from sealed and concrete surfaces.',
    bestFor: 'Warehouses and distribution centres',
    metaTitle: 'Warehouse Floor Scrubbing Gold Coast | Scrubbed by Swept',
    metaDescription: 'Warehouse and distribution centre floor scrubbing across Brisbane, Logan and the Gold Coast: ground-in dirt, tyre marks and spills lifted. Free written quote.',
    h1: 'Warehouse and distribution centre floor scrubbing',
    intro: 'Machine scrubbing for warehouse and distribution centre floors – aisles, dock areas, staging zones and open floor space. Ground-in dirt, forklift tyre marks and spills are lifted from sealed and concrete surfaces, with the work planned around shifts, deliveries and racking.',
    suits: ['Warehouses and distribution centres', 'Third-party logistics and cold-store sites', 'Aisles, staging and dispatch areas', 'Sites with regular forklift traffic'],
    checklist: [prep, { room: 'Scrubbing', items: ['Aisles and open floor scrubbed with a scrubber-drier', 'Forklift tyre marks treated (results vary with age)', 'Dock and staging areas scrubbed', 'Under-rack edges reached where accessible'] }, finish],
    quoteFactors: ['The floor area to be scrubbed', 'The floor type and coating', 'How much soiling and how many tyre marks there are', 'Access around racking, stock and equipment', 'How often the floor is scrubbed'],
    tips: [
      { title: 'Sweep first', body: 'Scrubbing works best on a floor that has had loose dust and debris removed first. Many warehouses pair regular mechanical sweeping with periodic scrubbing.' },
      { title: 'Tyre marks build up', body: 'Forklift tyre marks are easier to lift when they are scrubbed regularly. Old, heavy build-up may fade rather than disappear in one clean.' },
      { title: 'Clean floors are safer floors', body: 'Dust, oil and residue reduce grip underfoot and for forklifts. Keeping floors clean is part of managing slip risks.' },
    ],
    faqs: [
      { q: 'Do you need the warehouse empty?', a: 'No. We scrub in zones and work around racking, stock and equipment. Tell us which areas can be cleared and when.' },
      { q: 'Can you remove forklift tyre marks?', a: 'Often, with pre-treatment and the right pads. Fresh marks lift more easily than old, heavy build-up, which may fade rather than disappear.' },
      ...shared,
    ],
    divisions: ['sweeping', 'washed'],
    icon: 'warehouse',
  },
  {
    slug: 'industrial-floor-scrubbing',
    name: 'Industrial floor scrubbing',
    label: 'Factory / workshop / industrial',
    summary: 'Heavy-duty floor scrubbing for factories, workshops and industrial facilities, removing grime and residue to keep working surfaces safe and presentable.',
    bestFor: 'Factories and workshops',
    metaTitle: 'Industrial Floor Scrubbing Gold Coast | Scrubbed by Swept',
    metaDescription: 'Industrial floor scrubbing for factories, workshops and manufacturing sites across Brisbane, Logan and the Gold Coast: grime, oil and residue removed. Free quote.',
    h1: 'Industrial floor scrubbing for factories and workshops',
    intro: 'Heavy-duty scrubbing for factory, workshop and manufacturing floors, removing grime, oil and process residue from concrete, sealed and coated surfaces. We follow your site inductions and safety rules, and plan around production and shift changes.',
    suits: ['Factories and manufacturing plants', 'Mechanical and fabrication workshops', 'Industrial units and depots', 'Production and assembly areas'],
    checklist: [prep, { room: 'Scrubbing', items: ['Floors scrubbed with a scrubber-drier', 'Oil and grease pre-treated with a suitable degreaser', 'Walkways and work areas scrubbed', 'Coated and line-marked floors cleaned with care'] }, finish],
    quoteFactors: ['The floor area and layout', 'The type of soiling – oil, grease, dust or process residue', 'The floor surface or coating', 'Site rules, inductions and access times', 'How often the floor is scrubbed'],
    tips: [
      { title: 'Match the chemistry to the soil', body: 'Oil and grease need a degreaser; dust and general grime usually need a neutral cleaner. Using the right product protects coatings and line marking.' },
      { title: 'Coatings need care', body: 'Epoxy and other floor coatings can be dulled or scratched by aggressive pads. Gentler pads and suitable solutions keep the coating intact.' },
      { title: 'Keep walkways visible', body: 'Clean floors make painted walkways and exclusion zones easier to see. Faded or worn line marking can be refreshed separately.' },
    ],
    faqs: [
      { q: 'Do you follow site inductions and safety rules?', a: 'Yes. Tell us about inductions, sign-in, PPE requirements and traffic management rules for your site, and we will follow them.' },
      { q: 'Will scrubbing damage our floor coating?', a: 'Not when the pads and solutions suit the coating. Tell us what the floor is coated with, if you know, so we can plan the method.' },
      ...shared,
    ],
    divisions: ['marked', 'sweeping'],
    icon: 'city',
  },
  {
    slug: 'shopping-centre-floor-cleaning',
    name: 'Shopping centre floor cleaning',
    label: 'Shopping centre / retail',
    summary: 'Scrubbing for shopping centre walkways, food courts, entries and car park levels – scheduled before opening or after close to avoid disrupting trade.',
    bestFor: 'Shopping centres and retail',
    metaTitle: 'Shopping Centre Floor Scrubbing | Scrubbed by Swept',
    metaDescription: 'Shopping centre floor scrubbing for walkways, food courts, entries and car park levels, scheduled before opening or after close. Free written quote.',
    h1: 'Shopping centre floor scrubbing',
    intro: 'Machine scrubbing for shopping centre walkways, food courts, entries and back-of-house corridors, scheduled before opening or after close so trade carries on. Food court grease, spills and tracked-in dirt are lifted, and floors are left close to dry.',
    suits: ['Shopping centres and retail precincts', 'Food courts and dining areas', 'Entries, malls and walkways', 'Back-of-house corridors and loading areas'],
    checklist: [prep, { room: 'Scrubbing', items: ['Malls and walkways scrubbed', 'Food court floors degreased and scrubbed', 'Entry areas and mat wells cleaned', 'Back-of-house corridors scrubbed'] }, finish],
    quoteFactors: ['The floor areas and their surfaces', 'Trading hours and access windows', 'Food court and high-soil areas', 'How often each area is scrubbed'],
    tips: [
      { title: 'Little left wet', body: 'Because a scrubber-drier recovers the water as it goes, floors are left close to dry – helpful when the centre is about to open.' },
      { title: 'Food courts need degreasing', body: 'Grease from food courts spreads on shoes. Degreasing and scrubbing food court floors stops it being tracked through the centre.' },
    ],
    faqs: [
      { q: 'Can you scrub before the centre opens?', a: 'Yes. Early-morning and after-close scrubbing is common for shopping centres. Tell us your trading hours and access arrangements.' },
      { q: 'Do you clean car park levels too?', a: 'Yes – see [car park floor scrubbing](/services/car-park-floor-scrubbing).' },
      ...shared,
    ],
    divisions: ['sweeping', 'cleaned'],
    icon: 'cart',
  },
  {
    slug: 'commercial-hard-floor-cleaning',
    name: 'Commercial hard-floor cleaning',
    label: 'Showroom / office / hard floors',
    summary: 'Machine cleaning for polished concrete, vinyl, tiled and sealed hard floors in showrooms, offices and commercial premises.',
    bestFor: 'Showrooms, offices and premises',
    metaTitle: 'Polished Concrete & Hard Floor Cleaning | Scrubbed by Swept',
    metaDescription: 'Machine cleaning for polished concrete, vinyl, tiled and sealed hard floors in showrooms, offices and commercial premises across SEQ. Free written quote.',
    h1: 'Commercial hard-floor cleaning: polished concrete, vinyl and tiles',
    intro: 'Machine cleaning for the hard floors in showrooms, offices, gyms, clinics and other commercial premises – polished concrete, vinyl, tiles and sealed surfaces. Pads, brushes and cleaning solutions are matched to the floor, and scrubbing is done outside your opening hours.',
    suits: ['Showrooms and display floors', 'Offices and reception areas', 'Gyms, clinics and studios', 'Any premises with large hard-floor areas'],
    checklist: [prep, { room: 'Scrubbing', items: ['Pads or brushes chosen for the floor type', 'Neutral solutions for polished and coated floors', 'Brushes for tiles and grout lines', 'Edges and corners detailed'] }, finish],
    quoteFactors: ['The floor area and type', 'Furniture, displays and fittings to work around', 'Access times', 'How often the floor is scrubbed'],
    tips: [
      { title: 'Polished concrete likes neutral cleaners', body: 'Harsh, acidic or strongly alkaline cleaners can dull polished concrete. Neutral cleaners and fine pads help keep the shine.' },
      { title: 'Tiles need brushes, not just pads', body: 'Brushes reach into grout lines, where dirt collects on tiled floors. Pads suit smooth floors such as vinyl and polished concrete.' },
      { title: 'Not a polish or coating service', body: 'Scrubbing cleans the floor. Re-polishing, grinding, stripping and re-coating are separate specialist jobs.' },
    ],
    faqs: [
      { q: 'Do you polish or re-coat floors?', a: 'No. Scrubbing cleans the floor surface. Grinding, polishing, stripping and re-coating are specialist floor services we do not offer.' },
      { q: 'Can you clean tiled floors and grout?', a: 'Yes. Tiled floors are scrubbed with brushes that reach into grout lines. Heavily stained or damaged grout may not come up like new.' },
      ...shared,
    ],
    divisions: ['cleaned'],
    icon: 'grid',
  },
  {
    slug: 'car-park-floor-scrubbing',
    name: 'Car park floor scrubbing',
    label: 'Car park levels',
    summary: 'Scrubber-drier cleaning for car park levels and ramps, lifting oil, grime and tyre marks from concrete and coated surfaces.',
    bestFor: 'Car park levels',
    metaTitle: 'Car Park Floor Scrubbing | Scrubbed by Swept',
    metaDescription: 'Car park floor scrubbing for shopping centre, office and residential building car park levels: oil, grime and tyre marks lifted. Free written quote.',
    h1: 'Car park floor scrubbing',
    intro: 'Machine scrubbing for multi-level and basement car parks – floors, ramps and bays on shopping centre, office and apartment building car park levels. Oil drips, grime and tyre marks are lifted, and the water is recovered as we go, so it is not washed into drains.',
    suits: ['Shopping centre car park levels', 'Office and apartment basement car parks', 'Coated and sealed car park floors', 'Car parks where wash-downs are not practical'],
    checklist: [prep, { room: 'Scrubbing', items: ['Bays, aisles and ramps scrubbed', 'Oil drips pre-treated (results vary with age)', 'Coated floors cleaned with suitable pads', 'Areas cleaned in sections so the car park can stay open'] }, finish],
    quoteFactors: ['The number of levels and floor area', 'The floor surface and any coating', 'How much oil and tyre marking there is', 'When sections can be closed', 'How often the floor is scrubbed'],
    tips: [
      { title: 'Scrubbing or pressure cleaning?', body: 'Scrubber-driers recover their water, which suits indoor and basement car parks. Open-air car parks and heavy wash-downs may suit pressure cleaning instead.' },
      { title: 'Plan the closures', body: 'Cars need to be moved from the bays being cleaned. Working in sections, with notices to users in advance, keeps the car park running.' },
    ],
    faqs: [
      { q: 'Do cars need to be moved?', a: 'Yes, from the bays being scrubbed. We work in sections and agree the plan with you or your building manager so notices can go out in advance.' },
      { q: 'Should we scrub or pressure clean our car park?', a: 'Scrubbing suits indoor and basement levels because the water is recovered. For open-air car parks and heavy wash-downs, Washed by Swept – another Swept division – may suit better. We can advise when we quote.' },
      ...shared,
    ],
    divisions: ['washed', 'sweeping', 'marked'],
    icon: 'car',
  },
  {
    slug: 'deep-clean-floor-scrubbing',
    name: 'One-off deep floor cleans',
    label: 'One-off deep clean',
    summary: 'A one-off deep scrub to reset a neglected floor – before a lease handover, after a fit-out or shutdown, or to start a maintenance program.',
    bestFor: 'Handovers, fit-outs and resets',
    metaTitle: 'One-Off Deep Floor Cleaning Gold Coast | Scrubbed by Swept',
    metaDescription: 'One-off deep floor scrubbing for commercial premises: lease handovers, post fit-out and shutdown cleans, and resets before a maintenance program. Free quote.',
    h1: 'One-off deep floor cleans for commercial premises',
    intro: 'A single deep scrub for floors that need resetting – before a lease handover or inspection, after a fit-out, shutdown or event, or as the first step before a scheduled maintenance program. More passes, more pre-treatment and more detail work than a routine scrub.',
    suits: ['Lease start and end handovers', 'After fit-outs, refurbishments and shutdowns', 'Floors that have not been scrubbed for a long time', 'Before starting a regular maintenance program'],
    checklist: [prep, { room: 'Deep scrub', items: ['Heavy soiling, marks and spills pre-treated', 'Multiple scrubbing passes where needed', 'Edges, corners and under-fittings detailed', 'Fine construction dust removed after fit-outs'] }, finish],
    quoteFactors: ['The floor area and type', 'How heavily soiled it is', 'Construction dust, paint or adhesive residue after fit-outs', 'Your deadline'],
    tips: [
      { title: 'Book after the trades', body: 'After a fit-out, a deep clean works best once trades have finished, so new dust and debris are not tracked straight back in.' },
      { title: 'Some marks are permanent', body: 'Paint, adhesive and chemical spills can stain or etch a floor. We test first and tell you what to expect before we start.' },
    ],
    faqs: [
      { q: 'Can you remove paint and adhesive from a new floor?', a: 'Sometimes, depending on the product and the floor. We test first and will tell you if a mark needs a specialist or may not come out completely.' },
      { q: 'Can a deep clean become a regular program?', a: 'Yes. Many sites start with a deep clean and then move to [scheduled floor maintenance](/services/scheduled-floor-maintenance).' },
      ...shared,
    ],
    divisions: ['cleaned', 'washed'],
    icon: 'sparkle',
  },
  {
    slug: 'scheduled-floor-maintenance',
    name: 'Scheduled floor maintenance',
    label: 'Scheduled maintenance program',
    summary: 'Weekly, fortnightly or monthly floor scrubbing programs tailored to your site – keeping high-traffic hard floors consistently clean.',
    bestFor: 'Ongoing floor care',
    metaTitle: 'Scheduled Floor Scrubbing Programs | Scrubbed by Swept',
    metaDescription: 'Weekly, fortnightly or monthly commercial floor scrubbing programs for warehouses, retail, industrial and commercial premises across SEQ. Free written quote.',
    h1: 'Scheduled floor scrubbing programs',
    intro: 'Regular floor scrubbing – weekly, fortnightly or monthly – on a written schedule tailored to your site. High-traffic areas can be scrubbed more often than quiet ones, and the schedule can change as your operation does.',
    suits: ['High-traffic warehouses and retail floors', 'Sites that need a consistent standard for audits or clients', 'Facility managers who want one scope across several areas', 'Sites that already have regular sweeping'],
    checklist: [
      { room: 'The program', items: ['Written scope listing each area and its frequency', 'Agreed days and times', 'High-traffic zones scrubbed more often', 'Schedule reviewed as your needs change'] },
      prep,
      finish,
    ],
    quoteFactors: ['The areas in the program and their size', 'How often each area is scrubbed', 'Floor types', 'Access times'],
    tips: [
      { title: 'Little and often costs less effort', body: 'Floors that are scrubbed regularly do not build up the heavy soiling that needs aggressive pads and extra passes.' },
      { title: 'Pair with sweeping', body: 'Regular sweeping between scrubs removes loose grit that would otherwise scratch floors and load up scrubbing pads.' },
    ],
    faqs: [
      { q: 'Is there a lock-in contract?', a: 'No. Scheduled programs run visit to visit. You can change the frequency or stop whenever you need to.' },
      { q: 'Can different areas have different frequencies?', a: 'Yes. Your written scope lists each area and how often it is scrubbed.' },
      ...shared,
    ],
    divisions: ['sweeping'],
    icon: 'calendar',
  },
]

export const servicePath = (slug: string) => `/services/${slug}`
