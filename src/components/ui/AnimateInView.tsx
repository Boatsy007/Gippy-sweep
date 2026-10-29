import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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

/** Stagger cap — long lists shouldn't leave items waiting to appear */
const MAX_DELAY = 0.3

const offsets = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: 16 },
  right: { y: 0, x: -16 },
  none: { y: 0, x: 0 },
}

export function AnimateInView({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.8,
  amount = 0.1,
}: AnimateInViewProps) {
  const { y, x } = offsets[direction]

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      // Start slightly before the element is fully on screen so it is
      // already moving as it arrives, rather than popping in late
      viewport={{ once: true, amount, margin: '0px 0px -40px 0px' }}
      transition={{ duration, delay: Math.min(delay, MAX_DELAY), ease }}
    >
      {children}
    </motion.div>
  )
}
