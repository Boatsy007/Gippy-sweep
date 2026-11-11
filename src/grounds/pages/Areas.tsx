import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { areas, areaPath, type Area } from '../lib/areas'
import { areaFor, housing, nearby, stateName, suburbPath, suburbsIn, type Suburb } from '../lib/suburbs'
import { services, servicePath } from '../lib/services'
import type { Faq } from '../lib/types'
import { site, trustLabel } from '../lib/site'
import { profiles, profilesFor, servicesFor } from '../lib/profiles'
import { href } from '../lib/paths'
import { A, Card, CheckItem, CtaBand, Faqs, Icon, PageHero, SectionHeading } from '../ui'

export const areasCrumbs = [{ name: 'Home', path: '/' }, { name: 'Residential', path: '/residential' }, { name: 'Areas', path: '/residential/areas' }]

const anchor = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const areaIcons: Record<string, string> = { brisbane: 'city', logan: 'trees', 'gold-coast': 'palm', 'tweed-heads': 'wave' }

/** Small quote starter: a plain GET form into the full quote page, so it works without JavaScript. */
function QuoteStarter({ suburb, title = 'Get a free quote' }: { suburb?: string; title?: string }) {
  return (
    <form action={href('/quote')} method="get" className="bg-white p-6 sm:p-8 shadow-2xl">
      <h2 className="text-xl font-extrabold text-asphalt tracking-headline">{title}</h2>
      <p className="mt-2 text-sm text-zinc-500">Choose a service and we&apos;ll take you to the two-minute quote form.</p>
      <label htmlFor="qs-service" className="mt-5 block text-xs font-semibold text-zinc-600 mb-2">Service</label>
      <select id="qs-service" name="service" className="w-full border border-zinc-200 bg-white px-4 py-3 text-sm text-asphalt focus:outline-none focus:border-grounds-500 focus:ring-1 focus:ring-grounds-500">
        {services.map((s) => <option key={s.slug} value={s.slug}>{s.label}</option>)}
      </select>
      {suburb && <input type="hidden" name="suburb" value={suburb} />}
      <button type="submit" className="btn-grounds w-full justify-center mt-5">Start my quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></button>
      <p className="mt-4 text-xs text-zinc-500">Written quote {site.quoteResponse}. No lock-in contracts.</p>
    </form>
  )
}

