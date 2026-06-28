interface LogoProps {
  className?: string
  /** Use white variant for dark backgrounds */
  inverted?: boolean
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { fontSize: '1.25rem', arcW: 'w-5', arcH: 'h-6' },
  md: { fontSize: '1.75rem', arcW: 'w-7', arcH: 'h-8' },
  lg: { fontSize: '2.25rem', arcW: 'w-9', arcH: 'h-10' },
}

export function Logo({ className = '', inverted = false, size = 'md' }: LogoProps) {
  const { fontSize, arcW, arcH } = sizes[size]
  const primaryColor = inverted ? '#FAFAF9' : '#0B0B0B'

  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label="SWEPT">
      {/* Wordmark */}
      <span
        className="font-extrabold tracking-tightest leading-none"
        style={{ color: primaryColor, fontSize, letterSpacing: '-0.055em' }}
      >
        SWEPT
      </span>

      {/* Sweep arc mark */}
      <svg
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${arcW} ${arcH}`}
        aria-hidden="true"
      >
        {/* Outer orange arc */}
        <path
          d="M5 3 C16 3 20 13 17 32"
          stroke="#F97316"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Middle orange arc */}
        <path
          d="M12 2 C24 2 28 15 23 33"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
        {/* Inner primary arc */}
        <path
          d="M1 6 C10 6 14 17 10 34"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}
