import { services } from './services'

/** Residential services (everything in sweepclean's list except commercial cleaning). */
export const residentialServices = services.filter((s) => !s.commercial)

/** Page for a sweepclean service slug; commercial cleaning is the Commercial hub. */
export const servicePath = (slug: string) => (slug === 'commercial-cleaning' ? '/commercial' : `/residential/${slug}`)
