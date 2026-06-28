import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const headlineWords = ['PROUDLY', 'KEEPING', 'GIPPSLAND', 'CLEAN.']

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

        {/* Fade-in + initial scale (0.98 → 1.0, 1.6 s) */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.25, ease }}
        >
          {/* Ken Burns: 1.0 → 1.05 over 25 s, breathes back, infinite */}
          <div className="absolute inset-0 animate-ken-burns transform-gpu will-change-transform">
            <img
              src="/hero-sweeper.png"
              alt="RCM Mille commercial sweeper operating at Gippsland Business Centre"
              className="
                w-full h-full object-cover
                object-[center_45%]
                lg:object-[center_25%]
              "
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* ── OVERLAYS ─────────────────────────────────────────────────────── */}

        {/* Base dark overlay — ~25%, entire image, desktop + mobile */}
        <div className="absolute inset-0 bg-asphalt/25 z-10 pointer-events-none" />

        {/* Desktop: left-edge gradient blends image into solid asphalt text column */}
        <div
          className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none hidden lg:block"
          style={{ background: 'linear-gradient(to right, #0B0B0B, transparent)' }}
        />

        {/* Mobile: top gradient — dark behind text, clears toward bottom so
            machine is visible in the lower third of the screen */}
        <div
          className="absolute inset-x-0 top-0 h-3/4 z-10 pointer-events-none lg:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(11,11,11,0.82) 0%, rgba(11,11,11,0.55) 45%, transparent 100%)' }}
        />
      </div>

      {/* ── ACCENT LINE ──────────────────────────────────────────────────── */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-orange-500 z-30"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
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

            <motion.p
              className="eyebrow mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              Commercial Sweeping — Gippsland, VIC
            </motion.p>

            <h1
              className="display-xl text-white mb-0"
              aria-label="Proudly keeping Gippsland clean."
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="block"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease }}
                  style={word === 'CLEAN.' ? { color: '#F97316' } : undefined}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-8 text-white/55 text-lg leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.06, ease }}
            >
              Reliable mechanical sweeping for construction sites, carparks,
              warehouses, and public spaces across the Gippsland region —
              done right, every time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.16, ease }}
            >
              <a href="#contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-outline-light">
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.32, ease }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Sites Cleaned' },
                { value: '100%', label: 'Gippsland Based' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-white tracking-tightest leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/40 tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: spacer (image lives behind as absolute) ───────────── */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* ── LOCALLY OWNED BADGE ──────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-16 right-5 sm:right-8 lg:right-10 z-30 bg-orange-500 text-white px-5 py-4 shadow-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.9, ease }}
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase">Locally Owned</p>
        <p className="text-xs text-white/70 mt-0.5">Gippsland, Victoria</p>
      </motion.div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.0, ease }}
        aria-hidden="true"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}
