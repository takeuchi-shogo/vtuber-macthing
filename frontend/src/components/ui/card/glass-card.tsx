'use client'

import { type ReactNode, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlassCard({ children, className, glowColor }: GlassCardProps) {
  const style = (
    glowColor ? { '--glow-color': glowColor } : {}
  ) as CSSProperties

  return (
    <div
      className={cn(
        'group rounded-2xl border border-[var(--border)]',
        'backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)]',
        'bg-[var(--bg-surface)]',
        'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
        'transition-shadow duration-300',
        glowColor &&
          'hover:shadow-[0_8px_32px_rgba(0,0,0,0.08),0_0_20px_var(--glow-color)]',
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
