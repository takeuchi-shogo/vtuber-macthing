'use client'

import { Button, GlassCard } from '@/components/ui'
import { GlowEffect } from '@/components/animation/glow-effect'
import { useGenerationTheme } from '@/components/theme/use-generation-theme'
import { HoloMember } from '@/types'
import { Chip } from '@heroui/react'
import { Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'
import { type CSSProperties, useState } from 'react'

interface MemberCardProps {
  member: HoloMember
  matchReasons: string[]
  score: number
  isMain?: boolean
}

export function MemberCard({
  member,
  matchReasons,
  score,
  isMain = false,
}: MemberCardProps) {
  const matchPercentage = Math.round(score)
  const [imgSrc, setImgSrc] = useState(member.profileImage)
  const [imgError, setImgError] = useState(false)
  const { theme } = useGenerationTheme()

  const initial = (member.nameJP ?? member.name).charAt(0)

  return (
    <GlowEffect color={theme.primary} className="rounded-2xl">
      <GlassCard
        glowColor={theme.primary}
        className={`w-full overflow-hidden ${isMain ? 'ring-2' : ''}`}
        {...(isMain
          ? {
              style: {
                '--ring-color': theme.primary,
                borderColor: theme.primary,
              } as CSSProperties,
            }
          : {})}
      >
        {/* テーマカラーのアクセントライン */}
        <div
          className="h-1 w-full"
          style={{ background: theme.primary } as CSSProperties}
        />

        <div className="px-4 pt-4 pb-0 flex flex-col items-start">
          {isMain && (
            <Chip
              size="sm"
              variant="flat"
              className="mb-2"
              style={
                {
                  background: `${theme.primary}20`,
                  color: theme.primary,
                } as CSSProperties
              }
            >
              おすすめ No.1
            </Chip>
          )}
          <div className="flex items-center gap-2 w-full">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              {member.nameJP || member.name}
            </h3>
            <Chip size="sm" variant="dot" className="ml-auto">
              {matchPercentage}% マッチ
            </Chip>
          </div>
          <p className="text-sm text-[var(--text-secondary)]">
            {member.generation} - {member.branch}
          </p>
        </div>

        <div className="overflow-visible py-2 px-4">
          <div className="flex gap-4">
            <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 relative bg-[var(--bg-muted)]">
              {imgError ? (
                <div
                  className="flex h-full w-full items-center justify-center text-3xl font-bold text-white"
                  style={{ background: theme.primary } as CSSProperties}
                >
                  {initial}
                </div>
              ) : (
                <Image
                  src={imgSrc}
                  alt={member.nameJP || member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                  onError={() => {
                    setImgSrc('/images/fallback-avatar.svg')
                    setImgError(true)
                  }}
                />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {member.description}
              </p>
              <div className="mb-3">
                <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">
                  マッチした理由
                </p>
                <div className="flex flex-wrap gap-1">
                  {matchReasons.map((reason, index) => (
                    <Chip
                      key={index}
                      size="sm"
                      variant="flat"
                      style={
                        {
                          background: `${theme.primary}15`,
                          color: theme.primary,
                        } as CSSProperties
                      }
                    >
                      {reason}
                    </Chip>
                  ))}
                </div>
              </div>

              {member.catchphrase && (
                <p className="text-sm italic text-[var(--text-muted)] mb-3">
                  「{member.catchphrase}」
                </p>
              )}

              <div className="flex gap-2">
                <Button
                  as="a"
                  href={member.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  color="danger"
                  variant="flat"
                  startContent={<Youtube size={16} />}
                  className="hover:scale-105 transition-transform"
                >
                  YouTube
                </Button>
                {member.twitterUrl && (
                  <Button
                    as="a"
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    color="primary"
                    variant="flat"
                    startContent={<Twitter size={16} />}
                    className="hover:scale-105 transition-transform"
                  >
                    Twitter
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </GlowEffect>
  )
}
