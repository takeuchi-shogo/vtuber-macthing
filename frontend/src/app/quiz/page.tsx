'use client'

import { QuizQuestion } from '@/components/quiz-question'
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
    // 回答データをクリア
    localStorage.removeItem('quizAnswers')
    // クイズ状態をリセット
    resetQuiz()
    // トップページに遷移
    router.push('/')
  }

  useEffect(() => {
    if (isCompleted) {
      const userAnswers = getUserAnswers()
      // 回答データをローカルストレージに保存
      localStorage.setItem('quizAnswers', JSON.stringify(userAnswers))
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">ホロライブVtuber診断</h1>
          <p className="text-gray-600">
            あなたにぴったりのホロライブメンバーを見つけましょう
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <QuizQuestion
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
            onPrevious={goToPreviousQuestion}
            onReset={handleReset}
            canGoPrevious={currentQuestionIndex > 0}
          />
        </div>
      </div>
    </div>
  )
}
