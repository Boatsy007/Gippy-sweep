import { ArrowRight, ChevronDown } from 'lucide-react'
import { services } from '../lib/services'
import { areas, suburbCount } from '../lib/areas'
import { generalFaqs, howItWorks, regions } from '../lib/content'
import { site, trustLabel } from '../lib/site'
import { A, Eyebrow, Faqs, Icon, SectionHeading } from '../ui'
import { FloorTypes, Method, ServiceCard } from './Services'

const headline = ['Commercial', 'Floor', 'Scrubbing.']

/** Polished-floor sheen – a decorative stand-in until real Scrubbed photography is added. */
export function Sheen({ className = '' }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ background: 'repeating-linear-gradient(90deg, #0A6178 0 120px, #0B6E88 120px 240px), #0A6178' }}
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
          <Sheen className="w-full h-full" />
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(160deg, rgba(63,230,208,0.28) 0%, transparent 45%, rgba(17,24,39,0.35) 100%)' }} />
        <div className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, #111827, transparent)' }} />
        <div className="absolute inset-0 z-10 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.92) 0%, rgba(17,24,39,0.8) 55%, rgba(17,24,39,0.6) 100%)' }} />
        <div className="absolute inset-0 z-20 hidden lg:flex items-center justify-center pointer-events-none">
          <img src="/logo-scrubbed-white.webp" alt="" width={526} height={160} className="w-[min(70%,420px)] h-auto opacity-90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-[3px] bg-scrubbed-500 z-30" aria-hidden="true" />

      <div className="section-container w-full flex-1 flex items-center relative z-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="flex flex-col justify-center">
            <Eyebrow dark className="mb-8">Commercial machine floor scrubbing</Eyebrow>
            <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[4.25rem] font-extrabold tracking-tightest leading-none uppercase text-white" aria-label="Commercial floor scrubbing.">
              {headline.map((line, i) => <span key={line} className={i === headline.length - 1 ? 'block text-scrubbed-400' : 'block'}>{line}</span>)}
            </h1>
            <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-md">
              Machine scrubbing for warehouses, factories, shopping centres, car park levels and commercial hard floors
              across Brisbane, Logan, the Gold Coast and Tweed Heads – one-off deep cleans or scheduled programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <A to="/quote" className="btn-scrubbed">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
              <a href="#services" className="btn-outline-light">Explore services</a>
            </div>
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { value: String(areas.length), label: 'Regions serviced' },
                { value: String(services.length), label: 'Floor scrubbing services' },
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

function WhyChoose() {
  const reasons = [
    ...site.commitments,
    { title: 'Floors left close to dry', body: 'Scrubber-driers recover the dirty water as they go, so floors are back in use sooner than after mopping.' },
    ...(site.insured ? [{ title: 'Fully insured', body: 'Swept holds current public liability insurance.' }] : []),
  ]
  return (
    <section className="section-pad bg-asphalt border-t border-white/5" aria-labelledby="why-heading">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <Eyebrow dark className="mb-5">Why Scrubbed by Swept</Eyebrow>
          <h2 id="why-heading" className="display-md text-white">Why choose<br />Scrubbed by Swept?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-asphalt p-8 lg:p-10 group hover:bg-zinc-900 transition-colors duration-200 h-full">
              <span className="text-5xl font-extrabold tracking-tightest leading-none text-white/10 group-hover:text-scrubbed-500/30 transition-colors duration-300 block mb-6" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
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
        <SectionHeading id="services-heading" eyebrow="Our services" title={<>Machine scrubbing for<br />commercial floors.</>} intro="Every site starts from a written scope, with pads and solutions matched to the floor." center />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4">
          {services.map((s) => <li key={s.slug}><ServiceCard s={s} /></li>)}
        </ul>
        <p className="mt-8 text-center"><A to="/services" className="font-semibold text-scrubbed-700 underline underline-offset-4">All floor scrubbing services</A></p>
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section className="section-pad bg-zinc-50" aria-labelledby="areas-heading">
      <div className="section-container">
        <SectionHeading id="areas-heading" eyebrow="Areas we service" title="Serving Brisbane, Logan, the Gold Coast & Tweed Heads" intro={`Commercial and industrial sites across four regions and ${suburbCount} suburbs.`} />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((r) => (
            <li key={r.to}>
              <A to={r.to} className="flex items-center gap-4 border border-zinc-100 bg-white p-5 font-bold text-asphalt hover:border-scrubbed-500/40 transition-colors">
                <span className="w-11 h-11 shrink-0 bg-scrubbed-50 text-scrubbed-700 flex items-center justify-center"><Icon name={r.icon} className="w-6 h-6" /></span>
                {r.label}
                <ArrowRight className="ml-auto w-4 h-4 text-scrubbed-600" aria-hidden="true" />
              </A>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="faq-heading">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <Eyebrow className="mb-5">FAQ</Eyebrow>
          <h2 id="faq-heading" className="display-md text-asphalt">Questions, answered.</h2>
        </div>
        <Faqs faqs={generalFaqs.slice(0, 6)} />
        <p className="mt-8 text-center"><A to="/faq" className="font-semibold text-scrubbed-700 underline underline-offset-4">Read all FAQs</A></p>
      </div>
    </section>
  )
}

function QuoteBand() {
  return (
    <section id="quote" className="bg-asphalt relative overflow-hidden" aria-labelledby="quote-heading">
      <div className="absolute top-0 inset-x-0 h-px bg-scrubbed-500/40" aria-hidden="true" />
      <div className="section-container py-24 lg:py-32 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <Eyebrow dark className="mb-8">Request a free quote</Eyebrow>
          <h2 id="quote-heading" className="display-lg text-white">Cleaner floors, <span className="text-scrubbed-400">on schedule.</span></h2>
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">Tell us about your site and we&apos;ll reply with a written scope and quote {site.quoteResponse}.{trustLabel() ? ` ${trustLabel()}.` : ''}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <A to="/quote" className="btn-scrubbed">Get a floor scrubbing quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          </div>
        </div>
        <ol className="space-y-4">
          {howItWorks.map((s, i) => (
            <li key={s.title} className="flex gap-5 border border-white/10 bg-white/5 p-6">
              <span className="text-4xl font-extrabold tracking-tightest leading-none text-scrubbed-400">{String(i + 1).padStart(2, '0')}</span>
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
      <WhyChoose />
      <Services />
      <Method />
      <FloorTypes tinted />
      <Areas />
      <FaqSection />
      <QuoteBand />
    </>
  )
}
