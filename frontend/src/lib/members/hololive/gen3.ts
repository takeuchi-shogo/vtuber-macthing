import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen3Members: HoloMember[] = [
  {
    id: 'usada_pekora',
    name: 'Usada Pekora',
    nameJP: '兎田ぺこら',
    branch: 'JP',
    generation: '3期生',
    debut: '2019-07-17',
    description:
      'うさ耳の女の子Vtuber。独特な笑い声「ぺこぺこぺこ」と、ゲーム実況での面白いリアクションが人気。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['energetic', 'mischievous'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'long',
    profileImage: getIconPath('usada_pekora'),
    channelUrl: 'https://www.youtube.com/@usadapekora',
    twitterUrl: 'https://twitter.com/usadapekora',
    catchphrase: 'こんぺこ！こんぺこ！こんぺこ〜！',
    recommendReason: 'エンターテイメント性の高いゲーム実況と独特なキャラクター',
  },
  {
    id: 'shiranui_flare',
    name: 'Shiranui Flare',
    nameJP: '不知火フレア',
    branch: 'JP',
    generation: '3期生',
    debut: '2019-08-07',
    description:
      'ハーフエルフのVtuber。落ち着いた配信スタイルと、歌唱力の高さが魅力。',
    contentTypes: ['gaming', 'singing', 'chatting'],
    personality: ['cool', 'calm'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('shiranui_flare'),
    channelUrl: 'https://www.youtube.com/@ShiranuiFlare',
    twitterUrl: 'https://twitter.com/shiranuiflare',
    catchphrase: 'こんぬい〜！',
    recommendReason: '落ち着いた雰囲気と安定感のある配信',
  },
  {
    id: 'shirogane_noel',
    name: 'Shirogane Noel',
    nameJP: '白銀ノエル',
    branch: 'JP',
    generation: '3期生',
    debut: '2019-08-08',
    description: '騎士団長のVtuber。優しい性格と、ASMR配信での囁き声が人気。',
    contentTypes: ['asmr', 'gaming', 'chatting'],
    personality: ['motherly', 'natural'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('shirogane_noel'),
    channelUrl: 'https://www.youtube.com/@ShiroganeNoel',
    twitterUrl: 'https://twitter.com/shiroganenoel',
    catchphrase: 'のえる〜！',
    recommendReason: 'ASMR配信と温かい人柄で心地よい時間を提供',
  },
  {
    id: 'houshou_marine',
    name: 'Houshou Marine',
    nameJP: '宝鐘マリン',
    branch: 'JP',
    generation: '3期生',
    debut: '2019-08-11',
    description:
      '海賊船長のVtuber。トーク力が非常に高く、大人向けのユーモアも交えた配信が特徴。',
    contentTypes: ['chatting', 'singing', 'drawing'],
    personality: ['witty', 'energetic'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('houshou_marine'),
    channelUrl: 'https://www.youtube.com/@HoushouMarine',
    twitterUrl: 'https://twitter.com/houshoumarine',
    catchphrase: 'Ahoy!',
    recommendReason: '抜群のトーク力と豊富な話題で飽きさせない配信',
  },
]
