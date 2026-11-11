import { absUrl, NOINDEX } from './lib/paths'
import { defaultImage, imageUrl, type PageMeta } from './routes'

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** JSON for a <script> tag: escape "<" so content can never close the tag. */
const json = (o: object) => JSON.stringify(o).replace(/</g, '\\u003c')

/** <head> SEO tags for a Scrubbed by Swept page (title, description, canonical, robots, social, JSON-LD). */
export function headTags(m: PageMeta): string {
  const url = absUrl(m.path)
  const image = m.image ?? defaultImage
  const img = imageUrl(image.img.src)
  const robots = NOINDEX || m.noindex ? 'noindex, nofollow' : 'index, follow'
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="${m.article ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="Scrubbed by Swept" />`,
    `<meta property="og:locale" content="en_AU" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta property="og:image:width" content="${image.img.width}" />`,
    `<meta property="og:image:height" content="${image.img.height}" />`,
    `<meta property="og:image:alt" content="${esc(image.alt)}" />`,
    ...(m.article
      ? [
          `<meta property="article:published_time" content="${m.article.published}" />`,
          `<meta property="article:modified_time" content="${m.article.modified ?? m.article.published}" />`,
          ...m.article.tags.map((t) => `<meta property="article:tag" content="${esc(t)}" />`),
        ]
      : []),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${esc(img)}" />`,
    `<meta name="theme-color" content="#111827" />`,
    ...m.schema.map((s) => `<script type="application/ld+json">${json(s)}</script>`),
  ]
  return tags.map((t) => `    ${t}`).join('\n')
}
