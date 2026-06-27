import { Star } from 'lucide-react'
import { AnimateInView } from '../ui/AnimateInView'

const testimonials = [
  {
    quote:
      'Gippy Sweep has been looking after our construction sites for three years running. They always show up, always do the job properly, and our site managers love working with them.',
    author: 'Marcus',
    role: 'Site Manager',
    company: 'Construction Company — Gippsland VIC',
    stars: 5,
  },
  {
    quote:
      "Our carpark went from an embarrassment to a point of pride. Customers notice, and we've had compliments specifically about how clean the place looks. Couldn't recommend more highly.",
    author: 'Trish',
    role: 'Centre Manager',
    company: 'Retail Centre — Latrobe Valley VIC',
    stars: 5,
  },
  {
    quote:
      'We use Gippy Sweep for our warehouse complex and they\'ve been brilliant. Always prompt, always thorough. The dust suppression is a game-changer for our indoor air quality compliance.',
    author: 'Dean',
    role: 'Facilities Manager',
    company: 'Industrial Estate — Bairnsdale VIC',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="section-pad bg-zinc-900" aria-labelledby="testimonials-heading">
      <div className="section-container">
        <AnimateInView className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5" style={{ color: '#F97316' }}>
            What Clients Say
          </p>
          <h2 id="testimonials-heading" className="display-md text-white">
            Trusted across<br />Gippsland.
          </h2>
          <p className="mt-5 text-white/40 text-sm">
            These are placeholder testimonials. Real reviews will be displayed here once collected.
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateInView key={t.company} delay={i * 0.12} direction="up">
              <figure className="bg-zinc-800 p-8 h-full flex flex-col">
                <StarRating count={t.stars} />
                <blockquote className="mt-5 flex-1">
                  <p className="text-white/70 text-sm leading-relaxed italic">"{t.quote}"</p>
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white text-sm font-semibold">{t.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                  <p className="text-orange-500/70 text-xs mt-0.5">{t.company}</p>
                </figcaption>
              </figure>
            </AnimateInView>
          ))}
        </div>

        {/* Social proof summary */}
        <AnimateInView className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          {[
            { value: '5.0', label: 'Google Rating' },
            { value: '50+', label: 'Active Clients' },
            { value: '100%', label: 'Would Recommend' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white tracking-tightest">{stat.value}</p>
              <p className="text-white/35 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
            </div>
          ))}
        </AnimateInView>
      </div>
    </section>
  )
}
