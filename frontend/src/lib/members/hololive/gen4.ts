import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen4Members: HoloMember[] = [
  {
    id: 'amane_kanata',
    name: 'Amane Kanata',
    nameJP: '天音かなた',
    branch: 'JP',
    generation: '4期生',
    debut: '2019-12-27',
    description:
      '天使のVtuber。高い歌唱力と、努力家な一面が魅力的。握力50kgの怪力天使。',
    contentTypes: ['singing', 'gaming', 'chatting'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('amane_kanata'),
    channelUrl: 'https://www.youtube.com/@AmaneKanata',
    twitterUrl: 'https://twitter.com/amanekanatach',
    catchphrase: 'こんかなた〜！',
    recommendReason: '高い歌唱力と前向きな姿勢に元気をもらえる',
  },
  {
    id: 'tsunomaki_watame',
    name: 'Tsunomaki Watame',
    nameJP: '角巻わため',
    branch: 'JP',
    generation: '4期生',
    debut: '2019-12-29',
    description:
      '羊のVtuber。歌配信や作曲活動に力を入れており、オリジナル曲も多数リリース。',
    contentTypes: ['singing', 'chatting', 'music_creation'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['morning', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('tsunomaki_watame'),
    channelUrl: 'https://www.youtube.com/@TsunomakiWatame',
    twitterUrl: 'https://twitter.com/tsunomakiwatame',
    catchphrase: 'どどどど〜！',
    recommendReason: '朝配信と深夜の歌枠で一日の始まりと終わりを彩る',
  },
  {
    id: 'tokoyami_towa',
    name: 'Tokoyami Towa',
    nameJP: '常闇トワ',
    branch: 'JP',
    generation: '4期生',
    debut: '2020-01-03',
    description:
      '小悪魔のVtuber。可愛らしい見た目とは裏腹に、FPSゲームの腕前が高い。',
    contentTypes: ['gaming', 'singing', 'chatting'],
    personality: ['cool', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('tokoyami_towa'),
    channelUrl: 'https://www.youtube.com/@TokoyamiTowa',
    twitterUrl: 'https://twitter.com/tokoyamitowa',
    catchphrase: 'こんやっぴ〜！',
    recommendReason: 'FPSの高い実力と可愛らしい反応のギャップ',
  },
  {
    id: 'himemori_luna',
    name: 'Himemori Luna',
    nameJP: '姫森ルーナ',
    branch: 'JP',
    generation: '4期生',
    debut: '2020-01-04',
    description: 'お姫様のVtuber。「なのら〜」という語尾と、甘えた声が特徴的。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['natural', 'mischievous'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'short',
    profileImage: getIconPath('himemori_luna'),
    channelUrl: 'https://www.youtube.com/@HimemoriLuna',
    twitterUrl: 'https://twitter.com/himemoriluna',
    catchphrase: 'んなっ！',
    recommendReason: '独特なキャラクターとリスナーとの掛け合いが楽しい',
  },
]
