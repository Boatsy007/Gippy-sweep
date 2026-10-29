import { ChevronDown } from 'lucide-react'

// Keep in sync with the FAQPage schema in index.html
export const faqs = [
  {
    q: 'What services does SWEPT provide?',
    a: 'SWEPT provides four specialist commercial property services across the Gold Coast and South East Queensland: commercial sweeping and floor scrubbing, commercial pressure cleaning (Washed), commercial grounds maintenance (Grounds) and commercial cleaning (Cleaned) — all through one point of contact.',
  },
  {
    q: 'What areas does SWEPT service?',
    a: 'SWEPT services the entire South East Queensland region including the Gold Coast, Brisbane, Logan, Ipswich, Redlands, Moreton Bay and Northern NSW.',
  },
  {
    q: 'What types of properties does SWEPT sweep?',
    a: 'We sweep commercial car parks, shopping centres, industrial sites, factories, warehouses, construction sites, schools, universities, hospitals, resorts, body corporate properties and council areas.',
  },
  {
    q: 'Does SWEPT offer regular contract sweeping schedules?',
    a: 'Yes. SWEPT offers weekly, fortnightly and monthly scheduled sweeping with no lock-in contracts. The more often we visit, the lower the price per visit.',
  },
  {
    q: 'Is SWEPT insured?',
    a: 'Yes. SWEPT is fully licensed and insured for commercial operations, with public liability coverage and workers compensation.',
  },
  {
    q: 'What equipment does SWEPT use?',
    a: 'SWEPT operates commercial-grade mechanical sweepers purpose-built for commercial and industrial sweeping, including the RCM Mille — a professional Italian-engineered ride-on sweeper.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-white" aria-labelledby="faq-heading">
      <div className="section-container max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow mb-5">FAQ</p>
          <h2 id="faq-heading" className="display-md text-asphalt">
            Common questions.
          </h2>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-base font-bold text-asphalt [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  className="w-5 h-5 text-brand-700 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-zinc-600 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
