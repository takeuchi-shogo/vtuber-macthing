'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Spinner } from '@heroui/react'
import { Home, RefreshCw } from 'lucide-react'
import { calculateRecommendation } from '@/lib/recommendation'
import { Button } from '@/components/ui'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { ResultReveal } from '@/components/result/result-reveal'
import { ResultMainCard } from '@/components/result/result-main-card'
import { ResultSubCard } from '@/components/result/result-sub-card'
import { ShareButton } from '@/components/result/share-button'
import type { RecommendationResult, UserAnswers } from '@/types'
import {
  generationThemes,
  generationToThemeKey,
} from '@/components/theme/theme-config'

export default function ResultPage() {
  const router = useRouter()
  const [result, setResult] = useState<RecommendationResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      const answersJson = localStorage.getItem('quizAnswers')
      if (!answersJson) {
        router.push('/')
        return
      }

      const userAnswers: UserAnswers = JSON.parse(answersJson)
      const recommendation = calculateRecommendation(userAnswers)
      setResult(recommendation)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [router])

  const handleRetry = () => {
    try {
      localStorage.removeItem('quizAnswers')
    } catch {
      // ignore
    }
    router.push('/quiz')
  }

  const handleGoHome = () => {
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (error || !result) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--bg-base)]">
        <div className="space-y-4 text-center">
          <p className="text-lg text-[var(--text-secondary)]">
            診断データの読み込みに失敗しました。
          </p>
          <Button color="primary" onPress={handleRetry}>
            もう一度診断する
          </Button>
        </div>
      </div>
    )
  }

  const mainMember = result.main.member
  const themeKey = generationToThemeKey[mainMember.generation] ?? 'gen0'
  const theme = generationThemes[themeKey] ?? generationThemes.gen0
  const mainName = mainMember.nameJP ?? mainMember.name
  const mainScore = Math.round(result.main.score)

  return (
    <ResultReveal memberColor={theme.primary}>
      <div className="min-h-screen bg-[var(--bg-base)] py-8">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-8 text-center">
              <h1 className="mb-2 text-3xl font-bold text-[var(--text-primary)]">
                診断結果
              </h1>
              <p className="text-[var(--text-secondary)]">
                あなたにおすすめのホロライブメンバーはこちら！
              </p>
            </div>
          </ScrollReveal>

          {/* Main recommendation */}
          <section className="mb-8">
            <ScrollReveal delay={0.1}>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">
                あなたにぴったりのVtuber
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ResultMainCard
                member={result.main.member}
                matchReasons={result.main.matchReasons}
                score={result.main.score}
              />
            </ScrollReveal>
          </section>

          {/* Alternative recommendations */}
          {result.alternatives.length > 0 && (
            <section className="mb-8">
              <ScrollReveal delay={0.3}>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text-primary)]">
                  その他のおすすめ
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
                {result.alternatives.map((alt, i) => (
                  <ScrollReveal key={alt.member.id} delay={0.4 + i * 0.1}>
                    <ResultSubCard
                      member={alt.member}
                      matchReasons={alt.matchReasons}
                      score={alt.score}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </section>
          )}

          {/* Action buttons */}
          <ScrollReveal delay={0.6}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                color="primary"
                variant="flat"
                onPress={handleRetry}
                startContent={<RefreshCw size={16} />}
              >
                もう一度診断する
              </Button>
              <ShareButton memberName={mainName} score={mainScore} />
              <Button
                variant="ghost"
                onPress={handleGoHome}
                startContent={<Home size={16} />}
              >
                ホームに戻る
              </Button>
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal delay={0.7}>
            <div className="mt-8 text-center text-sm text-[var(--text-tertiary)]">
              <p>
                ※この診断は独自の基準によるものです。
                <br />
                実際の配信内容は時期により変化する場合があります。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </ResultReveal>
  )
}
