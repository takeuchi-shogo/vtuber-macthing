'use client'

import { Button } from '@/components/ui'
import { HoloMember } from '@/types'
import { Card, CardBody, Chip } from '@heroui/react'
import { Calendar, ExternalLink, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface MemberListCardProps {
  member: HoloMember
  showDetails?: boolean
  teamSlug?: string
}

export function MemberListCard({
  member,
  showDetails = false,
  teamSlug,
}: MemberListCardProps) {
  const branchColors = {
    JP: 'primary',
    EN: 'secondary',
    ID: 'success',
  } as const

  const branchLabels = {
    JP: 'ホロライブJP',
    EN: 'ホロライブEN',
    ID: 'ホロライブID',
  }

  // チームスラグを自動決定
  const getTeamSlug = () => {
    if (teamSlug) return teamSlug
    
    // メンバーの所属から自動判定
    if (member.branch === 'JP') return 'hololive-jp'
    if (member.branch === 'EN') return 'hololive-en'
    if (member.branch === 'ID') return 'hololive-id'
    
    // DEV_ISの場合は世代から判定
    if (member.generation === 'ReGLOSS' || member.generation === 'FLOW GLOW') {
      return 'devis'
    }
    
    return 'hololive-jp' // デフォルト
  }

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardBody className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* メンバー画像 */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
            <Image
              src={member.profileImage}
              alt={`${member.name}のアイコン`}
              fill
              className="object-cover"
              sizes="96px"
              onError={(e) => {
                // フォールバック画像
                const target = e.target as HTMLImageElement
                target.src = '/images/fallback-avatar.png'
              }}
            />
          </div>

          {/* 基本情報 */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900">{member.nameJP}</h3>
            <p className="text-sm text-gray-600">{member.name}</p>

            <div className="flex flex-wrap gap-2 justify-center">
              <Chip
                color={branchColors[member.branch]}
                size="sm"
                variant="flat"
              >
                {branchLabels[member.branch]}
              </Chip>
              <Chip color="default" size="sm" variant="flat">
                {member.generation}
              </Chip>
            </div>
          </div>

          {/* 説明文 */}
          <p className="text-sm text-gray-600 line-clamp-3">
            {member.description}
          </p>

          {/* 詳細表示時の追加情報 */}
          {showDetails && (
            <div className="w-full space-y-4 pt-4 border-t border-gray-100">
              {/* デビュー日 */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>
                  デビュー: {new Date(member.debut).toLocaleDateString('ja-JP')}
                </span>
              </div>

              {/* 言語 */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Globe size={16} />
                <span>対応言語: {member.languages.join(', ')}</span>
              </div>

              {/* コンテンツタイプ */}
              <div className="flex flex-wrap gap-1 justify-center">
                {member.contentTypes.slice(0, 3).map((type) => (
                  <Chip key={type} size="sm" variant="bordered">
                    {getContentTypeLabel(type)}
                  </Chip>
                ))}
                {member.contentTypes.length > 3 && (
                  <Chip size="sm" variant="bordered">
                    +{member.contentTypes.length - 3}
                  </Chip>
                )}
              </div>

              {/* 推薦理由 */}
              <p className="text-xs text-gray-500 italic">
                {member.recommendReason}
              </p>
            </div>
          )}

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-2 w-full pt-4">
            <Button
              as={Link}
              href={`/member/${getTeamSlug()}/${member.id}`}
              variant="flat"
              size="sm"
              className="flex-1"
            >
              詳細を見る
            </Button>
            <Button
              as="a"
              href={member.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="sm"
              endContent={<ExternalLink size={16} />}
              className="flex-1"
            >
              チャンネル
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

function getContentTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    gaming: 'ゲーム',
    chatting: '雑談',
    singing: '歌',
    asmr: 'ASMR',
    drawing: 'お絵描き',
    collab: 'コラボ',
    educational: '教育',
    music_creation: '音楽制作',
  }
  return labels[type] || type
}
