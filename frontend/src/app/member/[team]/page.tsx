import { 
  hololiveJPMembers,
  hololiveENMembers,
  hololiveIDMembers,
  devisMembers
} from '@/lib/members'
import { notFound } from 'next/navigation'
import TeamPageClient from './client'

interface TeamPageProps {
  params: Promise<{
    team: string
  }>
}

// チーム設定
const teamConfigs = {
  'hololive-jp': {
    members: hololiveJPMembers,
    title: 'ホロライブJP',
    description: 'ホロライブプロダクション所属の日本のVTuberメンバーたちです。各世代の個性豊かなメンバーをご覧ください。',
    officialUrl: 'https://hololive.hololivepro.com/talents?group=hololive',
    generationOrder: ['0期生', '1期生', '2期生', 'ゲーマーズ', '3期生', '4期生', '5期生', 'holoX'],
  },
  'hololive-en': {
    members: hololiveENMembers,
    title: 'ホロライブEN',
    description: '英語圏を中心に活動するホロライブEnglishのメンバーたちです。世界中のファンに愛される才能豊かなメンバーをご覧ください。',
    officialUrl: 'https://hololive.hololivepro.com/talents?group=english',
    generationOrder: ['Myth', 'Promise', 'Advent', 'Justice'],
  },
  'hololive-id': {
    members: hololiveIDMembers,
    title: 'ホロライブID',
    description: 'インドネシアを拠点に活動するホロライブIDのメンバーたちです。東南アジアの文化と魅力を世界に発信するメンバーをご覧ください。',
    officialUrl: 'https://hololive.hololivepro.com/talents?group=indonesia',
    generationOrder: ['Gen 1', 'Gen 2', 'Gen 3'],
  },
  'devis': {
    members: devisMembers,
    title: 'DEV_IS',
    description: 'ホロライブプロダクションの新プロジェクト、DEV_ISのメンバーたちです。新しい可能性を追求する次世代のメンバーをご覧ください。',
    officialUrl: 'https://hololive.hololivepro.com/talents?group=devis',
    generationOrder: ['ReGLOSS', 'FLOW GLOW'],
  },
}

export default async function TeamPage({ params }: TeamPageProps) {
  const resolvedParams = await params
  const teamConfig = teamConfigs[resolvedParams.team as keyof typeof teamConfigs]
  
  if (!teamConfig) {
    notFound()
  }

  return (
    <TeamPageClient
      teamConfig={teamConfig}
      resolvedParams={resolvedParams}
    />
  )
}