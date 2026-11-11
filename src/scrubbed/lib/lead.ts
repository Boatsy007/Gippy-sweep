/**
 * Scrubbed by Swept quote requests – shared by the form (browser) and
 * api/scrubbed-quote.ts (server). Same model as the other division leads;
 * Scrubbed is commercial only. `requirements` holds the floor surfaces and
 * `areas` the preferred access times.
 * Keep this file free of browser- and build-only APIs: the server imports it.
 */

export type LeadType = 'residential' | 'commercial'

/** Scrubbed by Swept is commercial only; there are no residential services. */
export const RESIDENTIAL_SERVICES = [] as readonly { value: string; label: string }[]

export const COMMERCIAL_FREQUENCY = [
  { value: 'once', label: 'One-off deep clean' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'unsure', label: 'Not sure yet' },
] as const
export const FREQUENCY_OPTIONS = COMMERCIAL_FREQUENCY

export const FACILITY_OPTIONS = [
  { value: 'warehouse-floor-scrubbing', label: 'Warehouse / distribution centre' },
  { value: 'industrial-floor-scrubbing', label: 'Factory / workshop / industrial' },
  { value: 'shopping-centre-floor-cleaning', label: 'Shopping centre / retail' },
  { value: 'commercial-hard-floor-cleaning', label: 'Showroom / office / other premises' },
  { value: 'car-park-floor-scrubbing', label: 'Car park levels' },
  { value: 'other', label: 'Other' },
] as const

export const REQUIREMENT_OPTIONS = ['Bare or sealed concrete', 'Polished concrete', 'Epoxy / coated', 'Vinyl', 'Tiles', 'Not sure'] as const
export const SIZE_OPTIONS = ['Under 500m²', '500–2,000m²', '2,000–10,000m²', 'Over 10,000m²', 'Not sure'] as const
export const TIME_OPTIONS = ['Business hours', 'Early morning', 'Evening / overnight', 'Weekends'] as const

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
  if (!d.business || d.business.trim().length < 2) e.business = 'Please enter your business or site name.'
  return e
}

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : undefined)
const list = (v: unknown, n = 12) => (Array.isArray(v) ? v.slice(0, n).map((x) => String(x).slice(0, 60)) : [])

/** Coerce untrusted JSON into a Lead (server side). */
export function sanitise(raw: Record<string, unknown>): Lead {
  return {
    type: 'commercial',
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

/** Email subject – starts with the division so leads are easy to sort. */
export function subject(l: Lead): string {
  return `[Scrubbed · Commercial] ${l.business || l.name} – ${label(FACILITY_OPTIONS, l.facility) ?? 'Site'} – ${l.suburb}`
}

/** Label/value rows for the lead email and webhook. */
export function summary(l: Lead): [string, string][] {
  const rows: [string, string | undefined][] = [
    ['Lead type', 'Commercial floor scrubbing'],
    ['Business / site', l.business],
    ['Site type', label(FACILITY_OPTIONS, l.facility)],
    ['Floor surfaces', l.requirements?.length ? l.requirements.join(', ') : undefined],
    ['Approx. floor area', l.size],
    ['Frequency', label(COMMERCIAL_FREQUENCY, l.frequency)],
    ['Preferred times', l.areas?.length ? l.areas.join(', ') : undefined],
    ['Access / site rules', l.access],
    ['Suburb', [l.suburb, l.postcode].filter(Boolean).join(' ')],
    ['Name', l.name],
    ['Phone', l.phone],
    ['Email', l.email],
    ['Notes', l.notes],
    ['Source', l.source],
  ]
  return rows.filter((r): r is [string, string] => Boolean(r[1]))
}
