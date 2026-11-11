import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { allCategories, formatDate, guideAuthor, guidePath, guides, headingId, isOfficialSource, readingTime, relatedGuides, type Guide, type GuideBlock } from '../lib/guides'
import { services } from '../lib/services'
import { servicePath } from '../lib/catalogue'
import type { Img } from '../lib/photos'
import { A, CtaBand, Faqs, Icon, Inline, PageHero, Photo } from '../ui'

export const guidesCrumbs = [{ name: 'Home', path: '/' }, { name: 'Cleaning Guides', path: '/guides' }]

const imgOf = (src: Img | string, w?: number, h?: number): Img => (typeof src === 'string' ? { src, width: w ?? 1200, height: h ?? 800 } : src)

export function GuideCard({ g }: { g: Guide }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden border border-zinc-100 bg-white hover:border-cleaned-500/40 hover:shadow-[0_8px_24px_-6px_rgba(124,58,237,0.18)] transition-all duration-200">
      <div className="relative aspect-[16/10] overflow-hidden bg-cleaned-50">
        {g.image ? (
          <Photo img={imgOf(g.image.src, g.image.width, g.image.height)} alt="" sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <span className="flex h-full items-center justify-center"><Icon name="doc" className="w-14 h-14 text-cleaned-400" /></span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          {g.categories.slice(0, 2).map((c) => <span key={c} className="bg-cleaned-50 px-2.5 py-0.5 font-semibold text-cleaned-700">{c}</span>)}
          <span className="inline-flex items-center gap-1 text-zinc-500"><Icon name="clock" className="w-3.5 h-3.5" />{readingTime(g)} min read</span>
        </p>
        <h2 className="mt-3 text-lg font-bold leading-snug text-asphalt">
          <A to={guidePath(g.slug)} className="after:absolute after:inset-0 after:content-[''] hover:text-cleaned-700">{g.title}</A>
        </h2>
        <p className="mt-2 flex-1 text-sm text-zinc-500 leading-relaxed">{g.description}</p>
        <span aria-hidden="true" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cleaned-700">Read guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </article>
  )
}

export function GuidesIndex() {
  const categories = allCategories()
  const [topic, setTopic] = useState<string | null>(null)
  // Topic filter is progressive: every guide is in the HTML, the chips narrow the list once JS loads
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('topic')
    if (t && categories.includes(t)) setTopic(t)
  }, [categories])
  const shown = topic ? guides.filter((g) => g.categories.includes(topic)) : guides
  const chip = 'px-4 py-2 text-sm font-semibold border transition-colors'
  return (
    <>
      <PageHero crumbs={guidesCrumbs} eyebrow="Cleaning guides" title="Cleaning Guides & Advice" intro="Helpful tips, practical advice and answers to your house cleaning questions." />
      <section className="section-pad bg-zinc-50" aria-label="Guides">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter guides by topic">
            <button type="button" aria-pressed={topic === null} onClick={() => setTopic(null)} className={`${chip} ${topic === null ? 'bg-cleaned-600 border-cleaned-600 text-white' : 'bg-white border-zinc-200 text-asphalt hover:border-cleaned-500'}`}>
              All guides ({guides.length})
            </button>
            {categories.map((c) => (
              <button key={c} type="button" aria-pressed={topic === c} onClick={() => setTopic(c)} className={`${chip} ${topic === c ? 'bg-cleaned-600 border-cleaned-600 text-white' : 'bg-white border-zinc-200 text-asphalt hover:border-cleaned-500'}`}>
                {c} ({guides.filter((g) => g.categories.includes(c)).length})
              </button>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shown.map((g) => <li key={g.slug}><GuideCard g={g} /></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

function GuideBody({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-5 text-zinc-700 leading-relaxed [&_h2]:scroll-mt-28">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i}><Inline text={b.text} /></p>
          case 'h2':
            return <h2 key={i} id={b.id ?? headingId(b.text)} className="pt-6 text-2xl sm:text-3xl font-extrabold tracking-headline text-asphalt"><Inline text={b.text} /></h2>
          case 'h3':
            return <h3 key={i} className="pt-2 text-xl font-bold text-asphalt"><Inline text={b.text} /></h3>
          case 'ul':
            return <ul key={i} className="list-disc pl-6 space-y-2 marker:text-cleaned-600">{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ul>
          case 'ol':
            return <ol key={i} className="list-decimal pl-6 space-y-2 marker:text-cleaned-700 marker:font-bold">{b.items.map((t, j) => <li key={j}><Inline text={t} /></li>)}</ol>
          case 'tip':
            return (
              <aside key={i} className="flex gap-4 border border-cleaned-100 bg-cleaned-50 p-5">
                <Icon name="sparkle" className="w-6 h-6 shrink-0 text-cleaned-600" />
                <div>
                  {b.title && <p className="font-bold text-asphalt">{b.title}</p>}
                  <p><Inline text={b.text} /></p>
                </div>
              </aside>
            )
          case 'image':
            return (
              <figure key={i}>
                <Photo img={imgOf(b.src, b.width, b.height)} alt={b.alt} sizes="(min-width: 768px) 720px, 100vw" className="h-auto w-full" />
                {b.caption && <figcaption className="mt-2 text-sm text-zinc-500">{b.caption}</figcaption>}
              </figure>
            )
        }
      })}
    </div>
  )
}

export function GuidePage({ g }: { g: Guide }) {
  const crumbs = [...guidesCrumbs, { name: g.title, path: guidePath(g.slug) }]
  const toc = g.body.filter((b): b is Extract<GuideBlock, { type: 'h2' }> => b.type === 'h2')
  const related = relatedGuides(g)
  const linked = (g.services ?? []).map((s) => services.find((x) => x.slug === s)).filter(Boolean) as typeof services
  return (
    <>
      <PageHero crumbs={crumbs} title={g.title} intro={g.description}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {g.categories.map((c) => <li key={c} className="bg-white/10 px-3 py-1 text-xs font-semibold text-cleaned-300">{c}</li>)}
        </ul>
        <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
          <span className="inline-flex items-center gap-1.5"><Icon name="sparkle" className="w-4 h-4 text-cleaned-300" />By <A to="/about" className="font-semibold text-white underline underline-offset-2">{guideAuthor.name}</A></span>
          <span className="inline-flex items-center gap-1.5"><Icon name="calendar" className="w-4 h-4 text-cleaned-300" />Published <time dateTime={g.published}>{formatDate(g.published)}</time></span>
          {g.updated && g.updated !== g.published && <span>Updated <time dateTime={g.updated}>{formatDate(g.updated)}</time></span>}
          <span className="inline-flex items-center gap-1.5"><Icon name="clock" className="w-4 h-4 text-cleaned-300" />{readingTime(g)} min read</span>
        </p>
      </PageHero>

      {g.image && (
        <div className="section-container max-w-5xl -mt-8 relative z-10">
          <div className="aspect-[16/9] overflow-hidden bg-zinc-200">
            <Photo img={imgOf(g.image.src, g.image.width, g.image.height)} alt={g.image.alt} priority sizes="(min-width: 1024px) 1000px, 100vw" className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      <div className="section-container grid lg:grid-cols-[minmax(0,1fr)_18rem] gap-12 lg:gap-16 py-16 lg:py-20">
        <article className="min-w-0 max-w-3xl">
          {toc.length >= 3 && (
            <details className="mb-8 border border-zinc-200 bg-white p-5 lg:hidden">
              <summary className="cursor-pointer font-bold text-asphalt">In this guide</summary>
              <ol className="mt-3 space-y-2 text-sm">{toc.map((h) => <li key={h.text}><a href={`#${h.id ?? headingId(h.text)}`} className="text-cleaned-700 hover:underline">{h.text.replace(/\*\*/g, '')}</a></li>)}</ol>
            </details>
          )}

          <GuideBody blocks={g.body} />

          {g.sources && g.sources.length > 0 && (
            <section className="mt-12 border border-zinc-200 bg-white p-6" aria-labelledby="guide-src-h">
              <h2 id="guide-src-h" className="text-xl font-extrabold text-asphalt">Sources</h2>
              <p className="mt-1 text-sm text-zinc-500">Prices and rules checked <time dateTime={g.updated ?? g.published}>{formatDate(g.updated ?? g.published)}</time>. Prices are a guide only and change over time.</p>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel={isOfficialSource(s.url) ? 'noopener' : 'nofollow noopener noreferrer'} className="font-semibold text-cleaned-700 underline underline-offset-2">{s.title}</a>
                    {s.publisher && <span className="text-zinc-500"> – {s.publisher}</span>}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-zinc-500">{guideAuthor.role}. Tenancy information is general, not legal advice – check the official sources above for your situation.</p>
            </section>
          )}

          {g.faqs && g.faqs.length > 0 && (
            <section className="mt-14" aria-labelledby="guide-faq-h">
              <h2 id="guide-faq-h" className="mb-5 text-2xl sm:text-3xl font-extrabold tracking-headline text-asphalt">Frequently asked questions</h2>
              <Faqs faqs={g.faqs} />
            </section>
          )}

          {linked.length > 0 && (
            <section className="mt-14" aria-labelledby="guide-svc-h">
              <h2 id="guide-svc-h" className="text-2xl font-extrabold tracking-headline text-asphalt">Services that can help</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-4">
                {linked.map((s) => (
                  <li key={s.slug}>
                    <A to={servicePath(s.slug)} className="flex items-center gap-4 border border-zinc-100 bg-white p-5 hover:border-cleaned-500/40 transition-colors">
                      <span className="w-11 h-11 shrink-0 bg-cleaned-50 text-cleaned-700 flex items-center justify-center"><Icon name={s.icon} className="w-6 h-6" /></span>
                      <span><span className="block font-bold text-asphalt">{s.name}</span><span className="block text-sm text-zinc-500">{s.bestFor}</span></span>
                    </A>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-5">
            {toc.length >= 3 && (
              <nav aria-label="In this guide" className="border border-zinc-200 bg-white p-5">
                <p className="font-bold text-asphalt">In this guide</p>
                <ol className="mt-3 space-y-2 text-sm">{toc.map((h) => <li key={h.text}><a href={`#${h.id ?? headingId(h.text)}`} className="text-zinc-500 hover:text-cleaned-700">{h.text.replace(/\*\*/g, '')}</a></li>)}</ol>
              </nav>
            )}
            <div className="bg-asphalt p-6">
              <p className="text-lg font-bold text-white">Ready for a beautifully clean home?</p>
              <p className="mt-2 text-sm text-white/70">Get a clear, written price for your home.</p>
              <A to="/quote" className="btn-cleaned w-full justify-center mt-5">Get My Free Quote</A>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="section-pad bg-zinc-50" aria-labelledby="related-h">
          <div className="section-container">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 id="related-h" className="display-md text-asphalt">More cleaning guides</h2>
              <A to="/guides" className="font-semibold text-cleaned-700 underline underline-offset-4">All guides</A>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{related.map((r) => <li key={r.slug}><GuideCard g={r} /></li>)}</ul>
          </div>
        </section>
      )}

      <CtaBand title="Ready for a beautifully clean home?" body="Tell us about your home and we'll send a clear, written price." cta="Get My Free Quote" />
    </>
  )
}
