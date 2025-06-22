import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/en/${fileName}`
    : `/images/hololive/icon/en/${memberId}.png`
}

export const promiseMembers: HoloMember[] = [
  {
    id: 'irys',
    name: 'IRyS',
    nameJP: 'IRyS',
    branch: 'EN',
    generation: 'Promise',
    debut: '2021-07-11',
    description:
      'ホロライブENの歌手として活動するVSinger。天使と悪魔の両方の要素を持つ。',
    contentTypes: ['singing', 'music_creation', 'gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['EN', 'JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('irys'),
    channelUrl: 'https://www.youtube.com/@IRyS',
    twitterUrl: 'https://twitter.com/irys_en',
    catchphrase: 'HiRyS!',
    recommendReason: '圧倒的な歌唱力と天使と悪魔の二面性',
  },
  {
    id: 'ouro_kronii',
    name: 'Ouro Kronii',
    nameJP: 'オーロ・クロニー',
    branch: 'EN',
    generation: 'Promise',
    debut: '2021-08-23',
    description:
      '時間の概念を司るVtuber。クールな外見と独特なユーモアセンスを持つ。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'laid_back',
    languages: ['EN'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('ouro_kronii'),
    channelUrl: 'https://www.youtube.com/@OuroKronii',
    twitterUrl: 'https://twitter.com/ourokronii',
    catchphrase: 'Kroniijii Time!',
    recommendReason: 'クールな外見と意外なコメディセンスのギャップ',
  },
  {
    id: 'hakos_baelz',
    name: 'Hakos Baelz',
    nameJP: 'ハコス・ベールズ',
    branch: 'EN',
    generation: 'Promise',
    debut: '2021-08-22',
    description:
      'カオスの概念を司るVtuber。エネルギッシュで予測不可能な配信スタイル。',
    contentTypes: ['gaming', 'chatting', 'singing', 'collab'],
    personality: ['energetic', 'mischievous'],
    streamingStyle: 'performance_focused',
    languages: ['EN'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('hakos_baelz'),
    channelUrl: 'https://www.youtube.com/@HakosBaelz',
    twitterUrl: 'https://twitter.com/hakosbaelz',
    catchphrase: 'Chaos!',
    recommendReason: 'カオスな名前の通りの予測不能で楽しい配信',
  },
  {
    id: 'ceres_fauna',
    name: 'Ceres Fauna',
    nameJP: 'セレス・ファウナ',
    branch: 'EN',
    generation: 'Promise',
    debut: '2021-08-23',
    description:
      '自然の概念を司るVtuber。癒し系の声と植物への愛情が特徴的。',
    contentTypes: ['asmr', 'chatting', 'gaming'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'laid_back',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'long',
    profileImage: getIconPath('ceres_fauna'),
    channelUrl: 'https://www.youtube.com/@CeresFauna',
    twitterUrl: 'https://twitter.com/ceresfauna',
    catchphrase: 'Uuu...',
    recommendReason: '癒し系ASMR配信と自然への愛情',
  },
  {
    id: 'nanashi_mumei',
    name: 'Nanashi Mumei',
    nameJP: '七詩ムメイ',
    branch: 'EN',
    generation: 'Promise',
    debut: '2021-08-23',
    description:
      '文明の概念を司るVtuber。天然な性格と可愛らしい声が魅力的。',
    contentTypes: ['gaming', 'chatting', 'singing', 'drawing'],
    personality: ['natural', 'calm'],
    streamingStyle: 'chat_interactive',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('nanashi_mumei'),
    channelUrl: 'https://www.youtube.com/@NanashiMumei',
    twitterUrl: 'https://twitter.com/nanashimumei_en',
    catchphrase: 'Hoo...',
    recommendReason: '天然な魅力とお絵描き配信',
  },
]