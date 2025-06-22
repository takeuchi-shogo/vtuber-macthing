import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/id/${fileName}`
    : `/images/hololive/icon/id/${memberId}.png`
}

export const idGen3Members: HoloMember[] = [
  {
    id: 'vestia_zeta',
    name: 'Vestia Zeta',
    nameJP: 'ベスティア・ゼータ',
    branch: 'ID',
    generation: 'ID 3期生',
    debut: '2022-03-25',
    description:
      '秘密エージェントのVtuber。クールな外見とゲーム配信が得意。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['ID', 'EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'long',
    profileImage: getIconPath('vestia_zeta'),
    channelUrl: 'https://www.youtube.com/@VestiaZeta',
    twitterUrl: 'https://twitter.com/vestiazeta',
    catchphrase: 'Zeta desu!',
    recommendReason: 'クールなエージェントキャラとゲーム実力',
  },
  {
    id: 'kaela_kovalskia',
    name: 'Kaela Kovalskia',
    nameJP: 'カエラ・コヴァルスキア',
    branch: 'ID',
    generation: 'ID 3期生',
    debut: '2022-03-26',
    description:
      'ペンギンのVtuber。長時間配信と建築系ゲームが得意で、集中力が高い。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['calm', 'natural'],
    streamingStyle: 'laid_back',
    languages: ['ID', 'EN'],
    typicalStreamTimes: ['morning', 'afternoon', 'evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('kaela_kovalskia'),
    channelUrl: 'https://www.youtube.com/@KaelaKovalskia',
    twitterUrl: 'https://twitter.com/kaelakovalskia',
    catchphrase: 'Kaela Time!',
    recommendReason: '長時間の建築配信と驚異的な集中力',
  },
  {
    id: 'kobo_kanaeru',
    name: 'Kobo Kanaeru',
    nameJP: 'こぼ・かなえる',
    branch: 'ID',
    generation: 'ID 3期生',
    debut: '2022-03-27',
    description:
      '雨雲のVtuber。可愛らしい見た目と元気な性格、日本語も上手。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['ID', 'JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('kobo_kanaeru'),
    channelUrl: 'https://www.youtube.com/@KoboKanaeru',
    twitterUrl: 'https://twitter.com/kobokanaeru',
    catchphrase: 'こぼちゃん！',
    recommendReason: '可愛らしい魅力と日本語での親しみやすい配信',
  },
]