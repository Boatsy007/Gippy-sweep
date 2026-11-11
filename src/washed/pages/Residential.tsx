import { ArrowRight } from 'lucide-react'
import { services, servicePath, type Service } from '../lib/services'
import { areas, areaPath } from '../lib/areas'
import { suburbs } from '../lib/suburbs'
import { site, trustLabel } from '../lib/site'
import { schedules, surfaces, tasks } from '../lib/content'
import { A, Card, CheckItem, CtaBand, Eyebrow, Faqs, Icon, PageHero, SectionHeading } from '../ui'

export const residentialCrumbs = [{ name: 'Home', path: '/' }, { name: 'Residential', path: '/residential' }]

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Card accent>
      <span className="w-11 h-11 bg-washed-50 text-washed-700 flex items-center justify-center mb-5"><Icon name={s.icon} className="w-6 h-6" /></span>
      <h3 className="text-base font-bold text-asphalt mb-1.5">{s.name}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.summary}</p>
      <p className="mt-3 text-xs font-semibold text-washed-700">Best for: {s.bestFor.toLowerCase()}</p>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold">
        <A to={servicePath(s.slug)} className="text-washed-700 hover:text-asphalt transition-colors duration-150">
          View service<span className="sr-only"> — {s.name}</span>
        </A>
        <A to={`/quote?service=${s.slug}`} className="inline-flex items-center gap-1 text-asphalt hover:text-washed-700 transition-colors duration-150">
          Get a quote<span className="sr-only"> for {s.name.toLowerCase()}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </A>
      </div>
    </Card>
  )
}

