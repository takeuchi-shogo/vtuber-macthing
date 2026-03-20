'use client'

import { useGenerationTheme } from '@/components/theme/use-generation-theme'
import { TypewriterText } from '@/components/animation/typewriter-text'
import { Chip } from '@/components/ui'
import { BRANCH_LABELS } from '@/lib/constants'
import { HoloMember } from '@/types'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import { useRef, type CSSProperties } from 'react'

interface MemberDetailHeroProps {
  member: HoloMember
}

export function MemberDetailHero({ member }: MemberDetailHeroProps) {
  const { theme } = useGenerationTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])

  const displayName = member.nameJP || member.name

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl"
      style={
        {
          '--hero-primary': theme.primary,
          '--hero-glow': theme.glow,
        } as CSSProperties
      }
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`} />
      <div className="absolute inset-0 bg-[var(--bg-surface)]/60 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-12 md:flex-row md:items-start md:px-12 md:py-16">
        {/* Profile image with parallax */}
        <motion.div style={{ y: imageY }} className="flex-shrink-0">
          <div
            className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 shadow-lg md:h-56 md:w-56"
            style={{
              borderColor: theme.primary,
              boxShadow: theme.glow,
            }}
          >
            <Image
              src={member.profileImage}
              alt={`${displayName}のアイコン`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 192px, 224px"
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-2 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            <TypewriterText text={displayName} speed={60} />
          </h1>

          {member.nameJP && (
            <p className="mb-4 text-lg text-[var(--text-secondary)]">
              {member.name}
            </p>
          )}

          {/* Chips */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start">
            <Chip selected glowColor={theme.primary}>
              {BRANCH_LABELS[member.branch] ?? member.branch}
            </Chip>
            <Chip selected glowColor={theme.primary}>
              {member.generation}
            </Chip>
          </div>

          {/* Catchphrase */}
          {member.catchphrase && (
            <blockquote
              className="mb-6 border-l-4 pl-4 text-lg italic text-[var(--text-secondary)]"
              style={{ borderColor: theme.primary }}
            >
              「{member.catchphrase}」
            </blockquote>
          )}

          {/* Debut date */}
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)] md:justify-start">
            <Calendar size={16} style={{ color: theme.primary }} />
            <span>
              デビュー: {new Date(member.debut).toLocaleDateString('ja-JP')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
