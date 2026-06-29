import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const milestones = [
  { year: '2004', event: 'Established on the Gold Coast, providing commercial sweeping services to businesses across South East Queensland.' },
  { year: '2010', event: 'Expanded service area to cover Brisbane, Logan, Ipswich and the broader South East Queensland corridor.' },
  { year: '2018', event: 'Invested in modern commercial-grade mechanical sweeping equipment with advanced dust suppression capability.' },
  { year: '2025', event: 'Serving clients across the Gold Coast, Brisbane, Logan, Ipswich, Redlands and Moreton Bay through commercial sweeping, pressure cleaning and grounds maintenance.' },
]

export function About() {
  return (
    <section id="about" className="section-pad bg-cream overflow-x-clip" aria-labelledby="about-heading">
      <div className="section-container">

        {/* Header */}
        <AnimateInView className="max-w-xl mb-20">
          <p className="eyebrow mb-5">About SWEPT</p>
          <h2 id="about-heading" className="display-md text-asphalt">
            Built for South East<br />Queensland.
          </h2>
        </AnimateInView>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — story */}
          <AnimateInView direction="left">
            <div className="prose prose-zinc max-w-none">
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                For over 20 years, Swept has been helping businesses across South East
                Queensland maintain cleaner, safer and more professional commercial properties.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Built on long-term client relationships and reliable service, Swept continues
                to provide commercial sweeping, pressure cleaning and exterior property
                maintenance for shopping centres, warehouses, industrial facilities, body
                corporates and commercial sites throughout the region.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Proudly Gold Coast owned and operated — keeping commercial properties clean
                across the Gold Coast, Brisbane, Logan, Ipswich, Redlands, Moreton Bay and
                Northern NSW.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-zinc-200 space-y-8">
              {milestones.map((m, i) => (
                <AnimateInView key={m.year} delay={i * 0.1} direction="left">
                  <div className="relative">
                    <span
                      className="absolute -left-[29px] top-1 w-3 h-3 bg-orange-500 rounded-full ring-4 ring-cream"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-1">
                      {m.year}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{m.event}</p>
                  </div>
                </AnimateInView>
              ))}
            </div>
          </AnimateInView>

          {/* Right — photos */}
          <AnimateInView direction="right">
            <div className="grid grid-cols-2 gap-3">
              <ImagePlaceholder
                label="Owner operator portrait — Gold Coast"
                aspectRatio="3/4"
                className="col-span-2"
              />
              <ImagePlaceholder
                label="Team in the field"
                aspectRatio="1/1"
              />
              <ImagePlaceholder
                label="South East Queensland — local roots"
                aspectRatio="1/1"
              />
            </div>

            {/* Owner quote */}
            <blockquote className="mt-8">
              <div
                className="text-7xl font-extrabold text-orange-500/20 leading-none mb-1 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="text-zinc-600 italic leading-relaxed mb-5">
                We built SWEPT because South East Queensland deserves a sweeping service
                that actually shows up, does the job properly, and makes your property
                look the way it should. That standard hasn't changed.
              </p>
              <footer className="flex items-center gap-3 text-sm font-semibold text-asphalt">
                <span className="w-8 h-px bg-orange-500 shrink-0" aria-hidden="true" />
                [Owner Name], Founder &amp; Director, SWEPT
              </footer>
            </blockquote>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
