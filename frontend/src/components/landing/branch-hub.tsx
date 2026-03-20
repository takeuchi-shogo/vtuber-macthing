'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui'
import { GlowEffect } from '@/components/animation/glow-effect'
import {
  StaggerContainer,
  staggerItemVariants,
} from '@/components/animation/stagger-container'
import {
  hololiveJPMembers,
  hololiveENMembers,
  hololiveIDMembers,
  devisMembers,
} from '@/lib/members'

interface BranchInfo {
  name: string
  color: string
  count: number
  description: string
  href: string
}

const branches: BranchInfo[] = [
  {
    name: 'ホロライブJP',
    color: '#00B8ED',
    count: hololiveJPMembers.length,
    description:
      '日本を拠点に活動する最大規模のブランチ。0期生からholoXまで、個性豊かなメンバーが揃う。',
    href: '/member/hololive-jp',
  },
  {
    name: 'ホロライブEN',
    color: '#6C5CE7',
    count: hololiveENMembers.length,
    description:
      '英語圏を中心に活動するグローバルブランチ。MythからJusticeまで幅広い魅力を発信。',
    href: '/member/hololive-en',
  },
  {
    name: 'ホロライブID',
    color: '#E74C3C',
    count: hololiveIDMembers.length,
    description:
      'インドネシアを拠点に多言語で配信。親しみやすさと高いエンタメ性が魅力。',
    href: '/member/hololive-id',
  },
  {
    name: 'DEV_IS',
    color: '#A29BFE',
    count: devisMembers.length,
    description:
      '新たな可能性を追求するブランチ。ReGLOSSとFLOW GLOWの2ユニットが活動中。',
    href: '/member/devis',
  },
]

export function BranchHub() {
  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2">
      {branches.map((branch) => (
        <motion.div key={branch.name} variants={staggerItemVariants}>
          <GlowEffect color={branch.color}>
            <Link href={branch.href} className="block">
              <GlassCard
                glowColor={branch.color}
                className="p-6 transition-transform duration-300 hover:scale-[1.02]"
              >
                <div
                  className="mb-3 inline-block rounded-lg px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: branch.color }}
                >
                  {branch.count}名
                </div>
                <h3 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
                  {branch.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {branch.description}
                </p>
                <span
                  className="text-sm font-semibold"
                  style={{ color: branch.color }}
                >
                  メンバーを見る &rarr;
                </span>
              </GlassCard>
            </Link>
          </GlowEffect>
        </motion.div>
      ))}
    </StaggerContainer>
  )
}
