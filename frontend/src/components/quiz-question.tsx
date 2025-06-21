'use client'

import { useState } from 'react'
import { Question } from '@/types'
import { Button } from '@/components/ui'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'

interface QuizQuestionProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  onAnswer: (value: string | string[] | number) => void
  onPrevious: () => void
  onReset: () => void
  canGoPrevious: boolean
}

export function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onPrevious,
  onReset,
  canGoPrevious,
}: QuizQuestionProps) {
  const [selectedValue, setSelectedValue] = useState<
    string | string[] | number | null
  >(null)
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>([])

  const handleSingleSelect = (value: string) => {
    setSelectedValue(value)
  }

  const handleMultipleSelect = (value: string) => {
    setSelectedMultiple((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value)
      }
      if (question.maxSelections && prev.length >= question.maxSelections) {
        return [...prev.slice(1), value]
      }
      return [...prev, value]
    })
  }

  const handleSliderChange = (value: number) => {
    setSelectedValue(value)
  }

  const handleSubmit = () => {
    if (question.type === 'multiple') {
      if (selectedMultiple.length > 0) {
        onAnswer(selectedMultiple)
        setSelectedMultiple([])
      }
    } else if (selectedValue !== null) {
      onAnswer(selectedValue)
      setSelectedValue(null)
    }
  }

  const isValid =
    question.type === 'multiple'
      ? selectedMultiple.length > 0
      : selectedValue !== null

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            質問 {currentIndex + 1} / {totalQuestions}
          </span>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onPress={onReset}
              startContent={<Home size={16} />}
              className="text-gray-500 hover:text-gray-700"
            >
              最初から
            </Button>
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
        {question.description && (
          <p className="text-gray-600">{question.description}</p>
        )}
      </div>

      <div className="space-y-4 mb-8">
        {question.type === 'single' && question.options && (
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSingleSelect(option.value)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedValue === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-gray-500 mt-1">
                    {option.description}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {question.type === 'multiple' && question.options && (
          <div className="space-y-3">
            {question.maxSelections && (
              <p className="text-sm text-gray-500">
                最大{question.maxSelections}つまで選択可能（
                {selectedMultiple.length}個選択中）
              </p>
            )}
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleMultipleSelect(option.value)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  selectedMultiple.includes(option.value)
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-medium">{option.label}</div>
                {option.description && (
                  <div className="text-sm text-gray-500 mt-1">
                    {option.description}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {question.type === 'slider' && question.sliderConfig && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{question.sliderConfig.labels[0]}</span>
              <span>{question.sliderConfig.labels[1]}</span>
            </div>
            <input
              type="range"
              min={question.sliderConfig.min}
              max={question.sliderConfig.max}
              step={question.sliderConfig.step}
              value={(selectedValue as number) || question.sliderConfig.min}
              onChange={(e) => handleSliderChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400">
              {Array.from(
                {
                  length:
                    question.sliderConfig.max - question.sliderConfig.min + 1,
                },
                (_, i) => i + question.sliderConfig!.min
              ).map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between">
        <Button
          variant="flat"
          onPress={onPrevious}
          isDisabled={!canGoPrevious}
          startContent={<ChevronLeft size={16} />}
          className="hover:bg-gray-100"
        >
          前の質問
        </Button>
        <Button
          color="primary"
          onPress={handleSubmit}
          isDisabled={!isValid}
          endContent={<ChevronRight size={16} />}
          className="hover:scale-105 transition-transform"
        >
          {currentIndex === totalQuestions - 1 ? '結果を見る' : '次の質問'}
        </Button>
      </div>
    </div>
  )
}
