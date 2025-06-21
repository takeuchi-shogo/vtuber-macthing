export interface HoloMember {
  id: string
  name: string
  nameJP?: string
  branch: 'JP' | 'EN' | 'ID'
  generation: string
  debut: string
  description: string

  // マッチング用属性
  contentTypes: ContentType[]
  personality: PersonalityType[]
  streamingStyle: StreamingStyle
  languages: string[]
  typicalStreamTimes: TimeSlot[]
  streamLength: 'short' | 'medium' | 'long' | 'varied'

  // 表示用情報
  profileImage: string
  channelUrl: string
  twitterUrl?: string
  catchphrase?: string

  // 推薦表示用
  recommendReason: string
  representativeClips?: string[]
}

export type ContentType =
  | 'gaming'
  | 'chatting'
  | 'singing'
  | 'asmr'
  | 'drawing'
  | 'collab'
  | 'educational'
  | 'music_creation'

export type PersonalityType =
  | 'energetic'
  | 'calm'
  | 'witty'
  | 'natural'
  | 'cool'
  | 'motherly'
  | 'mischievous'

export type StreamingStyle =
  | 'chat_interactive'
  | 'performance_focused'
  | 'laid_back'
  | 'professional'

export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'late_night'

export interface Question {
  id: string
  type: 'single' | 'multiple' | 'slider'
  title: string
  description?: string
  options?: QuestionOption[]
  maxSelections?: number
  sliderConfig?: {
    min: number
    max: number
    step: number
    labels: [string, string]
  }
}

export interface QuestionOption {
  value: string
  label: string
  description?: string
}

export interface Answer {
  questionId: string
  value: string | string[] | number
}

export interface UserAnswers {
  streamLength?: 'short' | 'medium' | 'long' | 'varied'
  viewingStyle?: string
  contentTypes: ContentType[]
  personality?: PersonalityType
  communicationStyle?: StreamingStyle
  branch?: 'JP' | 'EN' | 'ID' | 'any'
  timeSlots: TimeSlot[]
  entertainmentVsHealing?: number
  skillVsFriendliness?: number
}

export interface RecommendationResult {
  main: {
    member: HoloMember
    score: number
    matchReasons: string[]
  }
  alternatives: Array<{
    member: HoloMember
    score: number
    matchReasons: string[]
  }>
}
