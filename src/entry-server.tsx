import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { CleanedApp } from './cleaned/CleanedApp'
import { cleanedRoutes } from './cleaned/routes'
import { headTags } from './cleaned/head'
import { llmsTxt, robotsTxt, sitemapXml } from './cleaned/files'
import { BASE, CLEANED_URL, NOINDEX, absUrl } from './cleaned/lib/paths'

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
