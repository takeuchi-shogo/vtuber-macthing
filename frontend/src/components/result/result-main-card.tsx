'use client'

import Image from 'next/image'
import { Youtube, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { GlassCard, Button, Chip } from '@/components/ui'
import { GlowEffect } from '@/components/animation/glow-effect'
import { TypewriterText } from '@/components/animation/typewriter-text'
import {
  StaggerContainer,
  staggerItemVariants,
} from '@/components/animation/stagger-container'
import { GenerationThemeProvider } from '@/components/theme/generation-theme-provider'
import { useGenerationTheme } from '@/components/theme/use-generation-theme'
import { MatchCounter } from './match-counter'
import { getIconPath, cn } from '@/lib/utils'
import type { HoloMember } from '@/types'

interface ResultMainCardProps {
  member: HoloMember
  matchReasons: string[]
  score: number
}

function ResultMainCardInner({
  member,
  matchReasons,
  score,
}: ResultMainCardProps) {
  const { theme } = useGenerationTheme()
  const iconPath = getIconPath(member.id, member.branch)
  const roundedScore = Math.round(score)

  return (
    <GlassCard
      glowColor={theme.primary}
      className="relative overflow-hidden p-6 sm:p-8"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: theme.primary }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
        {/* Profile image with glow */}
        <div className="relative shrink-0">
          <div
            className="absolute inset-0 rounded-full opacity-40 blur-2xl"
            style={{ backgroundColor: theme.primary }}
            aria-hidden="true"
          />
          <Image
            src={iconPath}
            alt={member.nameJP ?? member.name}
            width={160}
            height={160}
            className={cn(
              'relative rounded-full border-4 object-cover',
              'shadow-lg'
            )}
            style={{ borderColor: theme.primary }}
            priority
          />
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          {/* Name */}
          <h2 className="mb-1 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            <TypewriterText text={member.nameJP ?? member.name} speed={80} />
          </h2>
          <p className="mb-4 text-sm text-[var(--text-secondary)]">
            {member.generation} / {member.branch}
          </p>

          {/* Score */}
          <div className="mb-4">
            <span className="text-sm text-[var(--text-secondary)]">
              マッチ率
            </span>
            <span style={{ color: theme.primary }}>
              <MatchCounter
                target={roundedScore}
                className="ml-2 text-4xl font-extrabold"
              />
            </span>
          </div>

          {/* Match reasons */}
          <StaggerContainer className="mb-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {matchReasons.map((reason) => (
              <motion.div key={reason} variants={staggerItemVariants}>
                <Chip selected glowColor={theme.primary}>
                  {reason}
                </Chip>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)]">
            {member.recommendReason}
          </p>

          {/* External links */}
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            {member.channelUrl && (
              <GlowEffect color="#FF0000">
                <Button
                  as="a"
                  href={member.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  variant="flat"
                  startContent={<Youtube size={16} />}
                >
                  YouTube
                </Button>
              </GlowEffect>
            )}
            {member.twitterUrl && (
              <GlowEffect color="#1DA1F2">
                <Button
                  as="a"
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  startContent={<Twitter size={16} />}
                >
                  Twitter
                </Button>
              </GlowEffect>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  )
}

export function ResultMainCard(props: ResultMainCardProps) {
  return (
    <GenerationThemeProvider generation={props.member.generation}>
      <ResultMainCardInner {...props} />
    </GenerationThemeProvider>
  )
}
