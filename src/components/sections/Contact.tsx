import { useState, FormEvent } from 'react'
import { ArrowRight, Phone, Mail, CheckCircle2 } from 'lucide-react'
import { site, phoneHref } from '../../site'

const serviceOptions = [
  'Commercial sweeping',
  'Pressure cleaning (Washed)',
  'Grounds maintenance (Scaped)',
  'Regular service plan',
  'Not sure yet',
]

const fieldClass =
  'w-full bg-white/5 border border-white/15 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500'
const labelClass = 'block text-xs font-semibold text-white/70 mb-2'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function buildMailto(data: Record<string, string>) {
  const subject = `Quote request — ${data.company || data.name}`
  const body = [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Site location: ${data.location}`,
    `Service: ${data.service}`,
    '',
    data.message,
  ].join('\n')
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>

    if (!site.formEndpoint) {
      window.location.href = buildMailto(data)
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-asphalt relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Large decorative text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(80px,15vw,180px)] font-extrabold text-white/[0.025] tracking-tightest leading-none whitespace-nowrap"
        >
          SWEPT
        </span>
      </div>

      {/* Accent — top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-500/30" aria-hidden="true" />

      <div className="section-container relative py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — pitch */}
          <div>
            <div>
              <p className="eyebrow text-brand-500 mb-8">Get a Free Quote</p>
            </div>

            <div>
              <h2 id="cta-heading" className="display-lg text-white leading-tight">
                Let's keep South East Queensland{' '}
                <span className="text-brand-500">looking its best.</span>
              </h2>
            </div>

            <div>
              <p className="mt-8 text-white/60 text-lg max-w-xl leading-relaxed">
                Tell us about your site and we'll assess it, recommend a schedule, and have
                a clear, itemised price to you within one business day.
              </p>
            </div>

            <div>
              <ul className="mt-10 space-y-4">
                {site.phone && (
                  <li>
                    <a href={phoneHref()} className="inline-flex items-center gap-3 text-white hover:text-brand-400 transition-colors">
                      <Phone className="w-5 h-5 text-brand-500" aria-hidden="true" />
                      <span className="text-lg font-semibold">{site.phone}</span>
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 text-white hover:text-brand-400 transition-colors">
                    <Mail className="w-5 h-5 text-brand-500" aria-hidden="true" />
                    <span className="text-lg font-semibold">{site.email}</span>
                  </a>
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                {[
                  'No lock-in contracts',
                  'Response within 1 business day',
                  'Gold Coast-based crew',
                  'Fully insured',
                ].map((point) => (
                  <span key={point} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="w-1 h-1 bg-brand-500 rounded-full" aria-hidden="true" />
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'sent' ? (
              <div className="bg-white/5 border border-white/10 rounded-md p-10 text-center" role="status">
                <CheckCircle2 className="w-10 h-10 text-brand-500 mx-auto" aria-hidden="true" />
                <p className="mt-5 text-xl font-bold text-white">Thanks — we've got your request.</p>
                <p className="mt-2 text-white/60 text-sm">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-white/5 border border-white/10 rounded-md p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="q-name" className={labelClass}>Your name *</label>
                    <input id="q-name" name="name" required autoComplete="name" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="q-company" className={labelClass}>Company</label>
                    <input id="q-company" name="company" autoComplete="organization" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="q-email" className={labelClass}>Email *</label>
                    <input id="q-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className={labelClass}>Phone</label>
                    <input id="q-phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="q-location" className={labelClass}>Site suburb *</label>
                  <input id="q-location" name="location" required placeholder="e.g. Southport" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="q-service" className={labelClass}>Service needed</label>
                  <select id="q-service" name="service" className={`${fieldClass} [&>option]:text-asphalt`} defaultValue={serviceOptions[0]}>
                    {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="q-message" className={labelClass}>About your site</label>
                  <textarea
                    id="q-message"
                    name="message"
                    rows={4}
                    placeholder="Approximate size, surface type, how often you need us…"
                    className={fieldClass}
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-red-300" role="alert">
                    Something went wrong sending your request. Please email us at{' '}
                    <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                  </p>
                )}
                <button type="submit" className="btn-primary w-full justify-center" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Request a Free Quote'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
