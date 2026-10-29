/**
 * Business details used across the site.
 * Leave a value empty ('') to hide everything that depends on it —
 * e.g. no phone number means no "Call" buttons are rendered.
 */
export const site = {
  name: 'SWEPT',
  email: 'info@swept.au',

  /** Display format, e.g. '0412 345 678'. Empty hides all phone links. */
  phone: '',

  /** Owner name shown under the founder quote. Empty shows title only. */
  ownerName: '',

  /** e.g. '12 345 678 901'. Empty hides the ABN in the footer. */
  abn: '',

  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
  },

  /**
   * Optional form endpoint (Formspree, Web3Forms, Basin, etc.) that accepts a
   * JSON POST. Set VITE_FORM_ENDPOINT at build time. Without it, the quote
   * form opens the visitor's email app with their details filled in.
   */
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT as string | undefined,
}

/** tel: href for the configured phone number, e.g. 'tel:+61412345678'. */
export function phoneHref(phone = site.phone) {
  const digits = phone.replace(/\D/g, '')
  return `tel:+61${digits.replace(/^0/, '')}`
}
