import { useState, useEffect, useRef, type ReactNode } from 'react'
import { Menu, X, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { A } from './ui'
import { SweptByline, SweptFooterLink } from '../components/SweptMark'
import { useOverLight } from '../components/useOverLight'
import { COMMERCIAL_URL } from './lib/paths'
import { site, telHref } from './lib/site'
import { residentialServices, servicePath } from './lib/catalogue'
import { commercialPages, commercialPath } from './lib/commercial'
import { areas } from './lib/areas'

/* Header and footer for Cleaned by Swept. Structure, classes and behaviour mirror
   the Swept commercial Navbar and Footer (src/components/layout) — glass bar that
   is dark over dark sections and light over light ones, the same mobile menu and the
   same dark footer — with the Cleaned logo and violet accent. */

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Residential', to: '/residential' },
  { label: 'Commercial', to: '/commercial' },
  { label: 'Areas We Service', to: '/residential/areas' },
  { label: 'Cleaning Guides', to: '/guides' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const fade = 'transition-opacity duration-500 ease-out'

/** Cleaned logo + "by Swept". Letters sized like the Swept header logo (36px mobile, 60px desktop). */
function CleanedLogo({ white = false, className = '' }: { white?: boolean; className?: string }) {
  return (
    <span className={`flex items-end gap-2 ${className}`}>
      <img
        src={white ? '/logo-cleaned-white.webp' : '/logo-cleaned.webp'}
        alt="Cleaned"
        width={194}
        height={54}
        className="block w-auto h-9 lg:h-[60px]"
        draggable={false}
      />
      <SweptByline white={white} byClass={white ? 'text-cleaned-300' : 'text-cleaned-700'} />
    </span>
  )
}

export function Header({ current }: { current: string }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  // Light glass only while a light section is under the header
  const scrolled = useOverLight(headerRef)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    menuRef.current?.toggleAttribute('inert', !open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const dark = scrolled || open
  const isCurrent = (to: string) => (to === '/' ? current === '/' : current.startsWith(to))

  return (
    <>
      <header ref={headerRef} className={`glass fixed top-0 left-0 right-0 z-50 ${dark ? 'glass-light' : 'glass-dark'}`}>
        <div className="section-container">
          <div className="flex items-center justify-between py-4 lg:py-3">
            <A to="/" aria-label="Cleaned by Swept — Home">
              <span className="relative block">
                <CleanedLogo className={`${fade} ${dark ? 'opacity-100' : 'opacity-0'}`} />
                <CleanedLogo white className={`absolute inset-0 ${fade} ${dark ? 'opacity-0' : 'opacity-100'}`} />
              </span>
            </A>

            <nav className="hidden xl:flex items-center gap-7" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <A
                  key={link.to}
                  to={link.to}
                  aria-current={isCurrent(link.to) ? 'page' : undefined}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-500 ease-out ${
                    scrolled ? 'text-asphalt/70 hover:text-asphalt' : 'text-white/70 hover:text-white'
                  } aria-[current=page]:underline aria-[current=page]:underline-offset-8 aria-[current=page]:decoration-cleaned-500 aria-[current=page]:decoration-2`}
                >
                  {link.label}
                </A>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-4">
              <A to="/quote" className="btn-cleaned text-xs px-6 py-3">Get a Quote</A>
            </div>

            <button
              className={`xl:hidden p-2 -mr-2 transition-colors duration-500 ease-out ${dark ? 'text-asphalt' : 'text-white'}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-cream xl:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <A
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-3xl font-extrabold tracking-tightest text-asphalt py-3 border-b border-zinc-100 hover:text-cleaned-600 transition-colors"
                style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </A>
            ))}
          </nav>
          <div className="mt-auto pt-10 flex flex-col gap-4">
            <a href={sweptHome} className="inline-flex items-center justify-center gap-2 py-2 text-sm font-semibold text-zinc-600 hover:text-asphalt">
              Visit <img src="/logo-dark.webp" alt="Swept" width={571} height={160} className="h-5 w-auto" /> <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            {site.phone && (
              <a href={telHref(site.phone)} className="btn-outline-dark justify-center">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {site.phone}
              </a>
            )}
            <A to="/quote" className="btn-cleaned justify-center" onClick={() => setOpen(false)}>Get a Free Quote</A>
          </div>
        </div>
      </div>
    </>
  )
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">{title}</h3>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}

const sweptHome = COMMERCIAL_URL === '/' ? '/' : `${COMMERCIAL_URL}/`

const footLink = 'text-sm hover:text-white transition-colors duration-150'

export function Footer() {
  return (
    <footer className="bg-asphalt text-white/70" aria-label="Site footer">
      <div className="section-container py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <CleanedLogo white />
            <p className="mt-6 text-sm leading-relaxed text-white/60 max-w-xs">
              Residential and commercial cleaning across Brisbane, Logan, the Gold Coast and Tweed Heads.
              Cleaned by Swept is the cleaning division of Swept.
            </p>
            <ul className="mt-8 space-y-4">
              {site.phone && (
                <li>
                  <a href={telHref(site.phone)} className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-150">
                    <Phone className="w-4 h-4 mt-0.5 text-cleaned-400 shrink-0" aria-hidden="true" />{site.phone}
                  </a>
                </li>
              )}
              {site.email && (
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-sm hover:text-white transition-colors duration-150">
                    <Mail className="w-4 h-4 mt-0.5 text-cleaned-400 shrink-0" aria-hidden="true" />{site.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-cleaned-400 shrink-0" aria-hidden="true" />
                <span>{site.responseHours}</span>
              </li>
            </ul>
            <SweptFooterLink href={sweptHome} accentClass="text-cleaned-300" />
          </div>

          <FooterColumn title="Residential">
            {residentialServices.map((s) => (
              <li key={s.slug}><A to={servicePath(s.slug)} className={footLink}>{s.name}</A></li>
            ))}
          </FooterColumn>

          <FooterColumn title="Commercial">
            <li><A to="/commercial" className={footLink}>Commercial cleaning</A></li>
            {commercialPages.map((p) => (
              <li key={p.slug}><A to={commercialPath(p.slug)} className={footLink}>{p.name}</A></li>
            ))}
          </FooterColumn>

          <FooterColumn title="Areas & help">
            {areas.map((a) => (
              <li key={a.slug}><A to={`/residential/areas/${a.slug}`} className={footLink}>Cleaning {a.name}</A></li>
            ))}
            <li><A to="/guides" className={footLink}>Cleaning guides</A></li>
            <li><A to="/swept-promise" className={footLink}>The Swept Promise</A></li>
            <li><A to="/faq" className={footLink}>FAQs</A></li>
          </FooterColumn>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Swept. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <A to="/privacy" className="text-xs text-white/60 hover:text-white transition-colors duration-150">Privacy</A>
            <A to="/contact" className="text-xs text-white/60 hover:text-white transition-colors duration-150">Contact</A>
            <a href={sweptHome} className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors duration-150">
              Swept Commercial Property Care <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Fixed frame for every Cleaned page. */
export function Layout({ current, children }: { current: string; children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-clip">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-cleaned-600 focus:text-white focus:px-4 focus:py-2 focus:font-semibold">
        Skip to main content
      </a>
      <Header current={current} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}

