import { ArrowRight, Phone } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

export function FinalCTA() {
  return (
    <section className="bg-asphalt relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Large decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(80px,15vw,180px)] font-extrabold text-white/[0.025] tracking-tightest leading-none whitespace-nowrap"
        >
          SWEPT
        </span>
      </div>

      {/* Orange accent — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-orange-500/30" aria-hidden="true" />

      <div className="section-container relative py-28 lg:py-36 text-center">
        <AnimateInView>
          <p className="eyebrow mb-8" style={{ color: '#F97316' }}>
            Ready to Get Started?
          </p>
        </AnimateInView>

        <AnimateInView delay={0.1}>
          <h2
            id="cta-heading"
            className="display-lg text-white max-w-4xl mx-auto leading-tight"
          >
            Let's keep South East Queensland<br />
            <span className="text-orange-500">looking its best.</span>
          </h2>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <p className="mt-8 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Get in touch today for a free, no-obligation quote. We'll assess your site,
            recommend a schedule, and have a price to you within one business day.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="mailto:info@swept.au"
              className="btn-primary text-base px-10 py-5"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="tel:+61412345678"
              className="btn-outline-light text-base px-10 py-5"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              0412 345 678
            </a>
          </div>
        </AnimateInView>

        <AnimateInView delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              'No lock-in contracts',
              'Response within 1 business day',
              'Gold Coast-based crew',
              'Fully insured',
            ].map((point) => (
              <span key={point} className="flex items-center gap-2 text-white/40 text-sm">
                <span className="w-1 h-1 bg-orange-500 rounded-full" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