/** Weekly / fortnightly / monthly plans. */
export function Schedules({ tinted = false }: { tinted?: boolean }) {
  return (
    <section id="plans" className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'}`} aria-labelledby="plans-heading">
      <div className="section-container">
        <SectionHeading id="plans-heading" eyebrow="One-off or scheduled" title="Clean once, or keep it clean" intro="Book a single clean, or schedule repeat cleans for areas where mould and algae come back. No lock-in contracts – change or stop whenever you need to." />
        <ul className="grid md:grid-cols-3 gap-5">
          {schedules.map((p) => (
            <li key={p.value} id={p.value}>
              <Card>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 mb-2">Pressure cleaning</p>
                <h3 className="text-3xl font-extrabold tracking-tightest text-asphalt">{p.label}</h3>
                <p className="mt-4 text-zinc-500 text-sm leading-relaxed flex-1">{p.body}</p>
                <A to={`/quote?service=driveway-concrete-cleaning&frequency=${p.value}`} className="mt-6 text-sm font-semibold text-washed-700 hover:text-asphalt">
                  Get a quote: {p.label.toLowerCase()}
                </A>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-zinc-500">
          Selling or moving out? See <A to="/residential/exterior-clean-sale-lease" className="font-semibold text-washed-700 underline underline-offset-2">exterior clean-ups for sale and lease</A>. Stubborn marks? See <A to="/residential/oil-stain-removal" className="font-semibold text-washed-700 underline underline-offset-2">oil, rust and stain treatment</A>.
        </p>
      </div>
    </section>
  )
}

/** What a regular visit can include. */
export function Checklists({ tinted = false }: { tinted?: boolean }) {
  return (
    <section id="checklists" className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'}`} aria-labelledby="checklists-heading">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28">
            <Eyebrow className="mb-5">Included in every clean</Eyebrow>
            <h2 id="checklists-heading" className="display-md text-asphalt mb-6">Careful,<br />start to finish.</h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-md">
              Pressure cleaning is quick to do badly. Every job follows the same steps, from protecting your property to
              keeping wash water out of the drains, and your quote lists exactly which surfaces are included.
            </p>
            <A to="/quote" className="btn-washed mt-8">Get a quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {tasks.map((t) => (
              <li key={t.name} className="flex items-start gap-4">
                <span className="w-6 h-6 bg-washed-600 flex items-center justify-center shrink-0 mt-0.5"><Icon name="check" className="w-3.5 h-3.5 text-white" /></span>
                <span>
                  <span className="block font-bold text-asphalt">{t.name}</span>
                  <span className="block text-sm text-zinc-500 leading-relaxed">{t.detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Matching the method to the surface – a general guide. */
export function Surfaces({ tinted = false }: { tinted?: boolean }) {
  return (
    <section id="surfaces" className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'}`} aria-labelledby="surfaces-heading">
      <div className="section-container">
        <SectionHeading id="surfaces-heading" eyebrow="Pressure or soft wash?" title="The right method for every surface" intro="More pressure is not always better. The wrong pressure or nozzle can etch concrete, strip paint, fur timber and wash out paver joints – so the surface decides how we clean it." />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {surfaces.map((s) => (
            <li key={s.name}>
              <Card>
                <span className="w-11 h-11 bg-washed-50 text-washed-700 flex items-center justify-center"><Icon name={s.icon} className="w-6 h-6" /></span>
                <h3 className="mt-4 text-lg font-bold text-asphalt">{s.name}</h3>
                <p className="text-xs font-semibold tracking-wide text-washed-700">{s.method}</p>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{s.body}</p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-zinc-500">A general guide only – we check the condition of each surface before we start.</p>
      </div>
    </section>
  )
}

export function ResidentialHub() {
  return (
    <>
      <PageHero
        crumbs={residentialCrumbs}
        eyebrow="Residential pressure cleaning"
        title="Pressure cleaning for your home."
        intro="Driveways, paths, house exteriors, patios, pavers, pool surrounds, decks, fences and stubborn stains cleaned for homes across Brisbane, Logan, the Gold Coast and Tweed Heads."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to="/quote?type=residential" className="btn-washed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#services" className="btn-outline-light">Explore services</a>
        </div>
      </PageHero>

      <section id="services" className="section-pad bg-zinc-50" aria-labelledby="res-services-heading">
        <div className="section-container">
          <SectionHeading id="res-services-heading" eyebrow="Our services" title="Residential pressure cleaning services" intro="From a driveway on its own to the whole outside of the house before you sell. Book one service or combine several into a single quote." />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
            {services.map((s) => <li key={s.slug}><ServiceCard s={s} /></li>)}
          </ul>
        </div>
      </section>

      <Schedules />
      <Checklists tinted />
      <Surfaces />

      <section className="section-pad bg-zinc-50" aria-labelledby="res-areas-heading">
        <div className="section-container">
          <SectionHeading id="res-areas-heading" eyebrow="Areas we service" title="Pressure cleaning near you" intro="Brisbane, Logan, the Gold Coast and over the border into Tweed Heads." />
          <ul className="flex flex-wrap gap-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <A to={areaPath(a.slug)} className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-asphalt hover:border-washed-500 transition-colors">
                  <Icon name="pin" className="w-4 h-4 text-washed-600" />Pressure cleaning {a.name}
                </A>
              </li>
            ))}
            <li><A to="/residential/areas" className="inline-flex items-center gap-2 bg-washed-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-washed-700">All {suburbs.length} suburbs</A></li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function ServicePage({ s }: { s: Service }) {
  const crumbs = [...residentialCrumbs, { name: s.name, path: servicePath(s.slug) }]
  const quote = `/quote?service=${s.slug}`
  const others = services.filter((o) => o.slug !== s.slug)
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={s.bestFor} title={s.h1} intro={s.intro}>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to={quote} className="btn-washed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#checklist" className="btn-outline-light">What&apos;s included</a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Written quote {site.quoteResponse}{trustLabel() ? ` · ${trustLabel()}` : ''} · Brisbane, Logan, Gold Coast &amp; Tweed Heads
        </p>
      </PageHero>

      {s.availability && (
        <div className="section-container -mt-6 relative z-10">
          <p className="flex gap-3 border border-washed-100 bg-white px-5 py-4 text-sm text-zinc-600 shadow-sm">
            <Icon name="shield" className="w-5 h-5 shrink-0 text-washed-600" />{s.availability}
          </p>
        </div>
      )}

      <section className="section-pad bg-white" aria-labelledby="suits-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow className="mb-5">Who it&apos;s for</Eyebrow>
            <h2 id="suits-h" className="display-md text-asphalt mb-8">Is it right for you?</h2>
            <ul className="space-y-4">{s.suits.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
          </div>
          <div>
            <Eyebrow className="mb-5">Your quote</Eyebrow>
            <h2 className="display-md text-asphalt mb-6">What your quote depends on</h2>
            <p className="text-zinc-600">Every property is different, so every quote is too. We look at:</p>
            <ul className="mt-5 space-y-3">
              {s.quoteFactors.map((t) => <li key={t} className="flex gap-3 text-zinc-600"><span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-washed-600" />{t}</li>)}
            </ul>
            <p className="mt-6 text-zinc-600">You&apos;ll get a written quote for the agreed scope before anything is booked.</p>
          </div>
        </div>
      </section>

      <section id="checklist" className="section-pad bg-zinc-50" aria-labelledby="check-h">
        <div className="section-container">
          <SectionHeading id="check-h" eyebrow="Agreed scope" title={`What's included in ${s.name.toLowerCase()}`} intro="The tasks we can include. Tell us your priorities and anything to leave alone – your quote lists exactly what is in scope." />
          <div className={`grid sm:grid-cols-2 ${s.checklist.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
            {s.checklist.map((g) => (
              <Card key={g.room}>
                <h3 className="text-base font-bold text-asphalt">{g.room}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">{g.items.map((i) => <CheckItem key={i}>{i}</CheckItem>)}</ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="tips-h">
        <div className="section-container">
          <SectionHeading id="tips-h" eyebrow="Good to know" title={`${s.name}: practical tips`} />
          <ul className={`grid ${s.tips.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
            {s.tips.map((t) => (
              <li key={t.title}>
                <Card>
                  <Icon name="droplets" className="w-7 h-7 text-washed-600" />
                  <h3 className="mt-4 text-base font-bold text-asphalt">{t.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{t.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="steps-h">
        <div className="section-container">
          <SectionHeading id="steps-h" eyebrow="Simple as 1 – 2 – 3" title="How it works" />
          <ol className="grid sm:grid-cols-3 gap-4">
            {s.steps.map((st, i) => (
              <li key={st.title}>
                <Card>
                  <span className="text-5xl font-extrabold tracking-tightest leading-none text-washed-100 mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-bold text-asphalt">{st.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{st.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="sfaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="sfaq-h" className="display-md text-asphalt">{s.name}: common questions</h2>
            <A to={quote} className="btn-washed mt-8">Get a Free Quote</A>
          </div>
          <Faqs faqs={s.faqs} />
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="where-h">
        <div className="section-container">
          <h2 id="where-h" className="text-2xl font-extrabold text-asphalt tracking-headline">{s.name} near you</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <A to={areaPath(a.slug)} className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-asphalt hover:border-washed-500 transition-colors">
                  <Icon name="pin" className="w-4 h-4 text-washed-600" />{a.name}
                </A>
              </li>
            ))}
          </ul>
          <h2 className="mt-16 text-2xl font-extrabold text-asphalt tracking-headline">Other services</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <A to={servicePath(o.slug)} className="flex h-full items-center gap-4 border border-zinc-100 bg-white p-5 hover:border-washed-500/40 transition-colors">
                  <span className="w-11 h-11 shrink-0 bg-washed-50 text-washed-700 flex items-center justify-center"><Icon name={o.icon} className="w-6 h-6" /></span>
                  <span><span className="block font-bold text-asphalt">{o.name}</span><span className="block text-sm text-zinc-500">{o.bestFor}</span></span>
                </A>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Ready for your ${s.name.toLowerCase()} quote?`} body="Tell us about the surfaces in about two minutes and we'll send a clear, written quote." to={quote} cta="Get my free quote" />
    </>
  )
}
