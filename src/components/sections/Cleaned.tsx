import { Check, ArrowRight } from 'lucide-react'

const cleanedServices = [
  {
    title: 'Office Cleaning',
    description:
      'Scheduled cleaning for offices and corporate workspaces — desks, floors, kitchens and meeting rooms kept spotless so your team and visitors walk into a professional space.',
  },
  {
    title: 'Warehouse Cleaning',
    description:
      'Internal cleaning for warehouses and distribution centres, covering staff areas, offices, floors and break rooms — scheduled around shifts and operating hours.',
  },
  {
    title: 'Retail Cleaning',
    description:
      'Before-open and after-close cleaning for shops, showrooms and shopping centre tenancies — keeping floors, counters and entries presentable for customers.',
  },
  {
    title: 'Strata Cleaning',
    description:
      'Common area cleaning for strata and body corporate properties — lobbies, corridors, stairwells, lifts and shared facilities maintained to a consistent standard.',
  },
  {
    title: 'Amenities Cleaning',
    description:
      'Hygienic cleaning and restocking of toilets, showers, change rooms and kitchenettes — keeping high-use amenities clean, fresh and compliant.',
  },
  {
    title: 'Recurring Commercial Cleaning',
    description:
      'Daily, weekly or fortnightly cleaning programs tailored to your site — consistent cleaners, clear checklists and fixed pricing for ongoing peace of mind.',
  },
]

export function Cleaned() {
  return (
    <section id="cleaned" className="section-pad bg-zinc-50 overflow-x-clip" aria-labelledby="cleaned-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky info */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-end gap-3 mb-6">
              <img
                src="/logo-cleaned.webp"
                alt="Cleaned"
                width={194}
                height={54}
                className="h-[54px] w-auto"
              />
              <span className="eyebrow pb-1">by Swept</span>
            </div>
            <h2 id="cleaned-heading" className="display-md text-asphalt mb-6">
              Commercial Cleaning<br />
              for Gold Coast<br />
              Workplaces.
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md">
              Through Cleaned by Swept, we take care of the inside of your property too. Our
              commercial cleaners look after offices, warehouses, retail stores, strata common areas
              and amenities across the Gold Coast and South East Queensland — on a schedule that
              suits your business, from daily cleans to weekly programs.
            </p>
          </div>

          {/* Right — service list + trust block + CTAs */}
          <div className="space-y-0 divide-y divide-zinc-200">
            {cleanedServices.map((service) => (
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
                <div className="mb-8 p-6 bg-white border border-zinc-200">
                  <p className="text-asphalt font-semibold text-sm mb-2">
                    One team. Four specialist services. Cleaner commercial properties.
                  </p>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Swept looks after the outside. Cleaned looks after the inside.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-primary">
                    Request Cleaned Quote
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
