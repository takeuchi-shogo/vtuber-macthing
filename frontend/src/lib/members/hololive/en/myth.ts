import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/en/${fileName}`
    : `/images/hololive/icon/en/${memberId}.png`
}

export const mythMembers: HoloMember[] = [
  {
    id: 'mori_calliope',
    name: 'Mori Calliope',
    nameJP: '森カリオペ',
    branch: 'EN',
    generation: 'Myth',
    debut: '2020-09-12',
    description:
      '死神見習いVtuber。ラップや作曲が得意で、オリジナル楽曲も多数リリース。',
    contentTypes: ['singing', 'music_creation', 'gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['EN', 'JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('mori_calliope'),
    channelUrl: 'https://www.youtube.com/@MoriCalliope',
    twitterUrl: 'https://twitter.com/moricalliope',
    catchphrase: 'Good Morning, Motherfuckers!',
    recommendReason: 'ラップと作曲の才能、クールな死神キャラと意外なギャップ',
  },
  {
    id: 'takanashi_kiara',
    name: 'Takanashi Kiara',
    nameJP: '小鳥遊キアラ',
    branch: 'EN',
    generation: 'Myth',
    debut: '2020-09-12',
    description: 'フェニックスのVtuber。明るく元気な性格で、多言語対応も得意。',
    contentTypes: ['chatting', 'gaming', 'singing', 'collab'],
    personality: ['energetic', 'witty'],
    streamingStyle: 'chat_interactive',
    languages: ['EN', 'JP', 'DE'],
    typicalStreamTimes: ['morning', 'afternoon'],
    streamLength: 'long',
    profileImage: getIconPath('takanashi_kiara'),
    channelUrl: 'https://www.youtube.com/@TakanashiKiara',
    twitterUrl: 'https://twitter.com/takanashikiara',
    catchphrase: 'Kikkeriki!',
    recommendReason: 'エネルギッシュなトークと多言語での親しみやすい配信',
  },
  {
    id: 'ninomae_inanis',
    name: "Ninomae Ina'nis",
    nameJP: '一伊那尓栖',
    branch: 'EN',
    generation: 'Myth',
    debut: '2020-09-13',
    description:
      'クトゥルフ神話をモチーフにしたVtuber。お絵描き配信と落ち着いた雰囲気が特徴。',
    contentTypes: ['drawing', 'gaming', 'chatting'],
    personality: ['calm', 'witty'],
    streamingStyle: 'laid_back',
    languages: ['EN'],
    typicalStreamTimes: ['evening'],
    streamLength: 'long',
    profileImage: getIconPath('ninomae_inanis'),
    channelUrl: 'https://www.youtube.com/@NinomaeInanis',
    twitterUrl: 'https://twitter.com/ninomaeinanis',
    catchphrase: 'Wah!',
    recommendReason: 'アート配信と癒し系の雰囲気、ダジャレ好きな一面',
  },
]
