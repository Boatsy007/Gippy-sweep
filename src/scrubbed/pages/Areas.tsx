import { ArrowRight } from 'lucide-react'
import { areas, areaPath, suburbCount, suburbsIn, type Area } from '../lib/areas'
import { services, servicePath } from '../lib/services'
import { A, Card, CtaBand, Faqs, Icon, PageHero, SectionHeading } from '../ui'

export const areasCrumbs = [{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas' }]

const areaIcons: Record<string, string> = { brisbane: 'city', logan: 'warehouse', 'gold-coast': 'palm', 'tweed-heads': 'wave' }

export function AreasIndex() {
  return (
    <>
      <PageHero
        crumbs={areasCrumbs}
        eyebrow="Areas we service"
        title={<>Commercial floor scrubbing in Brisbane, Logan, the Gold Coast &amp; Tweed Heads</>}
        intro={`Warehouses, factories, shopping centres and commercial premises across four regions and ${suburbCount} suburbs – along the South East Queensland corridor and over the border into Tweed Heads.`}
      />
      <section className="section-pad bg-zinc-50" aria-label="Regions">
        <div className="section-container">
          <ol className="grid md:grid-cols-2 gap-4">
            {areas.map((a, i) => (
              <li key={a.slug}>
                <A to={areaPath(a.slug)} className="group flex h-full gap-5 border border-zinc-100 bg-white p-6 sm:p-8 hover:border-scrubbed-500/40 transition-colors">
                  <span className="w-14 h-14 shrink-0 bg-scrubbed-600 text-white flex items-center justify-center"><Icon name={areaIcons[a.slug]} className="w-8 h-8" /></span>
                  <span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-scrubbed-700">{String(i + 1).padStart(2, '0')} · {a.state}</span>
                    <span className="mt-1 block text-2xl font-extrabold tracking-headline text-asphalt group-hover:text-scrubbed-700">{a.name}</span>
                    <span className="mt-2 block text-sm text-zinc-500">Including {a.precincts.slice(0, 4).join(', ')}</span>
                  </span>
                </A>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function AreaPage({ a }: { a: Area }) {
  const crumbs = [...areasCrumbs, { name: a.name, path: areaPath(a.slug) }]
  const list = suburbsIn(a.slug)
  const groups = [...new Set(list.map((sb) => sb.group))].map((g) => ({ name: g, suburbs: list.filter((sb) => sb.group === g) }))
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={a.state === 'NSW' ? 'Across the border · NSW' : 'South East Queensland'}
        title={a.h1}
        intro={a.intro}
        aside={
          <nav aria-label={`Services in ${a.name}`} className="bg-white p-6 sm:p-8 shadow-2xl">
            <h2 className="text-lg font-bold text-asphalt">Services in {a.name}</h2>
            <ul className="mt-3 divide-y divide-zinc-100">
              {services.map((s) => (
                <li key={s.slug}>
                  <A to={servicePath(s.slug)} className="flex items-center gap-3 py-3 text-sm font-semibold text-asphalt hover:text-scrubbed-700">
                    <Icon name={s.icon} className="w-5 h-5 text-scrubbed-600" />{s.name}<ArrowRight className="ml-auto w-4 h-4" aria-hidden="true" />
                  </A>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <A to={`/quote?suburb=${encodeURIComponent(a.name)}`} className="btn-scrubbed mt-10">Get a quote in {a.name} <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="local-h">
        <div className="section-container">
          <SectionHeading id="local-h" eyebrow="Local know-how" title={`Commercial floors in ${a.name}: what to know`} />
          <div className={`grid gap-4 ${a.notes.length > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {a.notes.map((n) => (
              <Card key={n.title}>
                <h3 className="text-base font-bold text-asphalt">{n.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{n.body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-10 border border-scrubbed-100 bg-scrubbed-50 p-6">
            <h3 className="text-base font-bold text-asphalt">Industrial and commercial areas in {a.name}</h3>
            <p className="mt-2 text-sm text-zinc-600">{a.precincts.join(' · ')}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="suburbs-h">
        <div className="section-container">
          <SectionHeading id="suburbs-h" eyebrow={`${list.length} suburbs`} title={`Suburbs we service in ${a.name}`} intro="Don't see your site's suburb? Request a quote and we'll confirm whether we can reach you." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((g) => (
              <Card key={g.name}>
                <h3 className="flex items-center gap-2 text-base font-bold text-asphalt"><Icon name="pin" className="w-5 h-5 text-scrubbed-600" />{g.name}</h3>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{g.suburbs.map((sb) => `${sb.name} ${sb.postcode}`).join(', ')}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="afaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="afaq-h" className="display-md text-asphalt">{a.name} floor scrubbing FAQs</h2>
            <p className="mt-4"><A to="/faq" className="font-semibold text-scrubbed-700 underline underline-offset-4">More questions</A></p>
          </div>
          <Faqs faqs={a.faqs} />
        </div>
      </section>

      <section className="section-container pb-20" aria-label="Other areas">
        <p className="font-bold text-asphalt">Other areas we service:</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {areas.filter((o) => o.slug !== a.slug).map((o) => (
            <li key={o.slug}><A to={areaPath(o.slug)} className="inline-flex border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-asphalt hover:border-scrubbed-500">Floor scrubbing {o.name}</A></li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Get a floor scrubbing quote in ${a.name}`} body="Tell us about your site and we'll send a written scope and quote." to={`/quote?suburb=${encodeURIComponent(a.name)}`} />
    </>
  )
}
