'use client'

import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { type CSSProperties, type ReactNode } from 'react'

interface ScanlinesProps {
  children: ReactNode
  className?: string
  intensity?: 'subtle' | 'medium' | 'heavy'
}

export function Scanlines({
  children,
  className,
  intensity = 'subtle',
}: ScanlinesProps) {
  const reducedMotion = useReducedMotion()

  const opacityMap = { subtle: '0.03', medium: '0.06', heavy: '0.1' }

  return (
    <div className={cn('relative', className)}>
      {children}
      {!reducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-50 scanline-overlay"
          style={
            { '--scanline-opacity': opacityMap[intensity] } as CSSProperties
          }
          aria-hidden="true"
        />
      )}
    </div>
  )
}
