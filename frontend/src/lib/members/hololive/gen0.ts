import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen0Members: HoloMember[] = [
  {
    id: 'tokino_sora',
    name: 'Tokino Sora',
    nameJP: 'ときのそら',
    branch: 'JP',
    generation: '0期生',
    debut: '2017-09-07',
    description:
      'ホロライブの始まりとなったアイドルVtuber。歌とトークでファンを魅了する。',
    contentTypes: ['singing', 'chatting', 'gaming'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('tokino_sora'),
    channelUrl: 'https://www.youtube.com/@TokinoSora',
    twitterUrl: 'https://twitter.com/tokino_sora',
    catchphrase: 'こんそめ〜！',
    recommendReason: 'アイドルらしい歌配信と温かいトークが魅力',
  },
  {
    id: 'roboco',
    name: 'Roboco',
    nameJP: 'ロボ子さん',
    branch: 'JP',
    generation: '0期生',
    debut: '2018-03-04',
    description:
      '高性能ロボットVtuber。ゲームが得意で、特にFPSでの腕前は圧巻。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'natural'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['late_night'],
    streamLength: 'long',
    profileImage: getIconPath('roboco'),
    channelUrl: 'https://www.youtube.com/@Roboco',
    twitterUrl: 'https://twitter.com/robocosan',
    catchphrase: 'こんろぼ〜！',
    recommendReason: '深夜の長時間ゲーム配信でまったり楽しめる',
  },
  {
    id: 'azki',
    name: 'AZKi',
    nameJP: 'AZKi',
    branch: 'JP',
    generation: '0期生',
    debut: '2018-11-15',
    description:
      '歌手として活動するVtuber。バーチャルライブやオリジナル楽曲制作に力を入れている。',
    contentTypes: ['singing', 'music_creation'],
    personality: ['cool', 'calm'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('azki'),
    channelUrl: 'https://www.youtube.com/@AZKi',
    twitterUrl: 'https://twitter.com/AZKi_VDiVA',
    catchphrase: 'こんあずき〜！',
    recommendReason: '本格的な音楽活動とライブパフォーマンス',
  },
  {
    id: 'hoshimachi_suisei',
    name: 'Hoshimachi Suisei',
    nameJP: '星街すいせい',
    branch: 'JP',
    generation: '0期生',
    debut: '2018-03-22',
    description:
      '歌手活動に力を入れるVtuber。圧倒的な歌唱力と、テトリスなどのゲームも得意。',
    contentTypes: ['singing', 'gaming', 'music_creation'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('hoshimachi_suisei'),
    channelUrl: 'https://www.youtube.com/@HoshimachiSuisei',
    twitterUrl: 'https://twitter.com/suisei_hosimati',
    catchphrase: 'すいちゃんは〜今日もかわいい〜！',
    recommendReason: '圧倒的な歌唱力とゲームの実力を兼ね備えたアーティスト',
  },
  {
    id: 'sakura_miko',
    name: 'Sakura Miko',
    nameJP: 'さくらみこ',
    branch: 'JP',
    generation: '0期生',
    debut: '2018-08-01',
    description:
      'エリート巫女Vtuber。独特な言葉遣い「みこち語」と面白いゲームリアクションが人気。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'long',
    profileImage: getIconPath('sakura_miko'),
    channelUrl: 'https://www.youtube.com/@SakuraMiko',
    twitterUrl: 'https://twitter.com/sakuramiko35',
    catchphrase: 'にぇ〜！',
    recommendReason: 'エリート（？）な面白いゲーム実況と独特な言葉遣い',
  },
]
