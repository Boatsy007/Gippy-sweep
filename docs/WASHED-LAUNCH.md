# Washed by Swept – development, review and launch

Washed by Swept (the pressure cleaning division of Swept) is built the same way
as Cleaned and Grounds by Swept: inside this repository, deployed by the same
Vercel project as the Swept commercial site. Nothing in this file has been done
to production yet – each launch step needs the owner's approval.

## How it is built

| Piece | Where |
| --- | --- |
| Pages (138) | `src/washed/pages/*`, route table in `src/washed/routes.tsx` |
| Content | `src/washed/lib/*` – services, commercial, areas, content, site facts |
| Suburbs | the same 112 suburbs as Cleaned (`src/cleaned/lib/suburbs.ts`); surface-care profiles in `src/washed/lib/profiles.ts` |
| Design | Swept commercial classes (`src/index.css`) with the `washed` blue tokens (`tailwind.config.ts`) and `.btn-washed` |
| Prerendering | `scripts/prerender.mjs` writes `dist/washed/<path>/index.html`, `sitemap.xml`, `robots.txt`, `llms.txt` |
| Quote forms | `src/washed/pages/Quote.tsx` → `api/washed-quote.ts` (Vercel Function) |
| Hostname routing | `middleware.ts` – inactive for Washed until `WASHED_HOST` is set |

### Pages

- Home, residential hub and 7 service pages: driveway & concrete cleaning, house
  washing & soft washing, patio, paver & pool surround cleaning, deck & timber
  cleaning, fence, wall & retaining wall cleaning, oil, rust & stain treatment,
  exterior clean-ups for sale & lease
- Commercial hub and 5 pages: car park wash-downs, building exteriors & graffiti
  removal, strata, resort & body corporate, retail centres & footpaths, loading
  docks, bin bays & warehouses (all from the confirmed Washed list on the
  commercial site)
- Areas index, 4 regions, 112 suburb pages
- About, FAQ, contact, privacy, quote, thank-you (noindex), 404 (noindex)

### Content rules followed

- No prices, rates or price ranges anywhere. Pages explain what a quote depends on.
- No licences, certifications, awards, years in business, reviews or
  guarantees. The site says plainly that not every stain will come out. The only
  trust claim is public liability insurance, which was confirmed for Swept.
- Surface-care notes are general and checkable (soft washing for paint and
  render, timber cleaned along the grain, new concrete left to cure, paver joints
  may need re-sanding, natural stone needs lower pressure, stormwater flows to
  waterways).
- Nothing about roof cleaning, sealing, or work at height beyond ladders and
  standard extension equipment. No guides/blog yet.

### Things for the owner to confirm before launch

- **Wash water.** The site says run-off is planned and wash water is directed
  away from stormwater drains where practical. Check this matches how jobs are
  run, and what Queensland and NSW environmental rules and your councils expect
  for mobile pressure cleaning.
- **Two-storey homes.** The site says two-storey walls are washed where they can
  be reached safely from the ground with extension equipment or a ladder.
- **Graffiti, rust and oil treatments.** Confirm the products and methods you use
  match the descriptions.
- **Photos.** There are no Washed photos yet, so the home hero uses a water
  ripple graphic and the share image (`public/washed/og-image.jpg`) is a logo
  card. Before-and-after photos of real jobs will help both pages and search.

## Reviewing it now

Every Vercel preview deployment of the `claude/cleaned-by-swept` branch serves the
pressure cleaning site under `/washed/`:

    https://<preview-url>/washed/

All pages carry `<meta name="robots" content="noindex, nofollow">` and are left
out of the commercial sitemap. Quote forms on previews run in **test mode**:
requests are validated and logged, nothing is emailed, and the thank-you page
says so.

On the commercial site, the Washed card, the Washed section buttons and the
footer link now go to the pressure cleaning site (`/washed/`, and
`/washed/quote/?type=commercial` for quotes). Nothing else on the commercial
homepage changed (checked by building before and after and comparing
`dist/index.html`, `robots.txt`, `sitemap.xml` and `llms.txt`).

## Settings

Build-time (`.env` or Vercel → Settings → Environment Variables):

| Variable | Now | At launch |
| --- | --- | --- |
| `VITE_WASHED_BASE` | unset (= `/washed`) | `""` (empty) |
| `VITE_WASHED_SITE_URL` | unset (= `VITE_SITE_URL` + `/washed`) | `https://washed.swept.com.au` |
| `VITE_WASHED_NOINDEX` | unset (= noindex) | `false` |

Runtime (Vercel → Settings → Environment Variables, Production):

| Variable | Purpose |
| --- | --- |
| `WASHED_HOST` | `washed.swept.com.au` – switches on Washed routing in `middleware.ts` |
| `WASHED_LEAD_TO_EMAIL` | where pressure cleaning leads go |
| `WASHED_LEAD_FROM_EMAIL` | verified sender, e.g. `Washed by Swept <quotes@swept.com.au>` |
| `RESEND_API_KEY` | shared with Cleaned and Grounds by Swept |
| `WASHED_LEAD_WEBHOOK_URL` | optional second channel (Zapier, Make, CRM) |

Lead emails start with `[Washed · Residential]` or `[Washed · Commercial]`.
In production with no delivery configured the form shows the phone/email
fallback rather than pretending the lead was received.

## Launch steps (each needs approval)

1. **Domain.** In Vercel → Domains add `washed.swept.com.au` to this project
   and set the DNS record Vercel shows.
2. **Lead delivery.** Set the lead variables above and send one test enquiry of
   each type to an address you control. Confirm both arrive before going live.
3. **Hostname.** Set `WASHED_HOST`, `VITE_WASHED_BASE=""` and
   `VITE_WASHED_SITE_URL`, redeploy, and check `https://washed.swept.com.au/`,
   a suburb page and `/sitemap.xml`. `middleware.ts` then redirects old
   `/washed/...` URLs on the commercial host to the subdomain, and `/washed/...`
   URLs on the subdomain to their clean form. Cleaned, Grounds and Washed switch
   on independently.
4. **Indexing.** Set `VITE_WASHED_NOINDEX=false` and redeploy. There is no older
   pressure cleaning site to redirect, so no duplicate-content step is needed.
5. **Search Console.** Add `washed.swept.com.au` (or use a `swept.com.au` Domain
   property) and submit `https://washed.swept.com.au/sitemap.xml`.
