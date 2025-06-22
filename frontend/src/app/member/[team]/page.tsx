'use client'

import { MemberListCard } from '@/components/member-list-card'
import { Button } from '@/components/ui'
import { Card, CardBody, Chip } from '@heroui/react'
import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  hololiveJPMembers,
  hololiveENMembers,
  hololiveIDMembers,
  devisMembers
} from '@/lib/members'

interface TeamPageProps {
  params: {
    team: string
  }
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

export default function TeamPage({ params }: TeamPageProps) {
  const teamConfig = teamConfigs[params.team as keyof typeof teamConfigs]
  
  if (!teamConfig) {
    notFound()
  }

  const { members, title, description, officialUrl, generationOrder } = teamConfig

  // 世代別にメンバーをグループ化
  const membersByGeneration = members.reduce((acc, member) => {
    const generation = member.generation
    if (!acc[generation]) {
      acc[generation] = []
    }
    acc[generation].push(member)
    return acc
  }, {} as Record<string, typeof members>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <Button
            as={Link}
            href="/member"
            variant="flat"
            startContent={<ArrowLeft size={16} />}
            className="mb-4"
          >
            メンバー一覧に戻る
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              {description}
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-lg font-semibold text-gray-700">
                {members.length} メンバー
              </span>
            </div>
          </div>
        </div>

        {/* 世代別メンバー表示 */}
        {generationOrder.map((generation) => {
          const generationMembers = membersByGeneration[generation]
          if (!generationMembers || generationMembers.length === 0) return null

          return (
            <div key={generation} className="mb-12">
              <Card className="bg-white/80 backdrop-blur-sm border-0 mb-6">
                <CardBody className="p-6">
                  <div className="flex items-center space-x-3">
                    <Chip color="primary" variant="flat" size="lg">
                      {generation}
                    </Chip>
                    <span className="text-gray-600">
                      {generationMembers.length} メンバー
                    </span>
                  </div>
                </CardBody>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {generationMembers.map((member) => (
                  <MemberListCard
                    key={member.id}
                    member={member}
                    showDetails={false}
                    teamSlug={params.team}
                  />
                ))}
              </div>
            </div>
          )
        })}

        {/* 公式サイトリンク */}
        <div className="mt-16 text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 max-w-xl mx-auto">
            <CardBody className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
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
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}