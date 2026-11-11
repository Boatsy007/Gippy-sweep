import type { Faq } from './types'

/*
 * Service areas for Washed by Swept – the same four regions and 112 suburbs as
 * Cleaned and Grounds by Swept. Notes are general, checkable facts about
 * outdoor surfaces in each region (climate, coast, waterways), not claims about
 * Swept.
 */

export type Area = {
  slug: 'brisbane' | 'logan' | 'gold-coast' | 'tweed-heads'
  name: string
  state: 'QLD' | 'NSW'
  council: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  notes: { title: string; body: string }[]
  faqs: Faq[]
}

export const areas: Area[] = [
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'QLD',
    council: 'Brisbane City Council',
    metaTitle: 'Pressure Cleaning Brisbane | Washed by Swept',
    metaDescription: 'Pressure cleaning and soft washing across Brisbane’s northside, southside, inner city, east and west: driveways, paths, house exteriors. Free quote.',
    h1: 'Pressure cleaning across Brisbane',
    intro: 'From inner-city townhouses and apartment complexes to family homes in the suburbs, Washed by Swept cleans driveways, paths, patios, house exteriors and commercial sites right across Brisbane.',
    notes: [
      { title: 'Humid summers, mould and algae', body: 'Brisbane’s hot, humid summers and wet season suit mould and algae, especially on shaded paths, south-facing walls and under trees. That is what turns concrete dark and makes paths slippery.' },
      { title: 'Character homes need a gentle wash', body: 'Queenslanders and older homes often have painted timber, weatherboards and older paint finishes. A low-pressure soft wash cleans them without stripping paint or forcing water into the timber.' },
      { title: 'Storm season clean-ups', body: 'Summer storms leave leaves, mud and debris on driveways and paths. A wash-down after the storm season gets outdoor areas back to normal.' },
    ],
    faqs: [
      { q: 'Do you pressure clean on the northside and southside?', a: 'Yes. We cover Brisbane’s northside, southside, inner city, eastern and western suburbs. If your suburb is not listed, request a quote and we will confirm.' },
      { q: 'Can you wash a Queenslander?', a: 'Yes, with a low-pressure soft wash that suits painted timber. Tell us about the age and condition of the paint when you request a quote.' },
      { q: 'Do you clean townhouse and apartment complexes?', a: 'Yes, for body corporates – driveways, paths, entries and pool surrounds. See [strata, resort and body corporate cleaning](/commercial/strata-resort-cleaning).' },
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    state: 'QLD',
    council: 'Logan City Council',
    metaTitle: 'Pressure Cleaning Logan | Washed by Swept',
    metaDescription: 'Pressure cleaning across Logan, from Springwood and Shailer Park to Yarrabilba and Jimboomba: driveways, paths, patios and house washing. Free quote.',
    h1: 'Pressure cleaning across Logan',
    intro: 'Logan stretches from established suburbs such as Springwood and Daisy Hill to new estates in Yarrabilba and Flagstone and acreage around Jimboomba. Washed by Swept cleans driveways, paths, patios and house exteriors right across the city.',
    notes: [
      { title: 'New estates, new concrete', body: 'Many new homes have coloured or exposed aggregate driveways. New concrete should be left to cure before high-pressure cleaning, and decorative finishes need the pressure set to suit.' },
      { title: 'Long driveways and big slabs', body: 'Larger blocks and acreage mean longer driveways, sheds and big outdoor slabs. Tell us roughly how big the areas are when you request a quote.' },
      { title: 'Rendered family homes', body: 'Rendered and painted walls are common on newer Logan homes. A soft wash removes dirt and mould without damaging the render or paint.' },
    ],
    faqs: [
      { q: 'Do you service new estates like Yarrabilba and Flagstone?', a: 'Yes. New estates are part of our Logan service area. Request a quote with your suburb and we will confirm.' },
      { q: 'When can I pressure clean a new driveway?', a: 'Once the concrete has cured – usually at least a month after it was poured. Check with your builder or concreter if you are unsure.' },
      { q: 'Do you clean acreage driveways and sheds?', a: 'Yes, within our service area. Tell us the approximate size of each area so we can plan the time and equipment.' },
    ],
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    state: 'QLD',
    council: 'City of Gold Coast',
    metaTitle: 'Pressure Cleaning Gold Coast Homes | Washed by Swept',
    metaDescription: 'Pressure cleaning and soft washing across the Gold Coast, from Coomera to Burleigh and Coolangatta: driveways, paths, pool surrounds and houses. Free quote.',
    h1: 'Pressure cleaning across the Gold Coast',
    intro: 'From the northern growth corridor around Coomera and Pimpama to the canal suburbs and beachside homes between Surfers Paradise and Coolangatta, Washed by Swept cleans homes, strata complexes, resorts and commercial sites right along the Gold Coast.',
    notes: [
      { title: 'Salt air and sand', body: 'Close to the beach, salt spray leaves a film on walls, glass and outdoor surfaces, and sand collects in pavers and corners. Regular washing keeps coastal homes looking fresh.' },
      { title: 'Canal and waterfront homes', body: 'Many Gold Coast homes back onto canals and waterways. Directing wash water away from the water and stormwater drains helps protect them.' },
      { title: 'Pools and outdoor living', body: 'Pool surrounds, alfrescos and paved courtyards are part of Gold Coast living – and in the warm, humid climate they can grow algae and become slippery.' },
    ],
    faqs: [
      { q: 'Do you clean canal-front properties?', a: 'Yes. We take care to keep wash water and debris out of the canal and stormwater drains.' },
      { q: 'Do you clean resorts and holiday apartments?', a: 'Yes. See [strata, resort and body corporate cleaning](/commercial/strata-resort-cleaning).' },
      { q: 'Do you service the northern Gold Coast?', a: 'Yes. Coomera, Pimpama, Upper Coomera and the surrounding suburbs are part of our Gold Coast service area.' },
    ],
  },
  {
    slug: 'tweed-heads',
    name: 'Tweed Heads',
    state: 'NSW',
    council: 'Tweed Shire Council',
    metaTitle: 'Pressure Cleaning Tweed Heads | Washed by Swept',
    metaDescription: 'Pressure cleaning and soft washing in Tweed Heads, Banora Point, Terranora and nearby: driveways, paths, patios and house exteriors. Free written quote.',
    h1: 'Pressure cleaning in Tweed Heads and surrounds',
    intro: 'Just over the border from Coolangatta, Tweed Heads and its neighbouring suburbs are part of Washed by Swept’s regular service area. We clean driveways, paths, patios, pool surrounds and house exteriors.',
    notes: [
      { title: 'Two states, two time zones', body: 'From October to April, NSW runs on daylight saving time and Queensland does not, so Tweed Heads is an hour ahead of Coolangatta. We confirm every Tweed booking in local NSW time.' },
      { title: 'River and waterfront homes', body: 'Homes along the Tweed River, Terranora Broadwater and canals see humidity and salt air. Wash water is directed away from the water and drains.' },
      { title: 'Sloping driveways', body: 'Some homes in Terranora, Bilambil Heights and Banora Point have steep driveways. Mould and algae make sloping concrete especially slippery when wet.' },
    ],
    faqs: [
      { q: 'Do you cross the border into NSW?', a: 'Yes. Tweed Heads and the surrounding suburbs are part of our regular service area.' },
      { q: 'Which time zone are bookings in?', a: 'We confirm Tweed bookings in NSW time. During daylight saving (October to April), that is an hour ahead of Queensland.' },
      { q: 'Can you clean a steep driveway?', a: 'Yes. Tell us about slopes and access when you request a quote so we can plan the job safely.' },
    ],
  },
]

export const areaPath = (slug: string) => `/residential/areas/${slug}`
