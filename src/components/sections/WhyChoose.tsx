import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AnimateInView } from '../ui/AnimateInView'

const ease = [0.22, 1, 0.36, 1] as const

function ReasonNumber({ number, cardDelay }: { number: string; cardDelay: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <motion.span
      ref={ref}
      className="text-5xl font-extrabold tracking-tightest leading-none text-white/8 group-hover:text-orange-500/20 transition-colors duration-200 block mb-6"
      aria-hidden="true"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: cardDelay + 0.18, ease }}
    >
      {number}
    </motion.span>
  )
}

const reasons = [
  {
    number: '01',
    title: 'Gold Coast Owned',
    description:
      "We're based on the Gold Coast — not a city franchise dispatching crews from interstate. We know the region, the roads and the clients we serve.",
  },
  {
    number: '02',
    title: 'Professional Equipment',
    description:
      'We invest in purpose-built commercial-grade mechanical sweepers that deliver faster, cleaner results with less disruption to your operations.',
  },
  {
    number: '03',
    title: 'Reliable Scheduling',
    description:
      'We show up when we say we will. Our scheduling system sends reminders and confirmations so your team always knows what to expect.',
  },
  {
    number: '04',
    title: 'Commercial Specialists',
    description:
      'We work exclusively with commercial, industrial and council clients. Every job is scoped, scheduled and executed to a professional standard.',
  },
  {
    number: '05',
    title: 'Fast Quotes',
    description:
      'Clear, fixed-price quotes within one business day. No hidden extras, no surprises on the invoice. We scope the job properly before we price it.',
  },
  {
    number: '06',
    title: 'Fully Insured',
    description:
      'Full public liability coverage, workers compensation and all the compliance documentation your site manager or body corporate needs.',
  },
  {
    number: '07',
    title: 'Recurring Maintenance Programs',
    description:
      'Weekly, fortnightly or monthly programs with priority scheduling, consistent operators and bundled pricing for long-term clients.',
  },
]

export function WhyChoose() {
  return (
    <section className="section-pad bg-asphalt" aria-labelledby="why-heading">
      <div className="section-container">
        <AnimateInView className="max-w-2xl mb-16">
          <p className="eyebrow mb-5" style={{ color: '#3BAEE9' }}>
            Why SWEPT
          </p>
          <h2 id="why-heading" className="display-md text-white">
            Seven reasons clients<br />keep choosing us.
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((reason, i) => (
            <AnimateInView key={reason.number} delay={i * 0.08} direction="up">
              <div className="bg-asphalt p-8 lg:p-10 group hover:bg-zinc-900 transition-colors duration-200 h-full">
                <ReasonNumber number={reason.number} cardDelay={i * 0.08} />
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
