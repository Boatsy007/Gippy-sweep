interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

// Logo PNGs are 1080×1080 square exports from Canva.
// Content sits at ~33%–68% vertically and ~3%–90% horizontally.
// We scale the image to fill the container width (W×W rendered),
// then shift up by (W−H)/2 so the logo centre aligns with the
// container centre. overflow-hidden clips the whitespace bands.
const sizes = {
  sm: { w: 124, h: 42 },
  md: { w: 155, h: 52 },
  lg: { w: 186, h: 62 },
}

export function Logo({ className = '', inverted = false, size = 'md' }: LogoProps) {
  const { w, h } = sizes[size]
  const marginTop = -Math.round((w - h) / 2)

  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{ width: w, height: h }}
      aria-label="SWEPT"
    >
      <img
        src={inverted ? '/logo-white.png' : '/logo-dark.png'}
        alt="SWEPT"
        width={w}
        height={w}
        style={{ display: 'block', width: w, height: 'auto', marginTop }}
        draggable={false}
      />
    </div>
  )
}
