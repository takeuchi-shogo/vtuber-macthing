import { Button } from '@/components/ui'
import { HoloMember } from '@/types'
import { Card, CardBody, CardHeader, Chip } from '@heroui/react'
import { Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

interface MemberCardProps {
  member: HoloMember
  matchReasons: string[]
  score: number
  isMain?: boolean
}

export function MemberCard({
  member,
  matchReasons,
  score,
  isMain = false,
}: MemberCardProps) {
  const matchPercentage = Math.round(score)

  return (
    <Card className={`w-full ${isMain ? 'border-2 border-blue-500' : ''}`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {isMain && (
          <Chip color="primary" variant="flat" className="mb-2">
            おすすめ No.1
          </Chip>
        )}
        <div className="flex items-center gap-2 w-full">
          <h3 className="text-xl font-bold">{member.nameJP || member.name}</h3>
          <Chip size="sm" variant="dot" className="ml-auto">
            {matchPercentage}% マッチ
          </Chip>
        </div>
        <p className="text-sm text-gray-500">
          {member.generation} - {member.branch}
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="flex gap-4">
          <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0 relative">
            <Image
              src={member.profileImage}
              alt={member.nameJP || member.name}
              fill
              className="object-cover"
              sizes="128px"
              onError={() => {
                // フォールバック処理はNext.js Imageが自動的に処理
              }}
            />
          </div>
          <div className="flex-1">
            <p className="text-sm mb-3">{member.description}</p>
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">
                マッチした理由
              </p>
              <div className="flex flex-wrap gap-1">
                {matchReasons.map((reason, index) => (
                  <Chip key={index} size="sm" variant="flat">
                    {reason}
                  </Chip>
                ))}
              </div>
            </div>

            {member.catchphrase && (
              <p className="text-sm italic text-gray-600 mb-3">
                「{member.catchphrase}」
              </p>
            )}

            <div className="flex gap-2">
              <Button
                as="a"
                href={member.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                color="danger"
                variant="flat"
                startContent={<Youtube size={16} />}
                className="hover:scale-105 transition-transform"
              >
                YouTube
              </Button>
              {member.twitterUrl && (
                <Button
                  as="a"
                  href={member.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  color="primary"
                  variant="flat"
                  startContent={<Twitter size={16} />}
                  className="hover:scale-105 transition-transform"
                >
                  Twitter
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}
