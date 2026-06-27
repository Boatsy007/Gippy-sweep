import { AnimateInView } from '../ui/AnimateInView'

const reasons = [
  {
    number: '01',
    title: 'Genuinely Local',
    description:
      "We're based in Gippsland — not a city franchise dispatching crews from Melbourne. We know the roads, the sites, and the community we serve.",
  },
  {
    number: '02',
    title: 'Commercial-Grade Equipment',
    description:
      'We invest in purpose-built mechanical sweepers that leave other methods behind — faster, cleaner results with less disruption to your operations.',
  },
  {
    number: '03',
    title: 'Reliable Scheduling',
    description:
      'We turn up when we say we will. Our scheduling system sends reminders and confirmations so your operations team always knows what to expect.',
  },
  {
    number: '04',
    title: 'Transparent Pricing',
    description:
      'Fixed-price quotes, no hidden extras, and no surprises on the invoice. We scope the job properly before we price it.',
  },
  {
    number: '05',
    title: 'Fully Insured & Compliant',
    description:
      'Full public liability coverage, workers compensation, and all the environmental compliance documentation your site manager needs.',
  },
  {
    number: '06',
    title: 'One Point of Contact',
    description:
      "Talk to the owner, not a call centre. You get a direct line to the person responsible for your job — before, during, and after.",
  },
]

export function WhyChoose() {
  return (
    <section className="section-pad bg-asphalt" aria-labelledby="why-heading">
      <div className="section-container">
        <AnimateInView className="max-w-2xl mb-16">
          <p className="eyebrow mb-5" style={{ color: '#F97316' }}>
            Why Gippy Sweep
          </p>
          <h2 id="why-heading" className="display-md text-white">
            Six reasons clients<br />keep choosing us.
          </h2>
        </AnimateInView>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {reasons.map((reason, i) => (
            <AnimateInView key={reason.number} delay={i * 0.08} direction="up">
              <div className="bg-asphalt p-8 lg:p-10 group hover:bg-zinc-900 transition-colors duration-200 h-full">
                <span
                  className="text-5xl font-extrabold tracking-tightest leading-none text-white/8 group-hover:text-orange-500/20 transition-colors duration-200 block mb-6"
                  aria-hidden="true"
                >
                  {reason.number}
                </span>
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
