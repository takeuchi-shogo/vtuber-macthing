'use client'

import { MemberListCard } from '@/components/member-list-card'
import { Button } from '@/components/ui'
import { HoloMember } from '@/types'
import { Card, CardBody, Chip } from '@heroui/react'
import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'

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

export default function TeamPageClient({ teamConfig, resolvedParams }: TeamPageClientProps) {
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
                    teamSlug={resolvedParams.team}
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