'use client'

import { MemberListCard } from '@/components/member'
import { MemberGrid, MemberGridItem } from '@/components/member/member-grid'
import { Button, GlassCard } from '@/components/ui'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { ParticleBackground } from '@/components/animation/particle-background'
import { GenerationThemeProvider } from '@/components/theme/generation-theme-provider'
import {
  generationThemes,
  generationToThemeKey,
} from '@/components/theme/theme-config'
import { NeonText } from '@/components/effects/neon-text'
import { HoloMember } from '@/types'
import { Users, AlertCircle, SearchX } from 'lucide-react'
import Link from 'next/link'
import { type CSSProperties } from 'react'

interface TeamConfig {
  members: HoloMember[]
  title: string
  description: string
  officialUrl: string
  generationOrder: string[]
}

interface TeamPageClientProps {
  teamConfig: TeamConfig
  resolvedParams: {
    team: string
  }
}

function getThemeForGeneration(generation: string) {
  const key = generationToThemeKey[generation] ?? 'gen0'
  return generationThemes[key] ?? generationThemes.gen0
}

export default function TeamPageClient({
  teamConfig,
  resolvedParams,
}: TeamPageClientProps) {
  const { members, title, description, officialUrl, generationOrder } =
    teamConfig

  // 世代別にメンバーをグループ化
  const membersByGeneration = members.reduce(
    (acc, member) => {
      const generation = member.generation
      if (!acc[generation]) {
        acc[generation] = []
      }
      acc[generation].push(member)
      return acc
    },
    {} as Record<string, typeof members>
  )

  // Empty state
  if (members.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--bg-base)]">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb
            items={[
              { label: 'ホーム', href: '/' },
              { label: 'メンバー', href: '/member' },
              { label: title },
            ]}
          />
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <GlassCard className="max-w-md p-8">
              <SearchX
                size={48}
                className="mx-auto mb-4 text-[var(--text-muted)]"
              />
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                メンバーが見つかりませんでした
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                現在このブランチにはメンバーが登録されていません。
              </p>
              <Button as={Link} href="/member" color="primary">
                メンバー一覧に戻る
              </Button>
            </GlassCard>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <div className="container mx-auto px-4 py-8">
        {/* パンくずリスト */}
        <Breadcrumb
          items={[
            { label: 'ホーム', href: '/' },
            { label: 'メンバー', href: '/member' },
            { label: title },
          ]}
        />

        {/* ヘッダー */}
        <ScrollReveal>
          <div className="mt-6 mb-8 text-center">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              {title}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
              {description}
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-lg font-semibold text-[var(--text-secondary)]">
                {members.length} メンバー
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 世代別メンバー表示 */}
        {generationOrder.map((generation) => {
          const generationMembers = membersByGeneration[generation]
          if (!generationMembers || generationMembers.length === 0) return null

          const theme = getThemeForGeneration(generation)

          return (
            <GenerationThemeProvider key={generation} generation={generation}>
              <section className="mb-16">
                {/* 世代ヒーローバナー */}
                <ScrollReveal>
                  <div
                    className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${theme.gradient} mb-6`}
                  >
                    <ParticleBackground color={theme.particle} count={15} />
                    <div className="relative z-10 p-6 sm:p-8">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <NeonText
                            as="h2"
                            color={theme.primary}
                            flicker={false}
                            className="text-2xl sm:text-3xl font-bold"
                          >
                            {generation}
                          </NeonText>
                          <p className="mt-1 text-[var(--text-secondary)]">
                            {generationMembers.length} メンバー
                          </p>
                        </div>
                        <div
                          className="h-12 w-12 rounded-full opacity-30"
                          style={
                            {
                              background: `radial-gradient(circle, ${theme.primary}, transparent)`,
                            } as CSSProperties
                          }
                        />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* メンバーグリッド */}
                <MemberGrid>
                  {generationMembers.map((member) => (
                    <MemberGridItem key={member.id}>
                      <MemberListCard
                        member={member}
                        showDetails={false}
                        teamSlug={resolvedParams.team}
                      />
                    </MemberGridItem>
                  ))}
                </MemberGrid>
              </section>
            </GenerationThemeProvider>
          )
        })}

        {/* 公式サイトリンク */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <GlassCard className="max-w-xl mx-auto p-6">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                {title} 公式情報
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  as="a"
                  href={officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                >
                  公式メンバー一覧
                </Button>
                <Button
                  as="a"
                  href="https://www.youtube.com/@hololive"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="danger"
                  variant="flat"
                >
                  公式YouTube
                </Button>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
