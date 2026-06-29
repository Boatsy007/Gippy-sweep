import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Logo } from '../Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const INTRO_KEY = 'swept-intro-v1'

function Sweeper() {
  return (
    <svg viewBox="0 0 160 58" width={140} height={50} aria-hidden="true" style={{ display: 'block' }}>
      {/* Hopper */}
      <rect x="2" y="10" width="40" height="32" rx="2" fill="white" />
      {/* Cab */}
      <rect x="30" y="6" width="36" height="26" rx="2" fill="white" />
      {/* Main body */}
      <rect x="10" y="20" width="128" height="18" rx="2" fill="white" />
      {/* Front section */}
      <rect x="120" y="22" width="32" height="16" rx="2" fill="white" />
      {/* Rear wheel */}
      <circle cx="22" cy="47" r="8" fill="white" />
      {/* Front wheel */}
      <circle cx="108" cy="47" r="7" fill="white" />
      {/* Side brush */}
      <circle cx="146" cy="47" r="8" fill="none" stroke="white" strokeWidth="2" />
      <line x1="146" y1="39" x2="146" y2="55" stroke="white" strokeWidth="1.5" />
      <line x1="138" y1="47" x2="154" y2="47" stroke="white" strokeWidth="1.5" />
      <line x1="140.3" y1="41.3" x2="151.7" y2="52.7" stroke="white" strokeWidth="1.5" />
      <line x1="151.7" y1="41.3" x2="140.3" y2="52.7" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const shouldAnimate = useMemo(() => (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !sessionStorage.getItem(INTRO_KEY)
  ), [])

  const vw = useMemo(() => window.innerWidth, [])
  const [sweepDone, setSweepDone] = useState(!shouldAnimate)

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
        {/* Sweeper — enters from left, exits right, plays once */}
        {!sweepDone && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" aria-hidden="true">
            <motion.div
              className="absolute"
              style={{ top: '50%', translateY: '-50%' }}
              initial={{ x: -160 }}
              animate={{ x: vw + 20 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              onAnimationComplete={() => {
                sessionStorage.setItem(INTRO_KEY, '1')
                setSweepDone(true)
              }}
            >
              <Sweeper />
            </motion.div>
          </div>
        )}

        {/* Header content — reveals left-to-right as sweeper passes */}
        <motion.div
          initial={shouldAnimate ? { clipPath: 'inset(0 100% 0 0)' } : false}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={shouldAnimate ? { duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
        >
          <div className="section-container">
            <div className="flex items-center justify-between h-18 py-4">
              <a href="#" aria-label="SWEPT — Home">
                <Logo size="sm" inverted={!scrolled && !open} />
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
        </motion.div>
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
