import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { CleanedApp } from './cleaned/CleanedApp'
import { cleanedRoutes } from './cleaned/routes'
import { headTags } from './cleaned/head'
import { llmsTxt, robotsTxt, sitemapXml } from './cleaned/files'
import { BASE, CLEANED_URL, NOINDEX, absUrl } from './cleaned/lib/paths'
import { GroundsApp } from './grounds/GroundsApp'
import { groundsRoutes } from './grounds/routes'
import { headTags as groundsHead } from './grounds/head'
import * as groundsText from './grounds/files'
import * as groundsPaths from './grounds/lib/paths'
import { WashedApp } from './washed/WashedApp'
import { washedRoutes } from './washed/routes'
import { headTags as washedHead } from './washed/head'
import * as washedText from './washed/files'
import * as washedPaths from './washed/lib/paths'
import { ScrubbedApp } from './scrubbed/ScrubbedApp'
import { scrubbedRoutes } from './scrubbed/routes'
import { headTags as scrubbedHead } from './scrubbed/head'
import * as scrubbedText from './scrubbed/files'
import * as scrubbedPaths from './scrubbed/lib/paths'

/** Renders the page to HTML at build time (see scripts/prerender.mjs). */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

/** Cleaned by Swept: every page with its rendered body and <head> tags. */
export function renderCleaned() {
  return cleanedRoutes().map((r) => ({
    path: r.path,
    html: renderToString(<CleanedApp path={r.path} />),
    head: headTags(r.meta),
    url: absUrl(r.path),
  }))
}

export const cleanedConfig = { base: BASE, url: CLEANED_URL, noindex: NOINDEX }

/** robots.txt, sitemap.xml and llms.txt for the cleaning site. */
export const cleanedFiles = () => ({ 'robots.txt': robotsTxt(), 'sitemap.xml': sitemapXml(), 'llms.txt': llmsTxt() })

/** Grounds by Swept: every page with its rendered body and <head> tags. */
export function renderGrounds() {
  return groundsRoutes().map((r) => ({
    path: r.path,
    html: renderToString(<GroundsApp path={r.path} />),
    head: groundsHead(r.meta),
    url: groundsPaths.absUrl(r.path),
  }))
}

export const groundsConfig = { base: groundsPaths.BASE, url: groundsPaths.GROUNDS_URL, noindex: groundsPaths.NOINDEX }

/** robots.txt, sitemap.xml and llms.txt for the grounds site. */
export const groundsFiles = () => ({ 'robots.txt': groundsText.robotsTxt(), 'sitemap.xml': groundsText.sitemapXml(), 'llms.txt': groundsText.llmsTxt() })

/** Washed by Swept: every page with its rendered body and <head> tags. */
export function renderWashed() {
  return washedRoutes().map((r) => ({
    path: r.path,
    html: renderToString(<WashedApp path={r.path} />),
    head: washedHead(r.meta),
    url: washedPaths.absUrl(r.path),
  }))
}

export const washedConfig = { base: washedPaths.BASE, url: washedPaths.WASHED_URL, noindex: washedPaths.NOINDEX }

/** robots.txt, sitemap.xml and llms.txt for the pressure cleaning site. */
export const washedFiles = () => ({ 'robots.txt': washedText.robotsTxt(), 'sitemap.xml': washedText.sitemapXml(), 'llms.txt': washedText.llmsTxt() })

/** Scrubbed by Swept: every page with its rendered body and <head> tags. */
export function renderScrubbed() {
  return scrubbedRoutes().map((r) => ({
    path: r.path,
    html: renderToString(<ScrubbedApp path={r.path} />),
    head: scrubbedHead(r.meta),
    url: scrubbedPaths.absUrl(r.path),
  }))
}

export const scrubbedConfig = { base: scrubbedPaths.BASE, url: scrubbedPaths.SCRUBBED_URL, noindex: scrubbedPaths.NOINDEX }

/** robots.txt, sitemap.xml and llms.txt for the floor scrubbing site. */
export const scrubbedFiles = () => ({ 'robots.txt': scrubbedText.robotsTxt(), 'sitemap.xml': scrubbedText.sitemapXml(), 'llms.txt': scrubbedText.llmsTxt() })
