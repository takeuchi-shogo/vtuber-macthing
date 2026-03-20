'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.05,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}
