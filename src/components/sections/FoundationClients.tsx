import { Check, ArrowRight, Zap } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

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
    description: 'Great for lower-traffic areas and scheduled maintenance programs. Ideal for government facilities and rural properties.',
    price: 'From $400/visit',
    highlight: false,
  },
]

const benefits = [
  'Priority scheduling — your slot is always reserved',
  'Consistent operator who knows your site',
  'Automatic service reminders & reports',
  'Flexible rescheduling with 24hr notice',
  'Bundled pricing — the more often, the less per visit',
  'Annual review to optimise your schedule',
]

export function FoundationClients() {
  return (
    <section id="contact" className="section-pad bg-cream overflow-x-clip" aria-labelledby="foundation-heading">
      <div className="section-container">

        {/* Header */}
        <AnimateInView className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="eyebrow">Regular Service Plans</span>
            <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-600 text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
              <Zap className="w-3 h-3" aria-hidden="true" />
              Founding Rate Available
            </span>
          </div>
          <h2 id="foundation-heading" className="display-md text-asphalt">
            Secure your spot.<br />
            Lock in your rate.
          </h2>
          <p className="mt-5 text-zinc-500 text-lg leading-relaxed max-w-2xl">
            Gippy Sweep is growing its regular client base across Gippsland.
            Sign up for a recurring plan now and lock in a founding-client rate —
            price-protected for the life of your agreement.
          </p>
        </AnimateInView>

        {/* Frequency cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {frequencies.map((f, i) => (
            <AnimateInView key={f.id} delay={i * 0.1} direction="up">
              <div
                className={`relative h-full border-2 p-8 transition-all duration-200 flex flex-col ${
                  f.highlight
                    ? 'border-orange-500 bg-white shadow-xl shadow-orange-500/10'
                    : 'border-zinc-200 bg-white hover:border-zinc-400'
                }`}
              >
                {f.badge && (
                  <span className="absolute -top-3.5 left-6 bg-orange-500 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1">
                    {f.badge}
                  </span>
                )}
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 mb-2">
                    Service Frequency
                  </p>
                  <h3 className="text-3xl font-extrabold tracking-tightest text-asphalt">
                    {f.label}
                  </h3>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed flex-1">{f.description}</p>
                <div className="mt-8 pt-6 border-t border-zinc-100">
                  <p className="text-xs text-zinc-400 font-semibold tracking-wide uppercase">{f.price}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Pricing confirmed at quote</p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Benefits + CTAs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <AnimateInView direction="left">
            <h3 className="text-xl font-bold text-asphalt mb-6">
              What regular clients get
            </h3>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-orange-500" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-zinc-600 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </AnimateInView>

          <AnimateInView direction="right">
            <div className="bg-asphalt p-8 lg:p-10">
              <p className="eyebrow mb-4" style={{ color: '#F97316' }}>
                Get Your Quote Today
              </p>
              <h3 className="text-2xl font-extrabold text-white tracking-headline leading-tight mb-4">
                No lock-in contracts.<br />No hidden fees.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Tell us about your site — size, location, frequency needed —
                and we'll get back to you within one business day with a clear, itemised quote.
              </p>
              <a href="mailto:info@gippysweep.com.au" className="btn-primary w-full justify-center">
                Request a Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="tel:+61412345678" className="btn-outline-light w-full justify-center mt-3">
                Call 0412 345 678
              </a>
              <p className="text-white/25 text-[11px] text-center mt-6 leading-relaxed">
                Founding-client rates available for a limited number of new service agreements.<br />
                Act now to secure your pricing.
              </p>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