export function AreasIndex() {
  return (
    <>
      <PageHero
        crumbs={areasCrumbs}
        eyebrow="Areas we service"
        title={<>Lawn and garden care in Brisbane, Logan, the Gold Coast &amp; Tweed Heads</>}
        intro="One standard of grounds care along the South East Queensland corridor – and across the border into Tweed Heads."
      />
      <section className="section-pad bg-zinc-50" aria-label="Regions">
        <div className="section-container">
          <ol className="grid md:grid-cols-2 gap-4">
            {areas.map((a, i) => (
              <li key={a.slug}>
                <A to={areaPath(a.slug)} className="group flex h-full gap-5 border border-zinc-100 bg-white p-6 sm:p-8 hover:border-grounds-500/40 transition-colors">
                  <span className="w-14 h-14 shrink-0 bg-grounds-600 text-white flex items-center justify-center"><Icon name={areaIcons[a.slug]} className="w-8 h-8" /></span>
                  <span>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-grounds-700">{String(i + 1).padStart(2, '0')} · {a.state}</span>
                    <span className="mt-1 block text-2xl font-extrabold tracking-headline text-asphalt group-hover:text-grounds-700">{a.name}</span>
                    <span className="mt-2 block text-sm text-zinc-500">{suburbsIn(a.slug).slice(0, 6).map((sb) => sb.name).join(', ')} and {suburbsIn(a.slug).length - 6} more</span>
                  </span>
                </A>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section-pad bg-white" aria-labelledby="dir-h">
        <div className="section-container">
          <SectionHeading id="dir-h" eyebrow="Suburb directory" title="Every suburb we service" />
          <div className="grid md:grid-cols-2 gap-10">
            {areas.map((a) => (
              <div key={a.slug}>
                <h3 className="text-xl font-bold text-asphalt"><A to={areaPath(a.slug)} className="hover:text-grounds-700">Lawn mowing {a.name}</A></h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {suburbsIn(a.slug).map((sb) => (
                    <li key={sb.slug}><A to={suburbPath(sb)} className="inline-flex bg-grounds-50 px-3 py-1 text-sm font-medium text-grounds-700 hover:bg-grounds-600 hover:text-white transition-colors">{sb.name} {sb.postcode}</A></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
                  <A to={servicePath(s.slug)} className="flex items-center gap-3 py-3 text-sm font-semibold text-asphalt hover:text-grounds-700">
                    <Icon name={s.icon} className="w-5 h-5 text-grounds-600" />{s.name}<ArrowRight className="ml-auto w-4 h-4" aria-hidden="true" />
                  </A>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <A to={`/quote?suburb=${encodeURIComponent(a.name)}`} className="btn-grounds mt-10">Get a quote in {a.name} <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="local-h">
        <div className="section-container">
          <SectionHeading id="local-h" eyebrow="Local know-how" title={`Lawns and gardens in ${a.name}: what to know`} />
          <div className="grid md:grid-cols-3 gap-4">
            {a.notes.map((n) => (
              <Card key={n.title}>
                <h3 className="text-base font-bold text-asphalt">{n.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{n.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="suburbs-h">
        <div className="section-container">
          <SectionHeading id="suburbs-h" eyebrow={`${list.length} suburbs`} title={`Suburbs we service in ${a.name}`} intro="Choose your suburb for local lawn and garden details and a quote form ready to go. Don't see yours? Request a quote and we'll confirm." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {groups.map((g) => (
              <div key={g.name} id={anchor(g.name)} className="scroll-mt-28">
                <Card>
                  <h3 className="flex items-center gap-2 text-base font-bold text-asphalt"><Icon name="pin" className="w-5 h-5 text-grounds-600" />{g.name}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.suburbs.map((sb) => (
                      <li key={sb.slug}>
                        <A to={suburbPath(sb)} className="inline-flex bg-grounds-50 px-3 py-1 text-sm font-medium text-grounds-700 hover:bg-grounds-600 hover:text-white transition-colors">
                          {sb.name}<span className="sr-only"> lawn mowing and gardening</span>
                        </A>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="afaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="afaq-h" className="display-md text-asphalt">{a.name} lawn and garden FAQs</h2>
            <p className="mt-4"><A to="/faq" className="font-semibold text-grounds-700 underline underline-offset-4">More questions</A></p>
          </div>
          <Faqs faqs={a.faqs} />
        </div>
      </section>

      <section className="section-container pb-20" aria-label="Other areas">
        <p className="font-bold text-asphalt">Other areas we service:</p>
        <ul className="mt-4 flex flex-wrap gap-3">
          {areas.filter((o) => o.slug !== a.slug).map((o) => (
            <li key={o.slug}><A to={areaPath(o.slug)} className="inline-flex border border-zinc-200 bg-white px-5 py-2 text-sm font-semibold text-asphalt hover:border-grounds-500">Lawn mowing {o.name}</A></li>
          ))}
        </ul>
      </section>

      <CtaBand title={`Get a lawn and garden quote in ${a.name}`} body="Tell us about your yard and we'll send a clear, written quote." to={`/quote?suburb=${encodeURIComponent(a.name)}`} />
    </>
  )
}

/** FAQs for a suburb page. */
export function suburbFaqs(s: Suburb): Faq[] {
  const a = areaFor(s)
  const near = nearby(s)
  const nsw = a.state === 'NSW'
  const keys = profilesFor(s)
  return [
    {
      q: `Do you mow lawns in ${s.name}?`,
      a: `Yes. Grounds by Swept looks after lawns and gardens in ${s.name} ${a.state} ${s.postcode}, along with nearby suburbs such as ${near.slice(0, 3).map((n) => n.name).join(', ')}. Request a quote online and we'll confirm.`,
    },
    {
      q: `What lawn and garden services do you offer in ${s.name}?`,
      a: `Lawn mowing and edging, garden maintenance and weeding, hedge and shrub trimming, pruning and small tree work, mulching, turf laying and lawn repair, fertilising and weed control, green waste removal and yard clean-ups – as regular visits or one-off jobs.`,
    },
    {
      q: `How is a quote worked out in ${s.name}?`,
      a: `Every yard is different, so we quote each one. It depends on the size of the lawn and garden areas, what is included, how often we visit, access and the amount of green waste. You'll get a written quote ${site.quoteResponse}, before anything is booked.`,
    },
    ...keys.slice(0, 2).map((k) => profiles[k].faq({ s: s.name, nsw })),
    {
      q: `Which council area is ${s.name} in?`,
      a: `${s.name} (postcode ${s.postcode}) is in the ${s.council} area${nsw ? ', New South Wales, just across the border from Coolangatta' : `, ${stateName(a.state)}`}. For green waste bins, local tree rules and water restrictions, check with ${s.council}.${nsw ? ' From October to April NSW runs on daylight saving time, so we confirm your booking in NSW time.' : ''}`,
    },
  ]
}

export function SuburbPage({ s }: { s: Suburb }) {
  const a = areaFor(s)
  const near = nearby(s)
  const nsw = a.state === 'NSW'
  const keys = profilesFor(s)
  const local = keys.slice(0, 3).map((k) => ({ k, ...profiles[k] }))
  const suits = servicesFor(s, keys).map((x) => ({ ...x, sv: services.find((v) => v.slug === x.slug)! }))
  const crumbs = [...areasCrumbs, { name: a.name, path: areaPath(a.slug) }, { name: s.name, path: suburbPath(s) }]
  const facts: [string, ReactNode][] = [
    ['Suburb', `${s.name}, ${stateName(a.state)}`],
    ['Postcode', s.postcode],
    ['Council', s.council],
    ['Region', <A key="r" to={areaPath(a.slug)} className="font-semibold text-grounds-700 underline underline-offset-2">{a.name}</A>],
    ['Services', 'Mowing, gardens, hedges, pruning, mulching, turf, weed control, green waste and clean-ups'],
    ['Visit frequency', 'Weekly, fortnightly, monthly, seasonal or one-off'],
    ['Green waste', 'Mulched in, bagged for your bin or taken away'],
    ['Quote turnaround', `Written quote ${site.quoteResponse}`],
  ]
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow={<>{s.name} {a.state} {s.postcode} · {s.council}</>}
        title={<>Lawn mowing and garden care in {s.name}</>}
        intro={<>Grounds by Swept offers lawn mowing, garden maintenance, hedge trimming and yard clean-ups for homes in {s.name} and the surrounding {s.group === s.name ? a.name : s.group} suburbs, plus grounds maintenance for local strata and commercial properties. Choose regular visits or a one-off job – no lock-in contract.</>}
        aside={<QuoteStarter suburb={`${s.name} ${s.postcode}`} title={`Get a quote in ${s.name}`} />}
      >
        <div className="mt-8 border border-white/15 bg-white/5 p-5">
          <h2 className="flex items-center gap-2 text-base font-bold text-white"><Icon name="home" className="w-5 h-5 text-grounds-300" />Homes in {s.name}</h2>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{housing(s)}</p>
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
          {['Free, no-obligation quote', 'No lock-in contracts', 'Agreed scope every visit', trustLabel() ?? `Reply ${site.quoteResponse}`].map((t) => (
            <CheckItem key={t} dark>{t}</CheckItem>
          ))}
        </ul>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="glance-h">
        <div className="section-container grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <h2 id="glance-h" className="display-md text-asphalt">{s.name} at a glance</h2>
            <dl className="mt-8 divide-y divide-zinc-100 border border-zinc-100 bg-white">
              {facts.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[9.5rem_1fr] sm:grid-cols-[12rem_1fr] gap-4 px-5 py-3.5 text-sm">
                  <dt className="font-bold text-asphalt">{k}</dt>
                  <dd className="text-zinc-600">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:pt-20">
            <Card accent>
              <h2 className="text-lg font-bold text-asphalt">Lawns and gardens across {a.name}</h2>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {s.name} is one of {suburbsIn(a.slug).length} {a.name} suburbs we service. For what to know about {a.name} yards – from {a.notes.map((n) => n.title.toLowerCase()).slice(0, 2).join(' to ')} – see our <A to={areaPath(a.slug)} className="font-semibold text-grounds-700 underline underline-offset-2">{a.name} lawn and garden page</A>.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {local.length > 0 && (
        <section className="section-pad bg-zinc-50" aria-labelledby="local-h">
          <div className="section-container">
            <SectionHeading id="local-h" eyebrow="Local know-how" title={`${s.name} yards: what to plan for`} intro={`Every suburb has its own mix of homes and gardens. Here's what we plan for in ${s.name}, and what to mention when you ask for a quote.`} />
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {local.map((p) => (
                <li key={p.k}>
                  <Card>
                    <span className="w-11 h-11 bg-grounds-50 text-grounds-700 flex items-center justify-center"><Icon name={p.icon} className="w-6 h-6" /></span>
                    <h3 className="mt-4 text-base font-bold text-asphalt">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-zinc-500 leading-relaxed">{p.body({ s: s.name, nsw })}</p>
                    <p className="mt-4 bg-grounds-50 px-4 py-3 text-sm text-zinc-600"><strong className="text-asphalt">Tell us:</strong> {p.tellUs.toLowerCase()}.</p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section-pad bg-white" aria-labelledby="suits-h">
        <div className="section-container">
          <SectionHeading id="suits-h" eyebrow="Recommended" title={`Which service suits your ${s.name} yard?`} />
          <ol className="grid lg:grid-cols-3 gap-4">
            {suits.map(({ slug, why, sv }, i) => (
              <li key={slug}>
                <Card accent={i === 0}>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-grounds-700">{i === 0 ? 'Best fit' : i === 1 ? 'Also suits' : 'Also available'}</p>
                  <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-asphalt"><Icon name={sv.icon} className="w-6 h-6 text-grounds-600" />{sv.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{why}</p>
                  <p className="mt-4 text-sm font-semibold text-asphalt">Includes</p>
                  <ul className="mt-2 flex-1 space-y-1.5 text-sm">
                    {sv.checklist.flatMap((c) => c.items.slice(0, 1)).slice(0, 4).map((t) => <CheckItem key={t}>{t}</CheckItem>)}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    <A to={`/quote?service=${slug}&suburb=${encodeURIComponent(s.name)}`} className="text-grounds-700 underline underline-offset-2">Get a quote<span className="sr-only"> for {sv.name.toLowerCase()} in {s.name}</span></A>
                    <A to={servicePath(slug)} className="text-asphalt underline underline-offset-2">What&apos;s included<span className="sr-only"> in {sv.name.toLowerCase()}</span></A>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="svc-h">
        <div className="section-container">
          <SectionHeading id="svc-h" eyebrow="Everything we offer" title={`Lawn and garden services in ${s.name}`} />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((sv) => (
              <li key={sv.slug}>
                <Card>
                  <Icon name={sv.icon} className="w-8 h-8 text-grounds-600" />
                  <h3 className="mt-3 flex-1 text-base font-bold text-asphalt">{sv.name} in {s.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                    <A to={`/quote?service=${sv.slug}&suburb=${encodeURIComponent(s.name)}`} className="text-grounds-700 underline underline-offset-2">Get a quote<span className="sr-only"> for {sv.name.toLowerCase()} in {s.name}</span></A>
                    <A to={servicePath(sv.slug)} className="text-asphalt underline underline-offset-2">What&apos;s included<span className="sr-only"> in {sv.name.toLowerCase()}</span></A>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="sfaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <h2 id="sfaq-h" className="display-md text-asphalt">Lawn mowing in {s.name}: FAQs</h2>
          <Faqs faqs={suburbFaqs(s)} />
        </div>
      </section>

      <section className="section-container pb-20" aria-labelledby="near-h">
        <h2 id="near-h" className="text-2xl font-extrabold text-asphalt tracking-headline">We also service near {s.name}</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {near.map((n) => (
            <li key={n.slug}>
              <A to={suburbPath(n)} className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-asphalt hover:border-grounds-500">
                <Icon name="pin" className="w-4 h-4 text-grounds-600" />{n.name}
              </A>
            </li>
          ))}
          <li><A to={areaPath(a.slug)} className="inline-flex items-center gap-2 bg-grounds-600 px-4 py-2 text-sm font-semibold text-white hover:bg-grounds-700">All {a.name} suburbs</A></li>
        </ul>
      </section>

      <CtaBand title={`A tidier yard in ${s.name}, on schedule.`} body="Tell us about your yard and we'll send a clear, written quote." to={`/quote?suburb=${encodeURIComponent(s.name)}`} />
    </>
  )
}
