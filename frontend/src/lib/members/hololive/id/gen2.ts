import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/id/${fileName}`
    : `/images/hololive/icon/id/${memberId}.png`
}

export const idGen2Members: HoloMember[] = [
  {
    id: 'kureiji_ollie',
    name: 'Kureiji Ollie',
    nameJP: 'クレイジー・オリー',
    branch: 'ID',
    generation: 'ID 2期生',
    debut: '2020-12-04',
    description:
      'ゾンビのVtuber。エネルギッシュで明るい性格、多言語での配信が人気。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'mischievous'],
    streamingStyle: 'performance_focused',
    languages: ['ID', 'EN', 'JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'long',
    profileImage: getIconPath('kureiji_ollie'),
    channelUrl: 'https://www.youtube.com/@KureijiOllie',
    twitterUrl: 'https://twitter.com/kureijiollie',
    catchphrase: 'Apex Predator!',
    recommendReason: 'ハイテンションで楽しい配信とマルチリンガル',
  },
  {
    id: 'anya_melfissa',
    name: 'Anya Melfissa',
    nameJP: 'アーニャ・メルフィッサ',
    branch: 'ID',
    generation: 'ID 2期生',
    debut: '2020-12-05',
    description:
      'ダガーをモチーフにしたVtuber。落ち着いた配信スタイルと独特なユーモア。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['cool', 'witty'],
    streamingStyle: 'laid_back',
    languages: ['ID', 'EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('anya_melfissa'),
    channelUrl: 'https://www.youtube.com/@AnyaMelfissa',
    twitterUrl: 'https://twitter.com/anyamelfissa',
    catchphrase: 'Anya~',
    recommendReason: '落ち着いた雰囲気と独特なユーモアセンス',
  },
  {
    id: 'pavolia_reine',
    name: 'Pavolia Reine',
    nameJP: 'パヴォリア・レイネ',
    branch: 'ID',
    generation: 'ID 2期生',
    debut: '2020-12-06',
    description:
      'ピーコックのVtuber。エレガントな魅力と多彩なコンテンツが特徴。',
    contentTypes: ['chatting', 'gaming', 'singing'],
    personality: ['cool', 'motherly'],
    streamingStyle: 'performance_focused',
    languages: ['ID', 'EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('pavolia_reine'),
    channelUrl: 'https://www.youtube.com/@PavoliaReine',
    twitterUrl: 'https://twitter.com/pavoliareine',
    catchphrase: 'Reine!',
    recommendReason: 'エレガントな魅力と大人っぽい配信スタイル',
  },
]