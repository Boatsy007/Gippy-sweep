import type { Faq } from './services'
import { site } from './site'

/*
 * Page copy carried over from sweepclean's page files (why-swept, swept-promise,
 * contact, home), word for word except the brand name. Keep it in step with
 * src/cleaned/lib/site.ts – that file holds the business facts.
 */

/** sweepclean app/why-swept/page.tsx */
export const approach = [
  { icon: 'doc', title: 'A written plan for your home', body: "Your quote spells out what we'll clean, how long we expect to take and the price. That plan becomes the checklist for every visit." },
  { icon: 'heart', title: 'Easy, friendly communication', body: 'Enquire online in a couple of minutes, then hear back from a real person. Changes, skips and questions are a quick message away.' },
  { icon: 'calendar', title: 'Scheduling built around you', body: 'Weekly, fortnightly or monthly on a day that suits – and the freedom to pause or change when life does.' },
  { icon: 'sparkle', title: 'Attention to the details', body: 'Skirting boards, shower screens, tapware, fans and vents – the things that make a home feel properly clean, not just tidied.' },
]

export const aboutIntro =
  "Swept is a new residential cleaning service for homes across Brisbane, Logan, the Gold Coast and Tweed Heads. We're building our reputation one home at a time – so rather than big claims, here's exactly how we work and what you can hold us to."

export const trustCopy = [
  "We know the hardest part of hiring a cleaner isn't the price – it's trust. So we keep things simple: you'll know who's coming, when they're arriving, what they'll do and what it costs, before the first visit.",
  "If something isn't right after a clean, tell us. We'd rather hear about it and fix it than have you quietly unhappy.",
]

/** sweepclean app/swept-promise/page.tsx */
export const promiseCovered = [
  'Every task on the checklist agreed for your clean',
  'Regular, detailed, NDIS, bond, Airbnb and carpet cleans',
  'Commercial and office cleans',
  'First-time and one-off cleans, not just regular bookings',
]

export const promiseGoodToKnow = [
  "It covers what's on your agreed checklist. Anything extra is quoted separately.",
  "Marks, stains or wear that can't be removed by cleaning aren't covered – we'll tell you honestly if something won't come up.",
  'Let us know before the area is used or disturbed again, so we can see what needs attention.',
  "We'll arrange the return visit at a time that suits you and gives us access to the area.",
]

export const promiseFaqs: Faq[] = [
  { q: 'How long do I have to let you know?', a: 'Until the end of the next business day after your clean. Business days are Monday to Friday, excluding public holidays – so for a clean on a Friday or Saturday, you have until the end of the following Monday.' },
  { q: 'Is there a charge for the return visit?', a: 'No. If an agreed task was missed or not done properly, we come back and put that area right at no extra charge.' },
  { q: 'Does The Swept Promise apply to commercial cleaning?', a: 'Yes. It applies to residential and commercial cleans alike, based on the checklist agreed for your home or workplace.' },
  { q: 'Does it cover bond cleaning?', a: 'Yes, for the tasks on your agreed bond clean checklist – let us know by the end of the next business day after the clean. If your property manager later raises a cleaning issue with something we cleaned, tell us and we’ll work with you to fix it.' },
  { q: "What isn't covered?", a: "Tasks that weren't part of the agreed checklist, marks or damage that cleaning can't remove, and areas that have been used or disturbed since the clean. If you're not sure, ask us – we'd rather check than leave you unhappy." },
  { q: 'What happens if the issue still isn’t resolved?', a: 'A member of our management team personally reviews your concern and works through it with you.' },
  { q: 'Does The Swept Promise affect my consumer rights?', a: `No. ${site.promise.acl} Under the Australian Consumer Law, services come with automatic consumer guarantees, including that they're provided with due care and skill.` },
]

/** sweepclean app/contact/page.tsx */
export const enquiryChecklist = [
  'Your suburb and postcode',
  'The type of clean – regular, detailed, bond, NDIS, Airbnb, carpet or commercial',
  'Bedrooms, bathrooms and living areas (or the size of your premises)',
  "How often you'd like us to come, and your preferred day",
  'Pets, access details (key, lockbox or building access) and anything we should focus on',
  'For a bond clean: your vacate date and a copy of your entry condition report',
]

export const contactFaqs: Faq[] = [
  { q: 'How quickly will you get back to me?', a: `We reply to quote requests and messages ${site.quoteResponse}. Our enquiry hours are ${site.responseHours}.` },
  {
    q: 'Can I send photos or my condition report?',
    a: site.email
      ? `Yes. Email them to ${site.email} with your name and suburb, or mention in your quote request that you'll send them. Photos help us give a more accurate price.`
      : "Yes. Mention it in your quote request and we'll tell you how to send them. Photos help us give a more accurate price.",
  },
  { q: 'Do you have a shopfront I can visit?', a: "No – we're a mobile cleaning service and our team comes to you. The quickest way to reach us is by phone, email or the online quote form." },
  { q: 'Which time zone are bookings in?', a: 'Queensland time for Brisbane, Logan and the Gold Coast. For Tweed Heads we confirm bookings in NSW time, which is an hour ahead of Queensland from October to April.' },
  { q: "What if my suburb isn't listed?", a: "Get in touch anyway. We clean across Brisbane, Logan, the Gold Coast and Tweed Heads, and we'll let you know straight away if we can reach you." },
]

/** sweepclean app/page.tsx */
export const schedules = [
  { value: 'weekly', label: 'Weekly', body: 'For busy households, young kids and pets – the house never gets a chance to slip.' },
  { value: 'fortnightly', label: 'Fortnightly', body: 'A popular balance for couples and families who keep on top of the day-to-day.' },
  { value: 'monthly', label: 'Monthly', body: 'A regular top-to-bottom reset for tidy homes that want a hand with the big jobs.' },
]

export const howItWorks = [
  { title: 'Tell us about your home', body: 'A two-minute online form: rooms, frequency, suburb and what matters most.' },
  { title: 'Receive a tailored quote', body: `A clear written price and checklist, ${site.quoteResponse}.` },
  { title: 'Enjoy your clean home', body: 'We arrive on your chosen day and work through your checklist, visit after visit.' },
]

export const regions = [
  { to: '/residential/areas/brisbane#northside', label: 'Brisbane Northside', icon: 'city' },
  { to: '/residential/areas/brisbane#southside', label: 'Brisbane Southside', icon: 'home' },
  { to: '/residential/areas/brisbane#inner-city', label: 'Inner City', icon: 'city' },
  { to: '/residential/areas/logan', label: 'Logan', icon: 'home' },
  { to: '/residential/areas/gold-coast', label: 'Gold Coast', icon: 'palm' },
  { to: '/residential/areas/tweed-heads', label: 'Tweed Heads', icon: 'wave' },
]
