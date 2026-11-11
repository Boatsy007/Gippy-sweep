import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services, servicePath, type Service } from '../lib/services'
import { areas, areaPath } from '../lib/areas'
import { site, trustLabel } from '../lib/site'
import { floorTypes, method } from '../lib/content'
import { COMMERCIAL_URL } from '../lib/paths'
import { serviceBrands } from '../../serviceBrands'
import { A, Card, CheckItem, CtaBand, Eyebrow, Faqs, Icon, PageHero, SectionHeading } from '../ui'

export const servicesCrumbs = [{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]

const commercialSite = (id: string) => `${COMMERCIAL_URL === '/' ? '' : COMMERCIAL_URL}/#${id}`

/** Other Swept divisions: their own website where they have one, otherwise the commercial site. */
export function SweptDivisions({ only }: { only?: string[] }) {
  const list = serviceBrands.filter((b) => b.id !== 'scrubbed' && (!only || only.includes(b.id)))
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((b) => (
        <li key={b.id}>
          <a href={b.website?.url ?? commercialSite(b.id)} className="group flex h-full flex-col border border-zinc-100 bg-white p-5 hover:border-scrubbed-500/40 transition-colors">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">{b.name}</span>
            <span className="mt-1 font-bold text-asphalt">{b.label}</span>
            <span className="mt-2 text-sm text-zinc-500 leading-relaxed flex-1">{b.summary}</span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-scrubbed-700">
              {b.website ? b.website.label : 'On the Swept website'} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Card accent>
      <span className="w-11 h-11 bg-scrubbed-50 text-scrubbed-700 flex items-center justify-center mb-5"><Icon name={s.icon} className="w-6 h-6" /></span>
      <h3 className="text-base font-bold text-asphalt mb-1.5">{s.name}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold">
        <A to={servicePath(s.slug)} className="text-scrubbed-700 hover:text-asphalt transition-colors duration-150">
          View service<span className="sr-only"> — {s.name}</span>
        </A>
        <A to={`/quote?facility=${s.slug}`} className="inline-flex items-center gap-1 text-asphalt hover:text-scrubbed-700 transition-colors duration-150">
          Get a quote<span className="sr-only"> for {s.name.toLowerCase()}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </A>
      </div>
    </Card>
  )
}

/** How a scrubber-drier cleans. */
export function Method({ tinted = false }: { tinted?: boolean }) {
  return (
    <section id="method" className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'}`} aria-labelledby="method-heading">
      <div className="section-container">
        <SectionHeading id="method-heading" eyebrow="Scrub and dry in one pass" title="How machine floor scrubbing works" intro="A scrubber-drier washes, scrubs and recovers the water in a single pass, so floors are cleaner than with a mop and back in use sooner." />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {method.map((m, i) => (
            <li key={m.title}>
              <Card>
                <span className="text-5xl font-extrabold tracking-tightest leading-none text-scrubbed-100 mb-4">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-base font-bold text-asphalt">{m.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{m.body}</p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/** Matching pads and solutions to the floor. */
export function FloorTypes({ tinted = false }: { tinted?: boolean }) {
  return (
    <section id="floors" className={`section-pad ${tinted ? 'bg-zinc-50' : 'bg-white'}`} aria-labelledby="floors-heading">
      <div className="section-container">
        <SectionHeading id="floors-heading" eyebrow="Every floor is different" title="The right pad and solution for the floor" intro="Aggressive pads and harsh chemicals can scratch coatings, dull polished concrete and wear vinyl. The floor decides the method." />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {floorTypes.map((f) => (
            <li key={f.name}>
              <Card>
                <span className="w-11 h-11 bg-scrubbed-50 text-scrubbed-700 flex items-center justify-center"><Icon name={f.icon} className="w-6 h-6" /></span>
                <h3 className="mt-4 text-base font-bold text-asphalt">{f.name}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{f.body}</p>
              </Card>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-zinc-500">A general guide only – we check each floor and any manufacturer guidance before we start.</p>
      </div>
    </section>
  )
}

export function ServicesHub() {
  return (
    <>
      <PageHero
        crumbs={servicesCrumbs}
        eyebrow="Commercial floor scrubbing"
        title="Commercial Floor Scrubbing for Cleaner Hard Floors."
        intro="Through Scrubbed by Swept, we provide machine floor scrubbing for warehouses, industrial facilities, shopping centres and commercial hard floors across the Gold Coast and South East Queensland – from one-off deep cleans to scheduled floor maintenance."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to="/quote" className="btn-scrubbed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#services" className="btn-outline-light">Explore services</a>
        </div>
      </PageHero>

      <section id="services" className="section-pad bg-zinc-50" aria-labelledby="svc-heading">
        <div className="section-container">
          <SectionHeading id="svc-heading" eyebrow="Our services" title="Floor scrubbing services" intro="Choose the service closest to your site. Many sites combine a one-off deep clean with a scheduled program." />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
            {services.map((s) => <li key={s.slug}><ServiceCard s={s} /></li>)}
          </ul>
        </div>
      </section>

      <Method />
      <FloorTypes tinted />

      <section className="section-pad bg-white" aria-labelledby="div-h">
        <div className="section-container">
          <SectionHeading id="div-h" eyebrow="Part of Swept" title="More than floor scrubbing" intro="Scrubbed by Swept is one of six Swept commercial property services. For the rest of your site, the other Swept divisions can help through the same point of contact." />
          <SweptDivisions />
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function ServicePage({ s }: { s: Service }) {
  const crumbs = [...servicesCrumbs, { name: s.name, path: servicePath(s.slug) }]
  const quote = `/quote?facility=${s.slug}`
  const others = services.filter((o) => o.slug !== s.slug)
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow={s.bestFor} title={s.h1} intro={s.intro}>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to={quote} className="btn-scrubbed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#checklist" className="btn-outline-light">What&apos;s included</a>
        </div>
        <p className="mt-6 text-sm text-white/60">
          Written quote {site.quoteResponse}{trustLabel() ? ` · ${trustLabel()}` : ''} · Brisbane, Logan, Gold Coast &amp; Tweed Heads
        </p>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="suits-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow className="mb-5">Who it&apos;s for</Eyebrow>
            <h2 id="suits-h" className="display-md text-asphalt mb-8">Sites we scrub</h2>
            <ul className="space-y-4">{s.suits.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
          </div>
          <div>
            <Eyebrow className="mb-5">Your quote</Eyebrow>
            <h2 className="display-md text-asphalt mb-6">What your quote depends on</h2>
            <p className="text-zinc-600">Every site is different, so every quote is too. We look at:</p>
            <ul className="mt-5 space-y-3">
              {s.quoteFactors.map((t) => <li key={t} className="flex gap-3 text-zinc-600"><span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-scrubbed-600" />{t}</li>)}
            </ul>
            <p className="mt-6 text-zinc-600">You&apos;ll get a written scope and quote before anything is booked.</p>
          </div>
        </div>
      </section>

      <section id="checklist" className="section-pad bg-zinc-50" aria-labelledby="check-h">
        <div className="section-container">
          <SectionHeading id="check-h" eyebrow="Written scope" title={`What's included in ${s.name.toLowerCase()}`} intro="The tasks we can include. Your scope lists exactly which areas are scrubbed and how often." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <SectionHeading id="tips-h" eyebrow="Good to know" title={`${s.name}: practical notes`} />
          <ul className={`grid ${s.tips.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
            {s.tips.map((t) => (
              <li key={t.title}>
                <Card>
                  <Icon name="droplets" className="w-7 h-7 text-scrubbed-600" />
                  <h3 className="mt-4 text-base font-bold text-asphalt">{t.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{t.body}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Method tinted />

      {s.divisions.length > 0 && (
        <section className="section-pad bg-white" aria-labelledby="p-div-h">
          <div className="section-container">
            <SectionHeading id="p-div-h" eyebrow="Also from Swept" title="Related Swept services" intro="Specialist services for the rest of the site, through the same point of contact." />
            <SweptDivisions only={s.divisions} />
          </div>
        </section>
      )}

      <section className="section-pad bg-zinc-50" aria-labelledby="sfaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="sfaq-h" className="display-md text-asphalt">{s.name}: common questions</h2>
            <A to={quote} className="btn-scrubbed mt-8">Get a Free Quote</A>
          </div>
          <Faqs faqs={s.faqs} />
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="where-h">
        <div className="section-container">
          <h2 id="where-h" className="text-2xl font-extrabold text-asphalt tracking-headline">{s.name} near you</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {areas.map((a) => (
              <li key={a.slug}>
                <A to={areaPath(a.slug)} className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-asphalt hover:border-scrubbed-500 transition-colors">
                  <Icon name="pin" className="w-4 h-4 text-scrubbed-600" />{a.name}
                </A>
              </li>
            ))}
          </ul>
          <h2 className="mt-16 text-2xl font-extrabold text-asphalt tracking-headline">Other services</h2>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <A to={servicePath(o.slug)} className="flex h-full items-center gap-4 border border-zinc-100 bg-white p-5 hover:border-scrubbed-500/40 transition-colors">
                  <span className="w-11 h-11 shrink-0 bg-scrubbed-50 text-scrubbed-700 flex items-center justify-center"><Icon name={o.icon} className="w-6 h-6" /></span>
                  <span><span className="block font-bold text-asphalt">{o.name}</span><span className="block text-sm text-zinc-500">{o.bestFor}</span></span>
                </A>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Get a quote for ${s.name.toLowerCase()}.`} body={`Tell us about your site and we'll reply with a written scope and quote ${site.quoteResponse}.`} to={quote} cta="Get my free quote" />
    </>
  )
}
