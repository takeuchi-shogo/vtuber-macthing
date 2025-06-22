import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen5Members: HoloMember[] = [
  {
    id: 'yukihana_lamy',
    name: 'Yukihana Lamy',
    nameJP: '雪花ラミィ',
    branch: 'JP',
    generation: '5期生',
    debut: '2020-08-12',
    description: '雪の国のお姫様Vtuber。お酒配信と、優しい声での雑談が人気。',
    contentTypes: ['chatting', 'asmr', 'gaming'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['late_night'],
    streamLength: 'long',
    profileImage: getIconPath('yukihana_lamy'),
    channelUrl: 'https://www.youtube.com/@YukihanaLamy',
    twitterUrl: 'https://twitter.com/yukihanalamy',
    catchphrase: 'こんらみ〜！',
    recommendReason: '深夜の雑談配信で大人の癒し時間を提供',
  },
  {
    id: 'momosuzu_nene',
    name: 'Momosuzu Nene',
    nameJP: '桃鈴ねね',
    branch: 'JP',
    generation: '5期生',
    debut: '2020-08-13',
    description:
      'アイドルを目指すVtuber。明るく元気な性格と、高い歌唱力が魅力。',
    contentTypes: ['singing', 'chatting', 'gaming'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('momosuzu_nene'),
    channelUrl: 'https://www.youtube.com/@MomosuzuNene',
    twitterUrl: 'https://twitter.com/momosuzunene',
    catchphrase: 'ねねっち〜！',
    recommendReason: 'アイドルらしい明るさと親しみやすさ',
  },
  {
    id: 'shishiro_botan',
    name: 'Shishiro Botan',
    nameJP: '獅白ぼたん',
    branch: 'JP',
    generation: '5期生',
    debut: '2020-08-14',
    description:
      '白獅子のVtuber。FPSゲームのプロ級の腕前と、落ち着いた大人の魅力がある。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'calm'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'long',
    profileImage: getIconPath('shishiro_botan'),
    channelUrl: 'https://www.youtube.com/@ShishiroBotan',
    twitterUrl: 'https://twitter.com/shishirobotan',
    catchphrase: 'おはようございます 獅白ぼたんです',
    recommendReason: 'プロ級のFPS実力と落ち着いた実況',
  },
  {
    id: 'omaru_polka',
    name: 'Omaru Polka',
    nameJP: '尾丸ポルカ',
    branch: 'JP',
    generation: '5期生',
    debut: '2020-08-16',
    description:
      'サーカス団のVtuber。高いエンターテイメント性と、多彩な声真似が特徴。',
    contentTypes: ['chatting', 'gaming', 'singing'],
    personality: ['energetic', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'varied',
    profileImage: getIconPath('omaru_polka'),
    channelUrl: 'https://www.youtube.com/@OmaruPolka',
    twitterUrl: 'https://twitter.com/omarupolka',
    catchphrase: 'ポルカおるか〜？',
    recommendReason: 'サーカスのような賑やかで楽しい配信',
  },
]