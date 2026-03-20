'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { GlassCard } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface QuizCardOptionProps {
  label: string
  description?: string
  selected: boolean
  onSelect: () => void
  disabled?: boolean
}

export function QuizCardOption({
  label,
  description,
  selected,
  onSelect,
  disabled = false,
}: QuizCardOptionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      aria-selected={selected}
      role="option"
      whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { type: 'spring', stiffness: 400, damping: 25 }
      }
      className={cn(
        'w-full text-left cursor-pointer',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B8ED]',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
    >
      <GlassCard
        className={cn(
          'relative p-4 transition-all duration-200',
          selected
            ? 'border-[#00B8ED] shadow-[0_0_16px_rgba(0,184,237,0.25)]'
            : 'hover:border-[var(--text-muted)]'
        )}
        glowColor={selected ? '#00B8ED' : undefined}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="font-medium text-[var(--text-primary)]">
              {label}
            </div>
            {description && (
              <div className="text-sm text-[var(--text-muted)] mt-1">
                {description}
              </div>
            )}
          </div>

          <motion.div
            initial={false}
            animate={{
              opacity: selected ? 1 : 0,
              scale: selected ? 1 : 0.5,
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 500, damping: 30 }
            }
            className={cn(
              'flex items-center justify-center',
              'h-6 w-6 rounded-full shrink-0',
              'bg-[#00B8ED] text-white'
            )}
          >
            <Check size={14} strokeWidth={3} />
          </motion.div>
        </div>
      </GlassCard>
    </motion.button>
  )
}
