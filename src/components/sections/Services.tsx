import { Check, ArrowRight } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const services = [
  {
    title: 'Car Park & Driveway Sweeping',
    description:
      'Thorough mechanical sweeping removes debris, gravel, and litter from all hard-surface car parks and driveways — keeping your premises safe and professional.',
  },
  {
    title: 'Warehouse & Factory Floors',
    description:
      'Industrial environments generate significant dust, grit, and debris. We keep your internal floors compliant, safe, and clean — around your operating schedule.',
  },
  {
    title: 'Construction Site Cleaning',
    description:
      'Post-construction and during-build sweeping to manage dust, concrete rubble, and site waste. We coordinate directly with site managers.',
  },
  {
    title: 'Shopping Centre & Retail',
    description:
      'Early-morning or late-night sweeping programs that keep your centre presented at its best before customers arrive.',
  },
  {
    title: 'Roads, Driveways & Paths',
    description:
      'From council roads to private estate driveways — debris-free surfaces that meet safety standards and look immaculate.',
  },
  {
    title: 'Event Venue Preparation',
    description:
      'Pre-event and post-event site preparation. We\'ll have your venue clean and ready on time, every time.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-pad bg-white" aria-labelledby="services-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky image */}
          <AnimateInView direction="left" className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">What We Do</p>
            <h2 id="services-heading" className="display-md text-asphalt mb-6">
              Every surface.<br />
              Every site.<br />
              Done right.
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md">
              Gippy Sweep operates commercial-grade mechanical sweepers purpose-built for
              Gippsland's industrial, construction, and retail environments.
            </p>
            <ImagePlaceholder
              label="Sweeping machine working on carpark surface"
              aspectRatio="3/4"
              className="w-full"
            />
          </AnimateInView>

          {/* Right — service list */}
          <div className="space-y-0 divide-y divide-zinc-100">
            {services.map((service, i) => (
              <AnimateInView key={service.title} delay={i * 0.08} direction="up">
                <div className="py-8 group">
                  <div className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-asphalt mb-2 group-hover:text-orange-500 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            ))}

            <AnimateInView>
              <div className="pt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors duration-150"
                >
                  Get a quote for your site
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  )
}
