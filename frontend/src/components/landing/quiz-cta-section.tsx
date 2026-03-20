'use client'

import Link from 'next/link'
import { MessageCircle, Sparkles, Heart } from 'lucide-react'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { Button } from '@/components/ui'

const steps = [
  {
    icon: MessageCircle,
    title: '好みを教えてください',
    description: '配信スタイルや好きなコンテンツなど、簡単な質問に答えるだけ。',
  },
  {
    icon: Sparkles,
    title: 'AIが分析します',
    description:
      'あなたの回答をもとに、100名以上のメンバーから最適な推しを分析。',
  },
  {
    icon: Heart,
    title: '推しが見つかる',
    description: 'あなたにぴったりのホロライブメンバーを3名ご紹介します。',
  },
]

export function QuizCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 py-20">
      <div className="mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <h2 className="mb-12 text-center font-[var(--font-noto-sans-jp)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            3ステップで推しが見つかる
          </h2>
        </ScrollReveal>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={0.15 * i}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--bg-elevated)]">
                  <step.icon className="h-8 w-8 text-[var(--text-primary)]" />
                </div>
                <span className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">
                  Step {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <Button
              as={Link}
              href="/quiz"
              color="primary"
              size="lg"
              variant="shadow"
              className="px-10 py-6 text-lg font-semibold"
              glowColor="#6C5CE7"
            >
              診断スタート
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
