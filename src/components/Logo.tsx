interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

// Sunburst + "swept" wordmark, cropped tight to the artwork (≈3.57:1).
const ratio = 3.57
const heights = { sm: 36, md: 44, lg: 52 }

export function Logo({ className = '', inverted = false, size = 'md' }: LogoProps) {
  const h = heights[size]
  const w = Math.round(h * ratio)

  return (
    <img
      src={inverted ? '/logo-white.webp' : '/logo-dark.webp'}
      alt="Swept"
      width={w}
      height={h}
      className={`block shrink-0 ${className}`}
      style={{ width: w, height: h }}
      draggable={false}
    />
  )
}
