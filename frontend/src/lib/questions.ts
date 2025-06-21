import { Question } from '@/types'

export const questions: Question[] = [
  {
    id: 'stream_length',
    type: 'single',
    title: '配信の長さはどれくらいが好みですか？',
    description: '普段視聴する配信の長さを教えてください',
    options: [
      {
        value: 'short',
        label: '短時間（30分-1時間）',
        description: 'サクッと楽しめる',
      },
      {
        value: 'medium',
        label: '中時間（1-2時間）',
        description: 'じっくり楽しめる',
      },
      {
        value: 'long',
        label: '長時間（2時間以上）',
        description: 'まったり楽しめる',
      },
      {
        value: 'varied',
        label: '長さは気にしない',
        description: 'コンテンツ重視',
      },
    ],
  },
  {
    id: 'viewing_style',
    type: 'single',
    title: 'どのような視聴スタイルですか？',
    description: '配信の楽しみ方を教えてください',
    options: [
      {
        value: 'live',
        label: 'リアルタイムでライブ視聴派',
        description: 'チャットで参加したい',
      },
      {
        value: 'archive',
        label: 'アーカイブでマイペース視聴派',
        description: '自分の時間で楽しみたい',
      },
      {
        value: 'clips',
        label: '切り抜きでハイライト視聴派',
        description: '面白い部分だけ楽しみたい',
      },
      {
        value: 'all',
        label: 'どれでも楽しめる',
        description: '状況に応じて変える',
      },
    ],
  },
  {
    id: 'content_types',
    type: 'multiple',
    title: '好きなコンテンツを選んでください',
    description: '最大3つまで選択可能です',
    maxSelections: 3,
    options: [
      {
        value: 'gaming',
        label: 'ゲーム実況',
        description: 'アクション・RPGなど',
      },
      {
        value: 'chatting',
        label: '雑談・フリートーク',
        description: '日常会話や相談など',
      },
      {
        value: 'singing',
        label: '歌配信・歌ってみた',
        description: 'カラオケやオリジナル曲',
      },
      {
        value: 'asmr',
        label: 'ASMR・癒し系',
        description: '囁き声や環境音',
      },
      {
        value: 'drawing',
        label: 'お絵描き・創作活動',
        description: 'イラストやデザイン',
      },
      {
        value: 'collab',
        label: 'コラボ・大型企画',
        description: '複数人での配信',
      },
      {
        value: 'educational',
        label: '学習・教育系',
        description: '知識や技術の共有',
      },
    ],
  },
  {
    id: 'personality',
    type: 'single',
    title: '好みの性格タイプは？',
    description: '推しに求める性格を教えてください',
    options: [
      {
        value: 'energetic',
        label: '元気で明るいムードメーカー',
        description: 'テンション高めで楽しい',
      },
      {
        value: 'calm',
        label: '落ち着いて癒し系',
        description: 'まったりとした雰囲気',
      },
      {
        value: 'witty',
        label: 'ツッコミ上手でテンポ良い',
        description: '頭の回転が速い',
      },
      {
        value: 'natural',
        label: '天然でほんわか',
        description: '予測不能な可愛さ',
      },
      {
        value: 'cool',
        label: 'クールで大人っぽい',
        description: '落ち着いた魅力',
      },
    ],
  },
  {
    id: 'communication_style',
    type: 'single',
    title: 'リスナーとのコミュニケーションスタイルは？',
    description: '配信者との距離感の好みを教えてください',
    options: [
      {
        value: 'chat_interactive',
        label: 'チャットをよく読んでくれる',
        description: '双方向のやり取りが多い',
      },
      {
        value: 'performance_focused',
        label: 'パフォーマンス重視',
        description: 'コンテンツに集中',
      },
      {
        value: 'laid_back',
        label: '適度な距離感',
        description: 'バランスが良い',
      },
      {
        value: 'professional',
        label: 'プロフェッショナル',
        description: '安定感のある配信',
      },
    ],
  },
  {
    id: 'language_branch',
    type: 'single',
    title: '言語・地域の希望は？',
    description: '配信の言語や所属ブランチの希望',
    options: [
      {
        value: 'JP',
        label: '日本語のみ（ホロライブJP）',
        description: '日本語配信を楽しみたい',
      },
      {
        value: 'EN',
        label: '英語メイン（ホロライブEN）',
        description: '英語配信を楽しみたい',
      },
      {
        value: 'ID',
        label: '多言語対応（ID含む）',
        description: '様々な言語を楽しみたい',
      },
      {
        value: 'any',
        label: '言語は問わない',
        description: 'どの言語でもOK',
      },
    ],
  },
  {
    id: 'time_slots',
    type: 'multiple',
    title: '主な視聴時間帯は？',
    description: '複数選択可能です',
    options: [
      {
        value: 'morning',
        label: '朝（6-12時）',
        description: '朝活や通勤時間',
      },
      {
        value: 'afternoon',
        label: '昼（12-18時）',
        description: '昼休みや午後',
      },
      {
        value: 'evening',
        label: '夜（18-24時）',
        description: 'ゴールデンタイム',
      },
      {
        value: 'late_night',
        label: '深夜（24-6時）',
        description: '夜更かし配信',
      },
    ],
  },
  {
    id: 'entertainment_vs_healing',
    type: 'slider',
    title: '配信に求めるものは？',
    description: 'スライダーで選択してください',
    sliderConfig: {
      min: 1,
      max: 5,
      step: 1,
      labels: ['エンターテイメント性', '癒し・安らぎ'],
    },
  },
  {
    id: 'skill_vs_friendliness',
    type: 'slider',
    title: '推しに求める要素は？',
    description: 'スライダーで選択してください',
    sliderConfig: {
      min: 1,
      max: 5,
      step: 1,
      labels: ['高技術・プロ志向', '親しみやすさ'],
    },
  },
]
