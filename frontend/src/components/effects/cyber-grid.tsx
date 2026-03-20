'use client'

import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { type CSSProperties } from 'react'

interface CyberGridProps {
  className?: string
  color?: string
}

export function CyberGrid({ className, color = '#00B8ED' }: CyberGridProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden pointer-events-none',
        !reducedMotion && 'cyber-grid-animate',
        className
      )}
      style={{ '--grid-color': color } as CSSProperties}
      aria-hidden="true"
    >
      <div className="cyber-grid-inner" />
    </div>
  )
}
