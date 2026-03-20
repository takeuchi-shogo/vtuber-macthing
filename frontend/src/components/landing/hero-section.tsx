'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { Button } from '@/components/ui'
import { GlitchText } from '@/components/effects/glitch-text'
import { NeonText } from '@/components/effects/neon-text'

const Hero3DScene = dynamic(
  () =>
    import('@/components/effects/hero-3d-scene').then((m) => ({
      default: m.Hero3DScene,
    })),
  { ssr: false }
)

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Hero3DScene />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <GlitchText
          as="h1"
          intensity="high"
          className="mb-6 font-[var(--font-noto-sans-jp)] text-4xl font-black text-[var(--text-primary)] md:text-6xl"
        >
          推しを見つけよう
        </GlitchText>

        <NeonText
          as="p"
          color="#00B8ED"
          flicker={false}
          className="mb-12 text-lg md:text-xl"
        >
          ホロライブメンバーの中から、あなたにぴったりの推しを診断
        </NeonText>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              as={Link}
              href="/quiz"
              color="primary"
              size="lg"
              variant="shadow"
              className="px-8 py-6 text-lg font-semibold"
              glowColor="#00B8ED"
            >
              診断を始める
            </Button>
            <Button
              as={Link}
              href="/member"
              color="default"
              size="lg"
              variant="flat"
              className="px-8 py-6 text-lg font-semibold"
            >
              メンバー一覧
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
