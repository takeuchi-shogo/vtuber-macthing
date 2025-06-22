import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/en/${fileName}`
    : `/images/hololive/icon/en/${memberId}.png`
}

export const justiceMembers: HoloMember[] = [
  {
    id: 'elizabeth_rose_bloodflame',
    name: 'Elizabeth Rose Bloodflame',
    nameJP: 'エリザベス・ローズ・ブラッドフレイム',
    branch: 'EN',
    generation: 'Justice',
    debut: '2024-07-13',
    description:
      'ジャスティスの一員として活動するVtuber。エレガントな外見とユニークな配信スタイル。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('elizabeth_rose_bloodflame'),
    channelUrl: 'https://www.youtube.com/@holoen_erbloodflame',
    twitterUrl: 'https://twitter.com/erbloodflame',
    catchphrase: 'Justice!',
    recommendReason: 'エレガントな魅力と独特な配信センス',
  },
  {
    id: 'gigi_murin',
    name: 'Gigi Murin',
    nameJP: 'ジジ・ムリン',
    branch: 'EN',
    generation: 'Justice',
    debut: '2024-07-14',
    description:
      'ジャスティスの一員として活動するVtuber。元気で親しみやすい性格。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['EN'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('gigi_murin'),
    channelUrl: 'https://www.youtube.com/@holoen_gigimurin',
    twitterUrl: 'https://twitter.com/gigimurin',
    catchphrase: 'Gigi Time!',
    recommendReason: '親しみやすい性格と楽しい配信スタイル',
  },
  {
    id: 'cecilia_immergreen',
    name: 'Cecilia Immergreen',
    nameJP: 'セシリア・イマーグリーン',
    branch: 'EN',
    generation: 'Justice',
    debut: '2024-07-15',
    description:
      'ジャスティスの一員として活動するVtuber。落ち着いた雰囲気と知的な魅力。',
    contentTypes: ['chatting', 'gaming', 'singing'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'laid_back',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('cecilia_immergreen'),
    channelUrl: 'https://www.youtube.com/@holoen_ceciliaimmergreen',
    twitterUrl: 'https://twitter.com/ceciliaimmer',
    catchphrase: 'Green Tea Time!',
    recommendReason: '落ち着いた癒し系の配信と知的な会話',
  },
  {
    id: 'raora_panthera',
    name: 'Raora Panthera',
    nameJP: 'ラオラ・パンテーラ',
    branch: 'EN',
    generation: 'Justice',
    debut: '2024-07-16',
    description:
      'ジャスティスの一員として活動するVtuber。アート系コンテンツが得意。',
    contentTypes: ['drawing', 'gaming', 'chatting'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['EN'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'long',
    profileImage: getIconPath('raora_panthera'),
    channelUrl: 'https://www.youtube.com/@holoen_raorapanthera',
    twitterUrl: 'https://twitter.com/raorapanthera',
    catchphrase: 'Raora Time!',
    recommendReason: 'アート配信と創作活動への情熱',
  },
]
