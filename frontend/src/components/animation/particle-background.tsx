'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface ParticleBackgroundProps {
  color?: string
  count?: number
  className?: string
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function ParticleBackground({
  color = '#00B8ED',
  count = 30,
  className,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Limit particles on mobile
    const isMobile = window.innerWidth < 640
    const particleCount = isMobile ? Math.min(count, 10) : count

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = p.opacity
        ctx.fill()
      }
      ctx.globalAlpha = 1

      animationId = requestAnimationFrame(animate)
    }

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationId = requestAnimationFrame(animate)
        } else {
          cancelAnimationFrame(animationId)
        }
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [color, count, reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className={
        className ?? 'absolute inset-0 h-full w-full pointer-events-none'
      }
      aria-hidden="true"
    />
  )
}
