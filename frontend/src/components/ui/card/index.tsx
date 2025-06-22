'use client'

import {
  Card as HeroCard,
  CardBody as HeroCardBody,
  CardHeader as HeroCardHeader,
  CardFooter as HeroCardFooter,
  CardProps as HeroCardProps,
  CardBodyProps as HeroCardBodyProps,
  CardHeaderProps as HeroCardHeaderProps,
  CardFooterProps as HeroCardFooterProps,
} from '@heroui/react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HeroCardProps {
  className?: string
}

export interface CardBodyProps extends HeroCardBodyProps {
  className?: string
}

export interface CardHeaderProps extends HeroCardHeaderProps {
  className?: string
}

export interface CardFooterProps extends HeroCardFooterProps {
  className?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroCard
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroCardBody
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroCardHeader
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <HeroCardFooter
        ref={ref}
        className={cn(className)}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'
CardBody.displayName = 'CardBody'
CardHeader.displayName = 'CardHeader'
CardFooter.displayName = 'CardFooter'

export { Card, CardBody, CardHeader, CardFooter }