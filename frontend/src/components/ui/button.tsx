'use client'

import {
  Button as HeroButton,
  ButtonProps as HeroButtonProps,
} from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends HeroButtonProps {
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroButton
        ref={ref}
        className={cn(
          // Hero UIの基本レイアウトを明示的に保持 + line-heightの正規化
          'flex items-center justify-center leading-none',
          // スムーズなトランジション
          'transition-all duration-200',
          // バリアント別のアニメーション効果のみ追加
          {
            'hover:scale-105 active:scale-95': props.variant === 'shadow',
            'hover:opacity-80': props.variant === 'ghost',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
