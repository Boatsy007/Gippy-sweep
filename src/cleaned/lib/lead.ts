/**
 * Cleaned by Swept quote requests – shared by the forms (browser) and
 * api/cleaned-quote.ts (server). Field options, validation and sanitising follow
 * sweepclean's src/lib/quote.ts; commercial requests add business details.
 * Keep this file free of browser- and build-only APIs: the server imports it.
 */

export type LeadType = 'residential' | 'commercial'

export const RESIDENTIAL_SERVICES = [
  { value: 'regular-house-cleaning', label: 'Regular home cleaning' },
  { value: 'deep-cleaning', label: 'Detailed / one-off clean' },
  { value: 'bond-cleaning', label: 'Bond / end-of-lease clean' },
  { value: 'ndis-cleaning', label: 'NDIS & home care cleaning' },
  { value: 'airbnb-cleaning', label: 'Airbnb & holiday rental' },
  { value: 'carpet-cleaning', label: 'Carpet steam cleaning' },
] as const

export const FREQUENCY_OPTIONS = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'once', label: 'Just once for now' },
] as const

export const COMMERCIAL_FREQUENCY = [
  { value: 'several-weekly', label: 'Several times a week' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'once', label: 'One-off clean' },
] as const

export const PROPERTY_OPTIONS = ['House', 'Townhouse', 'Apartment / unit'] as const
export const BEDROOM_OPTIONS = ['1', '2', '3', '4', '5', '6+'] as const
export const BATHROOM_OPTIONS = ['1', '2', '3', '4+'] as const
export const EXTRA_OPTIONS = ['Dishes', 'Laundry', 'Bed making', 'Oven & stove', 'Kitchen cabinets', 'Cleaning appliances', 'Blinds', 'Fans & vents', 'Windows & tracks'] as const

export const FACILITY_OPTIONS = [
  { value: 'office-cleaning', label: 'Office' },
  { value: 'warehouse-industrial-cleaning', label: 'Warehouse / industrial' },
  { value: 'retail-showroom-cleaning', label: 'Retail / showroom' },
  { value: 'strata-common-area-cleaning', label: 'Strata / common areas' },
  { value: 'bathroom-amenities-cleaning', label: 'Amenities only' },
  { value: 'other', label: 'Other premises' },
] as const

export const REQUIREMENT_OPTIONS = ['Work areas & desks', 'Kitchen & breakroom', 'Bathrooms & amenities', 'Floors', 'Common areas', 'Glass & entries'] as const
export const SIZE_OPTIONS = ['Small (under 150m²)', 'Medium (150–400m²)', 'Large (400m²+)'] as const

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
  bedrooms?: string
  bathrooms?: string
  frequency?: string
  extras?: string[]
  pets?: string
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
  if (d.type === 'residential' && !RESIDENTIAL_SERVICES.some((o) => o.value === d.service)) e.service = 'Please choose the type of clean.'
  if (d.type === 'commercial' && (!d.business || d.business.trim().length < 2)) e.business = 'Please enter your business name.'
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
    bedrooms: str(raw.bedrooms, 4),
    bathrooms: str(raw.bathrooms, 4),
    frequency: str(raw.frequency, 20),
    extras: list(raw.extras),
    pets: str(raw.pets, 10),
    access: str(raw.access, 300),
    business: str(raw.business, 120),
    facility: str(raw.facility, 40),
    requirements: list(raw.requirements),
    size: str(raw.size, 40),
  }
}

const label = (opts: readonly { value: string; label: string }[], v?: string) => opts.find((o) => o.value === v)?.label ?? v

/** Email subject – starts with the lead type so residential and commercial leads are easy to tell apart. */
export function subject(l: Lead): string {
  return l.type === 'commercial'
    ? `[Cleaned · Commercial] ${l.business || l.name} – ${label(FACILITY_OPTIONS, l.facility) ?? 'Premises'} – ${l.suburb}`
    : `[Cleaned · Residential] ${label(RESIDENTIAL_SERVICES, l.service) ?? 'Clean'} – ${l.suburb}`
}

/** Label/value rows for the lead email and webhook. */
export function summary(l: Lead): [string, string][] {
  const rows: [string, string | undefined][] = [
    ['Lead type', l.type === 'commercial' ? 'Commercial cleaning' : 'Residential cleaning'],
    ['Business', l.business],
    ['Type of clean', label(RESIDENTIAL_SERVICES, l.service)],
    ['Facility', label(FACILITY_OPTIONS, l.facility)],
    ['Cleaning requirements', l.requirements?.length ? l.requirements.join(', ') : undefined],
    ['Frequency', label(l.type === 'commercial' ? COMMERCIAL_FREQUENCY : FREQUENCY_OPTIONS, l.frequency)],
    ['Property', l.propertyType],
    ['Bedrooms / bathrooms', l.bedrooms || l.bathrooms ? `${l.bedrooms ?? '?'} bed / ${l.bathrooms ?? '?'} bath` : undefined],
    ['Approx. size', l.size],
    ['Pets', l.pets],
    ['Add-ons', l.extras?.length ? l.extras.join(', ') : undefined],
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
