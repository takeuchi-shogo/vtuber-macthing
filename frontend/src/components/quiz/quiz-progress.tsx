'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="flex items-center justify-center gap-2"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep + 1}
      aria-label={`質問 ${currentStep + 1} / ${totalSteps}`}
    >
      {Array.from({ length: totalSteps }, (_, i) => {
        const isCompleted = i < currentStep
        const isCurrent = i === currentStep
        const isFuture = i > currentStep

        return (
          <motion.div
            key={i}
            initial={false}
            animate={{
              scale: isCurrent ? 1 : 1,
              backgroundColor:
                isCompleted || isCurrent ? '#00B8ED' : 'transparent',
              borderColor:
                isCompleted || isCurrent ? '#00B8ED' : 'var(--text-muted)',
            }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 500, damping: 30 }
            }
            className={cn(
              'relative h-3 w-3 rounded-full border-2 transition-colors',
              isFuture && 'opacity-40'
            )}
          >
            {/* Pulse animation for current step */}
            {isCurrent && !prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00B8ED]"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
