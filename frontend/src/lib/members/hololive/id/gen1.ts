import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/id/${fileName}`
    : `/images/fallback-avatar.svg`
}

export const idGen1Members: HoloMember[] = [
  {
    id: 'ayunda_risu',
    name: 'Ayunda Risu',
    nameJP: 'リス',
    branch: 'ID',
    generation: 'Gen 1',
    debut: '2020-04-10',
    description:
      'リスのVtuber。多言語を話すことができ、歌配信やゲーム配信で活動。',
    contentTypes: ['singing', 'gaming', 'chatting'],
    personality: ['natural', 'witty'],
    streamingStyle: 'chat_interactive',
    languages: ['ID', 'EN', 'JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('ayunda_risu'),
    channelUrl: 'https://www.youtube.com/@AyundaRisu',
    twitterUrl: 'https://twitter.com/ayunda_risu',
    catchphrase: 'Risuners!',
    recommendReason: '多言語での配信と美しい歌声',
  },
  {
    id: 'moona_hoshinova',
    name: 'Moona Hoshinova',
    nameJP: 'ムーナ・ホシノヴァ',
    branch: 'ID',
    generation: 'Gen 1',
    debut: '2020-04-11',
    description:
      '月をモチーフにしたVtuber。建築系ゲームが得意で、歌唱力も高い。',
    contentTypes: ['gaming', 'singing', 'chatting'],
    personality: ['calm', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['ID', 'EN'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('moona_hoshinova'),
    channelUrl: 'https://www.youtube.com/@MoonaHoshinova',
    twitterUrl: 'https://twitter.com/moonahoshinova',
    catchphrase: 'Moonafic!',
    recommendReason: '建築ゲームでの創造性と美しい歌声',
  },
  {
    id: 'airani_iofifteen',
    name: 'Airani Iofifteen',
    nameJP: 'アイラニ・イオフィフティーン',
    branch: 'ID',
    generation: 'Gen 1',
    debut: '2020-04-12',
    description: 'エイリアンのVtuber。アート配信や多言語での配信が特徴的。',
    contentTypes: ['drawing', 'chatting', 'gaming'],
    personality: ['energetic', 'mischievous'],
    streamingStyle: 'chat_interactive',
    languages: ['ID', 'EN', 'JP', 'KR'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('airani_iofifteen'),
    channelUrl: 'https://www.youtube.com/@AiraniIofifteen',
    twitterUrl: 'https://twitter.com/airaniiofifteen',
    catchphrase: 'Iofi!',
    recommendReason: 'アート配信と多言語でのコミュニケーション',
  },
]
