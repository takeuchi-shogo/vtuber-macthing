import { calculateRecommendation } from '@/lib/recommendation'
import { UserAnswers } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userAnswers: UserAnswers = body.answers

    if (!userAnswers || !userAnswers.contentTypes || !userAnswers.timeSlots) {
      return NextResponse.json(
        { error: '回答データが不完全です' },
        { status: 400 }
      )
    }

    const result = calculateRecommendation(userAnswers)

    return NextResponse.json({
      success: true,
      result,
    })
  } catch (error) {
    console.error('Recommendation API error:', error)
    return NextResponse.json(
      { error: '推薦の計算中にエラーが発生しました' },
      { status: 500 }
    )
  }
}
