import { areas, type Area } from './areas'
import { nearby as cleanedNearby, stateName, suburbs as all, type Suburb } from '../../cleaned/lib/suburbs'

/*
 * The same 112 suburbs Cleaned by Swept serves (src/cleaned/lib/suburbs.ts), with
 * paths on the washed site. Each suburb's note was written for cleaning, so the
 * washed pages only use its first sentence, which describes the housing.
 */

export type { Suburb }
export { stateName }

export const suburbs: Suburb[] = all
export const suburbsIn = (area: string) => suburbs.filter((s) => s.area === area)
export const areaFor = (s: Suburb): Area => areas.find((a) => a.slug === s.area)!
export const nearby = (s: Suburb, n = 8) => cleanedNearby(s, n)
export const suburbPath = (s: Suburb) => `/residential/areas/${s.area}/${s.slug}`

/** The housing description from the suburb's note (its first sentence). */
export const housing = (s: Suburb) => s.note.split(/(?<=[.!?])\s/)[0]
