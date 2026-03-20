'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

const BOOT_LINES = [
  '> INITIALIZING HOLOLIVE SYSTEM...',
  '> LOADING MEMBER DATABASE... 100+ ENTRIES',
  '> SCANNING GENERATION PROFILES...',
  '> CONNECTING TO FAN NETWORK...',
  '> CALIBRATING RECOMMENDATION ENGINE...',
  '> ALL SYSTEMS NOMINAL.',
  '> WELCOME TO HOLOLIVE DIAGNOSTIC.',
]

export function LoadingScreen() {
  const [phase, setPhase] = useState<'boot' | 'logo' | 'glitch' | 'done'>(
    'boot'
  )
  const [bootLines, setBootLines] = useState<string[]>([])
  const [logoOpacity, setLogoOpacity] = useState(0)
  const reducedMotion = useReducedMotion()

  const skip = useCallback(() => setPhase('done'), [])

  useEffect(() => {
    // Only show once per session
    const hasLoaded = sessionStorage.getItem('hololive-loaded')
    if (hasLoaded || reducedMotion) {
      setPhase('done')
      return
    }
    sessionStorage.setItem('hololive-loaded', 'true')
  }, [reducedMotion])

  // Phase 1: Boot sequence
  useEffect(() => {
    if (phase !== 'boot') return
    let index = 0
    const interval = setInterval(() => {
      if (index < BOOT_LINES.length) {
        setBootLines((prev) => [...prev, BOOT_LINES[index]])
        index++
      } else {
        clearInterval(interval)
        setTimeout(() => setPhase('logo'), 300)
      }
    }, 250)
    return () => clearInterval(interval)
  }, [phase])

  // Phase 2: Logo formation
  useEffect(() => {
    if (phase !== 'logo') return
    const fadeIn = setTimeout(() => setLogoOpacity(1), 100)
    const next = setTimeout(() => setPhase('glitch'), 2000)
    return () => {
      clearTimeout(fadeIn)
      clearTimeout(next)
    }
  }, [phase])

  // Phase 3: Glitch break
  useEffect(() => {
    if (phase !== 'glitch') return
    const done = setTimeout(() => setPhase('done'), 800)
    return () => clearTimeout(done)
  }, [phase])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-black"
        onClick={skip}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Phase 1: Boot */}
        {phase === 'boot' && (
          <div className="w-full max-w-2xl px-8">
            <div className="space-y-1 font-mono text-sm text-green-400">
              {bootLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {line}
                </motion.div>
              ))}
              <span className="inline-block h-4 w-2 animate-pulse bg-green-400" />
            </div>
          </div>
        )}

        {/* Phase 2: Logo */}
        {phase === 'logo' && (
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: logoOpacity }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1
              className="text-5xl font-black tracking-wider md:text-7xl"
              style={{
                color: '#00B8ED',
                textShadow:
                  '0 0 10px #00B8ED, 0 0 20px #00B8ED, 0 0 40px #00B8ED80, 0 0 80px #00B8ED40',
              }}
            >
              ホロライブ診断
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              HOLOLIVE DIAGNOSTIC SYSTEM
            </p>
          </motion.div>
        )}

        {/* Phase 3: Glitch break */}
        {phase === 'glitch' && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 1 }}
            animate={{
              clipPath: [
                'inset(0 0 0 0)',
                'inset(0 0 50% 0)',
                'inset(20% 0 30% 0)',
                'inset(0 50% 0 0)',
                'inset(0 0 0 0)',
                'inset(50% 0 0 0)',
              ],
            }}
            transition={{ duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                filter: 'hue-rotate(90deg) saturate(2)',
                mixBlendMode: 'screen',
              }}
            >
              <h1
                className="text-5xl font-black md:text-7xl"
                style={{
                  color: '#ff00ff',
                  textShadow: '3px 0 #00ffff, -3px 0 #ff0000',
                  animation: 'glitch-break 0.3s steps(2) infinite',
                }}
              >
                ホロライブ診断
              </h1>
            </div>
          </motion.div>
        )}

        {/* Skip hint */}
        <div className="absolute bottom-8 right-8 font-mono text-xs text-white/30">
          CLICK TO SKIP
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
