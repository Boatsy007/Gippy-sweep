import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { site, telHref, trustLabel } from '../lib/site'
import { services } from '../lib/services'
import { areas, areaPath } from '../lib/areas'
import { aboutIntro, approach, contactFaqs, enquiryChecklist, generalFaqs } from '../lib/content'
import { COMMERCIAL_URL } from '../lib/paths'
import { A, Card, CheckItem, CtaBand, Faqs, Icon, PageHero, SectionHeading } from '../ui'

const sweptHome = COMMERCIAL_URL === '/' ? '/' : `${COMMERCIAL_URL}/`

export function About() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]}
        eyebrow="About Grounds by Swept"
        title="Why choose Grounds by Swept?"
        intro={aboutIntro}
      >
        <p className="mt-6 text-sm text-white/60 max-w-xl">
          Grounds by Swept is the lawn, garden and grounds care division of{' '}
          <a href={sweptHome} className="font-semibold text-white underline underline-offset-2">Swept</a>,
          a Gold Coast owned commercial property care provider.
        </p>
      </PageHero>

      <section className="section-pad bg-white" aria-labelledby="commit-h">
        <div className="section-container grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionHeading id="commit-h" eyebrow="Our commitments" title="What you can hold us to" />
            <ul className="space-y-6">
              {site.commitments.map((c) => (
                <li key={c.title} className="flex gap-4">
                  <span className="w-6 h-6 bg-grounds-600 flex items-center justify-center shrink-0 mt-0.5"><Icon name="check" className="w-3.5 h-3.5 text-white" /></span>
                  <span><strong className="block text-lg font-bold text-asphalt">{c.title}</strong><span className="mt-1 block text-zinc-600">{c.body}</span></span>
                </li>
              ))}
              {site.insured && <li className="flex gap-4"><Icon name="shield" className="w-6 h-6 shrink-0 text-grounds-600" /><span><strong className="block text-lg font-bold text-asphalt">Fully insured</strong><span className="mt-1 block text-zinc-600">Swept holds current public liability insurance.</span></span></li>}
            </ul>
          </div>
          <div className="lg:sticky lg:top-28 border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="eyebrow text-grounds-700 mb-3">What we do</p>
            <ul className="space-y-3 text-sm">{services.map((s) => <CheckItem key={s.slug}><A to={`/residential/${s.slug}`} className="font-semibold text-asphalt hover:text-grounds-700">{s.name}</A></CheckItem>)}</ul>
            <p className="mt-5 text-sm text-zinc-600">Plus <A to="/commercial" className="font-semibold text-grounds-700 underline underline-offset-2">commercial grounds maintenance</A> for strata, industrial, retail and managed properties.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-zinc-50" aria-labelledby="approach-h">
        <div className="section-container">
          <SectionHeading id="approach-h" eyebrow="How we work" title="How we work" />
          <div className="grid sm:grid-cols-2 gap-4">
            {approach.map((a) => (
              <Card key={a.title}>
                <Icon name={a.icon} className="w-8 h-8 text-grounds-600" />
                <h3 className="mt-4 text-lg font-bold text-asphalt">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{a.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="limits-h">
        <div className="section-container grid lg:grid-cols-[1fr_1.5fr] gap-12">
          <h2 id="limits-h" className="display-md text-asphalt">Honest about what we don&apos;t do</h2>
          <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
            <p>We prune small trees, palms and shrubs within safe reach. We don&apos;t climb or fell large trees, grind stumps or work near overhead power lines – for those jobs you need a qualified arborist or an authorised contractor, and we&apos;ll tell you if that&apos;s what your job needs.</p>
            <p>If something on your scope isn&apos;t done right, tell us. We&apos;d rather hear about it and fix it than have you quietly unhappy.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Home', path: '/' }, { name: 'FAQs', path: '/faq' }]} eyebrow="Questions, answered" title="Frequently asked questions" intro="Everything you might want to know before booking lawn, garden or grounds care." />
      <section className="section-pad bg-white" aria-label="Frequently asked questions">
        <div className="section-container max-w-3xl"><Faqs faqs={generalFaqs} /></div>
      </section>
      <CtaBand />
    </>
  )
}

export function Contact() {
  return (
    <>
      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]}
        eyebrow="Contact"
        title="Talk to Grounds by Swept"
        intro="The fastest way to a quote is our online form. Prefer to chat first? Call or email and we'll get back to you."
        aside={
          <ul className="bg-white p-6 sm:p-8 shadow-2xl space-y-5">
            {site.phone && <li className="flex gap-4"><Phone className="w-6 h-6 text-grounds-600" aria-hidden="true" /><a href={telHref(site.phone)} className="text-xl font-bold text-asphalt">{site.phone}</a></li>}
            {site.email && <li className="flex gap-4"><Mail className="w-6 h-6 text-grounds-600" aria-hidden="true" /><a href={`mailto:${site.email}`} className="text-xl font-bold text-asphalt break-all">{site.email}</a></li>}
            <li className="flex gap-4"><Icon name="clock" className="w-6 h-6 shrink-0 text-grounds-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">Enquiry hours</strong>{site.responseHours}</span></li>
            <li className="flex gap-4"><Icon name="pin" className="w-6 h-6 shrink-0 text-grounds-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">Service area</strong>Brisbane, Logan, Gold Coast and Tweed Heads</span></li>
            {trustLabel() && <li className="flex gap-4"><Icon name="shield" className="w-6 h-6 shrink-0 text-grounds-600" /><span className="text-sm text-zinc-600"><strong className="block text-asphalt">{trustLabel()}</strong>Swept holds current public liability insurance.</span></li>}
          </ul>
        }
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <A to="/quote" className="btn-grounds">Start your quote <ArrowRight className="w-4 h-4" aria-hidden="true" /></A>
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
            <p className="mt-4 text-zinc-600">Homes and commercial properties across four regions of South East Queensland and northern NSW.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {areas.map((a) => <li key={a.slug}><A to={areaPath(a.slug)} className="inline-flex border border-zinc-200 px-3 py-1.5 text-sm font-semibold text-asphalt hover:border-grounds-500">{a.name}</A></li>)}
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
          <p>This policy explains how Swept (&quot;Swept&quot;, &quot;we&quot;), trading as Grounds by Swept, handles personal information. We aim to handle your information in line with the Australian Privacy Principles.</p>
          <h2>What we collect</h2>
          <p>When you request a quote or contact us, we collect the details you give us: your name, phone number, email address, suburb and postcode, information about your property and the work you need, and any notes or photos you send. If analytics is enabled, we also collect anonymous usage information such as pages visited and the device and browser you use.</p>
          <h2>How we use it</h2>
          <p>We use your details to respond to your request, prepare and send quotes, arrange and carry out the work, and keep in touch about your service. We use analytics to understand how people use the site so we can improve it.</p>
          <h2>Who we share it with</h2>
          <p>We don&apos;t sell your personal information. We share it only with service providers who help us run the business – for example, our email and website hosting providers – and only so they can provide those services to us, or where the law requires it.</p>
          <h2>Storage and security</h2>
          <p>We take reasonable steps to protect your information from misuse, loss and unauthorised access. Some of our providers may store data outside Australia.</p>
          <h2>Access and correction</h2>
          <p>You can ask to see or correct the personal information we hold about you, or ask us to delete it, at any time{site.email ? <> by emailing <a href={`mailto:${site.email}`} className="text-grounds-700 underline">{site.email}</a></> : ' by contacting us through this website'}.</p>
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
      <PageHero title={<>Thanks{info.name ? `, ${info.name}` : ''} – we&apos;ve got it.</>} intro={`We'll send your written ${svc ? svc.name.toLowerCase() : info.type === 'commercial' ? 'grounds maintenance' : 'lawn and garden'} quote ${site.quoteResponse}.`} />
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
              <li className="flex gap-3 text-zinc-600"><Icon name="key" className="w-5 h-5 shrink-0 text-grounds-600" />Think about access – gates, locks, dogs in the yard and where we can park.</li>
              <li className="flex gap-3 text-zinc-600"><Icon name="doc" className="w-5 h-5 shrink-0 text-grounds-600" />Take a few photos of the yard – they help us quote accurately.</li>
              <li className="flex gap-3 text-zinc-600"><Icon name="calendar" className="w-5 h-5 shrink-0 text-grounds-600" />Thinking regular? Weekly, fortnightly, monthly or seasonal visits can be set up in the same quote.</li>
            </ul>
          </Card>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <A to="/" className="btn-grounds">Back to home</A>
            <A to="/faq" className="btn-outline-dark">Read our FAQs</A>
          </div>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <PageHero title="Page not found" intro="The page you were looking for has moved or doesn't exist.">
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <A to="/" className="btn-grounds">Grounds by Swept home</A>
        <A to="/residential/areas" className="btn-outline-light">Find your suburb</A>
      </div>
    </PageHero>
  )
}
