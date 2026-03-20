'use client'

import {
  Button as HeroButton,
  ButtonProps as HeroButtonProps,
} from '@heroui/react'
import { forwardRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends HeroButtonProps {
  className?: string
  /** Optional glow color (hex string, e.g. "#7c3aed"). Glow appears on hover. */
  glowColor?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, glowColor, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false)

    const button = (
      <HeroButton
        ref={ref}
        className={cn(
          // Hero UIの基本レイアウトを明示的に保持
          'flex items-center justify-center',
          // 最小限の余白を確保（Hero UIのデフォルトが不足している場合の保険）
          'px-4 py-2 min-h-[40px]',
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

    // glowColor が指定されていない場合はラップせずそのまま返す（完全な後方互換性）
    if (!glowColor) {
      return button
    }

    return (
      <motion.div
        className="inline-block transition-shadow duration-200"
        style={{
          borderRadius: 'inherit',
          boxShadow: isHovered ? `0 0 16px ${glowColor}40` : 'none',
        }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {button}
      </motion.div>
    )
  }
)

Button.displayName = 'Button'

export { Button }
