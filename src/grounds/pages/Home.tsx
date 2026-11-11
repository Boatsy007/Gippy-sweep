import { ArrowRight, ChevronDown } from 'lucide-react'
import { services } from '../lib/services'
import { commercialPages } from '../lib/commercial'
import { suburbs } from '../lib/suburbs'
import { areas } from '../lib/areas'
import { generalFaqs, howItWorks, regions } from '../lib/content'
import { site, trustLabel } from '../lib/site'
import { A, CheckItem, Eyebrow, Faqs, Icon, SectionHeading } from '../ui'
import { Checklists, Schedules, Seasons, ServiceCard } from './Residential'
import { CommercialCards } from './Commercial'

const headline = ['Lawns, Gardens', 'and Grounds,', 'Looked After.']

/** Mown-lawn stripes – a decorative stand-in until real Grounds photography is added. */
export function LawnStripes({ className = '' }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ background: 'repeating-linear-gradient(115deg, #1B5E20 0 64px, #2E7D32 64px 128px)' }}
      aria-hidden="true"
    />
  )
}

/** Hero – same structure as the Swept commercial hero (src/components/sections/Hero.tsx). */
function Hero() {
  return (
    <section className="relative min-h-screen bg-asphalt overflow-hidden flex flex-col" aria-label="Hero">
      <div className="absolute inset-0 lg:left-1/2 z-0 overflow-hidden">
        <div className="absolute -inset-8 animate-ken-burns transform-gpu will-change-transform">
          <LawnStripes className="w-full h-full" />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(181,230,29,0.18), transparent 60%)' }} />
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, #111827, transparent)' }} />
        <div className="absolute inset-0 z-10 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.8) 55%, rgba(17,24,39,0.6) 100%)' }} />
        <div className="absolute inset-0 z-20 hidden lg:flex items-center justify-center pointer-events-none">
          <img src="/logo-grounds-white.webp" alt="" width={534} height={160} className="w-[min(70%,420px)] h-auto opacity-90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-[3px] bg-grounds-500 z-30" aria-hidden="true" />

      <div className="section-container w-full flex-1 flex items-center relative z-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="flex flex-col justify-center">
            <Eyebrow dark className="mb-8">Residential &amp; commercial grounds care</Eyebrow>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[4.25rem] font-extrabold tracking-tightest leading-none uppercase text-white" aria-label="Lawns, gardens and grounds, looked after.">
              {headline.map((line, i) => <span key={line} className={i === headline.length - 1 ? 'block text-grounds-400' : 'block'}>{line}</span>)}
            </h1>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-md">
              Lawn mowing, garden maintenance, hedge trimming and yard clean-ups for homes, and scheduled grounds
              maintenance for strata, commercial and managed properties across Brisbane, Logan, the Gold Coast and Tweed Heads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <A to="/quote" className="btn-grounds">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
              <a href="#choose" className="btn-outline-light">Homes or commercial?</a>
            </div>
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { value: String(suburbs.length), label: 'Suburbs serviced' },
                { value: String(services.length), label: 'Lawn & garden services' },
                { value: '1 day', label: 'Written quote turnaround' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-white tracking-tightest leading-none">{s.value}</p>
                  <p className="text-xs text-white/60 tracking-widest uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-30" aria-hidden="true">
        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/60" />
      </div>
    </section>
  )
}

