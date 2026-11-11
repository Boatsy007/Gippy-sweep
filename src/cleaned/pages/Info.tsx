import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { site, telHref, trustLabel } from '../lib/site'
import { services } from '../lib/services'
import { generalFaqs } from '../lib/faqs'
import { photos } from '../lib/photos'
import { areas } from '../lib/areas'
import { servicePath } from '../lib/catalogue'
import { approach, aboutIntro, contactFaqs, enquiryChecklist, promiseCovered, promiseFaqs, promiseGoodToKnow, trustCopy } from '../lib/content'
import { COMMERCIAL_URL } from '../lib/paths'
import { A, Card, CheckItem, CtaBand, Eyebrow, Faqs, Icon, PageHero, SectionHeading } from '../ui'

const p = site.promise

export function PromiseSummary() {
  return (
    <div className="border border-zinc-200 bg-white p-6 sm:p-8">
      <Eyebrow className="mb-3">{p.name}</Eyebrow>
      <p className="text-2xl font-extrabold tracking-headline text-asphalt">{p.tagline}</p>
      <p className="mt-3 text-zinc-600 leading-relaxed">{p.body}</p>
      <A to={p.path} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cleaned-700">How {p.name} works <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
    </div>
  )
}

export function About() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
        eyebrow="About Cleaned by Swept"
        title="Why choose Cleaned by Swept?"
        intro={aboutIntro}
        image={photos.cleaner.src}
        imageAlt={photos.cleaner.alt}
      >
        <p className="mt-6 text-sm text-white/60 max-w-xl">
          Cleaned by Swept is the residential and commercial cleaning division of{' '}
          <a href={COMMERCIAL_URL === '/' ? '/' : `${COMMERCIAL_URL}/`} className="font-semibold text-white underline underline-offset-2">Swept</a>,
          a Gold Coast owned commercial property care provider.
        </p>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="commit-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionHeading id="commit-h" eyebrow="Our commitments" title="Our commitments on every clean" />
            <ul className="space-y-6">
              {site.commitments.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="w-6 h-6 bg-cleaned-600 flex items-center justify-center shrink-0 mt-0.5"><Icon name="check" className="w-3.5 h-3.5 text-white" /></span>
                  <span><strong className="block text-lg font-bold text-asphalt">{c.title}</strong><span className="mt-1 block text-zinc-600">{c.body}</span></span>
                </li>
              ))}
              {site.insured && <li className="flex gap-4"><Icon name="shield" className="w-6 h-6 shrink-0 text-cleaned-600" /><span><strong className="block text-lg font-bold text-asphalt">Fully insured</strong><span className="mt-1 block text-zinc-600">We hold current public liability insurance.</span></span></li>}
              {site.policeChecked && <li className="flex gap-4"><Icon name="shield" className="w-6 h-6 shrink-0 text-cleaned-600" /><span><strong className="block text-lg font-bold text-asphalt">Police-checked cleaners</strong><span className="mt-1 block text-zinc-600">Every cleaner holds a current national police check.</span></span></li>}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28"><PromiseSummary /></div>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="approach-h">
        <div className="section-container">
          <SectionHeading id="approach-h" eyebrow="How we work" title="How we work" />
          <div className="grid sm:grid-cols-2 gap-4">
            {approach.map((a) => (
              <Card key={a.title}>
                <Icon name={a.icon} className="w-8 h-8 text-cleaned-600" />
                <h3 className="mt-4 text-lg font-bold text-asphalt">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{a.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="trust-h">
        <div className="section-container grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <h2 id="trust-h" className="display-md text-asphalt">Letting someone into your home is a big deal</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">{trustCopy.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function PromisePage() {
  const stepIcons = ['doc', 'heart', 'sparkle', 'shield']
  return (
    <>
      <PageHero crumbs={[{ name: 'Home', path: '/' }, { name: p.name, path: p.path }]} eyebrow="Our customer promise" title={`${p.name}.`} intro={p.body}>
        <p className="mt-3 text-2xl font-extrabold tracking-headline text-cleaned-300">{p.tagline}</p>
        <p className="mt-4 text-white/70 leading-relaxed max-w-xl">It&apos;s how we work on every clean – homes and businesses, first visit or fiftieth – so you can book Swept with confidence, even the first time.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <A to="/quote" className="btn-cleaned">Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
          {site.phone && <a href={telHref(site.phone)} className="btn-outline-light"><Phone className="w-4 h-4" aria-hidden="true" />{site.phone}</a>}
        </div>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="how-h">
        <div className="section-container">
          <SectionHeading id="how-h" eyebrow="Four simple steps" title={`How ${p.name} works`} />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {p.steps.map((s, i) => (
              <li key={s.title}>
                <Card>
                  <span className="w-12 h-12 bg-cleaned-600 text-white flex items-center justify-center"><Icon name={stepIcons[i]} className="w-6 h-6" /></span>
                  <h3 className="mt-5 text-base font-bold text-asphalt"><span className="sr-only">Step {i + 1}: </span>{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{s.body}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="scope-h">
        <div className="section-container grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <div>
            <h2 id="scope-h" className="display-md text-asphalt">One standard, home or business</h2>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">{p.name} applies to every service we offer. Whatever we&apos;ve agreed to clean, we stand behind it.</p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <A to={servicePath(s.slug)} className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-asphalt hover:border-cleaned-500">
                  <Icon name={s.icon} className="w-4 h-4 text-cleaned-600" />{s.name}
                </A>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="cover-h">
        <div className="section-container grid lg:grid-cols-2 gap-4">
          <h2 id="cover-h" className="sr-only">What&apos;s covered</h2>
          <Card>
            <h3 className="text-xl font-bold text-asphalt">What&apos;s covered</h3>
            <ul className="mt-5 space-y-3 text-sm">{promiseCovered.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-asphalt">Good to know</h3>
            <ul className="mt-5 space-y-3 text-sm">{promiseGoodToKnow.map((t) => <li key={t} className="flex gap-3 text-zinc-600"><span aria-hidden="true" className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-cleaned-600" />{t}</li>)}</ul>
          </Card>
          <aside className="lg:col-span-2 flex gap-4 border border-cleaned-100 bg-cleaned-50 p-6" aria-label="Australian Consumer Law">
            <Icon name="shield" className="w-7 h-7 shrink-0 text-cleaned-600" />
            <div>
              <h3 className="text-lg font-bold text-asphalt">Your rights under the Australian Consumer Law</h3>
              <p className="mt-1.5 text-zinc-600 leading-relaxed">{p.acl} Under the Australian Consumer Law, services come with automatic consumer guarantees, including that they&apos;re provided with due care and skill.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="pfaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <h2 id="pfaq-h" className="display-md text-asphalt">{p.name}: FAQs</h2>
          <Faqs faqs={promiseFaqs} />
        </div>
      </section>

      <CtaBand title="Book your first clean with confidence." body={`A written quote, an agreed checklist and ${p.name} on every visit.`} />
    </>
  )
}

export function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faq' }]} eyebrow="Questions, answered" title="Frequently asked questions" intro="Everything you might want to know before booking a clean." />
      <section className="section-pad bg-white" aria-label="Frequently asked questions">
        <div className="section-container max-w-3xl"><Faqs faqs={generalFaqs} /></div>
      </section>
      <CtaBand />
    </>
  )
}

export function Contact() {
  const ways = [
    { icon: 'doc', title: 'Get a quote online', body: `The fastest way to a price. Tell us about your home in about two minutes and we'll reply with a written quote ${site.quoteResponse}.`, to: '/quote', cta: 'Start your quote' },
  ]
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
        eyebrow="Contact"
        title="Talk to Cleaned by Swept"
        intro="The fastest way to a price is our online quote form. Prefer to chat first? Call or email and we'll get back to you."
        aside={
          <ul className="bg-white p-6 sm:p-8 shadow-2xl space-y-5">
            {site.phone && <li className="flex gap-4"><Phone className="w-6 h-6 text-cleaned-600" aria-hidden="true" /><a href={telHref(site.phone)} className="text-xl font-bold text-asphalt">{site.phone}</a></li>}
            {site.email && <li className="flex gap-4"><Mail className="w-6 h-6 text-cleaned-600" aria-hidden="true" /><a href={`mailto:${site.email}`} className="text-xl font-bold text-asphalt break-all">{site.email}</a></li>}
            <li className="flex gap-4"><Icon name="clock" className="w-6 h-6 shrink-0 text-cleaned-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">Enquiry hours</strong>{site.responseHours}</span></li>
            <li className="flex gap-4"><Icon name="pin" className="w-6 h-6 shrink-0 text-cleaned-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">Service area</strong>Brisbane, Logan, Gold Coast and Tweed Heads</span></li>
            {trustLabel() && <li className="flex gap-4"><Icon name="shield" className="w-6 h-6 shrink-0 text-cleaned-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">{trustLabel()}</strong>Every clean is backed by <A to={p.path} className="font-semibold text-cleaned-700 underline underline-offset-2">{p.name}</A>.</span></li>}
          </ul>
        }
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {ways.map((w) => <A key={w.title} to={w.to} className="btn-cleaned">{w.cta} <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>)}
        </div>
      </PageHero>

      <section className="section-pad bg-zinc-50" aria-labelledby="include-h">
        <div className="section-container grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <h2 id="include-h" className="display-md text-asphalt">What to include in your enquiry</h2>
            <p className="mt-4 text-zinc-600">The more we know, the more accurate your quote. You don&apos;t need everything – just what you have.</p>
          </div>
          <ul className="space-y-4">{enquiryChecklist.map((t) => <CheckItem key={t}>{t}</CheckItem>)}</ul>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="cfaq-h">
        <div className="section-container grid lg:grid-cols-[0.8fr_2fr] gap-12">
          <div>
            <h2 id="cfaq-h" className="display-md text-asphalt">Contact FAQs</h2>
            <p className="mt-4 text-zinc-600">Homes and businesses across four regions of South East Queensland and northern NSW.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => <li key={a.slug}><A to={`/residential/areas/${a.slug}`} className="inline-flex border border-zinc-200 px-3 py-1.5 text-sm font-semibold text-asphalt hover:border-cleaned-500">{a.name}</A></li>)}
            </ul>
          </div>
          <Faqs faqs={contactFaqs} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Home', path: '/' }, { name: 'Privacy', path: '/privacy' }]} title="Privacy policy" intro="Last updated: November 2026" />
      <section className="section-pad bg-white">
        <div className="section-container max-w-3xl space-y-5 text-zinc-700 leading-relaxed [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-headline [&_h2]:text-asphalt">
          <p>This policy explains how {site.legalName ?? 'Swept'} (&quot;Swept&quot;, &quot;we&quot;) handles personal information. We aim to handle your information in line with the Australian Privacy Principles.</p>
          <h2>What we collect</h2>
          <p>When you request a quote or call back, we collect the details you give us: your name, phone number, email address, suburb and postcode, information about your home and the cleaning you need, and any notes you add. If analytics is enabled, we also collect anonymous usage information such as pages visited and the device and browser you use.</p>
          <h2>How we use it</h2>
          <p>We use your details to respond to your request, prepare and send quotes, arrange and carry out cleaning, and keep in touch about your service. We use analytics to understand how people use the site so we can improve it.</p>
          <h2>Who we share it with</h2>
          <p>We don&apos;t sell your personal information. We share it only with service providers who help us run the business – for example, our email and website hosting providers – and only so they can provide those services to us, or where the law requires it.</p>
          <h2>Storage and security</h2>
          <p>We take reasonable steps to protect your information from misuse, loss and unauthorised access. Some of our providers may store data outside Australia.</p>
          <h2>Access and correction</h2>
          <p>You can ask to see or correct the personal information we hold about you, or ask us to delete it, at any time{site.email ? <> by emailing <a href={`mailto:${site.email}`} className="text-cleaned-700 underline">{site.email}</a></> : ' by contacting us through this website'}.</p>
          <h2>Complaints</h2>
          <p>If you have a concern about how we&apos;ve handled your information, please contact us first. If you&apos;re not satisfied with our response, you can contact the Office of the Australian Information Commissioner (oaic.gov.au).</p>
        </div>
      </section>
    </>
  )
}

export function Thanks() {
  // Personalised from the query string after hydration; the prerendered page is generic
  const [info, setInfo] = useState<{ name?: string; service?: string; type?: string; test?: boolean }>({})
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    setInfo({ name: q.get('name')?.replace(/[^\p{L}' -]/gu, '').slice(0, 30) || undefined, service: q.get('service') ?? undefined, type: q.get('type') ?? undefined, test: q.get('test') === '1' })
  }, [])
  const svc = services.find((s) => s.slug === info.service)
  return (
    <>
      <PageHero title={<>Thanks{info.name ? `, ${info.name}` : ''} – we&apos;ve got it.</>} intro={`We'll send your tailored ${svc ? svc.name.toLowerCase() : info.type === 'commercial' ? 'commercial cleaning' : 'cleaning'} quote ${site.quoteResponse}.`} />
      <section className="section-pad bg-white">
        <div className="section-container max-w-2xl">
          {info.test && (
            <p className="mb-6 border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900" role="status">
              <strong>Test mode:</strong> this enquiry was checked and logged, but not emailed to anyone. Lead delivery is switched on separately before launch.
            </p>
          )}
          <Card>
            <h2 className="text-xl font-bold text-asphalt">While you wait</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3 text-zinc-600"><Icon name="key" className="w-5 h-5 shrink-0 text-cleaned-600" />Think about access – will you be home, or leave a key or lockbox code?</li>
              <li className="flex gap-3 text-zinc-600"><Icon name="sparkle" className="w-5 h-5 shrink-0 text-cleaned-600" />Jot down your top three priorities so we can put them on your plan.</li>
              {svc?.slug === 'bond-cleaning' && <li className="flex gap-3 text-zinc-600"><Icon name="doc" className="w-5 h-5 shrink-0 text-cleaned-600" />Find your entry condition report – we clean against it.</li>}
              <li className="flex gap-3 text-zinc-600"><Icon name="calendar" className="w-5 h-5 shrink-0 text-cleaned-600" />Thinking regular? Weekly, fortnightly or monthly can be set up in the same quote.</li>
            </ul>
          </Card>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <A to="/" className="btn-cleaned">Back to home</A>
            <A to="/faq" className="btn-outline-dark">Read our FAQs</A>
          </div>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageHero title="Page not found" intro="The page you were looking for has moved or doesn't exist.">
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <A to="/" className="btn-cleaned">Cleaned by Swept home</A>
          <A to="/residential/areas" className="btn-outline-light">Find your suburb</A>
        </div>
      </PageHero>
    </>
  )
}
