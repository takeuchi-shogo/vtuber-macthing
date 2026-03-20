'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui'
import { MatchCounter } from './match-counter'
import { getIconPath, getTeamSlug, cn } from '@/lib/utils'
import type { HoloMember } from '@/types'

interface ResultSubCardProps {
  member: HoloMember
  matchReasons: string[]
  score: number
}

export function ResultSubCard({
  member,
  matchReasons,
  score,
}: ResultSubCardProps) {
  const iconPath = getIconPath(member.id, member.branch)
  const teamSlug = getTeamSlug(member)
  const roundedScore = Math.round(score)

  return (
    <Link href={`/member/${teamSlug}/${member.id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <GlassCard className="cursor-pointer p-4 transition-shadow hover:shadow-lg">
          <div className="flex items-center gap-4">
            {/* Profile image */}
            <Image
              src={iconPath}
              alt={member.nameJP ?? member.name}
              width={64}
              height={64}
              className={cn(
                'shrink-0 rounded-full border-2 border-[var(--border)] object-cover'
              )}
            />

            {/* Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-bold text-[var(--text-primary)]">
                {member.nameJP ?? member.name}
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                {member.generation} / {member.branch}
              </p>
              {matchReasons.length > 0 && (
                <p className="mt-1 truncate text-xs text-[var(--text-tertiary)]">
                  {matchReasons.slice(0, 2).join(' / ')}
                </p>
              )}
            </div>

            {/* Score */}
            <div className="shrink-0 text-right">
              <MatchCounter
                target={roundedScore}
                duration={1200}
                className="text-xl font-extrabold text-[var(--text-primary)]"
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </Link>
  )
}
