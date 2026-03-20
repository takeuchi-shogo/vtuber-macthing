'use client'

import { Button as HeroButton } from '@heroui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ButtonProps = any & {
  glowColor?: string
}

function Button({ className, glowColor, ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const button = (
    <HeroButton
      className={cn(
        'flex items-center justify-center',
        'px-4 py-2 min-h-[40px]',
        'transition-all duration-200',
        className
      )}
      {...props}
    />
  )

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

export { Button }
export type { ButtonProps }
