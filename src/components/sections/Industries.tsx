import {
  ShoppingBag,
  Factory,
  HardHat,
  BookOpen,
  Landmark,
  Building2,
  Home,
  TreePine,
  Warehouse,
  ShoppingCart,
  Truck,
  Car,
} from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

const industries = [
  {
    icon: ShoppingBag,
    title: 'Shopping Centres',
    description: 'High-traffic retail precincts kept clean before opening and after close.',
  },
  {
    icon: Factory,
    title: 'Industrial Facilities',
    description: 'Factories, processing plants and heavy industry sites across SEQ.',
  },
  {
    icon: HardHat,
    title: 'Construction Sites',
    description: 'During-build and post-construction debris and dust management.',
  },
  {
    icon: BookOpen,
    title: 'Schools',
    description: 'School grounds, car parks and pathways maintained to a high standard.',
  },
  {
    icon: Landmark,
    title: 'Universities',
    description: 'Campus car parks, walkways and service roads kept presentation-ready.',
  },
  {
    icon: Building2,
    title: 'Hospitals',
    description: 'Healthcare facility car parks and access roads cleaned to exacting standards.',
  },
  {
    icon: Home,
    title: 'Body Corporates',
    description: 'Strata complexes, apartment car parks and residential estate driveways.',
  },
  {
    icon: TreePine,
    title: 'Resorts',
    description: 'Hotel forecourts, guest car parks and resort grounds kept immaculate.',
  },
  {
    icon: Warehouse,
    title: 'Warehouses',
    description: 'Distribution hubs and storage facilities with scheduled maintenance programs.',
  },
  {
    icon: ShoppingCart,
    title: 'Retail Centres',
    description: 'Strip shopping, neighbourhood centres and large format retail precincts.',
  },
  {
    icon: Truck,
    title: 'Distribution Centres',
    description: 'Freight depots, logistics hubs and heavy-vehicle hardstand areas.',
  },
  {
    icon: Car,
    title: 'Car Parks',
    description: 'Commercial, council and private car parks swept on any schedule.',
  },
]

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-cream" aria-labelledby="industries-heading">
      <div className="section-container">
        <AnimateInView className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Industries We Serve</p>
          <h2 id="industries-heading" className="display-md text-asphalt">
            Built for South East<br />Queensland's industries.
          </h2>
          <p className="mt-5 text-zinc-500 text-base leading-relaxed">
            From construction sites to shopping centres — if it's hard-surface and in South East Queensland,
            we sweep it.
          </p>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
