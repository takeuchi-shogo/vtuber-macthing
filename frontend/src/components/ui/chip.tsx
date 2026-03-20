'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ChipProps {
  children: ReactNode
  selected?: boolean
  glowColor?: string
  onClick?: () => void
  className?: string
}

export function Chip({
  children,
  selected,
  glowColor,
  onClick,
  className,
}: ChipProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onClick={onClick}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium',
        'cursor-pointer border transition-all duration-200',
        selected
          ? 'border-current bg-[var(--bg-elevated)] text-[var(--text-primary)]'
          : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
        className
      )}
      style={
        selected && glowColor
          ? { boxShadow: `0 0 12px ${glowColor}40` }
          : undefined
      }
    >
      {children}
    </motion.button>
  )
}
