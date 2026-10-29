import { Fragment } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import type { ServiceBrand } from '../../serviceBrands'
import { preselectQuoteService } from '../../quote'

const ease = [0.22, 1, 0.36, 1] as const

interface ServiceSectionProps {
  brand: ServiceBrand
  /** Alternates the section background like the rest of the page */
  tinted?: boolean
}

/** One service brand: sticky intro on the left, service list + quote CTA on the right. */
export function ServiceSection({ brand, tinted = false }: ServiceSectionProps) {
  const headingId = `${brand.id}-heading`
  const cross = brand.crossLink
  const quoteName = brand.id === 'sweeping' ? 'Sweeping' : brand.name

  return (
    <section
      id={brand.id}
      className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'} overflow-x-clip`}
      aria-labelledby={headingId}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky info */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-end gap-3 mb-6">
              <img
                src={brand.logo.src}
                alt={brand.name}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-[54px] w-auto"
              />
              {brand.byline && <span className="eyebrow pb-1">{brand.byline}</span>}
            </div>
            <h2 id={headingId} className="display-md text-asphalt mb-6">
              {brand.heading.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md">{brand.intro}</p>

            {brand.image && (
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-200">
                <motion.div
                  className="absolute inset-0 cursor-default"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <img
                    src={brand.image.src}
                    srcSet={brand.image.srcSet}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    width={brand.image.width}
                    height={brand.image.height}
                    alt={brand.image.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: brand.image.position }}
                    loading="eager"
                  />
                </motion.div>
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{ background: 'rgba(0,0,0,0.18)' }}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>

          {/* Right — service list + trust block + CTAs */}
          <div className={`space-y-0 divide-y ${tinted ? 'divide-zinc-200' : 'divide-zinc-100'}`}>
            {brand.items.map((service) => (
              <div key={service.title}>
                <div className="py-8 group">
                  <div className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-brand-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-asphalt mb-2 group-hover:text-brand-500 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <div className="pt-8">
                <div className={`mb-8 p-6 border border-zinc-200 ${tinted ? 'bg-white' : 'bg-zinc-50'}`}>
                  <p className="text-asphalt font-semibold text-sm mb-2">
                    Four specialist services. One point of contact.
                  </p>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {cross.before}
                    <a href={`#${cross.target}`} className="font-semibold text-brand-700 hover:underline">
                      {cross.linkText}
                    </a>
                    {cross.after}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-primary" onClick={() => preselectQuoteService(brand.id)}>
                    Request {quoteName} Quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#services" className="btn-outline-dark">
                    View All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
