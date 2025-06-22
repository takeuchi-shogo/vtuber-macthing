import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/en/${fileName}`
    : `/images/hololive/icon/en/${memberId}.png`
}

export const adventMembers: HoloMember[] = [
  {
    id: 'shiori_novella',
    name: 'Shiori Novella',
    nameJP: 'シオリ・ノヴェラ',
    branch: 'EN',
    generation: 'Advent',
    debut: '2023-08-05',
    description:
      'アーキビスト（記録保管人）のVtuber。ホラーゲームや読書配信が得意。',
    contentTypes: ['gaming', 'chatting', 'educational'],
    personality: ['witty', 'mischievous'],
    streamingStyle: 'performance_focused',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('shiori_novella'),
    channelUrl: 'https://www.youtube.com/@ShioriNovella',
    twitterUrl: 'https://twitter.com/shiorinovella',
    catchphrase: 'Sho cute!',
    recommendReason: 'ホラーゲームでの独特なリアクションと知的な一面',
  },
  {
    id: 'koseki_bijou',
    name: 'Koseki Bijou',
    nameJP: 'コセキ・ビジュー',
    branch: 'EN',
    generation: 'Advent',
    debut: '2023-08-06',
    description:
      '宝石のVtuber。小柄だが意外に大胆な発言をするギャップが魅力。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['natural', 'mischievous'],
    streamingStyle: 'chat_interactive',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('koseki_bijou'),
    channelUrl: 'https://www.youtube.com/@KosekiBijou',
    twitterUrl: 'https://twitter.com/kosekibijou',
    catchphrase: 'Biboo!',
    recommendReason: '小さな見た目と大胆な発言のギャップが面白い',
  },
  {
    id: 'nerissa_ravencroft',
    name: 'Nerissa Ravencroft',
    nameJP: 'ネリッサ・レイヴンクロフト',
    branch: 'EN',
    generation: 'Advent',
    debut: '2023-08-07',
    description:
      'デーモンのVtuber。歌唱力が高く、大人っぽい魅力がある。',
    contentTypes: ['singing', 'chatting', 'gaming'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('nerissa_ravencroft'),
    channelUrl: 'https://www.youtube.com/@NerissaRavencroft',
    twitterUrl: 'https://twitter.com/nerissaravencroft',
    catchphrase: 'Jailbirds!',
    recommendReason: '美しい歌声と大人っぽい魅力的な配信',
  },
  {
    id: 'fuwawa_abyssgard',
    name: 'Fuwawa Abyssgard',
    nameJP: 'フワワ・アビスガード',
    branch: 'EN',
    generation: 'Advent',
    debut: '2023-08-08',
    description:
      '双子の姉のVtuber。モコジャンとセットで活動し、犬のような可愛らしさが特徴。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['EN', 'JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('fuwawa_abyssgard'),
    channelUrl: 'https://www.youtube.com/@FuwawaAbyssgard',
    twitterUrl: 'https://twitter.com/fuwamoco_en',
    catchphrase: 'Bau Bau!',
    recommendReason: '双子での息の合った配信と犬のような可愛らしさ',
  },
  {
    id: 'mococo_abyssgard',
    name: 'Mococo Abyssgard',
    nameJP: 'モココ・アビスガード',
    branch: 'EN',
    generation: 'Advent',
    debut: '2023-08-08',
    description:
      '双子の妹のVtuber。フワワとセットで活動し、ツッコミ役が多い。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['witty', 'energetic'],
    streamingStyle: 'chat_interactive',
    languages: ['EN', 'JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('mococo_abyssgard'),
    channelUrl: 'https://www.youtube.com/@MococoAbyssgard',
    twitterUrl: 'https://twitter.com/fuwamoco_en',
    catchphrase: 'Bau Bau!',
    recommendReason: '双子での息の合った配信とツッコミの上手さ',
  },
]