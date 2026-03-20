import { type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface GlowEffectProps {
  children: ReactNode
  color: string
  className?: string
}

export function GlowEffect({ children, color, className }: GlowEffectProps) {
  return (
    <div
      className={cn(
        'transition-shadow duration-300',
        'hover:shadow-[0_0_20px_var(--glow)]',
        className
      )}
      style={{ '--glow': `${color}40` } as CSSProperties}
    >
      {children}
    </div>
  )
}
