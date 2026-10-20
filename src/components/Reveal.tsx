import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from 'framer-motion'
import { useRef, type AriaAttributes, type ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-10% 0px -8% 0px' })
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
  id,
  'aria-live': ariaLive,
  'aria-label': ariaLabel,
}: {
  children: ReactNode
  className?: string
  id?: string
  'aria-live'?: AriaAttributes['aria-live']
  'aria-label'?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className} id={id} aria-live={ariaLive} aria-label={ariaLabel}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      id={id}
      aria-live={ariaLive}
      aria-label={ariaLabel}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
