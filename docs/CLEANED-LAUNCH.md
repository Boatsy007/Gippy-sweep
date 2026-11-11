# Cleaned by Swept – development, review and launch

Cleaned by Swept (the residential and commercial cleaning division of Swept) is
built inside this repository and deployed by the same Vercel project as the
Swept commercial site. Nothing in this file has been done to production yet –
each launch step needs the owner's approval.

## How it is built

| Piece | Where |
| --- | --- |
| Pages (151) | `src/cleaned/pages/*`, route table in `src/cleaned/routes.tsx` |
| Content (copied from sweepclean, read-only source) | `src/cleaned/lib/*`, `src/cleaned/content/guides/*` |
| Design | Swept commercial classes (`src/index.css`) with the `cleaned` violet tokens (`tailwind.config.ts`) |
| Prerendering | `scripts/prerender.mjs` writes `dist/cleaned/<path>/index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` |
| Quote forms | `src/cleaned/pages/Quote.tsx` → `api/cleaned-quote.ts` (Vercel Function) |
| Hostname routing | `middleware.ts` – inactive until `CLEANED_HOST` is set |

The commercial homepage build output is unchanged by all of this (checked by
building before and after and comparing `dist/index.html`, `robots.txt`,
`sitemap.xml` and `llms.txt`).

## Reviewing it now

Every Vercel preview deployment of the `claude/cleaned-by-swept` branch serves the
cleaning site under `/cleaned/`:

    https://<preview-url>/cleaned/

All pages carry `<meta name="robots" content="noindex, nofollow">` and are left
out of the commercial sitemap, so nothing is indexed during development. Vercel
also adds `X-Robots-Tag: noindex` to preview deployments.

Quote forms on previews run in **test mode**: requests are validated and written
to the function log, nothing is emailed, and the thank-you page says so.

## Settings

Build-time (`.env` or Vercel → Settings → Environment Variables):

| Variable | Now | At launch |
| --- | --- | --- |
| `VITE_CLEANED_BASE` | unset (= `/cleaned`) | `""` (empty) |
| `VITE_CLEANED_SITE_URL` | unset (= `VITE_SITE_URL` + `/cleaned`) | `https://cleaned.swept.com.au` |
| `VITE_CLEANED_NOINDEX` | unset (= noindex) | `false` – only once the duplicate-content plan below is agreed |

Runtime (Vercel → Settings → Environment Variables, Production):

| Variable | Purpose |
| --- | --- |
| `CLEANED_HOST` | `cleaned.swept.com.au` – switches on `middleware.ts` |
| `CLEANED_LEAD_TO_EMAIL` | where cleaning leads go |
| `CLEANED_LEAD_FROM_EMAIL` | verified sender, e.g. `Cleaned by Swept <quotes@swept.com.au>` |
| `RESEND_API_KEY` | Resend key for the verified sending domain (new key – sweepclean's is not reused) |
| `CLEANED_LEAD_WEBHOOK_URL` | optional second channel (Zapier, Make, CRM) |

Lead emails start with `[Cleaned · Residential]` or `[Cleaned · Commercial]`.
In production with no delivery configured the form shows the phone/email
fallback rather than pretending the lead was received.

## Launch steps (each needs approval)

1. **Domain.** Buy/confirm `swept.com.au`. In Vercel → Domains add
   `swept.com.au`, `www.swept.com.au` and `cleaned.swept.com.au` to this project
   and set the DNS records Vercel shows. Set `VITE_SITE_URL=https://www.swept.com.au`
   (commercial) in `.env`.
2. **Lead delivery.** Set the lead variables above and send one test enquiry of
   each type to an address you control. Confirm both arrive before going live.
3. **Hostname.** Set `CLEANED_HOST`, `VITE_CLEANED_BASE=""` and
   `VITE_CLEANED_SITE_URL`, redeploy, and check
   `https://cleaned.swept.com.au/`, a suburb page and `/sitemap.xml`.
   `middleware.ts` then redirects any old `/cleaned/...` page URL on the
   commercial host to the subdomain, and `/cleaned/...` URLs on the subdomain to
   their clean form, so each page has one address.
4. **Duplicate content decision** (below), then `VITE_CLEANED_NOINDEX=false`.
5. **Search Console.** Add `cleaned.swept.com.au` as its own property (or verify
   the `swept.com.au` Domain property, which covers both hosts) and submit
   `https://cleaned.swept.com.au/sitemap.xml`. The subdomain starts without the
   commercial site's ranking history.

## Duplicate content: sweepclean vs Cleaned by Swept

The new site reuses sweepclean's content, so only one of them should be indexed.
sweepclean (`sweepclean-two.vercel.app`, repo `Boatsy007/sweepclean`) has **not**
been changed.

Recommended once Cleaned by Swept is live on its subdomain (owner approval, and
changes in the sweepclean project, required):

1. Redirect every sweepclean URL to its Cleaned by Swept equivalent with a
   permanent (301/308) redirect – the full list is in
   `docs/cleaned-redirect-map.csv` (146 URLs, every target page exists).
2. Keep those redirects in place for at least a year.
3. If sweepclean ever had its own domain verified in Search Console, use the
   Change of Address tool to move it to `cleaned.swept.com.au`.

Until then, keep `VITE_CLEANED_NOINDEX` unset so the new site stays out of
search results.

## Not built yet (by design)

- **My Cleaning customer portal** (bookings, skips, invoices, payments). The site
  has a clear navigation and route structure for it to slot into, but no
  placeholder is shown so customers aren't led to expect it yet. The platform
  choice is the owner's.
- Customer confirmation emails (sweepclean sent one). Add once lead delivery
  is verified.
