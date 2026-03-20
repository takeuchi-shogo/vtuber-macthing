'use client'

import { cn } from '@/lib/utils'

interface ProgressBarProps {
  progress: number
  color?: string
  className?: string
}

export function ProgressBar({
  progress,
  color = '#00B8ED',
  className,
}: ProgressBarProps) {
  return (
    <div
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-[var(--border)]',
        className
      )}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          backgroundColor: color,
        }}
      />
      <div
        className="absolute inset-0 h-full rounded-full opacity-50 animate-[shimmer_2s_infinite]"
        style={{
          width: `${Math.min(100, Math.max(0, progress))}%`,
          background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
        }}
      />
    </div>
  )
}
