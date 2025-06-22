import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen1Members: HoloMember[] = [
  {
    id: 'shirakami_fubuki',
    name: 'Shirakami Fubuki',
    nameJP: '白上フブキ',
    branch: 'JP',
    generation: '1期生',
    debut: '2018-06-01',
    description:
      '白いキツネのケモミミVtuber。配信の幅が広く、様々なコンテンツで楽しませる。',
    contentTypes: ['gaming', 'chatting', 'singing', 'collab'],
    personality: ['energetic', 'mischievous'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'varied',
    profileImage: getIconPath('shirakami_fubuki'),
    channelUrl: 'https://www.youtube.com/@ShirakamiFubuki',
    twitterUrl: 'https://twitter.com/shirakamifubuki',
    catchphrase: 'こんこんきーつね！',
    recommendReason: 'バラエティ豊かな配信とリスナーとの距離感が近い',
  },
  {
    id: 'akai_haato',
    name: 'Akai Haato',
    nameJP: '赤井はあと',
    branch: 'JP',
    generation: '1期生',
    debut: '2018-06-02',
    description:
      'ツインテールの女子高生Vtuber。独創的な企画と料理配信で話題に。',
    contentTypes: ['gaming', 'chatting', 'educational'],
    personality: ['mischievous', 'energetic'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('akai_haato'),
    channelUrl: 'https://www.youtube.com/@AkaiHaato',
    twitterUrl: 'https://twitter.com/akaihaato',
    catchphrase: 'はあちゃまっちゃま〜！',
    recommendReason: '独創的な企画と予測不能な配信内容',
  },
  {
    id: 'natsuiro_matsuri',
    name: 'Natsuiro Matsuri',
    nameJP: '夏色まつり',
    branch: 'JP',
    generation: '1期生',
    debut: '2018-06-01',
    description:
      'チアリーダー衣装の元気いっぱいVtuber。高いテンションとトーク力が魅力。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('natsuiro_matsuri'),
    channelUrl: 'https://www.youtube.com/@NatsuiroMatsuri',
    twitterUrl: 'https://twitter.com/natsuiromatsuri',
    catchphrase: 'わっしょい！',
    recommendReason: 'ハイテンションな配信でリスナーを巻き込む楽しさ',
  },
  {
    id: 'aki_rosenthal',
    name: 'Aki Rosenthal',
    nameJP: 'アキ・ローゼンタール',
    branch: 'JP',
    generation: '1期生',
    debut: '2018-06-01',
    description:
      '異世界から来たハーフエルフVtuber。ベリーダンスや歌配信、ASMRなど幅広い活動を展開。',
    contentTypes: ['asmr', 'singing', 'chatting', 'gaming'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('aki_rosenthal'),
    channelUrl: 'https://www.youtube.com/@AkiRosenthal',
    twitterUrl: 'https://twitter.com/akirosenthal',
    catchphrase: 'アローナ！',
    recommendReason: '大人の魅力とベリーダンス、ASMRなど多彩な配信',
  },
]
