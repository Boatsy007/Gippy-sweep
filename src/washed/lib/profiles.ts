import { profiles as cleanedProfiles, profilesFor as cleanedProfilesFor, type ProfileKey } from '../../cleaned/lib/localProfiles'
import { housing, type Suburb } from './suburbs'

/*
 * Pressure cleaning profiles for suburb pages. The matching rules are shared with
 * Cleaned by Swept (they read each suburb's housing description); the advice is
 * written for outdoor surfaces. Keep it general, practical and limited to
 * services Washed by Swept offers.
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
    title: 'Units and townhouse complexes',
    icon: 'city',
    body: ({ s }) => `Many ${s} homes are units and townhouses. Driveways, paths and pool areas are usually common property cleaned by the body corporate, while owners look after private courtyards. Many buildings have by-laws about washing balconies, because water runs onto the ones below.`,
    tellUs: 'Whether it is a private courtyard or common property, and your building’s rules',
    service: 'patio-paver-pool-cleaning',
    faq: ({ s }) => ({ q: `Do you clean townhouse and unit complexes in ${s}?`, a: `Yes. We clean private courtyards for owners, and driveways, paths and pool surrounds for body corporates in ${s} – see [strata and body corporate cleaning](/commercial/strata-resort-cleaning).` }),
  },
  character: {
    title: 'Older homes and painted timber',
    icon: 'home',
    body: ({ s }) => `Older homes in ${s} often have painted timber, weatherboards and older paint finishes that high pressure can damage. A low-pressure soft wash cleans walls and eaves without stripping paint or forcing water into the timber.`,
    tellUs: 'The wall materials and the age and condition of the paint',
    service: 'house-washing',
    faq: ({ s }) => ({ q: `Can you wash an older timber home in ${s}?`, a: `Yes, with a low-pressure soft wash that suits painted timber and weatherboards. If paint is already flaking, we will point it out before we start.` }),
  },
  family: {
    title: 'Family driveways and outdoor areas',
    icon: 'heart',
    body: ({ s }) => `Family homes in ${s} work their driveways, paths and alfresco areas hard. Dirt, tyre marks and algae build up over time, and mould makes paths slippery when wet – a wash-down once or twice a year keeps them safe and tidy.`,
    tellUs: 'The areas you use most and any oil or tyre marks',
    service: 'driveway-concrete-cleaning',
    faq: ({ s }) => ({ q: `How often should a family driveway in ${s} be cleaned?`, a: `Many ${s} homes clean driveways and paths once or twice a year. Shaded areas that stay damp may need it more often, as mould and algae grow back.` }),
  },
  newbuild: {
    title: 'New homes and new concrete',
    icon: 'sparkle',
    body: ({ s }) => `Newer homes in ${s} often have coloured or exposed aggregate driveways and rendered walls. New concrete should be left to cure before high-pressure cleaning, and decorative finishes need the pressure set to suit.`,
    tellUs: 'When the concrete was poured and the type of finish',
    service: 'driveway-concrete-cleaning',
    faq: ({ s }) => ({ q: `When can I pressure clean a new driveway in ${s}?`, a: `Once the concrete has cured – usually at least a month after it was poured. Check with your builder or concreter if you are unsure, and tell us the type of finish when you request a quote.` }),
  },
  acreage: {
    title: 'Long driveways and bigger slabs',
    icon: 'trees',
    body: ({ s }) => `Larger ${s} blocks mean longer driveways, sheds, carports and big outdoor slabs. Knowing roughly how big each area is, and where the nearest tap is, helps us quote accurately.`,
    tellUs: 'The approximate size of each area and where the outdoor taps are',
    service: 'driveway-concrete-cleaning',
    faq: ({ s }) => ({ q: `Do you clean long driveways and sheds in ${s}?`, a: `Yes. Tell us roughly how long the driveway is and the size of any slabs or shed floors, so we can allow enough time.` }),
  },
  coastal: {
    title: 'Salt air and sand',
    icon: 'wave',
    body: ({ s }) => `Close to the water in ${s}, salt spray leaves a film on walls, glass and outdoor surfaces, and sand works its way into pavers and corners. A regular wash keeps coastal homes looking fresh.`,
    tellUs: 'How close you are to the beach and which areas get the most salt',
    service: 'house-washing',
    faq: ({ s }) => ({ q: `Does salt air affect homes in ${s}?`, a: `Yes. Salt spray leaves a film on walls, glass and outdoor surfaces. A soft wash of the exterior and a clean of paths and pavers removes the build-up.` }),
  },
  waterside: {
    title: 'Canal, river and creek frontages',
    icon: 'droplets',
    body: ({ s }) => `Waterside homes in ${s} need extra care with run-off. Wash water carrying dirt and detergent should not go into the canal, river or stormwater drains, so we plan where it goes before we start.`,
    tellUs: 'Where the water frontage is and how the property drains',
    service: 'patio-paver-pool-cleaning',
    faq: ({ s }) => ({ q: `Can you pressure clean a waterfront home in ${s}?`, a: `Yes. We plan run-off before we start and direct wash water away from the water and stormwater drains.` }),
  },
  rentals: {
    title: 'Rentals and moving out',
    icon: 'key',
    body: ({ s, nsw }) => `${s} has plenty of rentals. At the end of a lease the outside of the property is compared with the ${nsw ? 'condition report' : 'entry condition report'} too, so oil stains on the driveway or a mouldy patio are worth dealing with before the final inspection.`,
    tellUs: 'Your vacate date and what the condition report says about outdoor areas',
    service: 'exterior-clean-sale-lease',
    faq: ({ s }) => ({ q: `Can you pressure clean before I move out of a rental in ${s}?`, a: `Yes. Check your tenancy agreement and condition report for what is expected outside, then book an exterior clean before your final inspection.` }),
  },
  prestige: {
    title: 'Natural stone and premium finishes',
    icon: 'sparkle',
    body: ({ s }) => `Larger homes in ${s} often have natural stone, large pool surrounds and premium finishes. Stones such as sandstone and travertine need lower pressure and suitable products, so tell us what your surfaces are.`,
    tellUs: 'Your paving, stone and wall materials',
    service: 'patio-paver-pool-cleaning',
    faq: ({ s }) => ({ q: `Can you clean natural stone in ${s}?`, a: `Yes, with lower pressure and products suited to the stone. Tell us the stone type if you know it.` }),
  },
  seniors: {
    title: 'Safer paths underfoot',
    icon: 'heart',
    body: ({ s }) => `Mould and algae make paths, ramps and steps slippery when wet. For older residents in ${s}, a regular clean of the paths they use every day makes getting around safer.`,
    tellUs: 'The paths, steps and ramps used most',
    service: 'driveway-concrete-cleaning',
    faq: ({ s }) => ({ q: `Can you clean slippery paths in ${s}?`, a: `Yes. Removing mould and algae from paths, steps and ramps makes them less slippery. Shaded paths may need cleaning more often.` }),
  },
  hillside: {
    title: 'Sloping driveways and steps',
    icon: 'mountain',
    body: ({ s }) => `Hilly blocks in ${s} mean sloping driveways, steps and retaining walls. Algae on a steep driveway is a real slip hazard, and run-off heads downhill fast, so we plan where it will go.`,
    tellUs: 'How steep the driveway is and where water drains',
    service: 'driveway-concrete-cleaning',
    faq: ({ s }) => ({ q: `Do you clean steep driveways in ${s}?`, a: `Yes. Tell us about slopes, steps and retaining walls when you request a quote so we can plan the job safely.` }),
  },
  leafy: {
    title: 'Leafy streets and tannin stains',
    icon: 'leaf',
    body: ({ s }) => `Leafy ${s} streets mean leaves sitting on concrete and pavers, which can leave brown tannin stains, plus more shade for mould and algae to grow. Regular cleaning keeps both in check.`,
    tellUs: 'Which areas sit under trees and any stains you have noticed',
    service: 'oil-stain-removal',
    faq: ({ s }) => ({ q: `Can you remove leaf stains in ${s}?`, a: `Often, yes. Leaf and tannin stains usually lift with treatment and cleaning, though old stains can take more than one go.` }),
  },
}

/** Profiles that apply to a suburb (matched on its housing description), most defining first. */
export function profilesFor(sb: Suburb): ProfileKey[] {
  return cleanedProfilesFor({ ...sb, note: housing(sb) }).filter((k) => k in cleanedProfiles)
}

