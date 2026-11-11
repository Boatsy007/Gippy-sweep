/**
 * Grounds by Swept – business facts.
 *
 * Every public claim the grounds site makes about the business lives here so it
 * can be checked in one place. Contact details and hours are the ones Swept uses
 * for Cleaned by Swept. Insurance is confirmed for Swept. Nothing here promises a
 * licence, certification, guarantee or result that hasn't been confirmed.
 */

export const site = {
  name: 'Grounds by Swept',
  description:
    'Lawn mowing, garden maintenance, hedge trimming and grounds care for homes and commercial properties across Brisbane, Logan, the Gold Coast and Tweed Heads. Free written quote.',

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
    { title: 'A written quote before anything is booked', body: "You'll know the price, what's included and how often we'll visit before you say yes." },
    { title: 'No lock-in contracts', body: 'Regular visits run visit to visit. Pause, change frequency or stop whenever you need to.' },
    { title: 'An agreed scope, every visit', body: 'We agree exactly what is included – lawns, edges, garden beds, hedges, green waste – and work to that list each time.' },
    { title: 'Tell us what matters most', body: 'Note your priorities once – the front yard before an inspection, the hedge by the driveway – and we keep them on your file.' },
  ],
} as const

export function trustLabel(): string | null {
  return site.insured ? 'Fully insured' : null
}

export function telHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '')
  return `tel:${digits.startsWith('0') ? '+61' + digits.slice(1) : digits}`
}
