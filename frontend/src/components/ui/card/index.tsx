'use client'

import { cn } from '@/lib/utils'
import {
  Card as HeroCard,
  CardBody as HeroCardBody,
  CardFooter as HeroCardFooter,
  CardHeader as HeroCardHeader,
} from '@heroui/card'
import { type ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

function Card({ className, ...props }: CardProps) {
  return <HeroCard className={cn(className)} {...props} />
}

function CardBody({ className, ...props }: CardProps) {
  return <HeroCardBody className={cn(className)} {...props} />
}

function CardHeader({ className, ...props }: CardProps) {
  return <HeroCardHeader className={cn(className)} {...props} />
}

function CardFooter({ className, ...props }: CardProps) {
  return <HeroCardFooter className={cn(className)} {...props} />
}

export { Card, CardBody, CardFooter, CardHeader }
export type { CardProps }
