import { HoloMember } from '@/types'
import { gen0Members } from './gen0'
import { gen1Members } from './gen1'
import { gen2Members } from './gen2'
import { gamersMembers } from './gamers'
import { gen3Members } from './gen3'
import { gen4Members } from './gen4'
import { gen5Members } from './gen5'
import { holoXMembers } from './holox'
import { hololiveENMembers } from './en'
import { hololiveIDMembers } from './id'
import { devisMembers } from './devis'

// ホロライブJPメンバーを統合
export const hololiveJPMembers: HoloMember[] = [
  ...gen0Members,
  ...gen1Members,
  ...gen2Members,
  ...gamersMembers,
  ...gen3Members,
  ...gen4Members,
  ...gen5Members,
  ...holoXMembers,
]

// すべてのホロライブメンバーを統合
export const hololiveMembers: HoloMember[] = [
  ...hololiveJPMembers,
  ...hololiveENMembers,
  ...hololiveIDMembers,
  ...devisMembers,
]

// 世代別エクスポート
export {
  gen0Members,
  gen1Members,
  gen2Members,
  gamersMembers,
  gen3Members,
  gen4Members,
  gen5Members,
  holoXMembers,
  hololiveENMembers,
  hololiveIDMembers,
  devisMembers,
}
