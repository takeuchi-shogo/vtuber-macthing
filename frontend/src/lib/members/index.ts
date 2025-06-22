import { HoloMember } from '@/types'
import { hololiveMembers } from './hololive'
// 将来的に追加する事務所
// import { nijisanjiMembers } from './nijisanji'
// import { vspoMembers } from './vspo'
// import { reglossMembers } from './hololive/regloss'

// すべてのメンバーを統合してエクスポート
export const holoMembers: HoloMember[] = [
  ...hololiveMembers,
  // 将来的に追加
  // ...nijisanjiMembers,
  // ...vspoMembers,
  // ...reglossMembers,
]

// 事務所別エクスポート
export { hololiveMembers } from './hololive'
// export { nijisanjiMembers } from './nijisanji'
// export { vspoMembers } from './vspo'