'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Question } from '@/types'
import { Button } from '@/components/ui'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { QuizCardOption } from './quiz-card-option'
import { QuizSlider } from './quiz-slider'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

interface QuizQuestionProps {
  question: Question
  currentIndex: number
  totalQuestions: number
  onAnswer: (value: string | string[] | number) => void
  onPrevious: () => void
  onReset: () => void
  canGoPrevious: boolean
}

/** Subtle background hue shift per question index */
const QUESTION_GRADIENTS = [
  'from-[#00B8ED]/5 to-[#7c3aed]/5',
  'from-[#7c3aed]/5 to-[#ec4899]/5',
  'from-[#ec4899]/5 to-[#f59e0b]/5',
  'from-[#f59e0b]/5 to-[#10b981]/5',
  'from-[#10b981]/5 to-[#00B8ED]/5',
  'from-[#00B8ED]/5 to-[#6366f1]/5',
  'from-[#6366f1]/5 to-[#f43f5e]/5',
  'from-[#f43f5e]/5 to-[#00B8ED]/5',
  'from-[#00B8ED]/5 to-[#7c3aed]/5',
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

const reducedMotionVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
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
  const [direction, setDirection] = useState(1)
  const prefersReducedMotion = useReducedMotion()

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
    setDirection(1)
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

  const handlePrevious = () => {
    setDirection(-1)
    setSelectedValue(null)
    setSelectedMultiple([])
    onPrevious()
  }

  const isValid =
    question.type === 'multiple'
      ? selectedMultiple.length > 0
      : selectedValue !== null

  const gradient = QUESTION_GRADIENTS[currentIndex % QUESTION_GRADIENTS.length]

  const variants = prefersReducedMotion ? reducedMotionVariants : slideVariants

  return (
    <div className={`relative rounded-2xl bg-gradient-to-br ${gradient} p-1`}>
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-medium text-[var(--text-muted)]">
              質問 {currentIndex + 1} / {totalQuestions}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onPress={onReset}
              startContent={<Home size={16} />}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              最初から
            </Button>
          </div>
        </div>

        {/* Question content with transitions */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={question.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={
              prefersReducedMotion
                ? { duration: 0.15 }
                : { type: 'spring', stiffness: 300, damping: 30 }
            }
          >
            <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
              {question.title}
            </h2>
            {question.description && (
              <p className="text-[var(--text-muted)] mb-6">
                {question.description}
              </p>
            )}

            <div className="space-y-3 mb-8" role="listbox">
              {/* Single select */}
              {question.type === 'single' &&
                question.options?.map((option) => (
                  <QuizCardOption
                    key={option.value}
                    label={option.label}
                    description={option.description}
                    selected={selectedValue === option.value}
                    onSelect={() => handleSingleSelect(option.value)}
                  />
                ))}

              {/* Multiple select */}
              {question.type === 'multiple' && (
                <>
                  {question.maxSelections && (
                    <p className="text-sm text-[var(--text-muted)] mb-2">
                      最大{question.maxSelections}つまで選択可能（
                      {selectedMultiple.length}個選択中）
                    </p>
                  )}
                  {question.options?.map((option) => (
                    <QuizCardOption
                      key={option.value}
                      label={option.label}
                      description={option.description}
                      selected={selectedMultiple.includes(option.value)}
                      onSelect={() => handleMultipleSelect(option.value)}
                    />
                  ))}
                </>
              )}

              {/* Slider */}
              {question.type === 'slider' && question.sliderConfig && (
                <div className="pt-4 pb-2">
                  <QuizSlider
                    min={question.sliderConfig.min}
                    max={question.sliderConfig.max}
                    step={question.sliderConfig.step}
                    value={
                      (selectedValue as number) ?? question.sliderConfig.min
                    }
                    onChange={handleSliderChange}
                    leftLabel={question.sliderConfig.labels[0]}
                    rightLabel={question.sliderConfig.labels[1]}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between pt-2">
          <Button
            variant="flat"
            onPress={handlePrevious}
            isDisabled={!canGoPrevious}
            startContent={<ChevronLeft size={16} />}
            className="hover:bg-[var(--bg-muted)]"
          >
            前の質問
          </Button>
          <Button
            color="primary"
            onPress={handleSubmit}
            isDisabled={!isValid}
            endContent={<ChevronRight size={16} />}
            glowColor="#00B8ED"
          >
            {currentIndex === totalQuestions - 1 ? '結果を見る' : '次の質問'}
          </Button>
        </div>
      </div>
    </div>
  )
}
