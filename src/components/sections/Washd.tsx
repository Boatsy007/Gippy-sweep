import { Check, ArrowRight } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const washdServices = [
  {
    title: 'Basement Car Park Wash-Downs',
    description:
      'High-pressure cleaning for multi-level and basement car parks, removing oil, grime and debris from concrete surfaces, drainage channels and structural columns.',
  },
  {
    title: 'Loading Dock Cleaning',
    description:
      'Industrial-grade pressure cleaning for loading docks and delivery bays — removing spills, contaminants and heavy soiling from high-traffic commercial zones.',
  },
  {
    title: 'Bin Bay Cleaning',
    description:
      'Hygienic high-pressure wash-downs of bin bays and waste enclosures, eliminating odours and contamination across retail, hospitality and commercial properties.',
  },
  {
    title: 'Warehouse Floor Wash-Downs',
    description:
      'Deep cleaning for warehouse and distribution centre floors, removing industrial residue, dust and chemical spills to restore safe, compliant working surfaces.',
  },
  {
    title: 'Resort & Body Corporate Cleaning',
    description:
      'Pressure cleaning for resort complexes, pool surrounds, pathways and body corporate common areas — maintaining premium presentation standards.',
  },
  {
    title: 'Retail Centre Pressure Cleaning',
    description:
      'External paving, pedestrian zones and entry areas cleaned to retail-standard presentation for shopping centres and commercial precincts.',
  },
  {
    title: 'Concrete Surface Cleaning',
    description:
      'Specialist cleaning for concrete driveways, car parks, paths and outdoor hard surfaces — restoring appearance and removing long-term soiling.',
  },
  {
    title: 'Oil, Grime & Stain Removal',
    description:
      'Targeted high-pressure treatment for oil spills, grime and persistent surface staining on commercial and industrial properties.',
  },
  {
    title: 'Graffiti Removal',
    description:
      'Professional graffiti removal from commercial surfaces including rendered walls, concrete, brick, cladding and signage — restoring your property\'s professional presentation.',
  },
]

export function Washd() {
  return (
    <section id="washd" className="section-pad bg-zinc-50 overflow-x-clip" aria-labelledby="washd-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky info + placeholder */}
          <AnimateInView direction="left" className="lg:sticky lg:top-28">
            <p className="eyebrow mb-5">Washd by Swept</p>
            <h2 id="washd-heading" className="display-md text-asphalt mb-6">
              Commercial Pressure<br />
              Cleaning, Backed<br />
              by Swept.
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md">
              Swept is more than mechanical sweeping. Through Washd by Swept, we provide commercial
              pressure cleaning, wash-downs and graffiti removal for sites that need a deeper clean —
              from basement car parks and loading docks to bin bays, resort complexes, warehouse
              floors, retail centres and commercial facades across South East Queensland.
            </p>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <ImagePlaceholder
                label="Pressure Cleaning Image Placeholder"
                aspectRatio="fill"
              />
            </div>
          </AnimateInView>

          {/* Right — service list + trust block + CTAs */}
          <div className="space-y-0 divide-y divide-zinc-200">
            {washdServices.map((service, i) => (
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
                <div className="mb-8 p-6 bg-white border border-zinc-200">
                  <p className="text-asphalt font-semibold text-sm mb-2">
                    One team. Two specialist services. Cleaner commercial properties.
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    Mechanical sweeping for regular maintenance. Washd for deeper commercial cleans.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-primary">
                    Request Washd Quote
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <a href="#services" className="btn-outline-dark">
                    View Sweeping Services
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
