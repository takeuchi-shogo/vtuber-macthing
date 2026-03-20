'use client'

import { Button, GlassCard } from '@/components/ui'
import { GlowEffect } from '@/components/animation/glow-effect'
import { useGenerationTheme } from '@/components/theme/use-generation-theme'
import {
  BRANCH_COLORS,
  BRANCH_LABELS,
  CONTENT_TYPE_SHORT_LABELS,
} from '@/lib/constants'
import { getTeamSlug as getTeamSlugUtil } from '@/lib/utils'
import { HoloMember, ContentType } from '@/types'
import { Chip } from '@heroui/react'
import { Calendar, ExternalLink, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { type CSSProperties, useState } from 'react'

interface MemberListCardProps {
  member: HoloMember
  showDetails?: boolean
  teamSlug?: string
}

export function MemberListCard({
  member,
  showDetails = false,
  teamSlug,
}: MemberListCardProps) {
  const resolvedSlug = teamSlug || getTeamSlugUtil(member)
  const [imgSrc, setImgSrc] = useState(member.profileImage)
  const [imgError, setImgError] = useState(false)
  const { theme } = useGenerationTheme()

  const initial = (member.nameJP ?? member.name).charAt(0)

  return (
    <GlowEffect color={theme.primary} className="rounded-2xl h-full">
      <GlassCard glowColor={theme.primary} className="h-full overflow-hidden">
        {/* テーマカラーのアクセントライン */}
        <div
          className="h-1 w-full"
          style={{ background: theme.primary } as CSSProperties}
        />

        <div className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* メンバー画像 */}
            <div
              className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-offset-2 ring-offset-[var(--bg-surface)]"
              style={{ ringColor: theme.primary } as CSSProperties}
            >
              {imgError ? (
                <div
                  className="flex h-full w-full items-center justify-center text-2xl font-bold text-white"
                  style={{ background: theme.primary } as CSSProperties}
                >
                  {initial}
                </div>
              ) : (
                <Image
                  src={imgSrc}
                  alt={`${member.name}のアイコン`}
                  fill
                  className="object-cover"
                  sizes="96px"
                  onError={() => {
                    setImgSrc('/images/fallback-avatar.svg')
                    setImgError(true)
                  }}
                />
              )}
            </div>

            {/* 基本情報 */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {member.nameJP}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {member.name}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <Chip
                  color={BRANCH_COLORS[member.branch]}
                  size="sm"
                  variant="flat"
                >
                  {BRANCH_LABELS[member.branch]}
                </Chip>
                <Chip color="default" size="sm" variant="flat">
                  {member.generation}
                </Chip>
              </div>
            </div>

            {/* 説明文 */}
            <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
              {member.description}
            </p>

            {/* 詳細表示時の追加情報 */}
            {showDetails && (
              <div className="w-full space-y-4 pt-4 border-t border-[var(--border)]">
                {/* デビュー日 */}
                <div className="flex items-center justify-center space-x-2 text-sm text-[var(--text-secondary)]">
                  <Calendar size={16} />
                  <span>
                    デビュー:{' '}
                    {new Date(member.debut).toLocaleDateString('ja-JP')}
                  </span>
                </div>

                {/* 言語 */}
                <div className="flex items-center justify-center space-x-2 text-sm text-[var(--text-secondary)]">
                  <Globe size={16} />
                  <span>対応言語: {member.languages.join(', ')}</span>
                </div>

                {/* コンテンツタイプ */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.contentTypes.slice(0, 3).map((type) => (
                    <Chip key={type} size="sm" variant="bordered">
                      {CONTENT_TYPE_SHORT_LABELS[type as ContentType] || type}
                    </Chip>
                  ))}
                  {member.contentTypes.length > 3 && (
                    <Chip size="sm" variant="bordered">
                      +{member.contentTypes.length - 3}
                    </Chip>
                  )}
                </div>

                {/* 推薦理由 */}
                <p className="text-xs text-[var(--text-muted)] italic">
                  {member.recommendReason}
                </p>
              </div>
            )}

            {/* アクションボタン */}
            <div className="flex flex-col sm:flex-row gap-2 w-full pt-4">
              <Button
                as={Link}
                href={`/member/${resolvedSlug}/${member.id}`}
                variant="flat"
                size="sm"
                className="flex-1"
              >
                詳細を見る
              </Button>
              <Button
                as="a"
                href={member.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                size="sm"
                endContent={<ExternalLink size={16} />}
                className="flex-1"
              >
                チャンネル
              </Button>
            </div>
          </div>
        </div>
      </GlassCard>
    </GlowEffect>
  )
}
