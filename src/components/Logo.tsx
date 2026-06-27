interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { text: 'text-lg', svg: 'w-7 h-10' },
  md: { text: 'text-2xl', svg: 'w-9 h-12' },
  lg: { text: 'text-3xl', svg: 'w-11 h-14' },
}

export function Logo({ className = '', inverted = false, size = 'md' }: LogoProps) {
  const { text, svg } = sizes[size]
  const primaryColor = inverted ? '#FAFAF9' : '#0B0B0B'

  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label="Gippy Sweep">
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`${text} font-extrabold tracking-tightest leading-none`}
          style={{ color: primaryColor }}
        >
          GIPPY
        </span>
        <span
          className={`${text} font-extrabold tracking-tightest leading-none text-orange-500`}
        >
          SWEEP
        </span>
      </div>

      {/* Sweep arc mark */}
      <svg
        viewBox="0 0 36 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svg}
        aria-hidden="true"
      >
        {/* Outer orange arc */}
        <path
          d="M6 4 C20 4 30 16 26 44"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle orange arc */}
        <path
          d="M14 2 C30 2 40 18 33 48"
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        {/* Inner dark arc */}
        <path
          d="M2 8 C14 8 22 20 18 46"
          stroke={primaryColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
