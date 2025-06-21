import { HoloMember, RecommendationResult, UserAnswers } from '@/types'
import { holoMembers } from './members'

interface MemberScore {
  member: HoloMember
  score: number
  matchReasons: string[]
}

export function calculateRecommendation(
  answers: UserAnswers
): RecommendationResult {
  const memberScores: MemberScore[] = holoMembers.map((member) => {
    let score = 0
    const matchReasons: string[] = []

    // コンテンツタイプマッチング（重み: 30%）
    const matchingContentTypes = answers.contentTypes.filter((ct) =>
      member.contentTypes.includes(ct)
    )
    if (matchingContentTypes.length > 0) {
      score += 30 * (matchingContentTypes.length / answers.contentTypes.length)

      const contentLabels = {
        gaming: 'ゲーム実況',
        chatting: '雑談配信',
        singing: '歌配信',
        asmr: 'ASMR',
        drawing: 'お絵描き配信',
        collab: 'コラボ配信',
        educational: '教育系配信',
        music_creation: '音楽制作',
      }

      const matchedContent = matchingContentTypes
        .map((ct) => contentLabels[ct])
        .join('・')
      matchReasons.push(`${matchedContent}が得意`)
    }

    // 性格マッチング（重み: 25%）
    if (
      answers.personality &&
      member.personality.includes(answers.personality)
    ) {
      score += 25

      const personalityLabels = {
        energetic: '元気いっぱい',
        calm: '落ち着いた癒し系',
        witty: 'ツッコミ上手',
        natural: '天然キャラ',
        cool: 'クールな大人',
        motherly: '母性的',
        mischievous: 'いたずら好き',
      }

      matchReasons.push(`${personalityLabels[answers.personality]}な性格`)
    }

    // 言語・ブランチマッチング（重み: 20%）
    if (answers.branch === 'any' || member.branch === answers.branch) {
      score += 20
      if (answers.branch !== 'any') {
        matchReasons.push(`${member.branch}所属`)
      }
    }

    // 時間帯マッチング（重み: 15%）
    const matchingTimeSlots = answers.timeSlots.filter((ts) =>
      member.typicalStreamTimes.includes(ts)
    )
    if (matchingTimeSlots.length > 0) {
      score += 15 * (matchingTimeSlots.length / answers.timeSlots.length)

      const timeLabels = {
        morning: '朝',
        afternoon: '昼',
        evening: '夜',
        late_night: '深夜',
      }

      const matchedTimes = matchingTimeSlots
        .map((ts) => timeLabels[ts])
        .join('・')
      matchReasons.push(`${matchedTimes}に配信が多い`)
    }

    // 配信スタイルマッチング（重み: 10%）
    if (
      answers.communicationStyle &&
      member.streamingStyle === answers.communicationStyle
    ) {
      score += 10

      const styleLabels = {
        chat_interactive: 'リスナーとの交流重視',
        performance_focused: 'パフォーマンス重視',
        laid_back: 'まったりした配信',
        professional: 'プロフェッショナル',
      }

      matchReasons.push(styleLabels[answers.communicationStyle])
    }

    // 配信の長さマッチング（ボーナス: 5%）
    if (
      answers.streamLength &&
      (answers.streamLength === 'varied' ||
        member.streamLength === answers.streamLength)
    ) {
      score += 5
      if (answers.streamLength !== 'varied') {
        const lengthLabels = {
          short: '短時間配信',
          medium: '中時間配信',
          long: '長時間配信',
        }
        matchReasons.push(lengthLabels[answers.streamLength])
      }
    }

    // エンタメ vs 癒しの傾向（ボーナス: 5%）
    if (answers.entertainmentVsHealing !== undefined) {
      const memberEntertainmentScore = getMemberEntertainmentScore(member)
      const difference = Math.abs(
        answers.entertainmentVsHealing - memberEntertainmentScore
      )
      score += 5 * (1 - difference / 4)
    }

    // スキル vs 親しみやすさの傾向（ボーナス: 5%）
    if (answers.skillVsFriendliness !== undefined) {
      const memberSkillScore = getMemberSkillScore(member)
      const difference = Math.abs(
        answers.skillVsFriendliness - memberSkillScore
      )
      score += 5 * (1 - difference / 4)
    }

    return { member, score, matchReasons }
  })

  // スコア順ソート
  memberScores.sort((a, b) => b.score - a.score)

  // 同じスコアの場合はランダムに並び替え
  const sortedScores = shuffleSameScores(memberScores)

  return {
    main: sortedScores[0],
    alternatives: sortedScores.slice(1, 3),
  }
}

function getMemberEntertainmentScore(member: HoloMember): number {
  // エンタメ寄り（1）から癒し寄り（5）のスコアを計算
  const entertainmentPersonalities = ['energetic', 'witty', 'mischievous']
  const healingPersonalities = ['calm', 'motherly']

  let score = 3 // デフォルトは中間

  if (member.personality.some((p) => entertainmentPersonalities.includes(p))) {
    score -= 1
  }
  if (member.personality.some((p) => healingPersonalities.includes(p))) {
    score += 1
  }
  if (member.contentTypes.includes('asmr')) {
    score += 1
  }
  if (
    member.contentTypes.includes('collab') ||
    member.contentTypes.includes('gaming')
  ) {
    score -= 0.5
  }

  return Math.max(1, Math.min(5, score))
}

function getMemberSkillScore(member: HoloMember): number {
  // スキル重視（1）から親しみやすさ重視（5）のスコアを計算
  const skillfulStyles = ['performance_focused', 'professional']
  const friendlyStyles = ['chat_interactive', 'laid_back']

  let score = 3 // デフォルトは中間

  if (skillfulStyles.includes(member.streamingStyle)) {
    score -= 1
  }
  if (friendlyStyles.includes(member.streamingStyle)) {
    score += 1
  }
  if (
    member.personality.includes('natural') ||
    member.personality.includes('motherly')
  ) {
    score += 0.5
  }
  if (
    member.personality.includes('cool') ||
    member.personality.includes('witty')
  ) {
    score -= 0.5
  }

  return Math.max(1, Math.min(5, score))
}

function shuffleSameScores(scores: MemberScore[]): MemberScore[] {
  const result: MemberScore[] = []
  let i = 0

  while (i < scores.length) {
    const currentScore = scores[i].score
    const sameScoreGroup = []

    // 同じスコアのメンバーをグループ化
    while (i < scores.length && scores[i].score === currentScore) {
      sameScoreGroup.push(scores[i])
      i++
    }

    // グループ内でシャッフル
    for (let j = sameScoreGroup.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1))
      ;[sameScoreGroup[j], sameScoreGroup[k]] = [
        sameScoreGroup[k],
        sameScoreGroup[j],
      ]
    }

    result.push(...sameScoreGroup)
  }

  return result
}
