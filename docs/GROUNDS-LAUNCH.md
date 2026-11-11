# Grounds by Swept – development, review and launch

Grounds by Swept (the lawn, garden and grounds care division of Swept) is built
the same way as Cleaned by Swept: inside this repository, deployed by the same
Vercel project as the Swept commercial site. Nothing in this file has been done
to production yet – each launch step needs the owner's approval.

## How it is built

| Piece | Where |
| --- | --- |
| Pages (139) | `src/grounds/pages/*`, route table in `src/grounds/routes.tsx` |
| Content | `src/grounds/lib/*` – services, commercial, areas, content, site facts |
| Suburbs | the same 112 suburbs as Cleaned (`src/cleaned/lib/suburbs.ts`); lawn and garden profiles in `src/grounds/lib/profiles.ts` |
| Design | Swept commercial classes (`src/index.css`) with the `grounds` green tokens (`tailwind.config.ts`) and `.btn-grounds` |
| Prerendering | `scripts/prerender.mjs` writes `dist/grounds/<path>/index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` |
| Quote forms | `src/grounds/pages/Quote.tsx` → `api/grounds-quote.ts` (Vercel Function) |
| Hostname routing | `middleware.ts` – inactive for Grounds until `GROUNDS_HOST` is set |

### Pages

- Home, residential hub and 9 service pages: lawn mowing & edging, garden
  maintenance & weeding, hedge & shrub trimming, pruning & small tree work,
  mulching & garden beds, turf laying & lawn repair, fertilising & weed control,
  green waste removal, yard & leaf clean-ups
- Commercial hub and 4 pages: strata & body corporate, commercial & industrial,
  retail centres & car parks, property managers & rentals
- Areas index, 4 regions, 112 suburb pages
- About, FAQ, contact, privacy, quote, thank-you (noindex), 404 (noindex)

### Content rules followed

- No prices, rates or price ranges anywhere. Pages explain what a quote depends on.
- No licences, certifications, awards, years in business, customer numbers,
  reviews or guarantees of results. The only trust claim is public liability
  insurance, which was confirmed for Swept.
- Horticultural notes are general and checkable (warm-season grasses grow
  fastest in the warm, wet months; the one-third mowing rule; mulch kept off
  stems; councils protect some trees; work near power lines needs authorised
  people). Pruning is limited to small trees and shrubs within safe reach.
- No guides/blog yet – add them only with researched, sourced content.

### Things for the owner to confirm before launch

- **Weed spraying.** Check whether Queensland or NSW rules require a licence or
  accreditation for applying herbicides for a fee, and that whoever does the
  work holds it. The site makes no licence claim either way.
- **Green waste.** The site says green waste goes to an appropriate green waste
  facility wherever possible. Confirm that's how it's handled.
- **Photos.** There are no Grounds photos yet, so the home hero uses a striped
  "mown lawn" graphic and the share image (`public/grounds/og-image.jpg`) is a
  logo card. Real photos of Swept's own work will help both pages and search.

## Reviewing it now

Every Vercel preview deployment of the `claude/cleaned-by-swept` branch serves the
grounds site under `/grounds/`:

    https://<preview-url>/grounds/

All pages carry `<meta name="robots" content="noindex, nofollow">` and are left
out of the commercial sitemap. Quote forms on previews run in **test mode**:
requests are validated and logged, nothing is emailed, and the thank-you page
says so.

On the commercial site, the Grounds card, the Grounds section buttons and the
footer link now go to the grounds site (`/grounds/`, and
`/grounds/quote/?type=commercial` for quotes). Nothing else on the commercial
homepage changed (checked by building before and after and comparing
`dist/index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`).

## Settings

Build-time (`.env` or Vercel → Settings → Environment Variables):

| Variable | Now | At launch |
| --- | --- | --- |
| `VITE_GROUNDS_BASE` | unset (= `/grounds`) | `""` (empty) |
| `VITE_GROUNDS_SITE_URL` | unset (= `VITE_SITE_URL` + `/grounds`) | `https://grounds.swept.com.au` |
| `VITE_GROUNDS_NOINDEX` | unset (= noindex) | `false` |

Runtime (Vercel → Settings → Environment Variables, Production):

| Variable | Purpose |
| --- | --- |
| `GROUNDS_HOST` | `grounds.swept.com.au` – switches on Grounds routing in `middleware.ts` |
| `GROUNDS_LEAD_TO_EMAIL` | where grounds leads go |
| `GROUNDS_LEAD_FROM_EMAIL` | verified sender, e.g. `Grounds by Swept <quotes@swept.com.au>` |
| `RESEND_API_KEY` | shared with Cleaned by Swept |
| `GROUNDS_LEAD_WEBHOOK_URL` | optional second channel (Zapier, Make, CRM) |

Lead emails start with `[Grounds · Residential]` or `[Grounds · Commercial]`.
In production with no delivery configured the form shows the phone/email
fallback rather than pretending the lead was received.

## Launch steps (each needs approval)

1. **Domain.** In Vercel → Domains add `grounds.swept.com.au` to this project
   and set the DNS record Vercel shows.
2. **Lead delivery.** Set the lead variables above and send one test enquiry of
   each type to an address you control. Confirm both arrive before going live.
3. **Hostname.** Set `GROUNDS_HOST`, `VITE_GROUNDS_BASE=""` and
   `VITE_GROUNDS_SITE_URL`, redeploy, and check `https://grounds.swept.com.au/`,
   a suburb page and `/sitemap.xml`. `middleware.ts` then redirects old
   `/grounds/...` URLs on the commercial host to the subdomain, and `/grounds/...`
   URLs on the subdomain to their clean form. Cleaned and Grounds switch on
   independently.
4. **Indexing.** Set `VITE_GROUNDS_NOINDEX=false` and redeploy. There is no older
   grounds site to redirect, so no duplicate-content step is needed.
5. **Search Console.** Add `grounds.swept.com.au` (or use a `swept.com.au` Domain
   property) and submit `https://grounds.swept.com.au/sitemap.xml`.
