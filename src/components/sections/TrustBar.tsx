import { ShieldCheck, Clock, MapPin, Layers } from 'lucide-react'

const items = [
  {
    icon: MapPin,
    label: 'Gold Coast Owned',
    detail: 'Gold Coast, Queensland',
  },
  {
    icon: ShieldCheck,
    label: 'Fully Licensed & Insured',
    detail: 'Public liability & workers comp',
  },
  {
    icon: Clock,
    label: 'Flexible Scheduling',
    detail: 'Day, night & weekends',
  },
  {
    icon: Layers,
    label: 'Six Specialist Services',
    detail: 'One point of contact',
  },
]

export function TrustBar() {
  return (
    <section className="bg-asphalt" aria-label="Trust indicators">
      <div className="section-container py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          {items.map((item) => (
            <div key={item.label}>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-4 lg:px-8">
                <item.icon
                  className="w-7 h-7 text-brand-500 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{item.label}</p>
                  <p className="text-white/60 text-xs mt-0.5 leading-snug">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
