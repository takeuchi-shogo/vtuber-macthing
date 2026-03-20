'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'
import {
  StaggerContainer,
  staggerItemVariants,
} from '@/components/animation/stagger-container'
import { cn } from '@/lib/utils'

interface MemberGridProps {
  children: ReactNode
  className?: string
}

export function MemberGrid({ children, className }: MemberGridProps) {
  return (
    <StaggerContainer
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4',
        className
      )}
    >
      {children}
    </StaggerContainer>
  )
}

export function MemberGridItem({ children }: { children: ReactNode }) {
  return <motion.div variants={staggerItemVariants}>{children}</motion.div>
}
