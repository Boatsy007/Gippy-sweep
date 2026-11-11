import type { Faq } from './types'
import { site } from './site'

/* Page copy for Scrubbed by Swept that isn't tied to one service. Facts about the
   business come from ./site; floor-care notes stay general and checkable. */

export const howItWorks = [
  { title: 'Tell us about the site', body: 'A two-minute online form: the floor areas, surfaces, rough size and access times. We may arrange a site walk.' },
  { title: 'Receive a written scope', body: `Each area, the method and how often it is scrubbed, with a written quote ${site.quoteResponse}.` },
  { title: 'Cleaner floors, on schedule', body: 'We scrub on the agreed days and times, outside your busiest hours.' },
]

/** How a scrubber-drier cleans – the method behind every service. */
export const method = [
  { title: 'Sweep', body: 'Loose dust and debris are removed first, so the scrubber cleans the floor instead of pushing grit around.' },
  { title: 'Apply', body: 'The machine lays down a measured amount of cleaning solution chosen for the floor and the soil.' },
  { title: 'Scrub', body: 'Rotating brushes or pads loosen ground-in dirt, marks and residue.' },
  { title: 'Recover', body: 'A squeegee and vacuum pick up the dirty water in the same pass, leaving the floor close to dry.' },
]

/** Matching pads and solutions to the floor – a general guide. */
export const floorTypes = [
  { name: 'Bare & sealed concrete', icon: 'warehouse', body: 'Durable and suited to firmer brushes or pads. Sealed concrete keeps its sealer longer with neutral cleaners.' },
  { name: 'Polished concrete', icon: 'sparkle', body: 'Fine pads and neutral cleaners help keep the shine. Harsh acidic or alkaline cleaners can dull it.' },
  { name: 'Epoxy & coated floors', icon: 'shield', body: 'Coatings can be scratched or dulled by aggressive pads, so gentler pads and suitable solutions are used.' },
  { name: 'Vinyl & sheet flooring', icon: 'grid', body: 'Smooth, resilient floors suit soft pads and neutral cleaners. Heavy scrubbing can wear the surface.' },
  { name: 'Tiles & grout', icon: 'grid', body: 'Brushes reach into grout lines where dirt collects. Damaged or heavily stained grout may not come up like new.' },
]

export const regions = [
  { to: '/areas/brisbane', label: 'Brisbane', icon: 'city' },
  { to: '/areas/logan', label: 'Logan', icon: 'warehouse' },
  { to: '/areas/gold-coast', label: 'Gold Coast', icon: 'palm' },
  { to: '/areas/tweed-heads', label: 'Tweed Heads', icon: 'wave' },
]

export const aboutIntro =
  'Scrubbed by Swept is the commercial floor scrubbing division of Swept, looking after warehouse, industrial, retail and commercial floors across Brisbane, Logan, the Gold Coast and Tweed Heads. Rather than big claims, here is exactly how we work and what you can hold us to.'

export const approach = [
  { icon: 'doc', title: 'A written scope for every site', body: 'Your quote lists each area, the method and how often it is scrubbed. That scope is what we work to.' },
  { icon: 'calendar', title: 'Planned around your operation', body: 'Before opening, after close, between shifts or on weekends – visits are planned so the work does not get in the way of yours.' },
  { icon: 'shield', title: 'Safety on site', body: 'Wet floor signs and barriers while we work, your inductions and site rules followed, and floors left close to dry.' },
  { icon: 'droplets', title: 'Water recovered, not washed away', body: 'Scrubber-driers recover the dirty water as they clean. It is emptied to an agreed drain point, not into stormwater.' },
]

export const enquiryChecklist = [
  'Your business name and the site’s suburb',
  'The type of site – warehouse, factory, shopping centre, car park, showroom or office',
  'The floor areas to be scrubbed and roughly how big they are',
  'Floor surfaces and coatings, if you know them',
  'One-off deep clean or a regular program, and how often',
  'Access times, site rules, inductions and any areas to avoid',
  'Photos of the floors – they help us quote accurately',
]

export const contactFaqs: Faq[] = [
  { q: 'How quickly will you get back to me?', a: `We reply to quote requests and messages ${site.quoteResponse}. Our enquiry hours are ${site.responseHours}.` },
  { q: 'Do you need to see the site before quoting?', a: 'For larger sites, usually yes – we will arrange a site walk. For smaller areas, a description and photos may be enough.' },
  { q: 'Can I send photos or floor plans?', a: site.email ? `Yes. Email them to ${site.email} with your business name and suburb, or mention in your quote request that you will send them.` : 'Yes. Mention it in your quote request and we will tell you how to send them.' },
  { q: 'Which time zone are bookings in?', a: 'Queensland time for Brisbane, Logan and the Gold Coast. For Tweed Heads we confirm bookings in NSW time, which is an hour ahead of Queensland from October to April.' },
  { q: 'Do you clean homes?', a: 'No. Scrubbed by Swept is commercial only. For homes, Cleaned by Swept – another Swept division – offers house cleaning.' },
]

export const generalFaqs: Faq[] = [
  { q: 'What does Scrubbed by Swept do?', a: 'Commercial machine floor scrubbing: warehouses and distribution centres, factories and workshops, shopping centres and food courts, car park levels, and polished concrete, vinyl and tiled floors in showrooms and offices – as one-off deep cleans or scheduled programs.' },
  { q: 'What is a scrubber-drier?', a: 'A floor cleaning machine that applies cleaning solution, scrubs with brushes or pads and recovers the dirty water with a squeegee and vacuum in one pass. Floors are left clean and close to dry.' },
  { q: 'Why scrub instead of mop?', a: 'A mop spreads dirty water around and leaves the floor wet. A scrubber-drier lifts dirt with brushes or pads and recovers the dirty water, so floors are cleaner and back in use sooner.' },
  { q: 'Which areas do you cover?', a: 'Commercial and industrial sites across Brisbane, Logan, the Gold Coast and Tweed Heads. See [areas we service](/areas) or request a quote and we will confirm.' },
  { q: 'How is the price worked out?', a: 'Every site is different, so every quote is too. It depends on the floor area and type, how soiled it is, access times and how often it is scrubbed. You will get a written quote before anything is booked.' },
  { q: 'Do we need to close the area?', a: 'The section being scrubbed is signed and kept clear while we work. We clean in zones so the rest of the site can stay open.' },
  { q: 'Do you polish, strip or re-coat floors?', a: 'No. Scrubbing cleans the floor surface. Grinding, polishing, stripping and re-coating are specialist services we do not offer.' },
  { q: 'Is there a lock-in contract?', a: 'No. Scheduled programs run visit to visit. Change the frequency or stop whenever you need to.' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance. We can provide a certificate of currency on request.' },
  { q: 'Do you clean homes?', a: 'No. Scrubbed by Swept is commercial only.' },
]
