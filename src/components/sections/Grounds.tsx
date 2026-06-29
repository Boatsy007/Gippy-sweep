import { Check, ArrowRight } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const groundsServices = [
  {
    title: 'Litter Picking',
    description:
      'Systematic litter removal from car parks, walkways, hardstands and shared outdoor areas — keeping commercial properties presentable between scheduled sweeps.',
  },
  {
    title: 'Leaf Blowing',
    description:
      'Commercial-grade leaf blowing for hard surfaces, car parks and outdoor areas, clearing leaf litter and light debris efficiently without disrupting operations.',
  },
  {
    title: 'Weed Control',
    description:
      'Professional weed control for kerbs, expansion joints, car park seams and hardstand edges — preventing growth that undermines property presentation and safety.',
  },
  {
    title: 'Kerb & Edge Tidy-Ups',
    description:
      'Precise kerb-line tidy-ups for commercial properties, removing overgrowth, debris and litter accumulation from boundary lines and kerb channels.',
  },
  {
    title: 'Garden Bed Clean-Ups',
    description:
      'Commercial garden bed maintenance — removing debris, leaf litter, dead material and surface rubbish from planting areas and landscape borders.',
  },
  {
    title: 'Car Park Tidy-Ups',
    description:
      'Comprehensive car park presentation visits covering litter, debris and general surface presentation for commercial car parks and hardstands.',
  },
  {
    title: 'External Bin Area Tidying',
    description:
      'Tidying and presentation of external bin areas, waste enclosures and collection zones — maintaining hygiene and appearance standards.',
  },
  {
    title: 'Stormwater Grate Clearing',
    description:
      'Clearing stormwater grates, drainage points and channels of leaf litter and debris — essential for wet season preparedness and compliance.',
  },
  {
    title: 'Stick, Branch & Debris Removal',
    description:
      'Removal of fallen sticks, branches, storm debris and green waste from commercial outdoor areas, car parks and hardstand surfaces.',
  },
  {
    title: 'Scheduled Site Presentation Visits',
    description:
      'Regular scheduled visits to maintain consistent site presentation — weekly, fortnightly or monthly programs tailored to your property and seasonal requirements.',
  },
]

export function Grounds() {
  return (
    <section id="grounds" className="section-pad bg-white overflow-x-clip" aria-labelledby="grounds-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky info + placeholder */}
          <AnimateInView direction="left" className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">Grounds by Swept</p>
            <h2 id="grounds-heading" className="display-md text-asphalt mb-6">
              Commercial Grounds<br />
              Maintenance for<br />
              Cleaner, Safer Sites.
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md">
              Through Grounds by Swept, we help commercial properties stay presentable between
              major cleans. From litter picking and leaf blowing to weed control, kerb tidy-ups
              and external site maintenance, our team keeps car parks, hardstands, walkways and
              shared outdoor areas looking sharp across South East Queensland.
            </p>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <ImagePlaceholder
                label="Grounds Maintenance Image Placeholder"
                aspectRatio="fill"
              />
            </div>
          </AnimateInView>

          {/* Right — service list + trust block + CTAs */}
          <div className="space-y-0 divide-y divide-zinc-100">
            {groundsServices.map((service, i) => (
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
                <div className="mb-8 p-6 bg-zinc-50 border border-zinc-200">
                  <p className="text-asphalt font-semibold text-sm mb-2">
                    Sweeping handles the surface. Washd handles the deep clean. Grounds keeps the site looking sharp between visits.
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    One team. Three specialist services. Cleaner commercial properties.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-primary">
                    Request Grounds Quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#services" className="btn-outline-dark">
                    View All Services
                  </a>
                </div>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </section>
  )
}
