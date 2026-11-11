// Post-build step:
// 1. Writes the rendered page into dist/index.html so crawlers that don't run
//    JavaScript (and Google's first pass) see the full content. The browser
//    then hydrates this markup instead of building the page from an empty <div>.
// 2. Fills the site address (VITE_SITE_URL in .env) into the static text files
//    that Vite copies from public/ untouched.
// 3. Writes every Cleaned by Swept page to dist/cleaned/<path>/index.html, with
//    its own <head> in place of the commercial one, plus the cleaning site's
//    robots.txt, sitemap.xml and llms.txt.
import { readFile, writeFile, rm, mkdir } from 'node:fs/promises'
import { loadEnv } from 'vite'

const root = new URL('../', import.meta.url)
const dist = new URL('dist/', root)
const ssrDir = new URL('dist-ssr/', root)
const PLACEHOLDER = '%VITE_SITE_URL%'

const siteUrl = loadEnv('production', root.pathname, 'VITE_').VITE_SITE_URL?.replace(/\/+$/, '')
if (!siteUrl) throw new Error('prerender: VITE_SITE_URL is not set (see .env)')

// 1. Prerender
const ssr = await import(new URL('entry-server.js', ssrDir))
const { render } = ssr
const indexFile = new URL('index.html', dist)
const template = await readFile(indexFile, 'utf8')
const rootDiv = '<div id="root"></div>'
if (!template.includes(rootDiv)) throw new Error('prerender: #root placeholder not found in dist/index.html')
// Replacer functions insert text literally – content contains "$" (prices), which
// String.replace would otherwise read as $1/$& patterns
const commercialHtml = render()
await writeFile(indexFile, template.replace(rootDiv, () => `<div id="root">${commercialHtml}</div>`))
await rm(ssrDir, { recursive: true, force: true })

// 2. Site address in static files
for (const name of ['robots.txt', 'sitemap.xml', 'llms.txt']) {
  const file = new URL(name, dist)
  await writeFile(file, (await readFile(file, 'utf8')).replaceAll(PLACEHOLDER, siteUrl))
}

for (const name of ['index.html', 'robots.txt', 'sitemap.xml', 'llms.txt']) {
  if ((await readFile(new URL(name, dist), 'utf8')).includes(PLACEHOLDER)) {
    throw new Error(`prerender: ${name} still contains ${PLACEHOLDER}`)
  }
}
// 3. Cleaned by Swept
// Strip the commercial page's own SEO tags from the shell; shared tags (charset,
// viewport, favicon, fonts, scripts, styles) stay.
let shell = template
for (const re of [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta name="(description|keywords|author|robots)"[^>]*>/g,
  /\s*<link rel="canonical"[^>]*>/g,
  /\s*<meta property="og:[^>]*>/g,
  /\s*<meta name="twitter:[^>]*>/g,
  /\s*<link rel="preload" as="image"[^>]*>/g,
  /\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  /\s*<!--[\s\S]*?-->/g,
]) shell = shell.replace(re, '')
if (/SWEPT \||application\/ld\+json|og:title/.test(shell)) throw new Error('prerender: commercial SEO tags left in the Cleaned page shell')

const cleanedDir = new URL('cleaned/', dist)
const pages = ssr.renderCleaned()
for (const page of pages) {
  const html = shell
    .replace(/(<meta name="viewport"[^>]*>)/, (m) => `${m}\n${page.head}`)
    .replace(rootDiv, () => `<div id="root" data-site="cleaned">${page.html}</div>`)
  const dir = new URL(`.${page.path}`, cleanedDir)
  await mkdir(dir, { recursive: true })
  await writeFile(new URL('index.html', dir), html)
}
for (const [name, body] of Object.entries(ssr.cleanedFiles())) await writeFile(new URL(name, cleanedDir), body)

const { base, url, noindex } = ssr.cleanedConfig
console.log(`prerender: dist/index.html written; site URL ${siteUrl}`)
console.log(`prerender: ${pages.length} Cleaned by Swept pages at ${base || '/'} (${url})${noindex ? ' – noindex' : ''}`)
