# Scrubbed by Swept – development, review and launch

Scrubbed by Swept (the commercial floor scrubbing division of Swept) is built the
same way as the Cleaned, Grounds and Washed sites: inside this repository,
deployed by the same Vercel project as the Swept commercial site. Nothing in this
file has been done to production yet – each launch step needs the owner's approval.

## How it is built

| Piece | Where |
| --- | --- |
| Pages (20) | `src/scrubbed/pages/*`, route table in `src/scrubbed/routes.tsx` |
| Content | `src/scrubbed/lib/*` – services, areas, content, site facts |
| Design | Swept commercial classes (`src/index.css`) with the `scrubbed` teal tokens (`tailwind.config.ts`) and `.btn-scrubbed` |
| Prerendering | `scripts/prerender.mjs` writes `dist/scrubbed/<path>/index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` |
| Quote form | `src/scrubbed/pages/Quote.tsx` → `api/scrubbed-quote.ts` (Vercel Function) |
| Hostname routing | `middleware.ts` – inactive for Scrubbed until `SCRUBBED_HOST` is set |

### Commercial only

Scrubbed by Swept serves businesses only (owner decision). So the site has no
residential pages and **no per-suburb pages**: 112 near-identical "floor
scrubbing in <suburb>" pages for a business-to-business service would be thin
doorway pages. Instead each of the four region pages lists the suburbs served
and the region's main industrial areas.

### Pages

- Home, services hub and 7 service pages (from the confirmed Scrubbed list on
  the commercial site): warehouse floor scrubbing, industrial floor scrubbing,
  shopping centre floor cleaning, commercial hard-floor cleaning (polished
  concrete, vinyl, tiles), car park floor scrubbing, one-off deep floor cleans,
  scheduled floor maintenance
- Areas index and 4 region pages
- About, FAQ, contact, privacy, quote, thank-you (noindex), 404 (noindex)

### Content rules followed

- No prices, licences, certifications, awards, years in business, reviews or
  guarantees. The only trust claim is public liability insurance.
- Floor-care notes are general and checkable (sweep before scrubbing,
  scrubber-driers recover the water, neutral cleaners for polished concrete,
  gentler pads for coatings and vinyl, brushes for grout).
- The site says plainly that Scrubbed does not grind, polish, strip or re-coat
  floors, and that old marks may fade rather than disappear.
- Industrial areas named on region pages are facts about each region, not
  claims of existing clients.

### Things for the owner to confirm before launch

- **Recovery water.** The site says dirty water is emptied to an agreed drain
  point, not stormwater. Confirm this matches practice and any trade waste
  requirements of your water utility or sites.
- **Equipment.** The site describes scrubber-driers in general terms (walk-behind
  or ride-on not specified). Confirm the machines you use suit the service pages,
  especially car park levels and large warehouses.
- **Photos.** There are none yet, so the home hero uses a polished-floor graphic
  and the share image (`public/scrubbed/og-image.jpg`) is a logo card.

## Reviewing it now

Every Vercel preview deployment of the `claude/cleaned-by-swept` branch serves the
floor scrubbing site under `/scrubbed/`:

    https://<preview-url>/scrubbed/

All pages carry `<meta name="robots" content="noindex, nofollow">` and are left
out of the commercial sitemap. Quote forms on previews run in **test mode**:
requests are validated and logged, nothing is emailed, and the thank-you page
says so.

On the commercial site, the Scrubbed card, the Scrubbed section buttons and the
footer link now go to the floor scrubbing site (`/scrubbed/`, and
`/scrubbed/quote/` for quotes). Nothing else on the commercial
homepage changed (checked by building before and after and comparing
`dist/index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`).

## Settings

Build-time (`.env` or Vercel → Settings → Environment Variables):

| Variable | Now | At launch |
| --- | --- | --- |
| `VITE_SCRUBBED_BASE` | unset (= `/scrubbed`) | `""` (empty) |
| `VITE_SCRUBBED_SITE_URL` | unset (= `VITE_SITE_URL` + `/scrubbed`) | `https://scrubbed.swept.com.au` |
| `VITE_SCRUBBED_NOINDEX` | unset (= noindex) | `false` |

Runtime (Vercel → Settings → Environment Variables, Production):

| Variable | Purpose |
| --- | --- |
| `SCRUBBED_HOST` | `scrubbed.swept.com.au` – switches on Scrubbed routing in `middleware.ts` |
| `SCRUBBED_LEAD_TO_EMAIL` | where floor scrubbing leads go |
| `SCRUBBED_LEAD_FROM_EMAIL` | verified sender, e.g. `Scrubbed by Swept <quotes@swept.com.au>` |
| `RESEND_API_KEY` | shared with the other Swept division sites |
| `SCRUBBED_LEAD_WEBHOOK_URL` | optional second channel (Zapier, Make, CRM) |

Lead emails start with `[Scrubbed · Commercial]`.
In production with no delivery configured the form shows the phone/email
fallback rather than pretending the lead was received.

## Launch steps (each needs approval)

1. **Domain.** In Vercel → Domains add `scrubbed.swept.com.au` to this project
   and set the DNS record Vercel shows.
2. **Lead delivery.** Set the lead variables above and send one test enquiry of
   each type to an address you control. Confirm both arrive before going live.
3. **Hostname.** Set `SCRUBBED_HOST`, `VITE_SCRUBBED_BASE=""` and
   `VITE_SCRUBBED_SITE_URL`, redeploy, and check `https://scrubbed.swept.com.au/`,
   a suburb page and `/sitemap.xml`. `middleware.ts` then redirects old
   `/scrubbed/...` URLs on the commercial host to the subdomain, and `/scrubbed/...`
   URLs on the subdomain to their clean form. each division switches on
   independently.
4. **Indexing.** Set `VITE_SCRUBBED_NOINDEX=false` and redeploy. There is no older
   floor scrubbing site to redirect, so no duplicate-content step is needed.
5. **Search Console.** Add `scrubbed.swept.com.au` (or use a `swept.com.au` Domain
   property) and submit `https://scrubbed.swept.com.au/sitemap.xml`.
