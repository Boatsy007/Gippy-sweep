import { Check, ArrowRight, Phone } from 'lucide-react'
import { site, phoneHref } from '../../site'

const frequencies = [
  {
    id: 'weekly',
    label: 'Weekly',
    badge: 'Most Popular',
    description: 'For high-traffic sites that demand consistent cleanliness. Ideal for shopping centres, carparks, and busy industrial estates.',
    price: 'From $275/visit',
    highlight: true,
  },
  {
    id: 'fortnightly',
    label: 'Fortnightly',
    badge: null,
    description: 'Perfect for medium-traffic sites with moderate debris accumulation. Construction sites and smaller commercial properties.',
    price: 'From $300/visit',
    highlight: false,
  },
  {
    id: 'monthly',
    label: 'Monthly',
    badge: null,
    description: 'Great for lower-traffic areas and scheduled maintenance programs. Ideal for government facilities and body corporate properties.',
    price: 'From $400/visit',
    highlight: false,
  },
]

const benefits = [
  'Priority scheduling — your slot is always reserved',
  'Consistent operator who knows your site',
  'Service reminders and visit reports',
  'Flexible rescheduling with 24hr notice',
  'Bundled pricing — the more often, the less per visit',
  'Annual review to optimise your schedule',
]

export function ServicePlans() {
  return (
    <section id="plans" className="section-pad bg-cream overflow-x-clip" aria-labelledby="plans-heading">
      <div className="section-container">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-5">Regular Service Plans</p>
          <h2 id="plans-heading" className="display-md text-asphalt">
            Book it once.<br />
            Stay clean all year.
          </h2>
          <p className="mt-5 text-zinc-500 text-lg leading-relaxed max-w-2xl">
            Most of our clients have been with us for years on a regular schedule.
            Choose how often you need us and we'll lock your site into the roster —
            the more often we visit, the less you pay per visit.
          </p>
        </div>

        {/* Frequency cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {frequencies.map((f) => (
            <div key={f.id}>
              <div
                className={`relative h-full border-2 p-8 transition-all duration-200 flex flex-col ${
                  f.highlight
                    ? 'border-brand-500 bg-white shadow-xl shadow-brand-500/10'
                    : 'border-zinc-200 bg-white hover:border-zinc-400'
                }`}
              >
                {f.badge && (
                  <span className="absolute -top-3.5 left-6 bg-brand-500 text-asphalt text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    {f.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-2">
                    Service Frequency
                  </p>
                  <h3 className="text-3xl font-extrabold tracking-tightest text-asphalt">
                    {f.label}
                  </h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{f.description}</p>
                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <p className="text-xs text-zinc-500 font-semibold tracking-wide uppercase">{f.price}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Final price confirmed after a site assessment</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h3 className="text-xl font-bold text-asphalt mb-6">
              What regular clients get
            </h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-brand-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-500" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-zinc-600 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-asphalt p-8 lg:p-10">
              <p className="eyebrow text-brand-500 mb-4">
                Get Your Quote Today
              </p>
              <h3 className="text-2xl font-extrabold text-white tracking-headline leading-tight mb-4">
                No lock-in contracts.<br />No hidden fees.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Tell us about your site — size, location, frequency needed —
                and we'll get back to you within one business day with a clear, itemised quote.
              </p>
              <a href="#contact" className="btn-primary w-full justify-center">
                Request a Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              {site.phone && (
                <a href={phoneHref()} className="btn-outline-light w-full justify-center mt-3">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call {site.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
