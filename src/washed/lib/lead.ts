/**
 * Washed by Swept quote requests – shared by the form (browser) and
 * api/washed-quote.ts (server). Same model as the Cleaned and Grounds leads,
 * with pressure cleaning questions. `areas` holds the surfaces, `block` the
 * approximate area and `waste` whether there is an outdoor tap.
 * Keep this file free of browser- and build-only APIs: the server imports it.
 */

export type LeadType = 'residential' | 'commercial'

export const RESIDENTIAL_SERVICES = [
  { value: 'driveway-concrete-cleaning', label: 'Driveway & concrete cleaning' },
  { value: 'house-washing', label: 'House washing (soft wash)' },
  { value: 'patio-paver-pool-cleaning', label: 'Patio, pavers & pool surround' },
  { value: 'deck-timber-cleaning', label: 'Deck & timber cleaning' },
  { value: 'fence-wall-cleaning', label: 'Fences & walls' },
  { value: 'oil-stain-removal', label: 'Oil, rust & stain treatment' },
  { value: 'exterior-clean-sale-lease', label: 'Sale or end-of-lease exterior clean' },
] as const

export const FREQUENCY_OPTIONS = [
  { value: 'once', label: 'Just once for now' },
  { value: 'six-monthly', label: 'Every 6 months' },
  { value: 'yearly', label: 'Every year' },
] as const

export const COMMERCIAL_FREQUENCY = [
  { value: 'once', label: 'One-off' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'six-monthly', label: 'Every 6 months' },
  { value: 'yearly', label: 'Yearly' },
] as const

export const PROPERTY_OPTIONS = ['Single-storey house', 'Two-storey house', 'Townhouse / unit', 'Acreage'] as const
export const BLOCK_OPTIONS = ['Small (under 50m²)', 'Medium (50–150m²)', 'Large (150–300m²)', 'Very large (over 300m²)'] as const
export const AREA_OPTIONS = ['Driveway', 'Paths', 'Patio / alfresco', 'Pool surround', 'House walls & eaves', 'Deck', 'Fences & walls'] as const
export const WASTE_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unsure', label: 'Not sure' },
] as const

export const FACILITY_OPTIONS = [
  { value: 'car-park-cleaning', label: 'Car park' },
  { value: 'building-exterior-cleaning', label: 'Building exterior / graffiti' },
  { value: 'strata-resort-cleaning', label: 'Strata / resort' },
  { value: 'retail-footpath-cleaning', label: 'Retail / footpaths' },
  { value: 'loading-dock-bin-bay-cleaning', label: 'Loading dock / bin bay / warehouse' },
  { value: 'other', label: 'Other property' },
] as const

export const REQUIREMENT_OPTIONS = ['Car park wash-down', 'Footpaths & entries', 'Building exterior', 'Graffiti removal', 'Loading docks', 'Bin bays', 'Oil & stain treatment', 'Pool surrounds'] as const
export const SIZE_OPTIONS = ['Small (under 500m²)', 'Medium (500–2,000m²)', 'Large (over 2,000m²)'] as const

export type Lead = {
  type: LeadType
  name: string
  phone: string
  email: string
  suburb: string
  postcode?: string
  notes?: string
  consent: boolean
  source?: string
  // residential
  service?: string
  propertyType?: string
  block?: string
  areas?: string[]
  frequency?: string
  waste?: string
  dogs?: string
  access?: string
  // commercial
  business?: string
  facility?: string
  requirements?: string[]
  size?: string
}

export type Errors = Partial<Record<keyof Lead, string>>

const AU_PHONE = /^(\+?61|0)[2-478](\s?\d){8}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const normalisePhone = (v: string) => v.replace(/[\s()-]/g, '')

