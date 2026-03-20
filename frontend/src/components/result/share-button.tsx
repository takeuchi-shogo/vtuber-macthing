'use client'

import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui'

interface ShareButtonProps {
  memberName: string
  score: number
}

export function ShareButton({ memberName, score }: ShareButtonProps) {
  const handleShare = () => {
    const text = `ホロライブVtuber診断の結果、私におすすめは「${memberName}」でした！（マッチ率${score}%）`
    const url = window.location.origin
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(shareUrl, '_blank')
  }

  return (
    <Button
      color="secondary"
      onPress={handleShare}
      startContent={<Share2 size={16} />}
    >
      結果をシェア
    </Button>
  )
}
