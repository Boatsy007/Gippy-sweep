interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

// Logo images are square exports from Canva (resized to 400×400 WebP).
// "Swept. SERVICES" content spans ~22–73% vertically (centre ≈ 47.2%).
// We scale the image to fill the container width (W×W rendered),
// then shift up so the content centre aligns with the container centre.
// marginTop = -(contentCentre * W - H/2)
const sizes = {
  sm: { w: 110, h: 62 },
  md: { w: 138, h: 78 },
  lg: { w: 165, h: 93 },
}

export function Logo({ className = '', inverted = false, size = 'md' }: LogoProps) {
  const { w, h } = sizes[size]
  const marginTop = -Math.round(0.472 * w - h / 2)

  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{ width: w, height: h }}
    >
      <img
        src={inverted ? '/logo-white.webp' : '/logo-dark.webp'}
        alt="Swept. Services"
        width={w}
        height={w}
        style={{ display: 'block', width: w, height: 'auto', marginTop }}
        draggable={false}
      />
    </div>
  )
}
