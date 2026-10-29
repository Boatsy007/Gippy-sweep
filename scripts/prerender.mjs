// Post-build step:
// 1. Writes the rendered page into dist/index.html so crawlers that don't run
//    JavaScript (and Google's first pass) see the full content. The browser
//    then hydrates this markup instead of building the page from an empty <div>.
// 2. Fills the site address (VITE_SITE_URL in .env) into the static text files
//    that Vite copies from public/ untouched.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { loadEnv } from 'vite'

const root = new URL('../', import.meta.url)
const dist = new URL('dist/', root)
const ssrDir = new URL('dist-ssr/', root)
const PLACEHOLDER = '%VITE_SITE_URL%'

const siteUrl = loadEnv('production', root.pathname, 'VITE_').VITE_SITE_URL?.replace(/\/+$/, '')
if (!siteUrl) throw new Error('prerender: VITE_SITE_URL is not set (see .env)')

// 1. Prerender
const { render } = await import(new URL('entry-server.js', ssrDir))
const indexFile = new URL('index.html', dist)
const template = await readFile(indexFile, 'utf8')
const rootDiv = '<div id="root"></div>'
if (!template.includes(rootDiv)) throw new Error('prerender: #root placeholder not found in dist/index.html')
await writeFile(indexFile, template.replace(rootDiv, `<div id="root">${render()}</div>`))
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
console.log(`prerender: dist/index.html written; site URL ${siteUrl}`)
