import type { Faq } from './types'
import { suburbs as allSuburbs } from '../../cleaned/lib/suburbs'

/*
 * Service areas for Scrubbed by Swept – the same four regions Swept's other
 * divisions cover. Scrubbed is commercial only, so there is one page per region
 * (listing the suburbs served) rather than a page per suburb. Industrial areas
 * named below are facts about each region, not a claim of existing clients.
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
  /** Industrial and commercial precincts in the region (general facts) */
  precincts: string[]
  notes: { title: string; body: string }[]
  faqs: Faq[]
}

export const areas: Area[] = [
  {
    slug: 'brisbane',
    name: 'Brisbane',
    state: 'QLD',
    council: 'Brisbane City Council',
    metaTitle: 'Commercial Floor Scrubbing Brisbane | Scrubbed by Swept',
    metaDescription: 'Commercial floor scrubbing across Brisbane: warehouses, factories, shopping centres, car parks and commercial hard floors. One-off or scheduled. Free quote.',
    h1: 'Commercial floor scrubbing across Brisbane',
    intro: 'From warehouses and factories in Brisbane’s industrial suburbs to shopping centres, showrooms and office buildings, Scrubbed by Swept provides machine floor scrubbing across Brisbane – as one-off deep cleans or scheduled programs.',
    precincts: ['Eagle Farm', 'Pinkenba', 'Murarrie', 'Hemmant', 'Rocklea', 'Acacia Ridge', 'Richlands', 'Wacol'],
    notes: [
      { title: 'Industrial and logistics hubs', body: 'Brisbane’s industrial areas around the airport and port and through the southern and western suburbs are home to large warehouse and distribution floors, where regular scrubbing keeps dust and tyre marks under control.' },
      { title: 'Humid, wet summers', body: 'Summer storms mean water and mud tracked in through dock doors and entries. Scrubber-driers recover the water as they clean, leaving floors close to dry.' },
    ],
    faqs: [
      { q: 'Do you service industrial areas in Brisbane?', a: 'Yes. We scrub commercial and industrial floors across Brisbane. Request a quote with your site’s suburb and we will confirm.' },
      { q: 'Can you scrub a shopping centre or office building in the city?', a: 'Yes. Tell us about access, loading dock bookings and building rules when you request a quote.' },
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    state: 'QLD',
    council: 'Logan City Council',
    metaTitle: 'Commercial Floor Scrubbing Logan | Scrubbed by Swept',
    metaDescription: 'Commercial floor scrubbing across Logan: warehouses, factories, retail centres and commercial hard floors from Crestmead to Loganholme. Free written quote.',
    h1: 'Commercial floor scrubbing across Logan',
    intro: 'Logan sits on the M1 and Logan Motorway corridors between Brisbane and the Gold Coast, with industrial estates, warehouses and retail centres throughout. Scrubbed by Swept provides machine floor scrubbing for commercial sites across the city.',
    precincts: ['Crestmead', 'Berrinba', 'Loganholme', 'Slacks Creek', 'Underwood'],
    notes: [
      { title: 'Warehouses on the freight corridors', body: 'Logan’s industrial estates include large warehouse and manufacturing floors that see constant forklift and foot traffic – well suited to scheduled scrubbing programs.' },
      { title: 'Retail and showrooms', body: 'Shopping centres, showrooms and large-format retail along the main roads have big hard-floor areas that are best scrubbed outside trading hours.' },
    ],
    faqs: [
      { q: 'Do you service industrial estates in Logan?', a: 'Yes. Request a quote with your site’s suburb and we will confirm.' },
      { q: 'Can you scrub between shifts?', a: 'Yes. Tell us your shift times and which zones can be closed, and we will plan the work around them.' },
    ],
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    state: 'QLD',
    council: 'City of Gold Coast',
    metaTitle: 'Commercial Floor Scrubbing Gold Coast | Scrubbed by Swept',
    metaDescription: 'Commercial floor scrubbing across the Gold Coast: warehouses, factories, shopping centres, car parks and showrooms from Yatala to Coolangatta. Free quote.',
    h1: 'Commercial floor scrubbing across the Gold Coast',
    intro: 'From the industrial estates in the northern Gold Coast to shopping centres, resorts and commercial buildings along the coast, Scrubbed by Swept provides machine floor scrubbing for commercial and industrial sites – Swept’s home region.',
    precincts: ['Yatala', 'Stapylton', 'Arundel', 'Molendinar', 'Burleigh Heads', 'Currumbin Waters'],
    notes: [
      { title: 'Northern industrial corridor', body: 'Yatala, Stapylton and the surrounding estates between Brisbane and the Gold Coast include large manufacturing and distribution floors.' },
      { title: 'Shopping centres and car parks', body: 'The Gold Coast’s large shopping centres have walkways, food courts and multi-level car parks that are best scrubbed before opening or after close.' },
      { title: 'Sand and grit', body: 'Close to the beach, sand is tracked into entries and onto hard floors, where it acts like an abrasive. Regular sweeping and scrubbing protect the floor finish.' },
    ],
    faqs: [
      { q: 'Do you service the northern Gold Coast industrial estates?', a: 'Yes, including Yatala and Stapylton. Request a quote with your site’s suburb and we will confirm.' },
      { q: 'Can you scrub shopping centre car park levels?', a: 'Yes – see [car park floor scrubbing](/services/car-park-floor-scrubbing).' },
    ],
  },
  {
    slug: 'tweed-heads',
    name: 'Tweed Heads',
    state: 'NSW',
    council: 'Tweed Shire Council',
    metaTitle: 'Commercial Floor Scrubbing Tweed Heads | Scrubbed by Swept',
    metaDescription: 'Commercial floor scrubbing in Tweed Heads, Tweed Heads South and Chinderah: warehouses, workshops, retail and commercial hard floors. Free written quote.',
    h1: 'Commercial floor scrubbing in Tweed Heads and surrounds',
    intro: 'Just over the border from Coolangatta, Tweed Heads and its surrounding suburbs are part of Scrubbed by Swept’s service area, covering warehouses, workshops, retail centres and commercial premises.',
    precincts: ['Tweed Heads South', 'Chinderah'],
    notes: [
      { title: 'Two states, two time zones', body: 'From October to April, NSW runs on daylight saving time and Queensland does not, so Tweed Heads is an hour ahead of Coolangatta. We confirm every Tweed booking in local NSW time.' },
      { title: 'Industrial estates over the border', body: 'Tweed Heads South and Chinderah have industrial and trade estates with workshop and warehouse floors.' },
    ],
    faqs: [
      { q: 'Do you cross the border into NSW?', a: 'Yes. Tweed Heads and the surrounding suburbs are part of our service area.' },
      { q: 'Which time zone are bookings in?', a: 'We confirm Tweed bookings in NSW time. During daylight saving (October to April), that is an hour ahead of Queensland.' },
    ],
  },
]

export const areaPath = (slug: string) => `/areas/${slug}`
export const suburbsIn = (area: string) => allSuburbs.filter((s) => s.area === area)
export const suburbCount = allSuburbs.length
