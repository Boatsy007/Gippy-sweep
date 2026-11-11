import { Fragment, type ReactNode } from 'react'
import {
  ArrowRight, Building2, Calendar, Check, CheckCircle2, ChevronDown, Clock, FileText, HeartHandshake,
  Home, KeyRound, Layers, MapPin, Package, ShieldCheck, Sparkles, TreePalm, Waves,
  Leaf, Trees, Scissors, Sprout, Shovel, Flower2, Recycle, Wind, Droplets, Sun, Fence, TreeDeciduous,
  SprayCan, Warehouse, ShoppingCart, Mountain, Car, Paintbrush, Grid3x3, BrickWall, Droplet, Trash2, Store, Hotel, Truck, Footprints,
} from 'lucide-react'
import { href } from './lib/paths'
import type { Faq, Img } from './lib/types'

/* Shared building blocks for the Washed by Swept pages. They reuse the Swept
   commercial site's classes (section-container, section-pad, eyebrow, display-*,
   btn-*), with the Washed blue in place of the commercial blue. */

const icons = {
  home: Home, sparkle: Sparkles, heart: HeartHandshake, box: Package, key: KeyRound, carpet: Layers,
  city: Building2, palm: TreePalm, wave: Waves, pin: MapPin, doc: FileText, check: Check,
  checkCircle: CheckCircle2, shield: ShieldCheck, arrow: ArrowRight, calendar: Calendar, clock: Clock,
  leaf: Leaf, trees: Trees, scissors: Scissors, sprout: Sprout, shovel: Shovel, flower: Flower2, recycle: Recycle,
  wind: Wind, droplets: Droplets, sun: Sun, fence: Fence, tree: TreeDeciduous, spray: SprayCan, warehouse: Warehouse,
  cart: ShoppingCart, mountain: Mountain, car: Car, brush: Paintbrush, grid: Grid3x3, brick: BrickWall, droplet: Droplet,
  bin: Trash2, store: Store, hotel: Hotel, truck: Truck, footprints: Footprints,
} as const

export type IconName = keyof typeof icons

export function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const C = icons[name as IconName] ?? Droplets
  return <C className={className} aria-hidden="true" />
}

/** Internal link to a washed-site page (path without the base prefix). */
export function A({ to, className, children, ...rest }: { to: string; className?: string; children: ReactNode } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  return <a href={href(to)} className={className} {...rest}>{children}</a>
}

export function Photo({ img, alt, className = '', sizes = '100vw', priority = false }: { img: Img; alt: string; className?: string; sizes?: string; priority?: boolean }) {
  return (
    <img
      src={img.src}
      width={img.width}
      height={img.height}
      alt={alt}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      // React 18 only passes the lowercase attribute through to the DOM
      {...(priority ? ({ fetchpriority: 'high' } as Record<string, string>) : {})}
    />
  )
}

export function Eyebrow({ children, dark = false, className = '' }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <p className={`eyebrow ${dark ? 'text-washed-300' : 'text-washed-700'} ${className}`}>{children}</p>
}

