import { site } from '../../site'

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
        <div className="max-w-xl mb-20">
          <p className="eyebrow mb-5">About SWEPT</p>
          <h2 id="about-heading" className="display-md text-asphalt">
            Built for South East<br />Queensland.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — story */}
          <div>
            <div className="">
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
              {milestones.map((m) => (
                <div key={m.year} className="relative">
                    <span
                      className="absolute -left-[29px] top-1 w-3 h-3 bg-brand-500 rounded-full ring-4 ring-cream"
                      aria-hidden="true"
                    />
                    <p className="text-xs font-bold text-brand-700 tracking-widest uppercase mb-1">
                      {m.year}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{m.event}</p>
                  </div>
              ))}
            </div>
          </div>

          {/* Right — key facts + owner quote */}
          <div>
            <div className="grid grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 mb-4">
              {[
                { value: '20+', label: 'Years in business' },
                { value: '2004', label: 'Established' },
                { value: '7', label: 'Regions serviced' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 text-center">
                  <p className="text-3xl font-extrabold text-asphalt tracking-tightest">{stat.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Owner quote */}
            <blockquote className="mt-12">
              <div
                className="text-7xl font-extrabold text-brand-500/20 leading-none mb-1 select-none"
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
                <span className="w-8 h-px bg-brand-500 shrink-0" aria-hidden="true" />
                {site.ownerName && `${site.ownerName}, `}Founder &amp; Director, SWEPT
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
