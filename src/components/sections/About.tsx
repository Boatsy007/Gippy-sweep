import { AnimateInView } from '../ui/AnimateInView'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const milestones = [
  { year: '2014', event: 'Founded in Gippsland by a local tradesman with a single sweeper.' },
  { year: '2017', event: 'Expanded to serve construction and industrial clients across the region.' },
  { year: '2020', event: 'Upgraded to commercial-grade fleet with dust suppression capability.' },
  { year: '2024', event: 'Serving 50+ regular clients from Bairnsdale to the Latrobe Valley.' },
]

export function About() {
  return (
    <section id="about" className="section-pad bg-cream" aria-labelledby="about-heading">
      <div className="section-container">

        {/* Header */}
        <AnimateInView className="max-w-xl mb-20">
          <p className="eyebrow mb-5">About Gippy Sweep</p>
          <h2 id="about-heading" className="display-md text-asphalt">
            A Gippsland business,<br />built by Gippslanders.
          </h2>
        </AnimateInView>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — story */}
          <AnimateInView direction="left">
            <div className="prose prose-zinc max-w-none">
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                Gippy Sweep was started by someone who grew up in this region and cared
                about how it looked. We saw too many construction sites leaving debris on
                public roads, and too many businesses putting up with carparks that gave
                visitors the wrong first impression.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-6">
                So we started small — one machine, one operator, one commitment: show up
                when we say we will, and clean the way a site should be cleaned. That
                approach earned us long-term clients across construction, retail, local
                government, and industrial sectors.
              </p>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Today, Gippy Sweep is one of the most trusted mechanical sweeping contractors
                in Gippsland. We've grown, upgraded our equipment, and expanded our coverage —
                but the core hasn't changed. We're still local, still owner-operated, and still
                answerable directly to you.
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
                label="Owner operator portrait — Gippsland"
                aspectRatio="3/4"
                className="col-span-2"
              />
              <ImagePlaceholder
                label="Team in the field"
                aspectRatio="1/1"
              />
              <ImagePlaceholder
                label="Gippsland landscape — local roots"
                aspectRatio="1/1"
              />
            </div>

            {/* Owner quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-orange-500">
              <p className="text-zinc-600 italic leading-relaxed mb-3">
                "I started this business because I wanted Gippsland to look as good as it feels
                to live in. Fifteen years later, that's still the reason I show up every day."
              </p>
              <footer className="text-sm font-semibold text-asphalt">
                — [Owner Name], Founder & Director, Gippy Sweep
              </footer>
            </blockquote>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
