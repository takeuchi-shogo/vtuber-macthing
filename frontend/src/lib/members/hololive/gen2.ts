import { HoloMember } from '@/types'
import { iconMapping } from '../../icon-mapping'

// アイコンパスを取得するヘルパー関数
function getIconPath(memberId: string): string {
  const fileName = iconMapping[memberId]
  return fileName
    ? `/images/hololive/icon/${fileName}`
    : `/images/hololive/icon/${memberId}.png`
}

export const gen2Members: HoloMember[] = [
  {
    id: 'minato_aqua',
    name: 'Minato Aqua',
    nameJP: '湊あくあ',
    branch: 'JP',
    generation: '2期生',
    debut: '2018-08-08',
    description:
      'ゲーマーメイドVtuber。ゲームの腕前はトップクラスで、特に音ゲーやFPSが得意。',
    contentTypes: ['gaming', 'singing'],
    personality: ['natural', 'cool'],
    streamingStyle: 'performance_focused',
    languages: ['JP'],
    typicalStreamTimes: ['evening', 'late_night'],
    streamLength: 'long',
    profileImage: getIconPath('minato_aqua'),
    channelUrl: 'https://www.youtube.com/@MinatoAqua',
    twitterUrl: 'https://twitter.com/minatoaqua',
    catchphrase: 'どうもみなさんこんあくあ〜！',
    recommendReason: '高いゲームスキルと独特な天然さのギャップが魅力',
  },
  {
    id: 'murasaki_shion',
    name: 'Murasaki Shion',
    nameJP: '紫咲シオン',
    branch: 'JP',
    generation: '2期生',
    debut: '2018-08-17',
    description:
      '魔法使いの幼女（自称）Vtuber。可愛らしい見た目と小悪魔的な性格のギャップが魅力。',
    contentTypes: ['gaming', 'chatting', 'singing'],
    personality: ['mischievous', 'natural'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'short',
    profileImage: getIconPath('murasaki_shion'),
    channelUrl: 'https://www.youtube.com/@MurasakiShion',
    twitterUrl: 'https://twitter.com/murasakishionch',
    catchphrase: 'しおーん！',
    recommendReason: '気ままな配信スタイルと可愛らしい反応が癒し',
  },
  {
    id: 'nakiri_ayame',
    name: 'Nakiri Ayame',
    nameJP: '百鬼あやめ',
    branch: 'JP',
    generation: '2期生',
    debut: '2018-09-03',
    description:
      '鬼の女の子Vtuber。可愛らしい声と恥ずかしがり屋な性格で「余」という一人称が特徴。',
    contentTypes: ['gaming', 'chatting'],
    personality: ['natural', 'calm'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'short',
    profileImage: getIconPath('nakiri_ayame'),
    channelUrl: 'https://www.youtube.com/@NakiriAyame',
    twitterUrl: 'https://twitter.com/nakiriayame',
    catchphrase: 'こんなきりー！',
    recommendReason: '癒し系の声と自然体な配信スタイル',
  },
  {
    id: 'yuzuki_choco',
    name: 'Yuzuki Choco',
    nameJP: '癒月ちょこ',
    branch: 'JP',
    generation: '2期生',
    debut: '2018-09-05',
    description:
      '保健室の先生（悪魔）Vtuber。ASMRや癒し系配信が得意で、大人の魅力がある。',
    contentTypes: ['asmr', 'chatting', 'gaming'],
    personality: ['calm', 'motherly'],
    streamingStyle: 'laid_back',
    languages: ['JP'],
    typicalStreamTimes: ['late_night'],
    streamLength: 'medium',
    profileImage: getIconPath('yuzuki_choco'),
    channelUrl: 'https://www.youtube.com/@YuzukiChoco',
    twitterUrl: 'https://twitter.com/yuzukichococh',
    catchphrase: 'ちょこ〜ん！',
    recommendReason: '深夜のASMR配信で癒されたい人におすすめ',
  },
  {
    id: 'oozora_subaru',
    name: 'Oozora Subaru',
    nameJP: '大空スバル',
    branch: 'JP',
    generation: '2期生',
    debut: '2018-09-16',
    description:
      '体育会系の元気なVtuber。明るく爽やかなトークと笑い声が特徴的。',
    contentTypes: ['gaming', 'chatting', 'collab'],
    personality: ['energetic', 'witty'],
    streamingStyle: 'chat_interactive',
    languages: ['JP'],
    typicalStreamTimes: ['evening'],
    streamLength: 'medium',
    profileImage: getIconPath('oozora_subaru'),
    channelUrl: 'https://www.youtube.com/@OozoraSubaru',
    twitterUrl: 'https://twitter.com/oozorasubaru',
    catchphrase: 'しゅばしゅば〜！',
    recommendReason: '明るいトークと豊かなリアクションで元気をもらえる',
  },
]