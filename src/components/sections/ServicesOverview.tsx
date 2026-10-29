import { ArrowRight } from 'lucide-react'
import { serviceBrands } from '../../serviceBrands'
import { preselectQuoteService } from '../../quote'

export function ServicesOverview() {
  return (
    <section id="services" className="section-pad bg-zinc-50" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Our Services</p>
          <h2 id="services-heading" className="display-md text-asphalt">
            Four specialist services.<br />One point of contact.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            SWEPT brings commercial sweeping, pressure cleaning, grounds maintenance and commercial
            cleaning together under one provider — so facility, strata and property managers across
            the Gold Coast and South East Queensland can look after the whole site with one call.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceBrands.map((brand) => (
            <li key={brand.id}>
              <article className="group relative bg-white border border-zinc-100 p-6 hover:border-brand-500/30 hover:shadow-md hover:shadow-brand-500/5 transition-all duration-200 h-full flex flex-col">
                <span
                  className="absolute inset-x-0 top-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${brand.accent[0]}, ${brand.accent[1]})` }}
                  aria-hidden="true"
                />
                <img
                  src={brand.logo.src}
                  alt={brand.name}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="h-10 w-auto self-start mb-5"
                />
                <h3 className="text-sm font-bold text-asphalt mb-1.5">{brand.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">{brand.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold">
                  <a href={`#${brand.id}`} className="text-brand-700 hover:text-asphalt transition-colors duration-150">
                    View services<span className="sr-only"> — {brand.label}</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => preselectQuoteService(brand.id)}
                    className="inline-flex items-center gap-1 text-asphalt hover:text-brand-700 transition-colors duration-150"
                  >
                    Get a quote<span className="sr-only"> for {brand.label}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
