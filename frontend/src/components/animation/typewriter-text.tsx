'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterText({
  text,
  speed = 50,
  className,
  onComplete,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(text)
      onComplete?.()
      return
    }

    setDisplayedText('')
    let index = 0

    const interval = setInterval(() => {
      index++
      setDisplayedText(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(interval)
        onComplete?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, reducedMotion, onComplete])

  return <span className={className}>{displayedText}</span>
}
