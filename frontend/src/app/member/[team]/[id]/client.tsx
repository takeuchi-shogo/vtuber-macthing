'use client'

import { Button } from '@/components/ui'
import { HoloMember } from '@/types'
import { Card, CardBody, CardHeader, Chip } from '@heroui/react'
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Globe,
  Twitter,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

export default function MemberDetailClient({ member, teamConfig, resolvedParams }: MemberDetailClientProps) {
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

  const contentTypeLabels: Record<string, string> = {
    gaming: 'ゲーム',
    chatting: '雑談',
    singing: '歌',
    asmr: 'ASMR',
    drawing: 'お絵描き',
    collab: 'コラボ',
    educational: '教育',
    music_creation: '音楽制作',
  }

  const personalityLabels: Record<string, string> = {
    energetic: '元気',
    calm: '癒し系',
    witty: 'ツッコミ上手',
    natural: '天然',
    cool: 'クール',
    motherly: '母性的',
    mischievous: 'いたずら好き',
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ナビゲーション */}
        <Button
          as={Link}
          href={teamConfig.backUrl}
          variant="flat"
          startContent={<ArrowLeft size={16} />}
          className="mb-6"
        >
          {teamConfig.backText}
        </Button>

        <div className="max-w-4xl mx-auto">
          {/* メインプロフィール */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 mb-8">
            <CardBody className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* プロフィール画像 */}
                <div className="flex-shrink-0">
                  <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={member.profileImage}
                      alt={`${member.nameJP || member.name}のアイコン`}
                      fill
                      className="object-cover"
                      sizes="192px"
                      priority
                    />
                  </div>
                </div>

                {/* 基本情報 */}
                <div className="flex-1 text-center lg:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {member.nameJP || member.name}
                  </h1>
                  {member.nameJP && (
                    <p className="text-lg text-gray-600 mb-4">{member.name}</p>
                  )}

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                    <Chip
                      color={branchColors[member.branch]}
                      variant="flat"
                      size="lg"
                    >
                      {branchLabels[member.branch]}
                    </Chip>
                    <Chip color="default" variant="flat" size="lg">
                      {member.generation}
                    </Chip>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {member.catchphrase && (
                    <blockquote className="text-lg italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                      「{member.catchphrase}」
                    </blockquote>
                  )}

                  {/* アクションボタン */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      as="a"
                      href={member.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="danger"
                      size="lg"
                      startContent={<Youtube size={20} />}
                      className="flex-1 sm:flex-none"
                    >
                      YouTubeチャンネル
                    </Button>
                    {member.twitterUrl && (
                      <Button
                        as="a"
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary"
                        variant="flat"
                        size="lg"
                        startContent={<Twitter size={20} />}
                        className="flex-1 sm:flex-none"
                      >
                        Twitter
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* 詳細情報 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 活動情報 */}
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">活動情報</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">デビュー日</p>
                    <p className="font-semibold">
                      {new Date(member.debut).toLocaleDateString('ja-JP')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">対応言語</p>
                    <p className="font-semibold">
                      {member.languages.join(', ')}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">配信の長さ</p>
                  <Chip variant="flat" color="default">
                    {member.streamLength === 'short' && '短時間'}
                    {member.streamLength === 'medium' && '中時間'}
                    {member.streamLength === 'long' && '長時間'}
                    {member.streamLength === 'varied' && '様々'}
                  </Chip>
                </div>
              </CardBody>
            </Card>

            {/* コンテンツ・性格 */}
            <Card className="bg-white/80 backdrop-blur-sm border-0">
              <CardHeader>
                <h2 className="text-xl font-bold text-gray-900">特徴</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">主なコンテンツ</p>
                  <div className="flex flex-wrap gap-2">
                    {member.contentTypes.map((type) => (
                      <Chip key={type} variant="flat" size="sm">
                        {contentTypeLabels[type] || type}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">性格特性</p>
                  <div className="flex flex-wrap gap-2">
                    {member.personality.map((trait) => (
                      <Chip
                        key={trait}
                        variant="flat"
                        size="sm"
                        color="primary"
                      >
                        {personalityLabels[trait] || trait}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">配信スタイル</p>
                  <Chip variant="flat" color="secondary">
                    {member.streamingStyle === 'chat_interactive' &&
                      'チャット重視'}
                    {member.streamingStyle === 'performance_focused' &&
                      'パフォーマンス重視'}
                    {member.streamingStyle === 'laid_back' && 'まったり'}
                    {member.streamingStyle === 'professional' &&
                      'プロフェッショナル'}
                  </Chip>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* 推薦理由 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 mt-6">
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">推薦理由</h2>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 leading-relaxed">
                {member.recommendReason}
              </p>
            </CardBody>
          </Card>

          {/* 公式情報へのリンク */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 mt-6">
            <CardBody className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  公式情報
                </h3>
                <Button
                  as="a"
                  href={`https://hololive.hololivepro.com/talents/${resolvedParams.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="flat"
                  endContent={<ExternalLink size={16} />}
                >
                  公式プロフィール
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}