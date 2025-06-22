import { HoloMember } from '@/types'
import { reglossMembers } from './regloss'
import { flowglowMembers } from './flowglow'

// すべてのDEV_ISメンバーを統合
export const devisMembers: HoloMember[] = [
  ...reglossMembers,
  ...flowglowMembers,
]

// グループ別エクスポート
export { reglossMembers, flowglowMembers }
