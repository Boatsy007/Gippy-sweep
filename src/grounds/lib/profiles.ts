import { profiles as cleanedProfiles, profilesFor as cleanedProfilesFor, type ProfileKey } from '../../cleaned/lib/localProfiles'
import { housing, type Suburb } from './suburbs'

/*
 * Lawn and garden profiles for suburb pages. The matching rules are shared with
 * Cleaned by Swept (they read each suburb's housing description); the advice is
 * written for yards. Keep it general, practical and limited to services Grounds
 * by Swept offers.
 */

export type { ProfileKey }

type Ctx = { s: string; nsw: boolean }

type Profile = {
  title: string
  icon: string
  body: (c: Ctx) => string
  tellUs: string
  service: string
  faq: (c: Ctx) => { q: string; a: string }
}

export const profiles: Record<ProfileKey, Profile> = {
  apartment: {
    title: 'Townhouse and unit complexes',
    icon: 'city',
    body: ({ s }) => `Many ${s} homes are units and townhouses, where the gardens are common property. Body corporates usually arrange grounds care for the whole complex, while owners and tenants look after private courtyards.`,
    tellUs: 'Whether it is a private courtyard or common property, and how we get access',
    service: 'garden-maintenance',
    faq: ({ s }) => ({ q: `Do you look after townhouse and unit complexes in ${s}?`, a: `Yes. We look after private courtyards for owners and tenants, and common property grounds for body corporates in ${s} – see [strata and body corporate grounds](/commercial/strata-body-corporate).` }),
  },
  character: {
    title: 'Established gardens and older homes',
    icon: 'flower',
    body: ({ s }) => `Older homes in ${s} often come with established gardens, mature shrubs and hedges that have been growing for years. Regular light trimming and weeding keeps them in shape without a big clean-up every season.`,
    tellUs: 'Any plants you particularly want kept, and anything that has outgrown its space',
    service: 'garden-maintenance',
    faq: ({ s }) => ({ q: `Can you look after an established garden in ${s}?`, a: `Yes. We weed, trim and tidy established gardens and leave alone anything you want kept. If you are unsure whether something is a weed, we leave it and ask.` }),
  },
  family: {
    title: 'Family backyards',
    icon: 'home',
    body: ({ s }) => `Family backyards in ${s} get a lot of use from kids, pets and weekend barbecues. Mowing at the right height for the season helps the lawn handle the wear, and regular visits mean the yard is always ready to use.`,
    tellUs: 'Dogs in the yard, gate access and the areas the kids use most',
    service: 'lawn-mowing',
    faq: ({ s }) => ({ q: `How often should a family lawn in ${s} be mowed?`, a: `Through the warm, wet months most ${s} lawns need mowing every week or two; over winter, every three to four weeks is usually enough. A schedule that changes with the seasons suits most families.` }),
  },
  newbuild: {
    title: 'New homes and new lawns',
    icon: 'sprout',
    body: ({ s }) => `Newer homes in ${s} often have young turf on compacted ground and garden beds that are still filling in. New lawns need regular watering and gentle first mows, and new beds benefit from mulch while plants establish.`,
    tellUs: 'When the turf was laid and whether there is a watering system',
    service: 'turf-laying-lawn-repair',
    faq: ({ s }) => ({ q: `Can you look after a new lawn in ${s}?`, a: `Yes. New turf needs gentle first mows once the roots have taken hold. We can also repair bare or worn patches and mulch new garden beds.` }),
  },
  acreage: {
    title: 'Bigger blocks and acreage',
    icon: 'trees',
    body: ({ s }) => `Larger blocks in ${s} mean bigger lawns, longer fence lines and more green waste. Knowing the size of the lawn areas and how to get equipment in helps us quote accurately and plan the visit.`,
    tellUs: 'The approximate size of the lawn areas and how equipment gets in',
    service: 'lawn-mowing',
    faq: ({ s }) => ({ q: `Do you mow larger blocks and acreage in ${s}?`, a: `Yes, within our service area. Tell us the approximate size of the lawn areas and any slopes or gates, so we can bring the right equipment and allow enough time.` }),
  },
  coastal: {
    title: 'Sandy soils and salt air',
    icon: 'wave',
    body: ({ s }) => `Close to the water in ${s}, soils are often sandy and dry out quickly, and salt-laden wind can be hard on some plants. Mulch helps garden beds hold moisture, and a slightly higher cut helps lawns cope with hot, dry spells.`,
    tellUs: 'How close you are to the beach and which areas get the most wind',
    service: 'mulching-garden-beds',
    faq: ({ s }) => ({ q: `How do you look after coastal gardens in ${s}?`, a: `Sandy coastal soil drains fast, so we suggest mulching garden beds to hold moisture and mowing a little higher in hot, dry weather. We can refresh beds and keep lawns and hedges tidy on a regular schedule.` }),
  },
  waterside: {
    title: 'Canal, river and creek frontages',
    icon: 'droplets',
    body: ({ s }) => `Waterside homes in ${s} need extra care to keep clippings, leaves, fertiliser and green waste out of the water and the stormwater drains. We blow clippings back onto the lawn or collect them, never into the waterway.`,
    tellUs: 'Where the water frontage is and how the yard slopes towards it',
    service: 'lawn-mowing',
    faq: ({ s }) => ({ q: `Do you look after waterfront yards in ${s}?`, a: `Yes. We keep clippings, leaves and green waste out of the water and drains, and sweep fertiliser off hard surfaces so it does not wash into the waterway.` }),
  },
  rentals: {
    title: 'Rentals and moving out',
    icon: 'key',
    body: ({ s, nsw }) => `${s} has plenty of rentals. Before you move out, the yard is checked against the ${nsw ? 'condition report' : 'entry condition report'} along with the rest of the property, so a clean-up with fresh edges and weeded beds is worth booking before the final inspection.`,
    tellUs: 'Your vacate date and what the condition report says about the yard',
    service: 'yard-clean-ups',
    faq: ({ s }) => ({ q: `Can you tidy the yard before I move out of a rental in ${s}?`, a: `Yes. Check your tenancy agreement and condition report for what is expected of the yard, then book a yard clean-up before your final inspection.` }),
  },
  prestige: {
    title: 'Formal gardens and hedges',
    icon: 'scissors',
    body: ({ s }) => `Larger homes in ${s} often have formal hedges, feature gardens and manicured lawns, where clean lines matter. Regular light trims and crisp edges keep them sharp between bigger seasonal jobs.`,
    tellUs: 'The hedges, features and finish you want kept',
    service: 'hedge-trimming',
    faq: ({ s }) => ({ q: `Can you maintain formal hedges in ${s}?`, a: `Yes. Regular light trims keep hedges dense and lines crisp. Let us know the shape and height you want, and we will keep to it visit after visit.` }),
  },
  seniors: {
    title: 'A hand with the yard',
    icon: 'heart',
    body: ({ s }) => `For older residents in ${s}, a regular visit takes care of the mowing, edging and weeding that gets harder over time, so the yard stays tidy and safe to walk around.`,
    tellUs: 'The jobs you would like taken off your hands and any routines to work around',
    service: 'lawn-mowing',
    faq: ({ s }) => ({ q: `Can you help older residents in ${s} with the yard?`, a: `Yes. We offer regular mowing, edging and garden care on a fixed schedule, and we are happy to work around routines and preferences.` }),
  },
  hillside: {
    title: 'Slopes and steps',
    icon: 'mountain',
    body: ({ s }) => `Hilly blocks in ${s} often mean sloping lawns, steps and retaining walls. Slopes take more time to mow and edge safely, and some steep areas suit a brushcutter better than a mower.`,
    tellUs: 'Any slopes, steps or retaining walls, and where to park',
    service: 'lawn-mowing',
    faq: ({ s }) => ({ q: `Do you mow sloping yards in ${s}?`, a: `Yes, where it is safe to do so. Slopes and steps add time, so we ask about them when we quote. Very steep areas may be trimmed with a brushcutter instead of a mower.` }),
  },
  leafy: {
    title: 'Leafy streets, more leaves',
    icon: 'leaf',
    body: ({ s }) => `Leafy ${s} streets mean more leaf litter on lawns, paths and garden beds, plus more shade on the lawn. Regular leaf clearing keeps the yard tidy, and shaded lawns usually do better when they are not cut too short.`,
    tellUs: 'Which trees drop the most and how shaded the lawn is',
    service: 'yard-clean-ups',
    faq: ({ s }) => ({ q: `Can you clear leaves regularly in ${s}?`, a: `Yes. Leaf clearing from lawns, paths and garden beds can be part of every visit, or booked as a one-off leaf and yard clean-up.` }),
  },
}

