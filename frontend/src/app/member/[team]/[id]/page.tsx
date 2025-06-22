import { hololiveMembers } from '@/lib/members'
import { notFound } from 'next/navigation'
import MemberDetailClient from './client'

interface MemberDetailPageProps {
  params: Promise<{
    team: string
    id: string
  }>
}

// チーム設定
const teamConfigs = {
  'hololive-jp': {
    title: 'ホロライブJP',
    backUrl: '/member/hololive-jp',
    backText: 'ホロライブJPに戻る',
  },
  'hololive-en': {
    title: 'ホロライブEN',
    backUrl: '/member/hololive-en',
    backText: 'ホロライブENに戻る',
  },
  'hololive-id': {
    title: 'ホロライブID',
    backUrl: '/member/hololive-id',
    backText: 'ホロライブIDに戻る',
  },
  'devis': {
    title: 'DEV_IS',
    backUrl: '/member/devis',
    backText: 'DEV_ISに戻る',
  },
}

export default async function MemberDetailPage({ params }: MemberDetailPageProps) {
  const resolvedParams = await params
  const member = hololiveMembers.find((m) => m.id === resolvedParams.id)
  const teamConfig = teamConfigs[resolvedParams.team as keyof typeof teamConfigs]

  if (!member || !teamConfig) {
    notFound()
  }

  return (
    <MemberDetailClient
      member={member}
      teamConfig={teamConfig}
      resolvedParams={resolvedParams}
    />
  )
}