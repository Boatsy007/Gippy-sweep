import type { Faq } from './types'
import { site } from './site'

/* Page copy for Washed by Swept that isn't tied to one service. Facts about the
   business come from ./site; surface-care notes stay general and checkable. */

export const howItWorks = [
  { title: 'Tell us about the surfaces', body: 'A two-minute online form: what needs cleaning, roughly how big it is and your suburb. Photos help.' },
  { title: 'Receive a written quote', body: `A clear scope of each surface and the method we will use, ${site.quoteResponse}.` },
  { title: 'Enjoy a cleaner exterior', body: 'We protect what needs protecting, clean to the scope and rinse down before we leave.' },
]

export const schedules = [
  { value: 'once', label: 'One-off', body: 'A single clean for a driveway, house wash or patio – before summer, a party, a sale or an inspection.' },
  { value: 'six-monthly', label: 'Every 6 months', body: 'For shaded, damp or high-use areas where mould and algae come back quickly, such as pool surrounds and paths.' },
  { value: 'yearly', label: 'Every year', body: 'A yearly wash suits most driveways, paths and house exteriors in South East Queensland.' },
]

/** What every clean includes. */
export const tasks = [
  { name: 'Walk-through', detail: 'We confirm the areas, surfaces and any stains with you or from your photos' },
  { name: 'Protection', detail: 'Pot plants, furniture and loose items moved; doors, windows and outlets checked' },
  { name: 'Pre-treatment', detail: 'Mould, algae, oil and tyre marks pre-treated where needed' },
  { name: 'The right method', detail: 'Surface cleaner for flat concrete, soft wash for paint and render, care for timber and stone' },
  { name: 'Detail work', detail: 'Edges, steps, corners and grout lines finished by hand' },
  { name: 'Rinse-down', detail: 'Overspray rinsed off walls, windows and garden beds' },
  { name: 'Run-off', detail: 'Wash water directed away from stormwater drains where practical' },
  { name: 'Sweep-up', detail: 'Debris collected and taken away before we leave' },
]

/** Matching the method to the surface – a general guide. */
export const surfaces = [
  { name: 'Concrete', icon: 'car', method: 'Pressure clean', body: 'Plain concrete handles higher pressure. A rotary surface cleaner gives an even finish; coloured and exposed aggregate finishes need the pressure set to suit.' },
  { name: 'Pavers & tiles', icon: 'grid', method: 'Pressure clean, with care', body: 'Concrete and clay pavers clean well, but jointing sand can wash out and may need topping up afterwards.' },
  { name: 'Natural stone', icon: 'mountain', method: 'Low pressure', body: 'Sandstone, travertine and other natural stones are softer and more porous, and some are sensitive to acidic cleaners.' },
  { name: 'Render & paint', icon: 'home', method: 'Soft wash', body: 'High pressure can damage paint and render and force water behind cladding. A soft wash cleans with the solution instead.' },
  { name: 'Timber', icon: 'brush', method: 'Low pressure, along the grain', body: 'Too much pressure raises the grain and gouges the surface. Timber is cleaned gently and left to dry before oiling.' },
  { name: 'Brick & block', icon: 'brick', method: 'Controlled pressure', body: 'Brick and block are durable, but older or crumbling mortar joints need a gentler approach.' },
]

export const regions = [
  { to: '/residential/areas/brisbane#northside', label: 'Brisbane Northside', icon: 'city' },
  { to: '/residential/areas/brisbane#southside', label: 'Brisbane Southside', icon: 'home' },
  { to: '/residential/areas/brisbane#inner-city', label: 'Inner City', icon: 'city' },
  { to: '/residential/areas/logan', label: 'Logan', icon: 'trees' },
  { to: '/residential/areas/gold-coast', label: 'Gold Coast', icon: 'palm' },
  { to: '/residential/areas/tweed-heads', label: 'Tweed Heads', icon: 'wave' },
]

export const aboutIntro =
  'Washed by Swept is the pressure cleaning division of Swept, cleaning homes and commercial properties across Brisbane, Logan, the Gold Coast and Tweed Heads. Rather than big claims, here is exactly how we work and what you can hold us to.'

