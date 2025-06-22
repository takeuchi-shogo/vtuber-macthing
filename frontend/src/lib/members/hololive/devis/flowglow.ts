import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/devis/${fileName}`
    : `/images/hololive/icon/devis/${memberId}.png`
}

export const flowglowMembers: HoloMember[] = [
  {
    id: 'isaki_riona',
    name: 'Isaki Riona',
    nameJP: '響咲リオナ',
    branch: 'JP',
    generation: 'FLOW GLOW',
    debut: '2024-09-07',
    description:
      'ホロライブDEV_IS FLOW GLOWの一員。明るく親しみやすい性格が魅力。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('isaki_riona'),
    channelUrl: 'https://www.youtube.com/@IsakiRiona',
    twitterUrl: 'https://twitter.com/isakiriona',
    catchphrase: 'りおなー！',
    recommendReason: '明るく親しみやすい配信スタイル',
  },
  {
    id: 'koganei_niko',
    name: 'Koganei Niko',
    nameJP: '虎金妃笑虎',
    branch: 'JP',
    generation: 'FLOW GLOW',
    debut: '2024-09-08',
    description:
      'ホロライブDEV_IS FLOW GLOWの一員。ユニークなキャラクターとコメディセンスが特徴。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['witty', 'mischievous'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('koganei_niko'),
    channelUrl: 'https://www.youtube.com/@KoganeiNiko',
    twitterUrl: 'https://twitter.com/koganeiniko',
    catchphrase: 'にこにこ〜！',
    recommendReason: 'ユニークなキャラクターと面白い配信',
  },
  {
    id: 'mizumiya_su',
    name: 'Mizumiya Su',
    nameJP: '水宮枢',
    branch: 'JP',
    generation: 'FLOW GLOW',
    debut: '2024-09-09',
    description:
      'ホロライブDEV_IS FLOW GLOWの一員。落ち着いた雰囲気と知的な配信が特徴。',
    contentTypes: ['chatting', 'gaming', 'educational'],
    personality: ['calm', 'cool'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('mizumiya_su'),
    channelUrl: 'https://www.youtube.com/@MizumiyaSu',
    twitterUrl: 'https://twitter.com/mizumiyasu',
    catchphrase: 'すーちゃん！',
    recommendReason: '落ち着いた雰囲気と深い話題',
  },
  {
    id: 'rindo_chihaya',
    name: 'Rindo Chihaya',
    nameJP: '輪堂千速',
    branch: 'JP',
    generation: 'FLOW GLOW',
    debut: '2024-09-10',
    description:
      'ホロライブDEV_IS FLOW GLOWの一員。高いゲームスキルとスポーツマンシップが魅力。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'cool'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'long',
    profileImage: getIconPath('rindo_chihaya'),
    channelUrl: 'https://www.youtube.com/@RindoChihaya',
    twitterUrl: 'https://twitter.com/rindochihaya',
    catchphrase: 'ちはやー！',
    recommendReason: '高いゲームスキルと競技性のある配信',
  },
  {
    id: 'kikirara_vivi',
    name: 'Kikirara Vivi',
    nameJP: '綺々羅々ヴィヴィ',
    branch: 'JP',
    generation: 'FLOW GLOW',
    debut: '2024-09-11',
    description:
      'ホロライブDEV_IS FLOW GLOWの一員。可愛らしい外見と独特な魅力がある。',
    contentTypes: ['chatting', 'singing', 'gaming'],
    personality: ['natural', 'mischievous'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('kikirara_vivi'),
    channelUrl: 'https://www.youtube.com/@KikiraraVivi',
    twitterUrl: 'https://twitter.com/kikiraravivi',
    catchphrase: 'ヴィヴィ〜！',
    recommendReason: '可愛らしい魅力と独特なキャラクター',
  },
]
