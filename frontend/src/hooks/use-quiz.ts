'use client'

import { useState, useCallback } from 'react'
import {
  Answer,
  UserAnswers,
  ContentType,
  TimeSlot,
  PersonalityType,
  StreamingStyle,
} from '@/types'
import { questions } from '@/lib/questions'

export function useQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswer = useCallback(
    (value: string | string[] | number) => {
      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        value,
      }

      setAnswers((prev) => {
        const filtered = prev.filter((a) => a.questionId !== currentQuestion.id)
        return [...filtered, newAnswer]
      })

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        setIsCompleted(true)
      }
    },
    [currentQuestion, currentQuestionIndex]
  )

  const goToPreviousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
      setIsCompleted(false)
    }
  }, [currentQuestionIndex])

  const resetQuiz = useCallback(() => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setIsCompleted(false)
  }, [])

  const getUserAnswers = useCallback((): UserAnswers => {
    const userAnswers: UserAnswers = {
      contentTypes: [],
      timeSlots: [],
    }

    answers.forEach((answer) => {
      switch (answer.questionId) {
        case 'stream_length':
          userAnswers.streamLength = answer.value as
            | 'short'
            | 'medium'
            | 'long'
            | 'varied'
          break
        case 'viewing_style':
          userAnswers.viewingStyle = answer.value as string
          break
        case 'content_types':
          userAnswers.contentTypes = answer.value as ContentType[]
          break
        case 'personality':
          userAnswers.personality = answer.value as PersonalityType
          break
        case 'communication_style':
          userAnswers.communicationStyle = answer.value as StreamingStyle
          break
        case 'language_branch':
          userAnswers.branch = answer.value as 'JP' | 'EN' | 'ID' | 'any'
          break
        case 'time_slots':
          userAnswers.timeSlots = answer.value as TimeSlot[]
          break
        case 'entertainment_vs_healing':
          userAnswers.entertainmentVsHealing = answer.value as number
          break
        case 'skill_vs_friendliness':
          userAnswers.skillVsFriendliness = answer.value as number
          break
      }
    })

    return userAnswers
  }, [answers])

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    progress,
    isCompleted,
    answers,
    handleAnswer,
    goToPreviousQuestion,
    resetQuiz,
    getUserAnswers,
  }
}
