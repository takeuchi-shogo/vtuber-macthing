'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface MatchCounterProps {
  target: number
  duration?: number
  className?: string
}

export function MatchCounter({
  target,
  duration = 1500,
  className,
}: MatchCounterProps) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        setDone(true)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration, reducedMotion])

  // reducedMotion の場合はアニメーションなしで直接表示
  const displayCount = reducedMotion ? target : count
  const isDone = reducedMotion || done

  return (
    <span className={className}>
      {displayCount}%
      {isDone && (
        <span className="sr-only" aria-live="polite">
          マッチ率 {target}%
        </span>
      )}
    </span>
  )
}
