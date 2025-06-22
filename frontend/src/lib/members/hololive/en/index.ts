import { HoloMember } from '@/types'
import { mythMembers } from './myth'
import { promiseMembers } from './promise'
import { adventMembers } from './advent'
import { justiceMembers } from './justice'

// すべてのホロライブENメンバーを統合
export const hololiveENMembers: HoloMember[] = [
  ...mythMembers,
  ...promiseMembers,
  ...adventMembers,
  ...justiceMembers,
]

// 世代別エクスポート
export {
  mythMembers,
  promiseMembers, // IRyS + Promise/Councilメンバー
  adventMembers,
  justiceMembers,
}