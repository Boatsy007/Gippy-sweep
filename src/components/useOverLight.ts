import { useEffect, useState, type RefObject } from 'react'

/** Relative luminance of an "rgb(a)" colour, or null if it is (mostly) transparent. */
function luminance(css: string): number | null {
  const m = css.match(/rgba?\(([^)]+)\)/)
  if (!m) return null
  const [r, g, b, a = 1] = m[1].split(/[\s,/]+/).filter(Boolean).map(Number)
  if (a < 0.5) return null
  const f = (c: number) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4 }
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
}

/**
 * True while the content directly under a fixed header has a light background.
 * Division-site headers use it to stay dark over dark sections (heroes, CTA
 * bands, the footer) and switch to the light glass only over light sections,
 * instead of switching after a fixed scroll distance.
 */
export function useOverLight(header: RefObject<HTMLElement>): boolean {
  const [light, setLight] = useState(false)
  useEffect(() => {
    let frame = 0
    const check = () => {
      frame = 0
      const el = header.current
      if (!el) return
      const y = el.getBoundingClientRect().bottom + 1
      let node = document.elementFromPoint(window.innerWidth / 2, y)
      while (node && node !== document.documentElement) {
        if (!el.contains(node)) {
          const lum = luminance(getComputedStyle(node).backgroundColor)
          if (lum !== null) { setLight(lum > 0.4); return }
        }
        node = node.parentElement
      }
      setLight(true)
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(check) }
    check()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [header])
  return light
}
