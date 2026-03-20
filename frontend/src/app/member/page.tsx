'use client'

import { Button, GlassCard } from '@/components/ui'
import { GlowEffect } from '@/components/animation/glow-effect'
import { ParticleBackground } from '@/components/animation/particle-background'
import { ScrollReveal } from '@/components/animation/scroll-reveal'
import { GlitchText } from '@/components/effects/glitch-text'
import {
  StaggerContainer,
  staggerItemVariants,
} from '@/components/animation/stagger-container'
import { motion } from 'framer-motion'
import { Globe, Mic2, Star, Users } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

interface BranchInfo {
  id: string
  name: string
  description: string
  memberCount: string
  icon: ReactNode
  color: string
  href: string
}

const branches: BranchInfo[] = [
  {
    id: 'jp',
    name: 'ホロライブJP',
    description: '日本を拠点に活動する才能豊かなVTuberたち',
    memberCount: '60+',
    icon: <Star className="h-6 w-6" />,
    color: '#00B8ED',
    href: '/member/hololive-jp',
  },
  {
    id: 'en',
    name: 'ホロライブEN',
    description: '英語圏を中心にグローバルに活躍するメンバーたち',
    memberCount: '20+',
    icon: <Globe className="h-6 w-6" />,
    color: '#6C5CE7',
    href: '/member/hololive-en',
  },
  {
    id: 'id',
    name: 'ホロライブID',
    description: 'インドネシアを拠点に活動する個性派メンバーたち',
    memberCount: '9+',
    icon: <Users className="h-6 w-6" />,
    color: '#E74C3C',
    href: '/member/hololive-id',
  },
  {
    id: 'devis',
    name: 'DEV_IS',
    description: 'ホロライブの新プロジェクトから生まれたメンバーたち',
    memberCount: '10+',
    icon: <Mic2 className="h-6 w-6" />,
    color: '#A29BFE',
    href: '/member/devis',
  },
]

export default function MemberPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ヒーローエリア */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <ParticleBackground color="#00B8ED" count={20} />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <GlitchText
                as="h1"
                intensity="medium"
                className="mb-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl"
              >
                メンバー一覧
              </GlitchText>
              <p className="text-lg text-[var(--text-secondary)]">
                ホロライブプロダクション所属のVTuberを所属別に閲覧できます。
                各メンバーの詳細情報や公式チャンネルへのリンクをご確認いただけます。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ブランチカード */}
      <section className="container mx-auto px-4 pb-16">
        <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <motion.div key={branch.id} variants={staggerItemVariants}>
              <GlowEffect color={branch.color} className="h-full rounded-2xl">
                <GlassCard className="flex h-full flex-col p-6">
                  {/* アイコン + ブランチ名 */}
                  <div className="mb-4 flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: branch.color }}
                    >
                      {branch.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--text-primary)]">
                        {branch.name}
                      </h2>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {branch.memberCount} メンバー
                      </p>
                    </div>
                  </div>

                  {/* 説明 */}
                  <p className="mb-6 flex-1 leading-relaxed text-[var(--text-secondary)]">
                    {branch.description}
                  </p>

                  {/* リンクボタン */}
                  <Button
                    as={Link}
                    href={branch.href}
                    variant="flat"
                    color="primary"
                    size="lg"
                    className="w-full"
                    glowColor={branch.color}
                  >
                    メンバーを見る →
                  </Button>
                </GlassCard>
              </GlowEffect>
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* 公式リンクセクション */}
      <section className="container mx-auto px-4 pb-20">
        <ScrollReveal>
          <GlassCard className="mx-auto max-w-2xl p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
              ホロライブプロダクション
            </h3>
            <p className="mb-6 text-[var(--text-secondary)]">
              公式サイトで最新情報やイベント情報をチェックしよう
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                as="a"
                href="https://hololive.hololivepro.com/"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                size="lg"
              >
                公式サイト
              </Button>
              <Button
                as="a"
                href="https://www.youtube.com/@hololive"
                target="_blank"
                rel="noopener noreferrer"
                color="danger"
                variant="flat"
                size="lg"
              >
                公式YouTube
              </Button>
              <Button
                as="a"
                href="https://twitter.com/hololivetv"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                variant="flat"
                size="lg"
              >
                公式Twitter
              </Button>
            </div>
          </GlassCard>
        </ScrollReveal>
      </section>
    </div>
  )
}
