import { ArrowRight, ChevronDown } from 'lucide-react'
import { residentialServices } from '../lib/catalogue'
import { commercialPages } from '../lib/commercial'
import { suburbs } from '../lib/suburbs'
import { areas } from '../lib/areas'
import { guides } from '../lib/guides'
import { generalFaqs } from '../lib/faqs'
import { photos } from '../lib/photos'
import { site, trustLabel } from '../lib/site'
import { howItWorks, regions } from '../lib/content'
import { A, CheckItem, Eyebrow, Faqs, Icon, Photo, SectionHeading } from '../ui'
import { Checklists, Schedules, ServiceCard } from './Residential'
import { GuideCard } from './Guides'
import { PromiseSummary } from './Info'
import { CommercialCards } from './Commercial'

const headline = ['Cleaning for', 'Homes and', 'Workplaces.']

/** Hero – same structure as the Swept commercial hero (src/components/sections/Hero.tsx). */
function Hero() {
  return (
    <section className="relative min-h-screen bg-asphalt overflow-hidden flex flex-col" aria-label="Hero">
      <div className="absolute inset-0 lg:left-1/2 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-ken-burns transform-gpu will-change-transform">
            <Photo img={photos.regularClean.src} alt={photos.regularClean.alt} priority sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover object-[center_40%]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-asphalt/25 z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, #111827, transparent)' }} />
        <div className="absolute inset-0 z-10 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.72) 50%, rgba(17,24,39,0.82) 100%)' }} />
        {/* Fade the image into the dark background so it never butts against the section below */}
        <div className="absolute inset-x-0 bottom-0 h-40 lg:h-48 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #111827 0%, rgba(17,24,39,0.6) 45%, transparent 100%)' }} />
      </div>
      <div className="absolute top-0 inset-x-0 h-[3px] bg-cleaned-500 z-30" aria-hidden="true" />

      <div className="section-container w-full flex-1 flex items-center relative z-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="flex flex-col justify-center">
            <Eyebrow dark className="mb-8">Residential &amp; commercial cleaning</Eyebrow>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[4.25rem] font-extrabold tracking-tightest leading-none uppercase text-white" aria-label="Cleaning for homes and workplaces.">
              {headline.map((line, i) => <span key={line} className={i === headline.length - 1 ? 'block text-cleaned-400' : 'block'}>{line}</span>)}
            </h1>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-md">
              Regular, deep and bond cleaning for homes, and scheduled cleaning for offices, warehouses, shops and strata
              properties across Brisbane, Logan, the Gold Coast and Tweed Heads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <A to="/quote" className="btn-cleaned">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
              <a href="#choose" className="btn-outline-light">Homes or workplaces?</a>
            </div>
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { value: String(suburbs.length), label: 'Suburbs serviced' },
                { value: String(areas.length), label: 'Regions' },
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

/** The two cleaning categories, straight after the hero. */
function Choose() {
  const cards = [
    {
      eyebrow: 'For your home',
      title: 'Residential Cleaning',
      body: 'Professional home cleaning tailored to you, including regular, deep and bond cleaning.',
      to: '/residential',
      cta: 'Explore Home Cleaning',
      photo: photos.quoteCleaner,
      points: ['Weekly, fortnightly or monthly', 'Detailed one-off and bond cleans', 'NDIS and home care cleaning'],
    },
    {
      eyebrow: 'For your workplace',
      title: 'Commercial Cleaning',
      body: 'Reliable cleaning services for workplaces, offices, commercial facilities, warehouses and strata properties.',
      to: '/commercial',
      cta: 'Explore Commercial Cleaning',
      photo: photos.cleaner,
      points: ['Offices and retail', 'Warehouses and industrial sites', 'Strata common areas and amenities'],
    },
  ]
  return (
    <section id="choose" className="bg-asphalt pt-12 lg:pt-16 pb-20 lg:pb-28" aria-label="Choose your cleaning">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-px bg-white/10">
          {cards.map((c) => (
            <A key={c.to} to={c.to} className="group relative block bg-asphalt overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <Photo img={c.photo.src} alt={c.photo.alt} sizes="(min-width: 768px) 50vw, 100vw" className="w-full h-full object-cover object-[center_35%] opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" />
              </div>
              <div className="p-8 lg:p-10">
                <Eyebrow dark className="mb-3">{c.eyebrow}</Eyebrow>
                <h2 className="text-3xl font-extrabold tracking-headline text-white">{c.title}</h2>
                <p className="mt-3 text-white/70 leading-relaxed">{c.body}</p>
                <ul className="mt-6 space-y-2 text-sm">{c.points.map((pt) => <CheckItem key={pt} dark>{pt}</CheckItem>)}</ul>
                <span className="btn-cleaned mt-8">{c.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
              </div>
            </A>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Why choose – the site's commitments, in the style of the commercial "Why SWEPT" section. */
function WhyChoose() {
  const reasons = [
    ...site.commitments,
    ...(site.insured ? [{ title: 'Fully insured', body: 'We hold current public liability insurance.' }] : []),
    ...(site.policeChecked ? [{ title: 'Police-checked cleaners', body: 'Every cleaner holds a current national police check.' }] : []),
  ]
  return (
    <section className="section-pad bg-asphalt border-t border-white/5" aria-labelledby="why-heading">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <Eyebrow dark className="mb-5">Why Cleaned by Swept</Eyebrow>
          <h2 id="why-heading" className="display-md text-white">Why choose<br />Cleaned by Swept?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-asphalt p-8 lg:p-10 group hover:bg-zinc-900 transition-colors duration-200 h-full">
              <span className="text-5xl font-extrabold tracking-tightest leading-none text-white/10 group-hover:text-cleaned-500/30 transition-colors duration-300 block mb-6" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
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
        <SectionHeading id="services-heading" eyebrow="Our cleaning services" title={<>One team for homes<br />and workplaces.</>} intro="Every clean starts from a written, room-by-room checklist – at home or at work." center />
        <div className="flex items-end justify-between gap-4 mb-6">
          <h3 className="text-2xl font-extrabold tracking-headline text-asphalt">Residential cleaning</h3>
          <A to="/residential" className="text-sm font-semibold text-cleaned-700 hover:text-asphalt">All home cleaning</A>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {residentialServices.map((s) => <li key={s.slug}><ServiceCard s={s} /></li>)}
        </ul>
        <div className="flex items-end justify-between gap-4 mt-16 mb-6">
          <h3 className="text-2xl font-extrabold tracking-headline text-asphalt">Commercial cleaning</h3>
          <A to="/commercial" className="text-sm font-semibold text-cleaned-700 hover:text-asphalt">All commercial cleaning</A>
        </div>
        <CommercialCards pages={commercialPages} />
      </div>
    </section>
  )
}

function Promise() {
  return (
    <section className="section-pad bg-white" aria-labelledby="promise-heading">
      <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <Eyebrow className="mb-5">The Swept Promise</Eyebrow>
          <h2 id="promise-heading" className="display-md text-asphalt">{site.promise.tagline}</h2>
          <ol className="mt-8 space-y-5">
            {site.promise.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="w-8 h-8 shrink-0 bg-cleaned-600 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <span><strong className="block text-asphalt">{s.title}</strong><span className="block text-sm text-zinc-500 leading-relaxed">{s.body}</span></span>
              </li>
            ))}
          </ol>
        </div>
        <PromiseSummary />
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section className="section-pad bg-zinc-50" aria-labelledby="areas-heading">
      <div className="section-container">
        <SectionHeading id="areas-heading" eyebrow="Areas we service" title="Serving Brisbane, Logan, the Gold Coast & Tweed Heads" intro="Across South East Queensland and over the border into NSW." />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {regions.map((r) => (
            <li key={r.to}>
              <A to={r.to} className="flex items-center gap-4 border border-zinc-100 bg-white p-5 font-bold text-asphalt hover:border-cleaned-500/40 transition-colors">
                <span className="w-11 h-11 shrink-0 bg-cleaned-50 text-cleaned-700 flex items-center justify-center"><Icon name={r.icon} className="w-6 h-6" /></span>
                {r.label}
                <ArrowRight className="ml-auto w-4 h-4 text-cleaned-600" aria-hidden="true" />
              </A>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-zinc-500">
          Can&apos;t see yours? <A to="/residential/areas" className="font-semibold text-cleaned-700 underline underline-offset-2">Browse all {suburbs.length} suburbs</A> or <A to="/quote" className="font-semibold text-cleaned-700 underline underline-offset-2">request a quote</A> and we&apos;ll confirm.
        </p>
      </div>
    </section>
  )
}

function Guides() {
  return (
    <section className="section-pad bg-white" aria-labelledby="guides-heading">
      <div className="section-container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <SectionHeading id="guides-heading" eyebrow="Helpful cleaning guides" title="Cleaning guides & advice" />
          <A to="/guides" className="font-semibold text-cleaned-700 underline underline-offset-4 mb-12">All {guides.length} guides</A>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{guides.slice(0, 3).map((g) => <li key={g.slug}><GuideCard g={g} /></li>)}</ul>
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
        <p className="mt-8 text-center"><A to="/faq" className="font-semibold text-cleaned-700 underline underline-offset-4">Read all FAQs</A></p>
      </div>
    </section>
  )
}

function QuoteBand() {
  return (
    <section id="quote" className="bg-asphalt relative overflow-hidden" aria-labelledby="quote-heading">
      <div className="absolute top-0 inset-x-0 h-px bg-cleaned-500/40" aria-hidden="true" />
      <div className="section-container py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <Eyebrow dark className="mb-8">Request a free quote</Eyebrow>
          <h2 id="quote-heading" className="display-lg text-white">A cleaner home or workplace, <span className="text-cleaned-400">on repeat.</span></h2>
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">Tell us what you need and we&apos;ll reply with a clear, written price {site.quoteResponse}.{trustLabel() ? ` ${trustLabel()}.` : ''}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <A to="/quote?type=residential" className="btn-cleaned">Home cleaning quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
            <A to="/quote?type=commercial" className="btn-outline-light">Commercial cleaning quote</A>
          </div>
        </div>
        <ol className="space-y-4">
          {howItWorks.map((s, i) => (
            <li key={s.title} className="flex gap-5 border border-white/10 bg-white/5 p-6">
              <span className="text-4xl font-extrabold tracking-tightest leading-none text-cleaned-400">{String(i + 1).padStart(2, '0')}</span>
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
      <Promise />
      <Areas />
      <Guides />
      <FaqSection />
      <QuoteBand />
    </>
  )
}

