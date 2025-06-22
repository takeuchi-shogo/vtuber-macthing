'use client'

import { cn } from '@/lib/utils'
import {
  Card as HeroCard,
  CardBody as HeroCardBody,
  CardFooter as HeroCardFooter,
  CardFooterProps as HeroCardFooterProps,
  CardHeader as HeroCardHeader,
  CardProps as HeroCardProps,
} from '@heroui/card'
import { ComponentProps, forwardRef } from 'react'

export interface CardProps extends HeroCardProps {
  className?: string
}

export type CardBodyProps = ComponentProps<typeof HeroCardBody> & {
  className?: string
}

export type CardHeaderProps = ComponentProps<typeof HeroCardHeader> & {
  className?: string
}

export interface CardFooterProps extends HeroCardFooterProps {
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return <HeroCard ref={ref} className={cn(className)} {...props} />
  }
)

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return <HeroCardBody ref={ref} className={cn(className)} {...props} />
  }
)

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <HeroCardHeader ref={ref} className={cn(className)} {...props} />
  }
)

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return <HeroCardFooter ref={ref} className={cn(className)} {...props} />
  }
)

Card.displayName = 'Card'
CardBody.displayName = 'CardBody'
CardHeader.displayName = 'CardHeader'
CardFooter.displayName = 'CardFooter'

export { Card, CardBody, CardFooter, CardHeader }
