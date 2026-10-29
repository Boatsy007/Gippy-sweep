interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: Size
  /** Optional larger size from the lg breakpoint (desktop) up */
  desktopSize?: Size
}

type Size = 'sm' | 'md' | 'lg' | 'xl'

// Sunburst + "swept" wordmark, cropped tight to the artwork (≈3.57:1).
const ratio = 3.57
const heights = { sm: 36, md: 44, lg: 52, xl: 60 }

export function Logo({ className = '', inverted = false, size = 'md', desktopSize }: LogoProps) {
  const h = heights[size]
  const lgH = heights[desktopSize ?? size]

  return (
    <img
      src={inverted ? '/logo-white.webp' : '/logo-dark.webp'}
      alt="Swept"
      width={Math.round(lgH * ratio)}
      height={lgH}
      className={`block shrink-0 w-auto h-[var(--logo-h)] lg:h-[var(--logo-lg-h)] ${className}`}
      style={{ '--logo-h': `${h}px`, '--logo-lg-h': `${lgH}px` } as React.CSSProperties}
      draggable={false}
    />
  )
}
