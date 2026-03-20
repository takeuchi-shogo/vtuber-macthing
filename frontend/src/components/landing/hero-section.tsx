'use client'

import Link from 'next/link'
import { ParticleBackground } from '@/components/animation/particle-background'
import { TypewriterText } from '@/components/animation/typewriter-text'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { Button } from '@/components/ui'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ParticleBackground color="#00B8ED" count={30} />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 font-[var(--font-noto-sans-jp)] text-4xl font-black text-[var(--text-primary)] md:text-6xl">
          推しを見つけよう
        </h1>

        <p className="mb-12 text-lg text-[var(--text-secondary)] md:text-xl">
          <TypewriterText
            text="ホロライブメンバーの中から、あなたにぴったりの推しを診断"
            speed={40}
          />
        </p>

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
