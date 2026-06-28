import { motion } from 'framer-motion'
import { Zap, Clock, Leaf } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

const specs = [
  { label: 'Sweeping Width', value: 'Up to 2.4m' },
  { label: 'Debris Capacity', value: 'Commercial-grade hopper' },
  { label: 'Dust Suppression', value: 'Multi-stage filtration' },
  { label: 'Debris Collection', value: 'Wet & dry capability' },
  { label: 'Operating Hours', value: 'Day & night service' },
  { label: 'Service Area', value: 'South East Queensland' },
]

const statStrip = [
  'Italian Engineered',
  'Commercial Grade',
  'Low Dust Operation',
  'Professional Results',
]

const highlights = [
  {
    icon: Zap,
    title: 'Maximum Efficiency',
    description: 'Industrial-class sweepers cover large areas quickly — reducing your downtime and disruption to operations.',
  },
  {
    icon: Leaf,
    title: 'Dust Suppression',
    description: 'Integrated water suppression systems prevent dust clouds, keeping your site compliant and your neighbours happy.',
  },
  {
    icon: Clock,
    title: 'Available Around the Clock',
    description: 'We work around your schedule — early mornings, late nights, weekends. Your site stays clean without interrupting your business.',
  },
]

export function Equipment() {
  return (
    <section id="equipment" className="section-pad bg-white" aria-labelledby="equipment-heading">
      <div className="section-container">

        {/* Header */}
        <AnimateInView className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow mb-5">Our Equipment</p>
          <h2 id="equipment-heading" className="display-md text-asphalt">
            Serious machines.<br />
            Serious results.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            We operate commercial-grade mechanical sweepers built for Australian conditions —
            heavy-duty, efficient, and capable across every surface type we encounter in South East Queensland.
          </p>
        </AnimateInView>

        {/* RCM Mille feature callout */}
        <AnimateInView className="mb-16">
          <div className="relative bg-asphalt overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                backgroundSize: '12px 12px',
              }}
              aria-hidden="true"
            />
            <div className="relative grid lg:grid-cols-2 gap-0">
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <h3 className="text-3xl font-extrabold text-white tracking-headline leading-tight mb-4">
                  RCM Mille<br />
                  Commercial Ride-On<br />
                  <span className="text-orange-500">Sweeper</span>
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                  We operate a professional RCM Mille ride-on sweeper, trusted worldwide for its
                  exceptional performance on large commercial hard surfaces. Designed in Italy and
                  built for demanding environments, it delivers powerful dust control, efficient
                  debris collection and outstanding results across shopping centres, industrial
                  facilities, warehouses, construction sites and large car parks throughout South
                  East Queensland.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {specs.map((spec) => (
                    <div key={spec.label} className="border border-white/10 px-4 py-3">
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-white text-sm font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {statStrip.map((s) => (
                    <span key={s} className="flex items-center gap-2 text-white/50 text-xs">
                      <span className="w-1 h-1 bg-orange-500 rounded-full shrink-0" aria-hidden="true" />
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold hover:text-orange-300 transition-colors duration-150 self-start"
                >
                  See the RCM Mille in Action
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="min-h-[240px] lg:min-h-[480px] relative overflow-hidden">
                <motion.img
                  src="/equipment-rcm-mille.png"
                  alt="RCM Mille ride-on sweeper in a polished warehouse facility"
                  className="absolute inset-0 w-full h-full object-cover object-[55%_50%]"
                  loading="lazy"
                  draggable={false}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-black/12 pointer-events-none" aria-hidden="true" />
              </div>
            </div>
          </div>
        </AnimateInView>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <AnimateInView key={h.title} delay={i * 0.1} direction="up">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-orange-500/8 flex items-center justify-center">
                  <h.icon className="w-6 h-6 text-orange-500" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-asphalt">{h.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{h.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
