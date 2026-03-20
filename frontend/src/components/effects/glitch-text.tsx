'use client'

import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface GlitchTextProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p'
  intensity?: 'low' | 'medium' | 'high'
}

export function GlitchText({
  children,
  className,
  as: Tag = 'span',
  intensity = 'medium',
}: GlitchTextProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Tag
      className={cn('glitch-text', `glitch-${intensity}`, className)}
      data-text={children}
    >
      {children}
    </Tag>
  )
}
