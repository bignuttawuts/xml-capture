import { ReactNode } from 'react'

export interface TreeDataWrap {
  keys: string[]
  treeDatas: TreeData[]
}

export interface TreeData {
  key: string
  title: ReactNode
  children: TreeData[] | null
}

export interface Condition {
  key: string
  operator: 'equal' | 'contain'
  value: string
}