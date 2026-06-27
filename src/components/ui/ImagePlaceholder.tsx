import { Camera } from 'lucide-react'

interface ImagePlaceholderProps {
  label: string
  /** CSS aspect-ratio value e.g. "16/9", "4/3", "1/1" — or "fill" to fill parent */
  aspectRatio?: string
  className?: string
  dark?: boolean
}

export function ImagePlaceholder({
  label,
  aspectRatio = '16/9',
  className = '',
  dark = false,
}: ImagePlaceholderProps) {
  const style: React.CSSProperties =
    aspectRatio === 'fill'
      ? { position: 'absolute', inset: 0 }
      : { aspectRatio }

  return (
    <div
      className={`relative overflow-hidden ${dark ? 'bg-zinc-800' : 'bg-zinc-100'} ${className}`}
      style={style}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.035)'} 1px, transparent 1px),
            linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.035)'} 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Corner accents */}
      <span className={`absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 ${dark ? 'border-white/15' : 'border-zinc-300'}`} />
      <span className={`absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 ${dark ? 'border-white/15' : 'border-zinc-300'}`} />
      <span className={`absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 ${dark ? 'border-white/15' : 'border-zinc-300'}`} />
      <span className={`absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 ${dark ? 'border-white/15' : 'border-zinc-300'}`} />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
        <div
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
            dark ? 'border-white/20' : 'border-zinc-300'
          }`}
        >
          <Camera className={`w-5 h-5 ${dark ? 'text-white/30' : 'text-zinc-400'}`} />
        </div>
        <p
          className={`text-[10px] font-semibold tracking-[0.25em] uppercase text-center ${
            dark ? 'text-white/30' : 'text-zinc-400'
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  )
}
