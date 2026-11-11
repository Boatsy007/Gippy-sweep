import { ArrowUpRight } from 'lucide-react'

/*
 * Swept parent-brand pieces shared by the division sites (Cleaned, Grounds,
 * Washed, Scrubbed): the small "by SWEPT" mark beside each division logo, and
 * the footer link back to the Swept commercial site.
 */

/** "by" + the real Swept wordmark, sized to sit beside a division logo. */
export function SweptByline({ white = false, byClass = '' }: { white?: boolean; byClass?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 pb-1 lg:pb-2" aria-label="by Swept">
      <span className={`eyebrow ${byClass}`} aria-hidden="true">by</span>
      <img
        src={white ? '/logo-white.webp' : '/logo-dark.webp'}
        alt=""
        width={571}
        height={160}
        className="block w-auto h-[18px] lg:h-[24px]"
        draggable={false}
      />
    </span>
  )
}

/** Footer block: "A division of Swept" with the logo and a Visit Swept link. */
export function SweptFooterLink({ href, accentClass = 'text-white' }: { href: string; accentClass?: string }) {
  return (
    <a href={href} className="group mt-8 inline-flex flex-col gap-3 border border-white/10 bg-white/5 px-5 py-4 hover:border-white/30 hover:bg-white/10 transition-colors duration-150">
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">A division of</span>
      <img src="/logo-white.webp" alt="Swept" width={571} height={160} className="block w-auto h-8" loading="lazy" decoding="async" />
      <span className={`inline-flex items-center gap-1 text-sm font-semibold ${accentClass}`}>
        Visit Swept Commercial Property Care <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </span>
    </a>
  )
}
