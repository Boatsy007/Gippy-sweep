import type { Faq } from './types'

/*
 * Service areas for Grounds by Swept – the same four regions and 112 suburbs as
 * Cleaned by Swept. Notes are general, checkable facts about lawns and gardens in
 * each region (climate, soils, local rules), not claims about Swept.
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
    metaTitle: 'Lawn Mowing & Gardening Brisbane | Grounds by Swept',
    metaDescription: 'Lawn mowing, garden maintenance, hedge trimming and yard clean-ups across Brisbane’s northside, southside, inner city, east and west. Free written quote.',
    h1: 'Lawn mowing and garden care across Brisbane',
    intro: 'From small inner-city courtyards to big suburban backyards, Grounds by Swept looks after lawns and gardens right across Brisbane. Choose regular mowing and garden care, or a one-off clean-up, hedge trim or mulch refresh.',
    notes: [
      { title: 'A summer growing season', body: 'Brisbane has hot, humid summers with most of its rain between November and March. Lawns and weeds grow fastest then, so mowing usually needs to happen more often in summer than in winter.' },
      { title: 'Older gardens and big trees', body: 'Many established suburbs have mature trees, leafy streets and long-established gardens. That means more leaf litter, more shade on lawns and more pruning. Brisbane City Council protects some trees and vegetation under local law, so check before major tree work.' },
      { title: 'Storm season clean-ups', body: 'Summer storms bring down branches, palm fronds and leaves. A yard clean-up and green waste removal after a storm gets the yard back to normal quickly.' },
    ],
    faqs: [
      { q: 'Do you mow lawns on the northside and southside?', a: 'Yes. We cover Brisbane’s northside, southside, inner city, eastern and western suburbs. If your suburb is not listed, request a quote and we will confirm.' },
      { q: 'How often should a Brisbane lawn be mowed?', a: 'Through the warm, wet months most Brisbane lawns need mowing every one to two weeks. Over the cooler, drier winter, every three to four weeks is usually enough.' },
      { q: 'Can you look after a small courtyard or townhouse garden?', a: 'Yes. Smaller gardens and courtyards are quick to look after and suit a fortnightly or monthly visit.' },
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    state: 'QLD',
    council: 'Logan City Council',
    metaTitle: 'Lawn Mowing & Garden Maintenance Logan | Grounds by Swept',
    metaDescription: 'Lawn mowing, garden maintenance and yard clean-ups across Logan, from Springwood and Shailer Park to Yarrabilba and Jimboomba. Free written quote.',
    h1: 'Lawn mowing and garden care across Logan',
    intro: 'Logan stretches from established suburbs such as Springwood and Daisy Hill to new estates in Yarrabilba and Flagstone and acreage around Jimboomba. Whatever the block, Grounds by Swept offers regular mowing, garden care, hedge trimming and one-off clean-ups.',
    notes: [
      { title: 'New estates, new lawns', body: 'New homes in growing estates often come with freshly laid turf on compacted ground. New lawns need regular watering and gentle first mows while the roots establish.' },
      { title: 'Bigger blocks and acreage', body: 'Larger blocks and acreage in the south and west of Logan mean bigger lawns, longer fence lines and more green waste. Tell us the size of the block when you request a quote.' },
      { title: 'Family backyards', body: 'Plenty of Logan homes have family backyards that see a lot of use from kids and dogs. Regular mowing at the right height helps a lawn cope with the wear.' },
    ],
    faqs: [
      { q: 'Do you service new estates like Yarrabilba and Flagstone?', a: 'Yes. New estates are part of our Logan service area. Request a quote with your suburb and we will confirm.' },
      { q: 'Do you mow acreage properties?', a: 'Yes, within our service area. Tell us the approximate size of the lawn areas so we can plan the right equipment and time.' },
      { q: 'Can you look after a brand-new lawn?', a: 'Yes. New turf needs gentle first mows once the roots have taken hold. Let us know when it was laid.' },
    ],
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    state: 'QLD',
    council: 'City of Gold Coast',
    metaTitle: 'Lawn Mowing & Gardening Gold Coast | Grounds by Swept',
    metaDescription: 'Lawn mowing, garden maintenance, hedge trimming and yard clean-ups across the Gold Coast, from Coomera to Burleigh and Coolangatta. Free written quote.',
    h1: 'Lawn mowing and garden care across the Gold Coast',
    intro: 'From the northern growth corridor around Coomera and Pimpama to the canal suburbs and beachside homes between Surfers Paradise and Coolangatta, Grounds by Swept looks after lawns and gardens right along the Gold Coast.',
    notes: [
      { title: 'Sandy coastal soils', body: 'Close to the beach, soils are often sandy and drain quickly. Lawns and gardens there dry out faster in hot weather, and mulch helps garden beds hold moisture.' },
      { title: 'Canal and waterfront homes', body: 'Many Gold Coast homes back onto canals and waterways. Keeping clippings, fertiliser and leaves out of the water and stormwater drains helps protect them.' },
      { title: 'Fast summer growth', body: 'The Gold Coast’s warm, wet summers mean lawns, hedges and weeds grow quickly. Many households mow more often from spring to autumn and less often in winter.' },
    ],
    faqs: [
      { q: 'Do you look after canal-front gardens?', a: 'Yes. We take care to keep clippings and green waste out of the canal and stormwater drains.' },
      { q: 'Do you service the northern Gold Coast?', a: 'Yes. Coomera, Pimpama, Upper Coomera and the surrounding suburbs are part of our Gold Coast service area.' },
      { q: 'Can you prepare a yard for a holiday rental or sale?', a: 'Yes. A yard clean-up, fresh edges and mulched garden beds make a big difference before guests, photos or an open home.' },
    ],
  },
  {
    slug: 'tweed-heads',
    name: 'Tweed Heads',
    state: 'NSW',
    council: 'Tweed Shire Council',
    metaTitle: 'Lawn Mowing & Gardening Tweed Heads | Grounds by Swept',
    metaDescription: 'Lawn mowing, garden maintenance, hedge trimming and yard clean-ups in Tweed Heads, Banora Point, Terranora and nearby. Free written quote.',
    h1: 'Lawn mowing and garden care in Tweed Heads and surrounds',
    intro: 'Just over the border from Coolangatta, Tweed Heads and its neighbouring suburbs are part of Grounds by Swept’s regular service area. We offer regular mowing and garden care, hedge trimming, mulching and one-off yard clean-ups.',
    notes: [
      { title: 'Two states, two time zones', body: 'From October to April, NSW runs on daylight saving time and Queensland does not, so Tweed Heads is an hour ahead of Coolangatta. We confirm every Tweed booking in local NSW time.' },
      { title: 'River and waterfront gardens', body: 'Homes along the Tweed River, Terranora Broadwater and canals see a lot of humidity and outdoor living. Keeping clippings and garden waste out of the water helps protect the waterways.' },
      { title: 'Hillside blocks', body: 'Some homes in Terranora, Bilambil Heights and Banora Point sit on sloping blocks. Slopes and steps take more time to mow and edge safely, so let us know about them when you request a quote.' },
    ],
    faqs: [
      { q: 'Do you cross the border into NSW?', a: 'Yes. Tweed Heads and the surrounding suburbs are part of our regular service area.' },
      { q: 'Which time zone are bookings in?', a: 'We confirm Tweed bookings in NSW time. During daylight saving (October to April), that is an hour ahead of Queensland.' },
      { q: 'Can you mow sloping blocks?', a: 'Yes, where it is safe to do so. Tell us about slopes and steps when you request a quote so we can plan the right equipment.' },
    ],
  },
]

export const areaPath = (slug: string) => `/residential/areas/${slug}`