/** Profiles that apply to a suburb (matched on its housing description), most defining first. */
export function profilesFor(sb: Suburb): ProfileKey[] {
  return cleanedProfilesFor({ ...sb, note: housing(sb) }).filter((k) => k in cleanedProfiles)
}

const why: Record<string, (s: string) => string> = {
  'lawn-mowing': (s) => `Regular mowing and edging that keeps your ${s} lawn neat, with the cutting height and frequency set for the season.`,
  'garden-maintenance': (s) => `Weeding, trimming and tidying that keeps ${s} garden beds under control, little and often.`,
  'hedge-trimming': (s) => `Hedges, screens and shrubs around your ${s} home kept to shape, with all the clippings cleaned up.`,
  'turf-laying-lawn-repair': (s) => `New turf or repairs to bare and worn patches, so your ${s} lawn fills in evenly.`,
  'mulching-garden-beds': (s) => `Fresh mulch to hold moisture and keep weeds down in ${s} garden beds.`,
  'yard-clean-ups': (s) => `A one-off visit to bring an overgrown ${s} yard back under control, green waste included.`,
}

/** Up to three services that suit this suburb's yards, most relevant first. */
export function servicesFor(sb: Suburb, keys: ProfileKey[]): { slug: string; why: string }[] {
  const order: string[] = []
  const add = (slug: string) => { if (!order.includes(slug)) order.push(slug) }
  keys.forEach((k) => add(profiles[k].service))
  ;['lawn-mowing', 'garden-maintenance', 'hedge-trimming'].forEach(add)
  return order.slice(0, 3).map((slug) => ({ slug, why: why[slug](sb.name) }))
}
