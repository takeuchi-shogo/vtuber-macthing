'use client'

import { QuizQuestion, QuizProgress } from '@/components/quiz'
import { GlassCard } from '@/components/ui'
import { GlitchText } from '@/components/effects/glitch-text'
import { useQuiz } from '@/hooks/use-quiz'
import { Spinner } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function QuizPage() {
  const router = useRouter()
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isCompleted,
    handleAnswer,
    goToPreviousQuestion,
    resetQuiz,
    getUserAnswers,
  } = useQuiz()

  const handleReset = () => {
    try {
      localStorage.removeItem('quizAnswers')
    } catch {
      // ignore
    }
    resetQuiz()
    router.push('/')
  }

  useEffect(() => {
    if (isCompleted) {
      try {
        const userAnswers = getUserAnswers()
        localStorage.setItem('quizAnswers', JSON.stringify(userAnswers))
      } catch {
        // ignore
      }
      router.push('/result')
    }
  }, [isCompleted, getUserAnswers, router])

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-base)] to-[var(--bg-surface)] py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <GlitchText
            as="h1"
            intensity="medium"
            className="text-3xl font-bold mb-2 text-[var(--text-primary)]"
          >
            ホロライブVtuber診断
          </GlitchText>
          <p className="text-[var(--text-muted)]">
            あなたにぴったりのホロライブメンバーを見つけましょう
          </p>
        </div>

        {/* Progress dots */}
        <div className="mb-6">
          <QuizProgress
            currentStep={currentQuestionIndex}
            totalSteps={totalQuestions}
          />
        </div>

        {/* Question area */}
        <GlassCard className="overflow-hidden">
          <QuizQuestion
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
            onPrevious={goToPreviousQuestion}
            onReset={handleReset}
            canGoPrevious={currentQuestionIndex > 0}
          />
        </GlassCard>
      </div>
    </div>
  )
}
