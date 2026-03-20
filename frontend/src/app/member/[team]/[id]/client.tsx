'use client'

import { Button, GlassCard, Chip } from '@/components/ui'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { GlowEffect } from '@/components/animation/glow-effect'
import { Breadcrumb } from '@/components/layout/breadcrumb'
import { GenerationThemeProvider } from '@/components/theme/generation-theme-provider'
import { useGenerationTheme } from '@/components/theme/use-generation-theme'
import { MemberDetailHero } from '@/components/member/member-detail-hero'
import {
  BRANCH_LABELS,
  CONTENT_TYPE_SHORT_LABELS,
  PERSONALITY_SHORT_LABELS,
  STREAMING_STYLE_SHORT_LABELS,
  STREAM_LENGTH_SHORT_LABELS,
  TIME_SLOT_LABELS,
} from '@/lib/constants'
import { HoloMember } from '@/types'
import {
  ExternalLink,
  Gamepad2,
  Globe,
  MessageCircle,
  Mic,
  Moon,
  Music,
  Palette,
  Sparkles,
  Timer,
  Twitter,
  Users,
  Youtube,
  BookOpen,
} from 'lucide-react'
import Link from 'next/link'
import type { ContentType, TimeSlot } from '@/types'

interface TeamConfig {
  title: string
  backUrl: string
  backText: string
}

interface MemberDetailClientProps {
  member: HoloMember
  teamConfig: TeamConfig
  resolvedParams: {
    team: string
    id: string
  }
}

const CONTENT_TYPE_ICONS: Record<ContentType, React.ReactNode> = {
  gaming: <Gamepad2 size={16} />,
  chatting: <MessageCircle size={16} />,
  singing: <Mic size={16} />,
  asmr: <Moon size={16} />,
  drawing: <Palette size={16} />,
  collab: <Users size={16} />,
  educational: <BookOpen size={16} />,
  music_creation: <Music size={16} />,
}

const TIME_SLOT_ICONS: Record<TimeSlot, string> = {
  morning: '🌅',
  afternoon: '☀️',
  evening: '🌆',
  late_night: '🌙',
}

function MemberDetailContent({
  member,
  teamConfig,
  resolvedParams,
}: MemberDetailClientProps) {
  const { theme } = useGenerationTheme()
  const displayName = member.nameJP || member.name

  const breadcrumbItems = [
    { label: 'ホーム', href: '/' },
    { label: 'メンバー', href: '/member' },
    { label: teamConfig.title, href: teamConfig.backUrl },
    { label: displayName },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero section */}
        <ScrollReveal>
          <MemberDetailHero member={member} />
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <GlassCard className="mt-8 p-6 md:p-8" glowColor={theme.primary}>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              {member.description}
            </p>
          </GlassCard>
        </ScrollReveal>

        {/* Detail info grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Content types */}
          <ScrollReveal delay={0.15}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                主なコンテンツ
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.contentTypes.map((type) => (
                  <Chip key={type} selected glowColor={theme.primary}>
                    <span className="mr-1.5 inline-flex">
                      {CONTENT_TYPE_ICONS[type]}
                    </span>
                    {CONTENT_TYPE_SHORT_LABELS[type]}
                  </Chip>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Personality traits */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                性格特性
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.personality.map((trait) => (
                  <Chip key={trait} selected glowColor={theme.primary}>
                    <Sparkles size={14} className="mr-1.5" />
                    {PERSONALITY_SHORT_LABELS[trait]}
                  </Chip>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Streaming style */}
          <ScrollReveal delay={0.25}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                配信スタイル
              </h2>
              <Chip selected glowColor={theme.primary}>
                {STREAMING_STYLE_SHORT_LABELS[member.streamingStyle]}
              </Chip>
            </GlassCard>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                対応言語
              </h2>
              <div className="flex items-center gap-2">
                <Globe size={18} style={{ color: theme.primary }} />
                <span className="text-[var(--text-secondary)]">
                  {member.languages.join(', ')}
                </span>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Stream time slots */}
          <ScrollReveal delay={0.35}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                配信時間帯
              </h2>
              <div className="flex flex-wrap gap-2">
                {member.typicalStreamTimes.map((slot) => (
                  <Chip key={slot} selected glowColor={theme.primary}>
                    <span className="mr-1.5">{TIME_SLOT_ICONS[slot]}</span>
                    {TIME_SLOT_LABELS[slot]}
                  </Chip>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Stream length */}
          <ScrollReveal delay={0.4}>
            <GlassCard className="p-6" glowColor={theme.primary}>
              <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)]">
                配信の長さ
              </h2>
              <div className="flex items-center gap-2">
                <Timer size={18} style={{ color: theme.primary }} />
                <span className="text-[var(--text-secondary)]">
                  {STREAM_LENGTH_SHORT_LABELS[member.streamLength]}
                </span>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Action buttons */}
        <ScrollReveal delay={0.45}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <GlowEffect color="#FF0000">
              <Button
                as="a"
                href={member.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="danger"
                size="lg"
                startContent={<Youtube size={20} />}
              >
                YouTubeチャンネル
              </Button>
            </GlowEffect>
            {member.twitterUrl && (
              <GlowEffect color="#1DA1F2">
                <Button
                  as="a"
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  variant="flat"
                  size="lg"
                  startContent={<Twitter size={20} />}
                >
                  Twitter
                </Button>
              </GlowEffect>
            )}
            <GlowEffect color={theme.primary}>
              <Button
                as="a"
                href={`https://hololive.hololivepro.com/talents/${resolvedParams.id}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="flat"
                size="lg"
                endContent={<ExternalLink size={16} />}
              >
                公式プロフィール
              </Button>
            </GlowEffect>
          </div>
        </ScrollReveal>

        {/* Recommendation reason */}
        <ScrollReveal delay={0.5}>
          <GlassCard className="mt-8 p-6 md:p-8" glowColor={theme.primary}>
            <h2
              className="mb-4 text-xl font-bold"
              style={{ color: theme.primary }}
            >
              推薦理由
            </h2>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              {member.recommendReason}
            </p>
          </GlassCard>
        </ScrollReveal>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Button as={Link} href={teamConfig.backUrl} variant="flat" size="lg">
            {teamConfig.backText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function MemberDetailClient(props: MemberDetailClientProps) {
  return (
    <GenerationThemeProvider generation={props.member.generation}>
      <MemberDetailContent {...props} />
    </GenerationThemeProvider>
  )
}
