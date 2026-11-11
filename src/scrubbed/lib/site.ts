/**
 * Scrubbed by Swept – business facts.
 *
 * Every public claim the floor scrubbing site makes about the business lives here
 * so it can be checked in one place. Contact details and hours are the ones Swept
 * uses for its other divisions. Insurance is confirmed for Swept. Nothing here
 * promises a licence, certification, guarantee or result that hasn't been
 * confirmed. Scrubbed by Swept is commercial only.
 */

export const site = {
  name: 'Scrubbed by Swept',
  description:
    'Commercial machine floor scrubbing for warehouses, factories, shopping centres, car parks and commercial hard floors across Brisbane, Logan, the Gold Coast and Tweed Heads. One-off deep cleans or scheduled maintenance. Free written quote.',

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
    { title: 'A written scope and quote', body: 'Each area, the method, how often it is scrubbed and when – agreed in writing before work starts.' },
    { title: 'Scheduled around your operation', body: 'Before opening, after close, between shifts or on weekends, planned around deliveries and foot traffic.' },
    { title: 'The right pad and solution for the floor', body: 'Polished concrete, sealed and coated floors, vinyl and tiles each get pads, brushes and cleaning solutions that suit them.' },
    { title: 'No lock-in contracts', body: 'One-off deep cleans or scheduled programs that run visit to visit. Change or stop whenever you need to.' },
  ],
} as const

export function trustLabel(): string | null {
  return site.insured ? 'Fully insured' : null
}

export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '')
  return `tel:${digits.startsWith('0') ? '+61' + digits.slice(1) : digits}`
}
