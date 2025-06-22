'use client'

import { MemberListCard } from '@/components/member-list-card'
import { Button } from '@/components/ui'
import { Card, CardBody, Chip } from '@heroui/react'
import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'
import { HoloMember } from '@/types'

interface MemberListClientProps {
  members: HoloMember[]
  title: string
  description: string
  backUrl: string
  backText: string
  officialLinks: {
    memberListUrl?: string
    youtubeUrl?: string
    memberListText?: string
    youtubeText?: string
  }
}

export function MemberListClient({
  members,
  title,
  description,
  backUrl,
  backText,
  officialLinks
}: MemberListClientProps) {
  // 世代別にメンバーをグループ化
  const membersByGeneration = members.reduce((acc, member) => {
    const generation = member.generation
    if (!acc[generation]) {
      acc[generation] = []
    }
    acc[generation].push(member)
    return acc
  }, {} as Record<string, typeof members>)

  // 世代の表示順序を定義
  const generationOrder = [
    '0期生',
    '1期生',
    '2期生',
    'ゲーマーズ',
    '3期生',
    '4期生',
    '5期生',
    'holoX',
    'Myth',
    'Promise',
    'Advent',
    'Justice',
    'Gen 1',
    'Gen 2',
    'Gen 3',
    'ReGLOSS',
    'FLOW GLOW',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="mb-8">
          <Button
            as={Link}
            href={backUrl}
            variant="flat"
            startContent={<ArrowLeft size={16} />}
            className="mb-4"
          >
            {backText}
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
                {officialLinks.memberListUrl && (
                  <Button
                    as="a"
                    href={officialLinks.memberListUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="flat"
                  >
                    {officialLinks.memberListText || '公式メンバー一覧'}
                  </Button>
                )}
                {officialLinks.youtubeUrl && (
                  <Button
                    as="a"
                    href={officialLinks.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="danger"
                    variant="flat"
                  >
                    {officialLinks.youtubeText || '公式YouTube'}
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}