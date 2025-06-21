'use client'

import { MemberCard } from '@/components/member-card'
import { calculateRecommendation } from '@/lib/recommendation'
import { RecommendationResult, UserAnswers } from '@/types'
import { Spinner } from '@heroui/react'
import { Button } from '@/components/ui'
import { Home, RefreshCw, Share2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ResultPage() {
  const router = useRouter()
  const [result, setResult] = useState<RecommendationResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const answersJson = localStorage.getItem('quizAnswers')
    if (!answersJson) {
      router.push('/')
      return
    }

    const userAnswers: UserAnswers = JSON.parse(answersJson)
    const recommendation = calculateRecommendation(userAnswers)
    setResult(recommendation)
    setLoading(false)
  }, [router])

  const handleRetry = () => {
    localStorage.removeItem('quizAnswers')
    router.push('/quiz')
  }

  const handleShare = () => {
    if (!result) return

    const mainMember = result.main.member
    const text = `ホロライブVtuber診断の結果、私におすすめは「${mainMember.nameJP || mainMember.name}」でした！\n\n`
    const url = window.location.origin
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`

    window.open(shareUrl, '_blank')
  }

  const handleGoHome = () => {
    router.push('/')
  }

  if (loading || !result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">診断結果</h1>
          <p className="text-gray-600">
            あなたにおすすめのホロライブメンバーはこちら！
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              あなたにぴったりのVtuber
            </h2>
            <MemberCard
              member={result.main.member}
              matchReasons={result.main.matchReasons}
              score={result.main.score}
              isMain={true}
            />
          </div>

          {result.alternatives.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">その他のおすすめ</h2>
              <div className="space-y-4">
                {result.alternatives.map((alt) => (
                  <MemberCard
                    key={alt.member.id}
                    member={alt.member}
                    matchReasons={alt.matchReasons}
                    score={alt.score}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            color="primary"
            variant="flat"
            onPress={handleRetry}
            startContent={<RefreshCw size={16} />}
            className="hover:scale-105 transition-transform"
          >
            もう一度診断する
          </Button>
          <Button
            color="secondary"
            onPress={handleShare}
            startContent={<Share2 size={16} />}
            className="hover:scale-105 transition-transform"
          >
            結果をシェア
          </Button>
          <Button
            variant="ghost"
            onPress={handleGoHome}
            startContent={<Home size={16} />}
            className="hover:bg-gray-100 transition-colors"
          >
            ホームに戻る
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            ※この診断は独自の基準によるものです。
            <br />
            実際の配信内容は時期により変化する場合があります。
          </p>
        </div>
      </div>
    </div>
  )
}
