import {
  useMotionValue,
  useSpring,
  motion,
  type HTMLMotionProps,
} from 'framer-motion'
import { useRef, type MouseEvent, type ReactNode } from 'react'

type Props = HTMLMotionProps<'button'> & {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  className = 'neo-btn focus-ring',
  strength = 0.35,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  function onMove(e: MouseEvent<HTMLButtonElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
    el.style.setProperty('--rx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty('--ry', `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </motion.button>
  )
}

type LinkProps = HTMLMotionProps<'a'> & {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticLink({
  children,
  className = 'neo-btn focus-ring',
  strength = 0.28,
  ...rest
}: LinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  return (
    <motion.a
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileTap={{ scale: 0.97 }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}
