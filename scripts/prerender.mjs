// Writes the rendered page into dist/index.html so crawlers that don't run
// JavaScript (and Google's first pass) see the full content. The browser then
// hydrates this markup instead of building the page from an empty <div>.
import { readFile, writeFile, rm } from 'node:fs/promises'

const ssrDir = new URL('../dist-ssr/', import.meta.url)
const indexFile = new URL('../dist/index.html', import.meta.url)

const { render } = await import(new URL('entry-server.js', ssrDir))
const template = await readFile(indexFile, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) throw new Error('prerender: #root placeholder not found in dist/index.html')

await writeFile(indexFile, template.replace(placeholder, `<div id="root">${render()}</div>`))
await rm(ssrDir, { recursive: true, force: true })
console.log('prerender: dist/index.html written')
