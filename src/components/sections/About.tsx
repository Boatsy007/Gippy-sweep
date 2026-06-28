import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const milestones = [
  { year: '2018', event: 'Founded on the Gold Coast with a commitment to commercial-grade mechanical sweeping.' },
  { year: '2020', event: 'Expanded to serve construction and industrial clients across South East Queensland.' },
  { year: '2022', event: 'Upgraded to modern commercial sweeping equipment with advanced dust suppression capability.' },
  { year: '2025', event: 'Serving clients across the Gold Coast, Brisbane, Logan and Moreton Bay regions.' },
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
                SWEPT delivers professional commercial sweeping services across South East
                Queensland using modern mechanical sweeping equipment and reliable scheduled
                maintenance programs.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-6">
                We're proudly Gold Coast owned and committed to helping businesses present
                cleaner, safer, more professional properties every day. We saw too many sites
                where sweeping was an afterthought — and set out to change that.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Today, SWEPT services clients across the Gold Coast, Brisbane, Logan, Ipswich,
                Redlands, Moreton Bay and Northern NSW — delivering the same owner-operated
                standard on every job, every time.
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
