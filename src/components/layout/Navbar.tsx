import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '../Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Washd', href: '#washd' },
  { label: 'Grounds', href: '#grounds' },
  { label: 'Industries', href: '#industries' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md border-b border-zinc-200/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-18 py-4">
            <a href="#" aria-label="SWEPT — Home">
              <Logo size="sm" inverted={!scrolled} />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 ${
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
              <a
                href="tel:+61412345678"
                className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                  scrolled ? 'text-asphalt/70 hover:text-asphalt' : 'text-white/70 hover:text-white'
                }`}
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                0412 345 678
              </a>
              <a href="#contact" className="btn-primary text-xs px-6 py-3">
                Get a Quote
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`lg:hidden p-2 -mr-2 transition-colors duration-200 ${
                scrolled ? 'text-asphalt' : 'text-white'
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
                className="text-3xl font-extrabold tracking-tightest text-asphalt py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
                style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-10 flex flex-col gap-4">
            <a href="tel:+61412345678" className="btn-outline-dark justify-center">
              <Phone className="w-4 h-4" aria-hidden="true" />
              0412 345 678
            </a>
            <a href="#contact" className="btn-primary justify-center" onClick={() => setOpen(false)}>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