const why: Record<string, (s: string) => string> = {
  'driveway-concrete-cleaning': (s) => `Driveways, paths and slabs cleaned of dirt, mould and tyre marks, for a safer, brighter ${s} home.`,
  'house-washing': (s) => `A low-pressure soft wash for walls and eaves that is safe for paint and render on ${s} homes.`,
  'patio-paver-pool-cleaning': (s) => `Patios, pavers and pool surrounds cleaned of algae and grime, ready for ${s} summers outdoors.`,
  'oil-stain-removal': (s) => `Targeted treatment for oil, rust and leaf stains on ${s} driveways and paths, with honest advice on what will lift.`,
  'exterior-clean-sale-lease': (s) => `The outside of your ${s} property cleaned in one visit before a sale or final inspection.`,
}

/** Up to three services that suit this suburb's homes, most relevant first. */
export function servicesFor(sb: Suburb, keys: ProfileKey[]): { slug: string; why: string }[] {
  const order: string[] = []
  const add = (slug: string) => { if (!order.includes(slug)) order.push(slug) }
  keys.forEach((k) => add(profiles[k].service))
  ;['driveway-concrete-cleaning', 'house-washing', 'patio-paver-pool-cleaning'].forEach(add)
  return order.slice(0, 3).map((slug) => ({ slug, why: why[slug](sb.name) }))
}
