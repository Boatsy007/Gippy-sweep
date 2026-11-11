import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import {
  COMMERCIAL_FREQUENCY, FACILITY_OPTIONS, REQUIREMENT_OPTIONS, SIZE_OPTIONS, TIME_OPTIONS, validate, type Errors, type Lead, type LeadType,
} from '../lib/lead'
import { site, telHref } from '../lib/site'
import { href } from '../lib/paths'
import { Eyebrow, PageHero } from '../ui'

const field = 'w-full border border-zinc-200 bg-white px-4 py-3 text-sm text-asphalt placeholder:text-zinc-400 focus:outline-none focus:border-scrubbed-500 focus:ring-1 focus:ring-scrubbed-500'
const labelCls = 'block text-xs font-semibold text-zinc-600 mb-2'
const chip = 'flex items-center gap-2.5 border border-zinc-200 bg-white px-3 py-2.5 text-sm text-asphalt cursor-pointer has-[:checked]:border-scrubbed-600 has-[:checked]:bg-scrubbed-50 transition-colors'

function Field({ id, label, error, children, hint }: { id: string; label: ReactNode; error?: string; children: ReactNode; hint?: string }) {
  return (
    <div>
      <label htmlFor={id} className={labelCls}>{label}</label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-zinc-500">{hint}</p>}
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs font-semibold text-red-700" role="alert">{error}</p>}
    </div>
  )
}

