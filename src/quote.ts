import type { ServiceId } from './serviceBrands'

const EVENT = 'swept:quote-service'

/**
 * Called by "Request … Quote" buttons (alongside their normal #contact link)
 * so the quote form arrives with that service already ticked.
 */
export function preselectQuoteService(service: ServiceId) {
  window.dispatchEvent(new CustomEvent<ServiceId>(EVENT, { detail: service }))
}

export function onQuoteServiceRequested(handler: (service: ServiceId) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<ServiceId>).detail)
  window.addEventListener(EVENT, listener)
  return () => window.removeEventListener(EVENT, listener)
}
