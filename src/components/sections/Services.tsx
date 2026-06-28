import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimateInView } from '../ui/AnimateInView'

const ease = [0.22, 1, 0.36, 1] as const

const services = [
  {
    title: 'Commercial Carpark Sweeping',
    description:
      'Thorough mechanical sweeping removes debris, grit and litter from all commercial car parks across South East Queensland — keeping your premises safe and professional.',
  },
  {
    title: 'Industrial Sweeping',
    description:
      'Heavy-duty sweeping for factories, depots and industrial facilities across the Gold Coast and Brisbane. We work around your operations, day or night.',
  },
  {
    title: 'Warehouse Sweeping',
    description:
      'Industrial environments generate significant dust and grit. We keep your internal floors compliant, safe and clean — scheduled around your operating hours.',
  },
  {
    title: 'Construction Site Sweeping',
    description:
      'During-build and post-construction site management to control dust, concrete rubble and site waste. We coordinate directly with site managers.',
  },
  {
    title: 'Retail Centre Sweeping',
    description:
      'Early-morning or overnight sweeping programs that keep your centre looking its best before customers arrive.',
  },
  {
    title: 'Council Sweeping',
    description:
      'Roads, paths, carparks and civic spaces maintained to local government standards across South East Queensland.',
  },
  {
    title: 'Body Corporate Sweeping',
    description:
      'Strata complexes, apartment car parks and residential estate driveways kept presentation-ready on a scheduled program.',
  },
  {
    title: 'Resort Sweeping',
    description:
      'Hotel car parks, arrival forecourts and guest areas cleaned to the highest standard — before guests arrive and after they leave.',
  },
  {
    title: 'Vacuum Sweeping',
    description:
      'High-powered vacuum sweeping for fine debris, sand and leaf litter where conventional sweeping is not sufficient.',
  },
  {
    title: 'Scheduled Maintenance Programs',
    description:
      'Tailored weekly, fortnightly or monthly service schedules for ongoing site maintenance — with fixed pricing and priority scheduling.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-pad bg-white overflow-x-clip" aria-labelledby="services-heading">
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
              SWEPT operates commercial-grade mechanical sweepers designed for South East
              Queensland's industrial, construction, retail and council environments.
            </p>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <motion.div
                className="absolute inset-0 cursor-default"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1.0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  opacity: { duration: 0.8, ease },
                  scale: { duration: 0.6, ease },
                }}
              >
                <img
                  src="/services-carpark.png"
                  alt="Aerial view of RCM Mille commercial sweeper working in a car park — before and after sweep clearly visible"
                  className="w-full h-full object-cover object-[45%_35%]"
                  loading="lazy"
                />
              </motion.div>
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{ background: 'rgba(0,0,0,0.18)' }}
                aria-hidden="true"
              />
            </div>
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
