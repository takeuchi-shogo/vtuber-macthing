import { HoloMember } from '@/types'
import { iconMapping } from '../../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/devis/${fileName}`
    : `/images/hololive/icon/devis/${memberId}.png`
}

export const reglossMembers: HoloMember[] = [
  {
    id: 'hiodoshi_ao',
    name: 'Hiodoshi Ao',
    nameJP: '火威青',
    branch: 'JP',
    generation: 'ReGLOSS',
    debut: '2023-09-10',
    description:
      'ホロライブDEV_IS ReGLOSSの一員。青色が特徴的で、クールな印象とゲーム配信が得意。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['cool', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('hiodoshi_ao'),
    channelUrl: 'https://www.youtube.com/@HiodoshiAo',
    twitterUrl: 'https://twitter.com/hiodoshiao',
    catchphrase: 'あおくん！',
    recommendReason: 'クールな魅力とゲーム実況での冷静な判断力',
  },
  {
    id: 'otonose_kanade',
    name: 'Otonose Kanade',
    nameJP: '音乃瀬奏',
    branch: 'JP',
    generation: 'ReGLOSS',
    debut: '2023-09-11',
    description:
      'ホロライブDEV_IS ReGLOSSの一員。音楽関連のコンテンツが得意で、歌唱力も高い。',
    contentTypes: ['singing', 'music_creation', 'chatting'],
    personality: ['calm', 'natural'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('otonose_kanade'),
    channelUrl: 'https://www.youtube.com/@OtonoseKanade',
    twitterUrl: 'https://twitter.com/otonosekanade',
    catchphrase: 'かなでー！',
    recommendReason: '美しい歌声と音楽への深い理解',
  },
  {
    id: 'ichijou_ririka',
    name: 'Ichijou Ririka',
    nameJP: '一条莉々華',
    branch: 'JP',
    generation: 'ReGLOSS',
    debut: '2023-09-12',
    description:
      'ホロライブDEV_IS ReGLOSSの一員。明るく元気な性格で、様々なコンテンツに挑戦。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('ichijou_ririka'),
    channelUrl: 'https://www.youtube.com/@IchijouRirika',
    twitterUrl: 'https://twitter.com/ichijouririka',
    catchphrase: 'りりかちゃん！',
    recommendReason: 'エネルギッシュな配信と親しみやすい人柄',
  },
  {
    id: 'juufuutei_raden',
    name: 'Juufuutei Raden',
    nameJP: '儒烏風亭らでん',
    branch: 'JP',
    generation: 'ReGLOSS',
    debut: '2023-09-13',
    description:
      'ホロライブDEV_IS ReGLOSSの一員。独特な世界観と知的な配信スタイルが特徴。',
    contentTypes: ['chatting', 'educational', 'drawing'],
    personality: ['witty', 'cool'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('juufuutei_raden'),
    channelUrl: 'https://www.youtube.com/@JuufuuteiRaden',
    twitterUrl: 'https://twitter.com/juufuuteiraden',
    catchphrase: 'らでんですわ！',
    recommendReason: '独特な世界観と知的で深い話題',
  },
  {
    id: 'todoroki_hajime',
    name: 'Todoroki Hajime',
    nameJP: '轟はじめ',
    branch: 'JP',
    generation: 'ReGLOSS',
    debut: '2023-09-14',
    description:
      'ホロライブDEV_IS ReGLOSSの一員。パワフルな性格と高いエンターテイメント性。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['energetic', 'witty'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('todoroki_hajime'),
    channelUrl: 'https://www.youtube.com/@TodorokiHajime',
    twitterUrl: 'https://twitter.com/todorokihajime',
    catchphrase: 'はじめちゃん！',
    recommendReason: 'パワフルでエネルギッシュな配信スタイル',
  },
]