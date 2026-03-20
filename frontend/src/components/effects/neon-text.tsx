'use client'

import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { type CSSProperties } from 'react'

interface NeonTextProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  color?: string
  flicker?: boolean
}

export function NeonText({
  children,
  className,
  as: Tag = 'span',
  color = '#00B8ED',
  flicker = true,
}: NeonTextProps) {
  const reducedMotion = useReducedMotion()

  const style: CSSProperties = {
    color,
    textShadow: `0 0 7px ${color}, 0 0 10px ${color}, 0 0 21px ${color}, 0 0 42px ${color}80, 0 0 82px ${color}40`,
  }

  return (
    <Tag
      className={cn(!reducedMotion && flicker && 'neon-flicker', className)}
      style={reducedMotion ? { color } : style}
    >
      {children}
    </Tag>
  )
}
