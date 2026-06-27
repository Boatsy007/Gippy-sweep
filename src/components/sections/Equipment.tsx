import { Zap, Clock, Leaf } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const specs = [
  { label: 'Sweeping Width', value: 'Up to 2.4m' },
  { label: 'Hopper Capacity', value: 'Commercial grade' },
  { label: 'Dust Suppression', value: 'Multi-stage filtration' },
  { label: 'Debris Collection', value: 'Wet & dry capability' },
  { label: 'Operating Hours', value: 'Day or night shifts' },
  { label: 'Area Coverage', value: 'All of Gippsland VIC' },
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
            heavy-duty, efficient, and capable across every surface type we encounter in Gippsland.
          </p>
        </AnimateInView>

        {/* Arriving Soon callout — RCM Mille */}
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
                <div className="inline-flex items-center gap-2 bg-orange-500/15 text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 mb-6 self-start">
                  <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" aria-hidden="true" />
                  Arriving Soon
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-headline leading-tight mb-4">
                  RCM Mille<br />
                  <span className="text-orange-500">Next-Generation</span> Sweeper
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
                  We're investing in the RCM Mille — a premium Italian-engineered ride-on sweeper
                  renowned for its performance on large hard-surface areas. More capacity, better
                  dust control, and even faster results for our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="border border-white/10 px-4 py-3">
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">{spec.label}</p>
                      <p className="text-white text-sm font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-h-[240px] lg:min-h-[480px] relative">
                <ImagePlaceholder
                  label="RCM Mille ride-on sweeper — arriving soon"
                  aspectRatio="fill"
                  dark
                />
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
