'use client'

import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui'
import {
  StaggerContainer,
  staggerItemVariants,
} from '@/components/animation/stagger-container'
import {
  generationThemes,
  generationToThemeKey,
} from '@/components/theme/theme-config'
import {
  gen0Members,
  gen1Members,
  gen2Members,
  gamersMembers,
  gen3Members,
  gen4Members,
  gen5Members,
  holoXMembers,
} from '@/lib/members/hololive'
import {
  mythMembers,
  promiseMembers,
  adventMembers,
  justiceMembers,
} from '@/lib/members/hololive/en'
import { hololiveIDMembers } from '@/lib/members/hololive/id'
import { reglossMembers, flowglowMembers } from '@/lib/members/hololive/devis'
import type { HoloMember } from '@/types'

interface GenerationData {
  name: string
  members: HoloMember[]
  description: string
}

const generations: GenerationData[] = [
  {
    name: '0期生',
    members: gen0Members,
    description: 'ホロライブの始まりを創った先駆者たち',
  },
  {
    name: '1期生',
    members: gen1Members,
    description: '初期を支えた個性豊かなメンバー',
  },
  {
    name: '2期生',
    members: gen2Members,
    description: '多彩なキャラクターが揃う世代',
  },
  {
    name: 'ゲーマーズ',
    members: gamersMembers,
    description: 'ゲーム好きが集まったユニット',
  },
  {
    name: '3期生',
    members: gen3Members,
    description: 'ホロライブの人気を爆発させた世代',
  },
  {
    name: '4期生',
    members: gen4Members,
    description: '実力派が揃った黄金世代',
  },
  {
    name: '5期生',
    members: gen5Members,
    description: '多様な才能を持つバランス型世代',
  },
  {
    name: 'holoX',
    members: holoXMembers,
    description: '秘密結社をテーマにしたユニット',
  },
  {
    name: 'Myth',
    members: mythMembers,
    description: 'ホロライブEN初の伝説的世代',
  },
  {
    name: 'Promise',
    members: promiseMembers,
    description: '多彩な才能が輝くEN第2世代',
  },
  {
    name: 'Advent',
    members: adventMembers,
    description: '新たな冒険を切り開くEN第3世代',
  },
  {
    name: 'Justice',
    members: justiceMembers,
    description: '正義の名のもとに集いしEN第4世代',
  },
  {
    name: 'ID',
    members: hololiveIDMembers,
    description: 'インドネシアから世界へ発信',
  },
  {
    name: 'ReGLOSS',
    members: reglossMembers,
    description: 'DEV_IS初のアイドルグループ',
  },
  {
    name: 'FLOW GLOW',
    members: flowglowMembers,
    description: 'DEV_IS第2のユニット',
  },
]

export function GenerationShowcase() {
  return (
    <StaggerContainer className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-thin">
      {generations.map((gen) => {
        const themeKey = generationToThemeKey[gen.name] ?? 'gen0'
        const theme = generationThemes[themeKey]
        const first3 = gen.members.slice(0, 3)

        return (
          <motion.div
            key={gen.name}
            variants={staggerItemVariants}
            className="snap-start"
          >
            <GlassCard
              glowColor={theme?.primary}
              className="group relative w-64 shrink-0 cursor-default p-5 transition-all duration-300 hover:scale-[1.02]"
            >
              <h3 className="mb-1 font-[var(--font-zen-kaku)] text-lg font-bold text-[var(--text-primary)]">
                {gen.name}
              </h3>
              <p className="mb-2 text-sm text-[var(--text-secondary)]">
                {gen.members.length}名
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                {gen.description}
              </p>

              {/* Hover overlay with member names */}
              <div className="mt-3 space-y-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {first3.map((m) => (
                  <p
                    key={m.id}
                    className="text-xs text-[var(--text-secondary)]"
                  >
                    {m.nameJP ?? m.name}
                  </p>
                ))}
                {gen.members.length > 3 && (
                  <p className="text-xs text-[var(--text-secondary)]">
                    ...ほか{gen.members.length - 3}名
                  </p>
                )}
              </div>
            </GlassCard>
          </motion.div>
        )
      })}
    </StaggerContainer>
  )
}
