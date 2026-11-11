import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { commercialHub, commercialPages, commercialPath, type CommercialPage } from '../lib/commercial'
import { COMMERCIAL_URL } from '../lib/paths'
import { site } from '../lib/site'
import { activeServiceIds, serviceBrands } from '../../serviceBrands'
import { A, Card, CheckItem, CtaBand, Eyebrow, Faqs, Icon, PageHero, SectionHeading } from '../ui'

export const commercialCrumbs = [{ name: 'Home', path: '/' }, { name: 'Commercial', path: '/commercial' }]

const commercialSite = (id: string) => `${COMMERCIAL_URL === '/' ? '' : COMMERCIAL_URL}/#${id}`

/** Other Swept divisions. Ones with their own website link there; the rest link to the commercial site. */
function SweptDivisions({ only }: { only?: string[] }) {
  const list = serviceBrands.filter((b) => b.id !== 'washed' && (!only || only.includes(b.id)))
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {list.map((b) => (
        <li key={b.id}>
          <a href={b.website?.url ?? commercialSite(b.id)} className="group flex h-full flex-col border border-zinc-100 bg-white p-5 hover:border-washed-500/40 transition-colors">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500">{b.name}</span>
            <span className="mt-1 font-bold text-asphalt">{b.label}</span>
            <span className="mt-2 text-sm text-zinc-500 leading-relaxed flex-1">{b.summary}</span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-washed-700">
              {b.website ? b.website.label : 'On the Swept website'} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function PropertyCard({ p }: { p: CommercialPage }) {
  return (
    <Card accent>
      <span className="w-11 h-11 bg-washed-50 text-washed-700 flex items-center justify-center mb-5"><Icon name={p.icon} className="w-6 h-6" /></span>
      <h3 className="text-base font-bold text-asphalt mb-1.5">{p.name}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed flex-1">{p.summary}</p>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold">
        <A to={commercialPath(p.slug)} className="text-washed-700 hover:text-asphalt">View service<span className="sr-only"> — {p.name}</span></A>
        <A to={`/quote?type=commercial&facility=${p.slug}`} className="inline-flex items-center gap-1 text-asphalt hover:text-washed-700">
          Get a quote<span className="sr-only"> for {p.name.toLowerCase()}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
        </A>
      </div>
    </Card>
  )
}

/** Property-type cards (also used on the Washed home page). */
export function CommercialCards({ pages }: { pages: CommercialPage[] }) {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4">
      {pages.map((p) => <li key={p.slug}><PropertyCard p={p} /></li>)}
    </ul>
  )
}

function ChecklistGrid({ groups }: { groups: { room: string; items: string[] }[] }) {
  return (
    <div className={`grid sm:grid-cols-2 ${groups.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
      {groups.map((g) => (
        <Card key={g.room}>
          <h3 className="text-base font-bold text-asphalt">{g.room}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">{g.items.map((i) => <CheckItem key={i}>{i}</CheckItem>)}</ul>
        </Card>
      ))}
    </div>
  )
}

export function CommercialHub() {
  const h = commercialHub
  return (
    <>
      <PageHero
        crumbs={commercialCrumbs}
        eyebrow="Commercial pressure cleaning"
        title="Commercial Pressure Cleaning, Backed by Swept."
        intro="Through Washed by Swept, we provide commercial pressure cleaning, wash-downs and graffiti removal for sites that need a deeper clean – from car parks, footpaths and building exteriors to loading docks, bin bays and resort complexes across the Gold Coast and South East Queensland."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to="/quote?type=commercial" className="btn-washed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#properties" className="btn-outline-light">Explore commercial pressure cleaning</a>
        </div>
      </PageHero>

      <section id="properties" className="section-pad bg-zinc-50" aria-labelledby="prop-h">
        <div className="section-container">
          <SectionHeading id="prop-h" eyebrow="Who we look after" title="Commercial pressure cleaning services" intro={h.intro} />
          <CommercialCards pages={commercialPages} />
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="c-suits-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow className="mb-5">Commercial and managed properties</Eyebrow>
            <h2 id="c-suits-h" className="display-md text-asphalt mb-8">Who it&apos;s for</h2>
            <ul className="space-y-4">{h.suits.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
          </div>
          <div>
            <Eyebrow className="mb-5">Your quote</Eyebrow>
            <h2 className="display-md text-asphalt mb-6">What your quote depends on</h2>
            <p className="text-zinc-600">Every site is different, so every quote is too. We look at:</p>
            <ul className="mt-5 space-y-3">
              {h.quoteFactors.map((t) => <li key={t} className="flex gap-3 text-zinc-600"><span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-washed-600" />{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="c-check-h">
        <div className="section-container">
          <SectionHeading id="c-check-h" eyebrow="Written scope" title="What's included" intro="Choose the tasks for your site. Your scope lists each one and how often it is done." />
          <ChecklistGrid groups={h.checklist} />
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="c-steps-h">
        <div className="section-container">
          <SectionHeading id="c-steps-h" eyebrow="How it works" title="From quote to a cleaner site" />
          <ol className="grid sm:grid-cols-3 gap-4">
            {h.steps.map((st, i) => (
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

      <section className="section-pad bg-zinc-50" aria-labelledby="div-h">
        <div className="section-container">
          <SectionHeading id="div-h" eyebrow="Part of Swept" title="More than pressure cleaning" intro="Washed by Swept is one of Swept’s commercial property services. For the rest of your site, the other Swept divisions can help through the same point of contact." />
          <SweptDivisions />
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="c-faq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="c-faq-h" className="display-md text-asphalt">Commercial pressure cleaning: common questions</h2>
            <A to="/quote?type=commercial" className="btn-washed mt-8">Get a Free Quote</A>
          </div>
          <Faqs faqs={h.faqs} />
        </div>
      </section>

      <CtaBand title="A cleaner site, on schedule." body={`Tell us about your property and we'll reply with a written scope and quote ${site.quoteResponse}.`} to="/quote?type=commercial" />
    </>
  )
}

export function CommercialPageView({ p }: { p: CommercialPage }) {
  const crumbs = [...commercialCrumbs, { name: p.name, path: commercialPath(p.slug) }]
  const quote = `/quote?type=commercial&facility=${p.slug}`
  return (
    <>
      <PageHero crumbs={crumbs} eyebrow="Commercial pressure cleaning" title={p.h1} intro={p.intro}>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <A to={quote} className="btn-washed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          <a href="#checklist" className="btn-outline-light">What&apos;s included</a>
        </div>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="p-suits-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Eyebrow className="mb-5">Who it&apos;s for</Eyebrow>
            <h2 id="p-suits-h" className="display-md text-asphalt mb-8">{p.name} we look after</h2>
            <ul className="space-y-4">{p.suits.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
          </div>
          <div>
            <Eyebrow className="mb-5">In short</Eyebrow>
            <p className="text-xl text-asphalt font-semibold leading-relaxed">{p.summary}</p>
            <p className="mt-6 text-zinc-600 leading-relaxed">Your quote depends on the areas and surfaces, their size and condition, how often each is cleaned, and access, water supply, run-off and operating hours. You&apos;ll get a written scope and quote before anything is booked.</p>
          </div>
        </div>
      </section>

      <section id="checklist" className="section-pad bg-zinc-50" aria-labelledby="p-check-h">
        <div className="section-container">
          <SectionHeading id="p-check-h" eyebrow="Written scope" title="What's included" intro="Every site gets a written scope we agree with you before the first visit." />
          <ChecklistGrid groups={p.checklist} />
        </div>
      </section>

      {p.divisions.some((d) => activeServiceIds.has(d)) && (
        <section className="section-pad bg-white" aria-labelledby="p-div-h">
          <div className="section-container">
            <SectionHeading id="p-div-h" eyebrow="Also from Swept" title="Related Swept services" intro="Specialist services for the rest of the site, through the same point of contact." />
            <SweptDivisions only={p.divisions} />
          </div>
        </section>
      )}

      <section className="section-pad bg-zinc-50" aria-labelledby="p-faq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="p-faq-h" className="display-md text-asphalt">Common questions</h2>
            <A to={quote} className="btn-washed mt-8">Get a Free Quote</A>
          </div>
          <Faqs faqs={p.faqs} />
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="p-more-h">
        <div className="section-container">
          <h2 id="p-more-h" className="text-2xl font-extrabold text-asphalt tracking-headline">More commercial pressure cleaning</h2>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4">
            {commercialPages.filter((o) => o.slug !== p.slug).map((o) => (
              <li key={o.slug}>
                <A to={commercialPath(o.slug)} className="flex h-full items-center gap-3 border border-zinc-100 bg-white p-5 font-bold text-asphalt hover:border-washed-500/40 transition-colors">
                  <Icon name={o.icon} className="w-5 h-5 shrink-0 text-washed-600" />{o.name}
                </A>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={`Get a quote for ${p.name.toLowerCase()}.`} body={`Tell us about your property and we'll reply with a written scope and quote ${site.quoteResponse}.`} to={quote} />
    </>
  )
}
