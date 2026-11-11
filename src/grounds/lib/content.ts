import type { Faq } from './types'
import { site } from './site'

/* Page copy for Grounds by Swept that isn't tied to one service. Facts about the
   business come from ./site; horticultural notes stay general and checkable. */

export const howItWorks = [
  { title: 'Tell us about your yard', body: 'A two-minute online form: what needs doing, the size of the block, your suburb and how often.' },
  { title: 'Receive a written quote', body: `A clear scope of what is included and how often, ${site.quoteResponse}.` },
  { title: 'Enjoy a tidy yard', body: 'We arrive on the agreed day, work to the scope and leave the paths and driveway clear.' },
]

export const schedules = [
  { value: 'weekly', label: 'Weekly', body: 'For fast-growing summer lawns, larger yards and anyone who wants the yard looking sharp all the time.' },
  { value: 'fortnightly', label: 'Fortnightly', body: 'The most common choice for South East Queensland lawns through the warmer months.' },
  { value: 'monthly', label: 'Monthly', body: 'For smaller yards, slower-growing winter lawns and regular garden and hedge upkeep.' },
]

/** What a regular visit can include. */
export const tasks = [
  { name: 'Mowing', detail: 'Front, back and nature strip, at the right height for the season' },
  { name: 'Edging', detail: 'Crisp edges along paths, driveways and garden beds' },
  { name: 'Whipper-snipping', detail: 'Around fences, posts, trees and hard-to-reach corners' },
  { name: 'Weeding', detail: 'Garden beds weeded by hand before weeds set seed' },
  { name: 'Hedges & shrubs', detail: 'Trimmed to shape and kept off paths, windows and driveways' },
  { name: 'Leaf clearing', detail: 'Leaves raked and blown from lawns, paths and patios' },
  { name: 'Green waste', detail: 'Bagged for your green bin or taken away – your choice' },
  { name: 'Blow-down', detail: 'Paths, driveway and patio blown clear before we leave' },
]

/** A general guide to the South East Queensland garden year (warm-season lawns). */
export const seasons = [
  { name: 'Spring', months: 'September – November', icon: 'sprout', body: 'Lawns wake up and start growing again. A good time to fertilise, repair bare patches, lay new turf and refresh mulch before summer.' },
  { name: 'Summer', months: 'December – February', icon: 'sun', body: 'The hottest, wettest months and the fastest growth. Lawns, hedges and weeds need the most frequent attention, and storms bring down branches and leaves.' },
  { name: 'Autumn', months: 'March – May', icon: 'leaf', body: 'Growth slows as the weather cools. A good time for a final feed, hedge shaping and a garden tidy-up before winter.' },
  { name: 'Winter', months: 'June – August', icon: 'droplets', body: 'Cooler and usually drier. Warm-season lawns grow slowly or go semi-dormant, so mowing can be less frequent – a good time for pruning and clean-ups.' },
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
  'Grounds by Swept is the lawn, garden and grounds care division of Swept, looking after homes and commercial properties across Brisbane, Logan, the Gold Coast and Tweed Heads. Rather than big claims, here is exactly how we work and what you can hold us to.'

export const approach = [
  { icon: 'doc', title: 'A written scope for your yard', body: 'Your quote spells out what is included – lawns, edges, beds, hedges, green waste – and how often. That scope becomes the list for every visit.' },
  { icon: 'calendar', title: 'Schedules that follow the seasons', body: 'Lawns grow fast in summer and slowly in winter. We can set a schedule that changes with the seasons, and you can pause or change it whenever you need to.' },
  { icon: 'recycle', title: 'Green waste handled properly', body: 'Clippings and prunings are mulched back in, bagged for your green bin or taken to a green waste facility – your choice, agreed up front.' },
  { icon: 'droplets', title: 'Care for local waterways', body: 'We keep clippings, leaves and granules out of gutters and stormwater drains, which flow to local creeks, rivers and canals.' },
]

export const enquiryChecklist = [
  'Your suburb and postcode',
  'What you need – mowing, garden care, hedges, pruning, mulching, turf, weed control, green waste or a clean-up',
  'Roughly how big the lawn and garden areas are, or the size of the block',
  "How often you'd like us to come, or whether it's a one-off",
  'Access details: gates, locks, dogs in the yard and where to park',
  'Photos of the yard, especially for clean-ups, pruning, mulching or turf',
]

export const contactFaqs: Faq[] = [
  { q: 'How quickly will you get back to me?', a: `We reply to quote requests and messages ${site.quoteResponse}. Our enquiry hours are ${site.responseHours}.` },
  { q: 'Can I send photos of the yard?', a: site.email ? `Yes. Email them to ${site.email} with your name and suburb, or mention in your quote request that you will send them. Photos help us quote accurately.` : 'Yes. Mention it in your quote request and we will tell you how to send them.' },
  { q: 'Do you need to see the property before quoting?', a: 'Not always. For regular mowing and garden care, a description and a few photos are usually enough. For larger jobs and commercial sites, we may arrange a site visit.' },
  { q: 'Which time zone are bookings in?', a: 'Queensland time for Brisbane, Logan and the Gold Coast. For Tweed Heads we confirm bookings in NSW time, which is an hour ahead of Queensland from October to April.' },
  { q: "What if my suburb isn't listed?", a: 'Get in touch anyway. We work across Brisbane, Logan, the Gold Coast and Tweed Heads, and we will let you know straight away if we can reach you.' },
]

export const generalFaqs: Faq[] = [
  { q: 'What does Grounds by Swept do?', a: 'Lawn mowing and edging, garden maintenance and weeding, hedge and shrub trimming, pruning and small tree work, mulching, turf laying and lawn repair, fertilising and weed control, green waste removal and yard clean-ups – for homes and commercial properties.' },
  { q: 'Which areas do you cover?', a: 'Brisbane, Logan, the Gold Coast and Tweed Heads – 112 suburbs in all. See [areas we service](/residential/areas) or request a quote and we will confirm.' },
  { q: 'How is the price worked out?', a: 'Every yard is different, so every quote is too. It depends on the size of the areas, what is included, how often we visit, access and the amount of green waste. You will get a written quote before anything is booked.' },
  { q: 'Is there a lock-in contract?', a: 'No. Regular visits run visit to visit. You can pause, change the frequency or stop whenever you need to.' },
  { q: 'Do I need to be home?', a: 'No, as long as we can get into the yard. Tell us about gates, locks and dogs, and we will plan around them.' },
  { q: 'What happens if it rains?', a: 'Light rain usually is not a problem, but we will not mow very wet lawns or spray in rain or wind. If the weather stops a visit, we will let you know and reschedule.' },
  { q: 'What happens to the green waste?', a: 'Your choice: mulched back into the lawn, bagged for your green bin or taken away to a green waste facility. Your quote will say which.' },
  { q: 'Do you look after commercial properties?', a: 'Yes. We look after strata and body corporate grounds, commercial and industrial sites, retail centres and car parks, and rental portfolios. See [commercial grounds maintenance](/commercial).' },
  { q: 'Are you insured?', a: 'Yes. Swept holds current public liability insurance.' },
  { q: 'Do you remove large trees?', a: 'No. We prune small trees, palms and large shrubs within safe reach. For large trees, work at height or tree removal, we recommend a qualified arborist.' },
]
