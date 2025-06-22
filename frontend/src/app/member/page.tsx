'use client'

import { Button } from '@/components/ui'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Globe, Mic, Star, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function MemberPage() {
  const branches = [
    {
      id: 'jp',
      name: 'ホロライブJP',
      description: 'ホロライブプロダクション所属の日本の才能豊かなVTuberたち',
      memberCount: '60+',
      icon: <Star className="w-8 h-8 text-blue-500" />,
      color: 'from-blue-500 to-blue-600',
      href: '/member/hololive-jp',
    },
    {
      id: 'en',
      name: 'ホロライブEN',
      description: '英語圏を中心に活動するホロライブEnglishのメンバーたち',
      memberCount: '20+',
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      color: 'from-purple-500 to-purple-600',
      href: '/member/hololive-en',
    },
    {
      id: 'id',
      name: 'ホロライブID',
      description: 'インドネシアを拠点に活動するホロライブIDのメンバーたち',
      memberCount: '9+',
      icon: <Users className="w-8 h-8 text-green-500" />,
      color: 'from-green-500 to-green-600',
      href: '/member/hololive-id',
    },
    {
      id: 'devis',
      name: 'DEV_IS',
      description:
        'ホロライブプロダクションの新プロジェクト、DEV_ISのメンバーたち',
      memberCount: '10+',
      icon: <Mic className="w-8 h-8 text-orange-500" />,
      color: 'from-orange-500 to-orange-600',
      href: '/member/devis',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ホロライブメンバー
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ホロライブプロダクション所属のVTuberメンバーを所属別に閲覧できます。
            各メンバーの詳細情報や公式チャンネルへのリンクをご確認いただけます。
          </p>
        </div>

        {/* 所属別カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-0">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${branch.color}`}
                  >
                    {branch.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {branch.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {branch.memberCount} メンバー
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {branch.description}
                </p>
                <Button
                  as={Link}
                  href={branch.href}
                  color="primary"
                  variant="flat"
                  size="lg"
                  className="w-full"
                >
                  メンバーを見る
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* 公式サイトリンク */}
        <div className="mt-16 text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 max-w-2xl mx-auto">
            <CardBody className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/hololive-logo.svg"
                  alt="ホロライブプロダクション"
                  width={64}
                  height={64}
                  className="mr-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  ホロライブプロダクション
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                公式サイトで最新情報やイベント情報をチェックしよう
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
