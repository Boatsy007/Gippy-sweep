/**
 * Washed by Swept – business facts.
 *
 * Every public claim the pressure cleaning site makes about the business lives
 * here so it can be checked in one place. Contact details and hours are the
 * ones Swept uses for Cleaned and Grounds by Swept. Insurance is confirmed for
 * Swept. Nothing here promises a licence, certification, guarantee or result
 * that hasn't been confirmed.
 */

export const site = {
  name: 'Washed by Swept',
  description:
    'Pressure cleaning and soft washing for homes and commercial properties across Brisbane, Logan, the Gold Coast and Tweed Heads: driveways, paths, house exteriors, car parks and more. Free written quote.',

  phone: '0490 216 363' as string | null,
  email: 'hey@swept.com.au' as string | null,

  responseHours: 'Monday to Saturday, 7am–6pm (AEST)',
  openingHours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '18:00' },
  /** Date the site content was last meaningfully updated (sitemap lastmod). */
  contentUpdated: '2026-11-11',
  quoteResponse: 'within one business day',

  /** Confirmed for Swept: public liability insurance in place. */
  insured: true,

  /** Commitments shown on the site. Only promises Swept keeps every time. */
  commitments: [
    { title: 'A written quote before anything is booked', body: "You'll know the price and exactly which surfaces are included before you say yes." },
    { title: 'The right method for each surface', body: 'High pressure where it suits, a low-pressure soft wash where it does not – render, paint and timber are never blasted.' },
    { title: 'Honest about stains', body: "Some old oil, rust and tannin stains won't lift completely. We'll tell you before we start rather than after." },
    { title: 'No lock-in contracts', body: 'One-off cleans or scheduled cleans that run visit to visit. Change or stop whenever you need to.' },
  ],
} as const

export function trustLabel(): string | null {
  return site.insured ? 'Fully insured' : null
}

export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '')
  return `tel:${digits.startsWith('0') ? '+61' + digits.slice(1) : digits}`
}