export function validate(d: Partial<Lead>): Errors {
  const e: Errors = {}
  if (!d.name || d.name.trim().length < 2) e.name = 'Please tell us your name.'
  if (!d.phone || !AU_PHONE.test(normalisePhone(d.phone))) e.phone = 'Please enter an Australian phone number, e.g. 0412 345 678.'
  if (!d.email || !EMAIL.test(d.email.trim())) e.email = 'Please enter a valid email so we can send your written quote.'
  if (!d.suburb || d.suburb.trim().length < 2) e.suburb = 'Please enter your suburb.'
  if (d.postcode && !/^\d{4}$/.test(d.postcode)) e.postcode = 'Postcodes have four digits.'
  if (!d.consent) e.consent = 'Please confirm we can contact you about this request.'
  if (d.type === 'residential' && !RESIDENTIAL_SERVICES.some((o) => o.value === d.service)) e.service = 'Please choose the service you need.'
  if (d.type === 'commercial' && (!d.business || d.business.trim().length < 2)) e.business = 'Please enter your business or property name.'
  return e
}

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined)
const list = (v: unknown, n = 12) => (Array.isArray(v) ? v.slice(0, n).map((x) => String(x).slice(0, 60)) : [])

/** Coerce untrusted JSON into a Lead (server side). */
export function sanitise(raw: Record<string, unknown>): Lead {
  return {
    type: raw.type === 'commercial' ? 'commercial' : 'residential',
    name: str(raw.name, 100) ?? '',
    phone: str(raw.phone, 20) ?? '',
    email: str(raw.email, 200) ?? '',
    suburb: str(raw.suburb, 80) ?? '',
    postcode: str(raw.postcode, 4),
    notes: str(raw.notes, 2000),
    consent: raw.consent === true,
    source: str(raw.source, 200),
    service: str(raw.service, 40),
    propertyType: str(raw.propertyType, 40),
    block: str(raw.block, 40),
    areas: list(raw.areas),
    frequency: str(raw.frequency, 20),
    waste: str(raw.waste, 20),
    dogs: str(raw.dogs, 10),
    access: str(raw.access, 300),
    business: str(raw.business, 120),
    facility: str(raw.facility, 40),
    requirements: list(raw.requirements),
    size: str(raw.size, 40),
  }
}

const label = (opts: readonly { value: string; label: string }[], v?: string) => opts.find((o) => o.value === v)?.label ?? v

/** Email subject – starts with the division and lead type so leads are easy to sort. */
export function subject(l: Lead): string {
  return l.type === 'commercial'
    ? `[Washed · Commercial] ${l.business || l.name} – ${label(FACILITY_OPTIONS, l.facility) ?? 'Property'} – ${l.suburb}`
    : `[Washed · Residential] ${label(RESIDENTIAL_SERVICES, l.service) ?? 'Pressure cleaning'} – ${l.suburb}`
}

/** Label/value rows for the lead email and webhook. */
export function summary(l: Lead): [string, string][] {
  const rows: [string, string | undefined][] = [
    ['Lead type', l.type === 'commercial' ? 'Commercial pressure cleaning' : 'Residential pressure cleaning'],
    ['Business / property', l.business],
    ['Service', label(RESIDENTIAL_SERVICES, l.service)],
    ['Property type', l.type === 'commercial' ? label(FACILITY_OPTIONS, l.facility) : l.propertyType],
    ['Requirements', l.requirements?.length ? l.requirements.join(', ') : undefined],
    ['Surfaces', l.areas?.length ? l.areas.join(', ') : undefined],
    ['Frequency', label(l.type === 'commercial' ? COMMERCIAL_FREQUENCY : FREQUENCY_OPTIONS, l.frequency)],
    ['Approx. area', l.block ?? l.size],
    ['Outdoor tap', label(WASTE_OPTIONS, l.waste)],
    ['Pets', l.dogs],
    ['Access', l.access],
    ['Suburb', [l.suburb, l.postcode].filter(Boolean).join(' ')],
    ['Name', l.name],
    ['Phone', l.phone],
    ['Email', l.email],
    ['Notes', l.notes],
    ['Source', l.source],
  ]
  return rows.filter((r): r is [string, string] => Boolean(r[1]))
}
