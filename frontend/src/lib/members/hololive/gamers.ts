import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gamersMembers: HoloMember[] = [
  {
    id: 'ookami_mio',
    name: 'Ookami Mio',
    nameJP: '大神ミオ',
    branch: 'JP',
    generation: 'ゲーマーズ',
    debut: '2018-12-07',
    description:
      '狼のケモミミVtuber。優しいお母さん的な存在で、朝の占い配信が人気。',
    contentTypes: ['chatting', 'gaming', 'educational'],
    personality: ['motherly', 'calm'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['morning', 'afternoon'],
    streamLength: 'medium',
    profileImage: getIconPath('ookami_mio'),
    channelUrl: 'https://www.youtube.com/@OokamiMio',
    twitterUrl: 'https://twitter.com/ookamimio',
    catchphrase: 'こんみおーん！',
    recommendReason: '朝の占い配信と優しい雰囲気で一日をスタート',
  },
  {
    id: 'nekomata_okayu',
    name: 'Nekomata Okayu',
    nameJP: '猫又おかゆ',
    branch: 'JP',
    generation: 'ゲーマーズ',
    debut: '2019-04-06',
    description:
      '猫又の女の子Vtuber。落ち着いた低音ボイスと、ゆったりとした配信スタイルが特徴。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['calm', 'natural'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('nekomata_okayu'),
    channelUrl: 'https://www.youtube.com/@NekomataOkayu',
    twitterUrl: 'https://twitter.com/nekomataokayu',
    catchphrase: 'もぐもぐ〜おかゆ〜！',
    recommendReason: '深夜のまったり配信で癒しの時間を提供',
  },
  {
    id: 'inugami_korone',
    name: 'Inugami Korone',
    nameJP: '戌神ころね',
    branch: 'JP',
    generation: 'ゲーマーズ',
    debut: '2019-10-01',
    description:
      '犬のケモミミVtuber。レトロゲームが大好きで、長時間の耐久配信も多い。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('inugami_korone'),
    channelUrl: 'https://www.youtube.com/@InugamiKorone',
    twitterUrl: 'https://twitter.com/inugamikorone',
    catchphrase: 'おあよ〜！',
    recommendReason: 'レトロゲーム愛と独特な言い回しが楽しい長時間配信',
  },
]