function Choices({ legend, name, options, value, onChange, multi = false }: { legend: string; name: string; options: readonly (string | { value: string; label: string })[]; value: string | string[]; onChange: (v: string) => void; multi?: boolean }) {
  return (
    <fieldset>
      <legend className={labelCls}>{legend}</legend>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {options.map((o) => {
          const v = typeof o === 'string' ? o : o.value
          const l = typeof o === 'string' ? o : o.label
          const checked = multi ? (value as string[]).includes(v) : value === v
          return (
            <label key={v} className={chip}>
              <input type={multi ? 'checkbox' : 'radio'} name={name} value={v} checked={checked} onChange={() => onChange(v)} className="h-4 w-4 shrink-0 accent-scrubbed-600" />
              {l}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

type Status = 'idle' | 'sending' | 'error'

const empty = (type: LeadType): Lead => ({ type, name: '', phone: '', email: '', suburb: '', postcode: '', notes: '', consent: false, areas: [], requirements: [] })

export function QuotePage() {
  const type: LeadType = 'commercial'
  const [lead, setLead] = useState<Lead>(empty(type))
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const started = useRef(Date.now())
  const honeypot = useRef<HTMLInputElement>(null)

  // Prefill from links such as /quote?facility=warehouse-floor-scrubbing&suburb=Yatala
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    setLead({
      ...empty(type),
      frequency: COMMERCIAL_FREQUENCY.some((o) => o.value === q.get('frequency')) ? q.get('frequency')! : undefined,
      suburb: q.get('suburb') ?? '',
      facility: FACILITY_OPTIONS.some((o) => o.value === q.get('facility')) ? q.get('facility')! : undefined,
      source: document.referrer ? new URL(document.referrer).pathname : undefined,
    })
  }, [])

  const set = <K extends keyof Lead>(k: K, v: Lead[K]) => setLead((l) => ({ ...l, [k]: v }))
  const toggle = (k: 'areas' | 'requirements', v: string) =>
    setLead((l) => ({ ...l, [k]: (l[k] ?? []).includes(v) ? (l[k] ?? []).filter((x) => x !== v) : [...(l[k] ?? []), v] }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const data: Lead = { ...lead, type }
    const errs = validate(data)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(`q-${Object.keys(errs)[0]}`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/scrubbed-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, website: honeypot.current?.value ?? '', elapsed: Date.now() - started.current }),
      })
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; test?: boolean; errors?: Errors }
      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors)
        throw new Error(String(res.status))
      }
      const params = new URLSearchParams({ type, name: data.name.split(' ')[0] ?? '', ...(data.service ? { service: data.service } : {}), ...(body.test ? { test: '1' } : {}) })
      window.location.href = `${href('/quote/thanks')}?${params}`
    } catch {
      setStatus('error')
    }
  }

  const err = (k: keyof Lead) => errors[k]
  const aria = (k: keyof Lead) => (errors[k] ? { 'aria-invalid': true, 'aria-describedby': `q-${k}-error` } : {})

  return (
    <>
      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Get a Quote', path: '/quote' }]}
        eyebrow="Free, no-obligation quote"
        title="Get your free floor scrubbing quote"
        intro={`Tell us about your site and floors in about two minutes. We'll reply with a written scope and quote ${site.quoteResponse}.`}
      />

      <section className="section-pad bg-zinc-50">
        <div className="section-container grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <form onSubmit={onSubmit} noValidate className="bg-white border border-zinc-100 p-6 sm:p-10 space-y-8" aria-labelledby="quote-form-h">
            <h2 id="quote-form-h" className="sr-only">Quote request</h2>
            <Field id="q-business" label="Business or site name *" error={err('business')}>
              <input id="q-business" className={field} autoComplete="organization" value={lead.business ?? ''} onChange={(e) => set('business', e.target.value)} {...aria('business')} />
            </Field>
            <Field id="q-facility" label="Type of site">
              <select id="q-facility" className={field} value={lead.facility ?? ''} onChange={(e) => set('facility', e.target.value)}>
                <option value="">Select</option>{FACILITY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </Field>
            <Choices legend="Floor surfaces (select any)" name="requirements" options={REQUIREMENT_OPTIONS} value={lead.requirements ?? []} onChange={(v) => toggle('requirements', v)} multi />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="q-size" label="Approximate floor area">
                <select id="q-size" className={field} value={lead.size ?? ''} onChange={(e) => set('size', e.target.value)}>
                  <option value="">Select</option>{SIZE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
              </Field>
              <Field id="q-frequency" label="How often?">
                <select id="q-frequency" className={field} value={lead.frequency ?? ''} onChange={(e) => set('frequency', e.target.value)}>
                  <option value="">Select</option>{COMMERCIAL_FREQUENCY.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </Field>
            </div>
            <Choices legend="Preferred times (select any)" name="areas" options={TIME_OPTIONS} value={lead.areas ?? []} onChange={(v) => toggle('areas', v)} multi />
            <Field id="q-access" label="Access and site rules" hint="Inductions, PPE, loading dock bookings, parking">
              <input id="q-access" className={field} value={lead.access ?? ''} onChange={(e) => set('access', e.target.value)} />
            </Field>

            <div className="grid sm:grid-cols-[2fr_1fr] gap-5">
              <Field id="q-suburb" label="Site location (suburb) *" error={err('suburb')}>
                <input id="q-suburb" className={field} autoComplete="address-level2" value={lead.suburb} onChange={(e) => set('suburb', e.target.value)} {...aria('suburb')} />
              </Field>
              <Field id="q-postcode" label="Postcode" error={err('postcode')}>
                <input id="q-postcode" className={field} inputMode="numeric" autoComplete="postal-code" maxLength={4} value={lead.postcode ?? ''} onChange={(e) => set('postcode', e.target.value)} {...aria('postcode')} />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="q-name" label="Contact name *" error={err('name')}>
                <input id="q-name" className={field} autoComplete="name" value={lead.name} onChange={(e) => set('name', e.target.value)} {...aria('name')} />
              </Field>
              <Field id="q-phone" label="Phone *" error={err('phone')}>
                <input id="q-phone" type="tel" className={field} autoComplete="tel" value={lead.phone} onChange={(e) => set('phone', e.target.value)} {...aria('phone')} />
              </Field>
            </div>
            <Field id="q-email" label="Email *" error={err('email')}>
              <input id="q-email" type="email" className={field} autoComplete="email" value={lead.email} onChange={(e) => set('email', e.target.value)} {...aria('email')} />
            </Field>
            <Field id="q-notes" label="Anything else we should know?">
              <textarea id="q-notes" rows={4} className={field} placeholder="Problem areas, marks or spills, operating hours, floor plan available…" value={lead.notes ?? ''} onChange={(e) => set('notes', e.target.value)} />
            </Field>

            {/* Spam trap – hidden from people */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="q-website">Website</label>
              <input id="q-website" ref={honeypot} tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-zinc-600">
                <input id="q-consent" type="checkbox" checked={lead.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-scrubbed-600" {...aria('consent')} />
                I&apos;m happy for Scrubbed by Swept to contact me about this request.
              </label>
              {err('consent') && <p id="q-consent-error" className="mt-1.5 text-xs font-semibold text-red-700" role="alert">{err('consent')}</p>}
            </div>

            {status === 'error' && (
              <p className="border border-red-200 bg-red-50 p-4 text-sm text-red-800" role="alert">
                Sorry – we couldn&apos;t send your request.{' '}
                {site.phone ? <>Please call <a href={telHref(site.phone)} className="font-semibold underline">{site.phone}</a>{site.email ? <> or email <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a></> : null}.</> : 'Please try again.'}
              </p>
            )}

            <button type="submit" className="btn-scrubbed w-full justify-center" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Get my free quote'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <p className="text-xs text-zinc-500 text-center">We only use your details to respond to this request. We never sell or share them.</p>
          </form>

          <aside className="lg:sticky lg:top-28 space-y-4">
            <div className="bg-asphalt p-8">
              <Eyebrow dark className="mb-4">What happens next</Eyebrow>
              <ol className="space-y-4 text-sm text-white/70">
                <li><strong className="block text-white">1. We review your request</strong>A real person reads every enquiry.</li>
                <li><strong className="block text-white">2. You get a written quote</strong>{`A clear scope and price, ${site.quoteResponse}.`}</li>
                <li><strong className="block text-white">3. You decide</strong>No lock-in contracts and nothing booked until you say yes.</li>
              </ol>
            </div>
            <div className="border border-zinc-200 bg-white p-6 space-y-3 text-sm">
              <p className="font-bold text-asphalt">Prefer to talk?</p>
              {site.phone && <a href={telHref(site.phone)} className="flex items-center gap-2 text-scrubbed-700 font-semibold"><Phone className="w-4 h-4" aria-hidden="true" />{site.phone}</a>}
              {site.email && <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-scrubbed-700 font-semibold break-all"><Mail className="w-4 h-4 shrink-0" aria-hidden="true" />{site.email}</a>}
              <p className="text-zinc-500">{site.responseHours}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
