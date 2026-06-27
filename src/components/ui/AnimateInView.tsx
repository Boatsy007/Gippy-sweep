import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimateInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  duration?: number
  amount?: number
}

/** Apple-style ease-out-expo */
const ease = [0.22, 1, 0.36, 1] as const

export function AnimateInView({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.7,
  amount = 0.15,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount })

  const offsets = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    none: { y: 0, x: 0 },
  }

  const { y, x } = offsets[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
