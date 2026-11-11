/**
 * POST /api/cleaned-quote – Cleaned by Swept quote requests (Vercel Function).
 *
 * Mirrors sweepclean's app/api/quote/route.ts: rate limit, spam traps, server-side
 * validation, then delivery by email (Resend) and/or webhook. Nothing is sent
 * anywhere unless these are set in Vercel (Settings → Environment Variables):
 *
 *   CLEANED_LEAD_TO_EMAIL     where leads go (required for email)
 *   CLEANED_LEAD_FROM_EMAIL   verified sender, e.g. "Cleaned by Swept <quotes@swept.com.au>"
 *   RESEND_API_KEY            Resend key for a domain verified in Resend
 *   CLEANED_LEAD_WEBHOOK_URL  optional second channel (Zapier, Make, CRM…)
 *
 * With none set, a request on a preview/development deployment is validated and
 * logged only, and the response says `test: true`. In production with nothing
 * configured it fails, so the form shows the phone/email fallback instead of
 * pretending a lead was received. No sweepclean secrets are reused.
 */
import { sanitise, subject, summary, validate } from '../src/cleaned/lib/lead'

/** Vercel Functions run on Node; read settings without needing Node type packages. */
const env = (name: string): string | undefined => (globalThis as unknown as { process: { env: Record<string, string | undefined> } }).process.env[name]

const hits = new Map<string, number[]>()
function limited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > 5
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)
const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

async function sendEmail(to: string, from: string, subj: string, html: string, replyTo?: string) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env('RESEND_API_KEY')}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], subject: subj, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
  })
  if (!res.ok) console.error('[cleaned-lead] resend failed', res.status, await res.text().catch(() => ''))
  return res.ok
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (limited(ip)) return json({ ok: false, error: 'rate_limited' }, 429)

  let raw: Record<string, unknown>
  try {
    raw = (await req.json()) as Record<string, unknown>
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400)
  }

  // Spam traps: honeypot filled, or submitted impossibly fast. Pretend success.
  if ((typeof raw.website === 'string' && raw.website.length > 0) || (typeof raw.elapsed === 'number' && raw.elapsed < 2500)) {
    return json({ ok: true })
  }

  const lead = sanitise(raw)
  const errors = validate(lead)
  if (Object.keys(errors).length) return json({ ok: false, errors }, 422)

  const rows = summary(lead)
  const title = subject(lead)
  const table = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#4a5578;vertical-align:top"><strong>${esc(k)}</strong></td><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('')}</table>`

  const to = env('CLEANED_LEAD_TO_EMAIL')
  const from = env('CLEANED_LEAD_FROM_EMAIL')
  const hook = env('CLEANED_LEAD_WEBHOOK_URL')
  const delivered: string[] = []
  try {
    if (to && from && env('RESEND_API_KEY') && (await sendEmail(to, from, title, `<h2 style="font-family:sans-serif">${esc(title)}</h2>${table}`, lead.email))) delivered.push('email')
    if (hook) {
      const r = await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...lead, subject: title, receivedAt: new Date().toISOString(), summary: Object.fromEntries(rows) }) })
      if (r.ok) delivered.push('webhook')
      else console.error('[cleaned-lead] webhook failed', r.status)
    }
  } catch (err) {
    console.error('[cleaned-lead] delivery error', err)
  }

  if (!delivered.length) {
    if (env('VERCEL_ENV') !== 'production') {
      console.info('[cleaned-lead] TEST MODE – no delivery configured, logged only:', JSON.stringify(Object.fromEntries(rows)))
      return json({ ok: true, delivered: ['log'], test: true })
    }
    console.error('[cleaned-lead] NOT DELIVERED – set CLEANED_LEAD_TO_EMAIL, CLEANED_LEAD_FROM_EMAIL and RESEND_API_KEY, or CLEANED_LEAD_WEBHOOK_URL', JSON.stringify(Object.fromEntries(rows)))
    return json({ ok: false, error: 'delivery_failed' }, 502)
  }

  return json({ ok: true, delivered })
}
