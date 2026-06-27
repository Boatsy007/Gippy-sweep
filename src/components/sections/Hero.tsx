import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImagePlaceholder } from '../ui/ImagePlaceholder'

const ease = [0.22, 1, 0.36, 1] as const

const headlineWords = ['PROUDLY', 'KEEPING', 'GIPPSLAND', 'CLEAN.']

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-asphalt overflow-hidden flex flex-col"
      aria-label="Hero"
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 60px)',
        }}
        aria-hidden="true"
      />

      {/* Orange accent line top */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-orange-500"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        aria-hidden="true"
      />

      <div className="section-container flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-16 pt-32 pb-20 lg:pt-36 lg:pb-24">

          {/* Left — headline + CTAs */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.p
              className="eyebrow mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
            >
              Commercial Sweeping — Gippsland, VIC
            </motion.p>

            {/* Staggered headline */}
            <h1 className="display-xl text-white mb-0" aria-label="Proudly keeping Gippsland clean.">
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
              transition={{ duration: 0.7, delay: 1.05, ease }}
            >
              Reliable mechanical sweeping for construction sites, carparks, warehouses,
              and public spaces across the Gippsland region — done right, every time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.15, ease }}
            >
              <a href="#contact" className="btn-primary">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-outline-light">
                Explore Services
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3, ease }}
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

          {/* Right — image placeholder */}
          <motion.div
            className="relative lg:flex items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease }}
          >
            <div className="relative w-full">
              <ImagePlaceholder
                label="Commercial sweeping machine in action — Gippsland site"
                aspectRatio="4/3"
                dark
                className="w-full"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white px-5 py-4 shadow-xl">
                <p className="text-xs font-bold tracking-[0.15em] uppercase">Locally Owned</p>
                <p className="text-xs text-white/70 mt-0.5">Gippsland, Victoria</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8, ease }}
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
