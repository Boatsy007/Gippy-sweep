import { useState, useEffect, useRef } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '../Logo'
import { site, phoneHref } from '../../site'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const fade = 'transition-opacity duration-500 ease-out'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Keep the hidden menu out of the tab order, and let Escape close it
  useEffect(() => {
    menuRef.current?.toggleAttribute('inert', !open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Logo and text switch to dark when the light header background is showing
  const dark = scrolled || open

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Background layer fades in as a whole, so the colour, blur, border and
            shadow arrive together instead of each snapping on separately */}
        <div
          className={`absolute inset-0 bg-cream/95 border-b border-zinc-200/60 shadow-sm ${fade} ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
        <div className="section-container relative">
          <div className="flex items-center justify-between py-4">
            <a href="#" aria-label="SWEPT — Home">
              {/* Both logo colours stay mounted and crossfade */}
              <span className="relative block">
                <Logo size="sm" className={`${fade} ${dark ? 'opacity-100' : 'opacity-0'}`} />
                <Logo
                  size="sm"
                  inverted
                  className={`absolute inset-0 ${fade} ${dark ? 'opacity-0' : 'opacity-100'}`}
                />
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-500 ease-out ${
                    scrolled
                      ? 'text-asphalt/70 hover:text-asphalt'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              {site.phone && (
                <a
                  href={phoneHref()}
                  className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-500 ease-out ${
                    scrolled ? 'text-asphalt/70 hover:text-asphalt' : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {site.phone}
                </a>
              )}
              <a href="#contact" className="btn-primary text-xs px-6 py-3">
                Get a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 -mr-2 transition-colors duration-500 ease-out ${
                dark ? 'text-asphalt' : 'text-white'
              }`}
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

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-cream lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-extrabold tracking-tightest text-asphalt py-3 border-b border-zinc-100 hover:text-brand-500 transition-colors"
                style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-4">
            {site.phone && (
              <a href={phoneHref()} className="btn-outline-dark justify-center">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {site.phone}
              </a>
            )}
            <a href="#contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
