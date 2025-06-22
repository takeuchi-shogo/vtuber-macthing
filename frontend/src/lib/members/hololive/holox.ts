import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const holoXMembers: HoloMember[] = [
  {
    id: 'laplus_darknesss',
    name: 'La+ Darknesss',
    nameJP: 'ラプラス・ダークネス',
    branch: 'JP',
    generation: 'holoX',
    debut: '2021-11-26',
    description:
      '秘密結社holoXの総帥。小柄だが威厳ある（？）振る舞いとゲーム配信が人気。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['mischievous', 'energetic'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('laplus_darknesss'),
    channelUrl: 'https://www.youtube.com/@LaplusDarknesss',
    twitterUrl: 'https://twitter.com/laplusdarknesss',
    catchphrase: 'YMD！YMD！',
    recommendReason: '小悪魔的な魅力とゲーム実況の面白さ',
  },
  {
    id: 'takane_lui',
    name: 'Takane Lui',
    nameJP: '鷹嶺ルイ',
    branch: 'JP',
    generation: 'holoX',
    debut: '2021-11-27',
    description:
      '秘密結社holoXの幹部。クールな見た目と優しい性格のギャップが魅力。',
    contentTypes: ['chatting', 'singing', 'gaming'],
    personality: ['cool', 'motherly'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['afternoon', 'evening'],
    streamLength: 'medium',
    profileImage: getIconPath('takane_lui'),
    channelUrl: 'https://www.youtube.com/@TakaneLui',
    twitterUrl: 'https://twitter.com/takanelui',
    catchphrase: 'こんルイ〜！',
    recommendReason: 'お姉さん的な優しさとクールな魅力',
  },
  {
    id: 'hakui_koyori',
    name: 'Hakui Koyori',
    nameJP: '博衣こより',
    branch: 'JP',
    generation: 'holoX',
    debut: '2021-11-28',
    description:
      '秘密結社holoXの研究者。朝活配信と長時間配信が多く、研究熱心な性格。',
    contentTypes: ['chatting', 'gaming', 'educational'],
    personality: ['energetic', 'witty'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['morning', 'afternoon', 'evening'],
    streamLength: 'long',
    profileImage: getIconPath('hakui_koyori'),
    channelUrl: 'https://www.youtube.com/@HakuiKoyori',
    twitterUrl: 'https://twitter.com/hakuikoyori',
    catchphrase: 'こよりの朝こよ〜！',
    recommendReason: '朝活配信と研究熱心な長時間配信',
  },
  {
    id: 'sakamata_chloe',
    name: 'Sakamata Chloe',
    nameJP: '沙花叉クロヱ',
    branch: 'JP',
    generation: 'holoX',
    debut: '2021-11-29',
    description:
      '秘密結社holoXの掃除屋。シャチのフードが特徴的で、歌唱力が高い。',
    contentTypes: ['singing', 'chatting', 'gaming'],
    personality: ['cool', 'natural'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('sakamata_chloe'),
    channelUrl: 'https://www.youtube.com/@SakamataChloe',
    twitterUrl: 'https://twitter.com/sakamatachloe',
    catchphrase: 'ばんちゃ〜！',
    recommendReason: '独特な声と高い歌唱力',
  },
  {
    id: 'kazama_iroha',
    name: 'Kazama Iroha',
    nameJP: '風真いろは',
    branch: 'JP',
    generation: 'holoX',
    debut: '2021-11-30',
    description:
      '秘密結社holoXの用心棒。忍者らしい俊敏さと、意外と天然な一面がある。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['natural', 'energetic'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('kazama_iroha'),
    channelUrl: 'https://www.youtube.com/@KazamaIroha',
    twitterUrl: 'https://twitter.com/kazamairohach',
    catchphrase: 'でござる〜！',
    recommendReason: '忍者キャラと天然な反応のギャップ',
  },
]