/** Homes or commercial, straight after the hero. */
function Choose() {
  const cards = [
    {
      eyebrow: 'For your home',
      title: 'Residential Lawn & Garden',
      body: 'Lawn mowing, garden care, hedges, pruning, mulching, turf and clean-ups for houses, townhouses and acreage.',
      to: '/residential',
      cta: 'Explore Home Lawn & Garden',
      icon: 'home',
      points: ['Weekly, fortnightly, monthly or seasonal', 'One-off clean-ups and mulch refreshes', 'Green waste handled your way'],
    },
    {
      eyebrow: 'For your property',
      title: 'Commercial Grounds',
      body: 'Scheduled grounds maintenance for strata complexes, commercial and industrial sites, retail centres, car parks and rentals.',
      to: '/commercial',
      cta: 'Explore Commercial Grounds',
      icon: 'city',
      points: ['Strata and body corporate common property', 'Business parks, car parks and retail centres', 'Written scope and visit schedule'],
    },
  ]
  return (
    <section id="choose" className="bg-asphalt pb-20 lg:pb-28" aria-label="Choose your grounds care">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {cards.map((c) => (
            <A key={c.to} to={c.to} className="group relative block bg-asphalt overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <LawnStripes className="absolute -inset-4 opacity-70 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-20 h-20 bg-asphalt/70 text-grounds-300 flex items-center justify-center"><Icon name={c.icon} className="w-10 h-10" /></span>
                </span>
              </div>
              <div className="p-8 lg:p-10">
                <Eyebrow dark className="mb-3">{c.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-extrabold tracking-headline text-white">{c.title}</h2>
                <p className="mt-3 text-white/70 leading-relaxed">{c.body}</p>
                <ul className="mt-6 space-y-2 text-sm">{c.points.map((pt) => <CheckItem key={pt} dark>{pt}</CheckItem>)}</ul>
                <span className="btn-grounds mt-8">{c.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const reasons = [
    ...site.commitments,
    { title: 'Green waste, your way', body: 'Mulched back in, bagged for your green bin or taken away to a green waste facility – agreed in your quote.' },
    ...(site.insured ? [{ title: 'Fully insured', body: 'Swept holds current public liability insurance.' }] : []),
  ]
  return (
    <section className="section-pad bg-asphalt border-t border-white/5" aria-labelledby="why-heading">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <Eyebrow dark className="mb-5">Why Grounds by Swept</Eyebrow>
          <h2 id="why-heading" className="display-md text-white">Why choose<br />Grounds by Swept?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-asphalt p-8 lg:p-10 group hover:bg-zinc-900 transition-colors duration-200 h-full">
              <span className="text-5xl font-extrabold tracking-tightest leading-none text-white/10 group-hover:text-grounds-500/30 transition-colors duration-300 block mb-6" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-bold text-white mb-3">{r.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-pad bg-zinc-50" aria-labelledby="services-heading">
      <div className="section-container">
        <SectionHeading id="services-heading" eyebrow="Our services" title={<>One team for homes<br />and commercial grounds.</>} intro="Every job starts from a written scope – at home or on a commercial site." center />
        <div className="flex items-end justify-between gap-4 mb-6">
          <h3 className="text-2xl font-extrabold tracking-headline text-asphalt">Residential lawn &amp; garden</h3>
          <A to="/residential" className="text-sm font-semibold text-grounds-700 hover:text-asphalt">All home services</A>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {services.map((s) => <li key={s.slug}><ServiceCard s={s} /></li>)}
        </ul>
        <div className="flex items-end justify-between gap-4 mt-16 mb-6">
          <h3 className="text-2xl font-extrabold tracking-headline text-asphalt">Commercial grounds</h3>
          <A to="/commercial" className="text-sm font-semibold text-grounds-700 hover:text-asphalt">All commercial grounds</A>
        </div>
        <CommercialCards pages={commercialPages} />
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section className="section-pad bg-white" aria-labelledby="areas-heading">
      <div className="section-container">
        <SectionHeading id="areas-heading" eyebrow="Areas we service" title="Serving Brisbane, Logan, the Gold Coast & Tweed Heads" intro={`${suburbs.length} suburbs across ${areas.length} regions of South East Queensland and over the border into NSW.`} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r) => (
            <li key={r.to}>
              <A to={r.to} className="flex items-center gap-4 border border-zinc-100 bg-white p-5 font-bold text-asphalt hover:border-grounds-500/40 transition-colors">
                <span className="w-11 h-11 shrink-0 bg-grounds-50 text-grounds-700 flex items-center justify-center"><Icon name={r.icon} className="w-6 h-6" /></span>
                {r.label}
                <ArrowRight className="ml-auto w-4 h-4 text-grounds-600" aria-hidden="true" />
              </A>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-zinc-500">
          Can&apos;t see yours? <A to="/residential/areas" className="font-semibold text-grounds-700 underline underline-offset-2">Browse all {suburbs.length} suburbs</A> or <A to="/quote" className="font-semibold text-grounds-700 underline underline-offset-2">request a quote</A> and we&apos;ll confirm.
        </p>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section-pad bg-zinc-50" aria-labelledby="faq-heading">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <Eyebrow className="mb-5">FAQ</Eyebrow>
          <h2 id="faq-heading" className="display-md text-asphalt">Questions, answered.</h2>
        </div>
        <Faqs faqs={generalFaqs.slice(0, 6)} />
        <p className="mt-8 text-center"><A to="/faq" className="font-semibold text-grounds-700 underline underline-offset-4">Read all FAQs</A></p>
      </div>
    </section>
  )
}

function QuoteBand() {
  return (
    <section id="quote" className="bg-asphalt relative overflow-hidden" aria-labelledby="quote-heading">
      <div className="absolute top-0 inset-x-0 h-px bg-grounds-500/40" aria-hidden="true" />
      <div className="section-container py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <Eyebrow dark className="mb-8">Request a free quote</Eyebrow>
          <h2 id="quote-heading" className="display-lg text-white">A tidier yard or site, <span className="text-grounds-400">on schedule.</span></h2>
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">Tell us what you need and we&apos;ll reply with a clear, written quote {site.quoteResponse}.{trustLabel() ? ` ${trustLabel()}.` : ''}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <A to="/quote?type=residential" className="btn-grounds">Home lawn &amp; garden quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
            <A to="/quote?type=commercial" className="btn-outline-light">Commercial grounds quote</A>
          </div>
        </div>
        <ol className="space-y-4">
          {howItWorks.map((s, i) => (
            <li key={s.title} className="flex gap-5 border border-white/10 bg-white/5 p-6">
              <span className="text-4xl font-extrabold tracking-tightest leading-none text-grounds-400">{String(i + 1).padStart(2, '0')}</span>
              <span><strong className="block text-white text-lg">{s.title}</strong><span className="mt-1 block text-sm text-white/60 leading-relaxed">{s.body}</span></span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Choose />
      <WhyChoose />
      <Services />
      <Schedules />
      <Checklists tinted />
      <Seasons />
      <Areas />
      <FaqSection />
      <QuoteBand />
    </>
  )
}
