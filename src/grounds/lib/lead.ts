/**
 * Grounds by Swept quote requests – shared by the form (browser) and
 * api/grounds-quote.ts (server). Same model as Cleaned by Swept's lead
 * (src/cleaned/lib/lead.ts) with lawn and garden questions.
 * Keep this file free of browser- and build-only APIs: the server imports it.
 */

export type LeadType = 'residential' | 'commercial'

export const RESIDENTIAL_SERVICES = [
  { value: 'lawn-mowing', label: 'Lawn mowing & edging' },
  { value: 'garden-maintenance', label: 'Garden maintenance & weeding' },
  { value: 'hedge-trimming', label: 'Hedge & shrub trimming' },
  { value: 'pruning-tree-work', label: 'Pruning & small tree work' },
  { value: 'mulching-garden-beds', label: 'Mulching & garden beds' },
  { value: 'turf-laying-lawn-repair', label: 'Turf laying & lawn repair' },
  { value: 'fertilising-weed-control', label: 'Fertilising & weed control' },
  { value: 'green-waste-removal', label: 'Green waste removal' },
  { value: 'yard-clean-ups', label: 'Yard & leaf clean-up' },
] as const

export const FREQUENCY_OPTIONS = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'seasonal', label: 'Changes with the season' },
  { value: 'once', label: 'Just once for now' },
] as const

export const COMMERCIAL_FREQUENCY = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'fortnightly', label: 'Fortnightly' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'seasonal', label: 'Seasonal schedule' },
  { value: 'once', label: 'One-off' },
] as const

export const PROPERTY_OPTIONS = ['House', 'Townhouse / villa', 'Acreage'] as const
export const BLOCK_OPTIONS = ['Small (under 400m²)', 'Medium (400–800m²)', 'Large (800m²–2,000m²)', 'Acreage (over 2,000m²)'] as const
export const AREA_OPTIONS = ['Front yard', 'Back yard', 'Nature strip / verge', 'Garden beds', 'Hedges', 'Trees & palms'] as const
export const WASTE_OPTIONS = [
  { value: 'mulch', label: 'Mulch it in' },
  { value: 'bin', label: 'Leave it in my green bin' },
  { value: 'remove', label: 'Take it away' },
] as const

export const FACILITY_OPTIONS = [
  { value: 'strata-body-corporate', label: 'Strata / body corporate' },
  { value: 'commercial-industrial', label: 'Commercial / industrial' },
  { value: 'retail-car-parks', label: 'Retail / car park' },
  { value: 'property-managers-rentals', label: 'Rental / managed property' },
  { value: 'other', label: 'Other property' },
] as const

export const REQUIREMENT_OPTIONS = ['Lawn mowing', 'Gardens & hedges', 'Weed management', 'Litter & leaf clearing', 'Kerbs & car parks', 'Bin areas & grates'] as const
export const SIZE_OPTIONS = ['Small (under 1,000m²)', 'Medium (1,000–5,000m²)', 'Large (over 5,000m²)'] as const

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
    ? `[Grounds · Commercial] ${l.business || l.name} – ${label(FACILITY_OPTIONS, l.facility) ?? 'Property'} – ${l.suburb}`
    : `[Grounds · Residential] ${label(RESIDENTIAL_SERVICES, l.service) ?? 'Grounds care'} – ${l.suburb}`
}

/** Label/value rows for the lead email and webhook. */
export function summary(l: Lead): [string, string][] {
  const rows: [string, string | undefined][] = [
    ['Lead type', l.type === 'commercial' ? 'Commercial grounds' : 'Residential lawn & garden'],
    ['Business / property', l.business],
    ['Service', label(RESIDENTIAL_SERVICES, l.service)],
    ['Property type', l.type === 'commercial' ? label(FACILITY_OPTIONS, l.facility) : l.propertyType],
    ['Requirements', l.requirements?.length ? l.requirements.join(', ') : undefined],
    ['Areas', l.areas?.length ? l.areas.join(', ') : undefined],
    ['Frequency', label(l.type === 'commercial' ? COMMERCIAL_FREQUENCY : FREQUENCY_OPTIONS, l.frequency)],
    ['Block / site size', l.block ?? l.size],
    ['Green waste', label(WASTE_OPTIONS, l.waste)],
    ['Dogs in the yard', l.dogs],
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
