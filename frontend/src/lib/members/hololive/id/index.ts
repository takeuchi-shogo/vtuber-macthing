import { HoloMember } from '@/types'
import { idGen1Members } from './gen1'
import { idGen2Members } from './gen2'
import { idGen3Members } from './gen3'

// すべてのホロライブIDメンバーを統合
export const hololiveIDMembers: HoloMember[] = [
  ...idGen1Members,
  ...idGen2Members,
  ...idGen3Members,
]

// 世代別エクスポート
export {
  idGen1Members,
  idGen2Members,
  idGen3Members,
}