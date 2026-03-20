'use client'

import { useState, useEffect, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ParticleBackground } from '@/components/animation/particle-background'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface ResultRevealProps {
  children: ReactNode
  memberColor?: string
}

type Phase = 'blackout' | 'particles' | 'content'

export function ResultReveal({
  children,
  memberColor = '#00B8ED',
}: ResultRevealProps) {
  const [phase, setPhase] = useState<Phase>('blackout')
  const [skipped, setSkipped] = useState(false)
  const reducedMotion = useReducedMotion()

  // reducedMotion またはスキップ済みの場合、エフェクト外で即座にコンテンツ表示
  const effectivePhase = reducedMotion || skipped ? 'content' : phase

  useEffect(() => {
    if (reducedMotion || skipped) return

    // Phase 1: blackout (0-1s)
    const particleTimer = setTimeout(() => {
      setPhase('particles')
    }, 1000)

    // Phase 2: particles (1-2s), then content
    const contentTimer = setTimeout(() => {
      setPhase('content')
    }, 3000)

    return () => {
      clearTimeout(particleTimer)
      clearTimeout(contentTimer)
    }
  }, [reducedMotion, skipped])

  const handleSkip = () => {
    setSkipped(true)
    setPhase('content')
  }

  if (effectivePhase === 'content') {
    return (
      <motion.div
        initial={skipped || reducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <AnimatePresence>
        {effectivePhase === 'blackout' && (
          <motion.div
            key="blackout"
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {effectivePhase === 'particles' && (
        <div className="absolute inset-0 bg-black">
          <ParticleBackground color={memberColor} count={80} />
          <motion.p
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            あなたにぴったりの推しは...
          </motion.p>
        </div>
      )}

      <button
        type="button"
        onClick={handleSkip}
        className="absolute right-4 bottom-4 z-50 rounded-lg bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        スキップ
      </button>
    </div>
  )
}
