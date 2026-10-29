import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const headlineLines = ['Setting the', 'Standard in', 'Commercial', 'Property Care.']

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-asphalt overflow-hidden flex flex-col"
      aria-label="Hero"
    >
      {/* ── BACKGROUND IMAGE ─────────────────────────────────────────────────
          Mobile:  full-bleed behind content (gradient covers text area)
          Desktop: right-half, edge-to-edge from top to bottom of section
          The portrait format (≈4:5) fills the right 50% of a landscape
          viewport with near-zero vertical cropping at standard heights.
      ──────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0 lg:left-1/2 z-0 overflow-hidden">

        <div className="absolute inset-0">
          {/* Ken Burns: 1.0 → 1.05 over 25 s, breathes back, infinite */}
          <div className="absolute inset-0 animate-ken-burns transform-gpu will-change-transform">
            <img
              src="/hero-sweeper.webp"
              srcSet="/hero-sweeper-800.webp 800w, /hero-sweeper.webp 1122w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              width={1122}
              height={1402}
              alt="RCM Mille commercial ride-on sweeper at work on a commercial site"
              className="
                w-full h-full object-cover
                object-[center_45%]
                lg:object-[center_25%]
              "
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* ── OVERLAYS ─────────────────────────────────────────────────────── */}

        {/* Base dark overlay — ~25%, entire image, desktop + mobile */}
        <div className="absolute inset-0 bg-asphalt/25 z-10 pointer-events-none" />

        {/* Desktop: left-edge gradient blends image into solid asphalt text column */}
        <div
          className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none hidden lg:block"
          style={{ background: 'linear-gradient(to right, #111827, transparent)' }}
        />

        {/* Mobile: top gradient — dark behind text, clears toward bottom so
            machine is visible in the lower third of the screen */}
        <div
          className="absolute inset-x-0 top-0 h-3/4 z-10 pointer-events-none lg:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(17,24,39,0.85) 0%, rgba(17,24,39,0.55) 45%, transparent 100%)' }}
        />
      </div>

      {/* ── ACCENT LINE ──────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 inset-x-0 h-[3px] bg-brand-500 z-30"
        aria-hidden="true"
      />

      {/* ── SUBTLE TEXTURE ───────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),' +
            'repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)',
        }}
        aria-hidden="true"
      />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <div className="section-container flex-1 flex items-center relative z-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-20 lg:pt-36 lg:pb-28">

          {/* ── Left: text ───────────────────────────────────────────────── */}
          <div className="flex flex-col justify-center">

            <p
              className="eyebrow text-brand-500 mb-8"
            >
              Gold Coast &amp; South East Queensland
            </p>

            {/* Sized so the longest line ("PROPERTY CARE.") fits the text column at every width */}
            <h1
              className="text-[2.5rem] sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[4.25rem] font-extrabold tracking-tightest leading-none uppercase text-white mb-0"
              aria-label="Setting the Standard in Commercial Property Care."
            >
              {headlineLines.map((line, i) => (
                <span
                  key={line}
                  className={i === headlineLines.length - 1 ? 'block text-brand-500' : 'block'}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p
              className="mt-8 text-white/60 text-lg leading-relaxed max-w-md"
            >
              Commercial sweeping, pressure cleaning, grounds maintenance and commercial
              cleaning for car parks, warehouses, shopping centres, offices and strata
              properties — four specialist services, one point of contact.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a href="#contact" className="btn-primary">
                Get a Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-outline-light">
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
            >
              {[
                { value: '20+', label: 'Years Serving SEQ' },
                { value: '4', label: 'Specialist Services' },
                { value: '100%', label: 'Gold Coast Owned' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-white tracking-tightest leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/60 tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: spacer (image lives behind as absolute) ───────────── */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ── LOCALLY OWNED BADGE ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-16 right-5 sm:right-8 lg:right-10 z-30 bg-brand-500 text-asphalt px-5 py-4 shadow-2xl"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase">Gold Coast Owned</p>
        <p className="text-xs text-asphalt/80 mt-0.5">Over 20 years</p>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        aria-hidden="true"
      >
        <span className="text-white/60 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </div>
    </section>
  )
}
