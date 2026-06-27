import {
  Building2,
  ShoppingBag,
  Truck,
  HardHat,
  TreePine,
  Landmark,
  Warehouse,
  Calendar,
  Home,
  Factory,
} from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

const industries = [
  {
    icon: HardHat,
    title: 'Construction',
    description: 'During-build and post-construction site management.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail & Commercial',
    description: 'Shopping centres, retail strips, and commercial precincts.',
  },
  {
    icon: Warehouse,
    title: 'Industrial & Logistics',
    description: 'Warehouses, distribution centres, and manufacturing sites.',
  },
  {
    icon: Landmark,
    title: 'Local Government',
    description: 'Roads, carparks, civic spaces, and public facilities.',
  },
  {
    icon: Calendar,
    title: 'Events & Hospitality',
    description: 'Racetracks, showgrounds, event venues, and caravan parks.',
  },
  {
    icon: Home,
    title: 'Property Management',
    description: 'Strata complexes, residential estates, and body corporates.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Factory floors, loading docks, and processing facilities.',
  },
  {
    icon: Truck,
    title: 'Transport & Freight',
    description: 'Freight depots, fuel stops, and heavy-vehicle areas.',
  },
  {
    icon: TreePine,
    title: 'Agriculture & Rural',
    description: 'Farm laneways, silos, grain sheds, and processing yards.',
  },
  {
    icon: Building2,
    title: 'Schools & Institutions',
    description: 'Educational campuses, hospitals, and community facilities.',
  },
]

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-cream" aria-labelledby="industries-heading">
      <div className="section-container">
        <AnimateInView className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Industries We Serve</p>
          <h2 id="industries-heading" className="display-md text-asphalt">
            Built for Gippsland's<br />diverse industries.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            From construction sites to local government — if it's hard-surface and in Gippsland,
            we sweep it.
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry, i) => (
            <AnimateInView key={industry.title} delay={i * 0.06} direction="up">
              <div className="group bg-white border border-zinc-100 p-6 hover:border-orange-500/30 hover:shadow-md hover:shadow-orange-500/5 transition-all duration-200 h-full">
                <div className="w-10 h-10 bg-orange-500/8 flex items-center justify-center mb-4 group-hover:bg-orange-500/15 transition-colors duration-200">
                  <industry.icon
                    className="w-5 h-5 text-orange-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-sm font-bold text-asphalt mb-1.5 group-hover:text-orange-600 transition-colors duration-200">
                  {industry.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{industry.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
