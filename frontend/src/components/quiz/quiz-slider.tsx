'use client'

import { cn } from '@/lib/utils'

interface QuizSliderProps {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  leftLabel: string
  rightLabel: string
  step?: number
}

export function QuizSlider({
  min,
  max,
  value,
  onChange,
  leftLabel,
  rightLabel,
  step = 1,
}: QuizSliderProps) {
  const percentage = ((value - min) / (max - min)) * 100
  const totalSteps = Math.round((max - min) / step) + 1

  return (
    <div className="space-y-4">
      {/* Labels */}
      <div className="flex justify-between text-sm font-medium">
        <span className="text-[var(--text-muted)]">{leftLabel}</span>
        <span className="text-[var(--text-muted)]">{rightLabel}</span>
      </div>

      {/* Slider track */}
      <div className="relative pt-1 pb-1">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={`${leftLabel} - ${rightLabel}`}
          className={cn(
            'quiz-slider w-full h-2 rounded-full appearance-none cursor-pointer',
            'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B8ED]'
          )}
          style={
            {
              '--slider-percentage': `${percentage}%`,
            } as React.CSSProperties
          }
        />
      </div>

      {/* Step indicators */}
      <div className="flex justify-between px-1">
        {Array.from({ length: totalSteps }, (_, i) => {
          const stepValue = min + i * step
          const isActive = stepValue <= value
          return (
            <span
              key={stepValue}
              className={cn(
                'text-xs font-medium transition-colors duration-200',
                isActive ? 'text-[#00B8ED]' : 'text-[var(--text-muted)]'
              )}
            >
              {stepValue}
            </span>
          )
        })}
      </div>

      {/* Custom styles for the range input */}
      <style jsx>{`
        .quiz-slider {
          background: linear-gradient(
            to right,
            #00b8ed 0%,
            #00b8ed var(--slider-percentage),
            var(--bg-muted, #e5e7eb) var(--slider-percentage),
            var(--bg-muted, #e5e7eb) 100%
          );
        }

        .quiz-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00b8ed;
          border: 3px solid white;
          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.15),
            0 0 0 2px rgba(0, 184, 237, 0.2);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .quiz-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        .quiz-slider::-webkit-slider-thumb:active {
          transform: scale(0.95);
        }

        .quiz-slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #00b8ed;
          border: 3px solid white;
          box-shadow:
            0 2px 6px rgba(0, 0, 0, 0.15),
            0 0 0 2px rgba(0, 184, 237, 0.2);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .quiz-slider::-moz-range-track {
          background: transparent;
          height: 8px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  )
}