export function Breadcrumbs({ items, dark = true }: { items: { name: string; path: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold ${dark ? 'text-white/60' : 'text-zinc-500'}`}>
        {items.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className={dark ? 'text-white' : 'text-asphalt'}>{c.name}</span>
            ) : (
              <A to={c.path} className="hover:underline underline-offset-2">{c.name}</A>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * Dark page header in the style of the Swept commercial hero, so the glass
 * navbar behaves the same on every page (dark over the hero, light on scroll).
 */
export function PageHero({
  crumbs, eyebrow, title, intro, children, image, imageAlt, aside,
}: {
  crumbs?: { name: string; path: string }[]
  eyebrow?: ReactNode
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
  image?: Img
  imageAlt?: string
  aside?: ReactNode
}) {
  return (
    <section className="relative bg-asphalt overflow-hidden" aria-label="Page header">
      {image && (
        <div className="absolute inset-0 lg:left-1/2 z-0">
          <Photo img={image} alt={imageAlt ?? ''} priority sizes="(min-width: 1024px) 50vw, 100vw" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-asphalt/30" />
          <div className="absolute inset-y-0 left-0 w-28 hidden lg:block" style={{ background: 'linear-gradient(to right, #111827, transparent)' }} />
          <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.9) 0%, rgba(17,24,39,0.75) 60%, rgba(17,24,39,0.55) 100%)' }} />
        </div>
      )}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-washed-500 z-20" aria-hidden="true" />
      <div className="section-container relative z-10 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <div className={`grid gap-12 ${image || aside ? 'lg:grid-cols-2' : ''}`}>
          <div className="max-w-2xl">
            {crumbs && <Breadcrumbs items={crumbs} />}
            {eyebrow && <Eyebrow dark className="mb-5">{eyebrow}</Eyebrow>}
            <h1 className="display-lg text-white">{title}</h1>
            {intro && <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">{intro}</p>}
            {children}
          </div>
          {aside && <div className="relative">{aside}</div>}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ id, eyebrow, title, intro, center = false }: { id: string; eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
      {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
      <h2 id={id} className="display-md text-asphalt">{title}</h2>
      {intro && <p className="mt-5 text-zinc-500 text-base leading-relaxed">{intro}</p>}
    </div>
  )
}

/** Card with the blue accent strip used on the commercial service cards. */
export function Card({ children, className = '', accent = false }: { children: ReactNode; className?: string; accent?: boolean }) {
  return (
    <div className={`group relative bg-white border border-zinc-100 p-6 hover:border-washed-500/40 hover:shadow-[0_8px_24px_-6px_rgba(0,87,224,0.18)] transition-all duration-200 h-full flex flex-col ${className}`}>
      {accent && <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: 'linear-gradient(90deg, #00E5FF, #0062FF)' }} aria-hidden="true" />}
      {children}
    </div>
  )
}

export function CheckItem({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 bg-washed-600 flex items-center justify-center shrink-0 mt-0.5">
        <Check className="w-3 h-3 text-white" aria-hidden="true" />
      </span>
      <span className={dark ? 'text-white/80' : 'text-zinc-600'}>{children}</span>
    </li>
  )
}

export function Faqs({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
      {faqs.map((f) => (
        <details key={f.q} className="group py-5">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base font-bold text-asphalt [&::-webkit-details-marker]:hidden">
            {f.q}
            <ChevronDown className="w-5 h-5 text-washed-700 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="mt-3 text-zinc-600 text-sm leading-relaxed"><Inline text={f.a} /></p>
        </details>
      ))}
    </div>
  )
}

/** Dark call-to-action band, as at the foot of the commercial site. */
export function CtaBand({ title = 'Ready for a cleaner exterior?', body = 'Tell us about your property and we’ll send a clear, written quote.', to = '/quote', cta = 'Get a Free Quote' }: { title?: string; body?: string; to?: string; cta?: string }) {
  return (
    <section className="bg-asphalt relative overflow-hidden" aria-label="Get a quote">
      <div className="absolute top-0 inset-x-0 h-px bg-washed-500/40" aria-hidden="true" />
      <div className="section-container py-20 lg:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="display-md text-white">{title}</h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">{body}</p>
        </div>
        <A to={to} className="btn-washed shrink-0 self-start lg:self-auto">
          {cta}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </A>
      </div>
    </section>
  )
}

/** Renders [text](href) links and **bold** in content strings; internal paths get the site prefix. */
export function Inline({ text }: { text: string }) {
  const out: ReactNode[] = []
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index))
    if (m[1] !== undefined) {
      const target = m[2]
      out.push(
        target.startsWith('/') ? (
          <a key={k++} href={href(target)} className="font-semibold text-washed-700 underline underline-offset-2">{m[1]}</a>
        ) : target.startsWith('#') ? (
          <a key={k++} href={target} className="font-semibold text-washed-700 underline underline-offset-2">{m[1]}</a>
        ) : (
          <a key={k++} href={target} target="_blank" rel="noopener noreferrer" className="font-semibold text-washed-700 underline underline-offset-2">{m[1]}</a>
        ),
      )
    } else {
      out.push(<strong key={k++}>{m[3]}</strong>)
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push(text.slice(last))
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>
}
