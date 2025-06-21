'use client'

import { Card, CardBody } from '@heroui/react'
import { Button } from '@/components/ui'
import { Heart, Play, Sparkles, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleStartQuiz = () => {
    router.push('/quiz')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ホロライブVtuber診断
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            簡単な質問に答えて、あなたにぴったりのホロライブメンバーを見つけよう！
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Button
              color="primary"
              size="lg"
              onPress={handleStartQuiz}
              startContent={<Play size={20} />}
              className="font-semibold px-8 py-6 text-lg"
            >
              診断を始める
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">簡単な質問</h3>
                <p className="text-gray-600 text-sm">
                  9つの質問に答えるだけで、あなたの好みを分析します
                </p>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">30名以上対応</h3>
                <p className="text-gray-600 text-sm">
                  ホロライブJPの主要メンバーから最適な推しを提案
                </p>
              </CardBody>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardBody className="text-center p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">マッチング精度</h3>
                <p className="text-gray-600 text-sm">
                  配信スタイルや性格など多角的に分析してマッチング
                </p>
              </CardBody>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">診断の流れ</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  1
                </span>
                <div>
                  <h3 className="font-semibold">配信の好みを選択</h3>
                  <p className="text-gray-600 text-sm">
                    配信時間、視聴スタイル、好きなコンテンツなどを回答
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  2
                </span>
                <div>
                  <h3 className="font-semibold">性格・タイプを選択</h3>
                  <p className="text-gray-600 text-sm">
                    好みの性格タイプやコミュニケーションスタイルを選択
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                  3
                </span>
                <div>
                  <h3 className="font-semibold">結果を確認</h3>
                  <p className="text-gray-600 text-sm">
                    あなたにぴったりのホロライブメンバーを3名提案します
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="text-center">
            <Button
              color="primary"
              size="lg"
              variant="shadow"
              onPress={handleStartQuiz}
              startContent={<Sparkles size={20} />}
              className="font-semibold px-8 py-6 text-lg hover:scale-105 transition-transform"
            >
              今すぐ診断を始める
            </Button>
          </div>
        </main>

        <footer className="text-center py-8 mt-16 text-gray-500 text-sm">
          <p>
            ※この診断は非公式のファンメイドコンテンツです
            <br />
            ホロライブプロダクション所属タレントの情報は2024年時点のものです
          </p>
        </footer>
      </div>
    </div>
  )
}