export const approach = [
  { icon: 'doc', title: 'A written scope for every job', body: 'Your quote lists each surface, the method we will use and anything that may not come up fully. That scope is what we clean to.' },
  { icon: 'droplets', title: 'Pressure where it suits', body: 'High pressure for concrete, a soft wash for paint and render, and a gentle hand for timber and natural stone. The surface decides, not the machine.' },
  { icon: 'shield', title: 'Protecting your property', body: 'We move what needs moving, check doors, windows and outlets, and rinse overspray off walls, windows and plants.' },
  { icon: 'wave', title: 'Care for local waterways', body: 'Stormwater drains flow to local creeks, rivers, canals and the ocean. We plan run-off before we start and direct wash water away from drains where practical.' },
]

export const enquiryChecklist = [
  'Your suburb and postcode',
  'What you need cleaned – driveway, paths, patio, pool surround, house walls, deck, fences or a commercial site',
  'Roughly how big each area is, or the number of storeys for a house wash',
  'The surfaces – plain or coloured concrete, pavers, stone, render, timber',
  'Any stains you want looked at, such as oil, rust or leaf marks',
  'Access details: gates, pets, outdoor taps and where to park',
  'Photos – they make a big difference to quote accuracy',
]

export const contactFaqs: Faq[] = [
  { q: 'How quickly will you get back to me?', a: `We reply to quote requests and messages ${site.quoteResponse}. Our enquiry hours are ${site.responseHours}.` },
  { q: 'Can I send photos?', a: site.email ? `Yes. Email them to ${site.email} with your name and suburb, or mention in your quote request that you will send them. Photos help us quote accurately.` : 'Yes. Mention it in your quote request and we will tell you how to send them.' },
  { q: 'Do you need to see the property before quoting?', a: 'Not always. For most homes, a description and a few photos are enough. For larger jobs and commercial sites, we may arrange a site visit.' },
  { q: 'Which time zone are bookings in?', a: 'Queensland time for Brisbane, Logan and the Gold Coast. For Tweed Heads we confirm bookings in NSW time, which is an hour ahead of Queensland from October to April.' },
  { q: "What if my suburb isn't listed?", a: 'Get in touch anyway. We work across Brisbane, Logan, the Gold Coast and Tweed Heads, and we will let you know straight away if we can reach you.' },
]

export const generalFaqs: Faq[] = [
  { q: 'What does Washed by Swept clean?', a: 'For homes: driveways and concrete, house exteriors (soft washing), patios, pavers and pool surrounds, decks and timber, fences and walls, and oil, rust and stain treatment. For commercial sites: car parks, building exteriors and graffiti, strata and resort common areas, retail footpaths, loading docks, bin bays and warehouse floors.' },
  { q: 'Which areas do you cover?', a: 'Brisbane, Logan, the Gold Coast and Tweed Heads – 112 suburbs in all. See [areas we service](/residential/areas) or request a quote and we will confirm.' },
  { q: 'How is the price worked out?', a: 'Every property is different, so every quote is too. It depends on the areas and surfaces, their size and condition, any stains, access and water supply. You will get a written quote before anything is booked.' },
  { q: 'What is soft washing?', a: 'A cleaning solution applied at low pressure, left to work and then rinsed off. It cleans painted, rendered and clad walls and other delicate surfaces without the damage high pressure can cause.' },
  { q: 'Will pressure cleaning damage my surfaces?', a: 'Not when the method suits the surface. We use high pressure only where the surface can take it, and a soft wash or low pressure for paint, render, timber and natural stone.' },
  { q: 'Can every stain be removed?', a: 'No. Old oil, rust and some other stains may fade without disappearing. We look at stains first and tell you honestly what to expect.' },
  { q: 'Do you need water and power?', a: 'We will ask about outdoor taps and access when we quote, so we can plan the job. Let us know if there is no outdoor tap.' },
  { q: 'What happens to the wash water?', a: 'We plan run-off before we start and direct wash water away from stormwater drains where practical, because they flow to local creeks, rivers, canals and the ocean.' },
  { q: 'Do I need to be home?', a: 'No, as long as we can reach the areas and an outdoor tap. Tell us about gates, locks and pets.' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance.' },
  { q: 'Do you clean commercial properties?', a: 'Yes. See [commercial pressure cleaning](/commercial) for car parks, building exteriors, strata and resorts, retail footpaths, loading docks and bin bays.' },
]
