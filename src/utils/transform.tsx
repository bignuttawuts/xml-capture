/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import type { DataNode } from 'antd/es/tree'

export const toTreeData = (datas: object, renderTitle: (titleData: any) => ReactNode, parentReal: string = '', parentSearch: string = '', parentIsArray: boolean = false) => {
  let keys: string[] = []
  const treeDatas: DataNode[] = []
  for (const [tag, value] of Object.entries(datas)) {
    const pathReal = `${parentReal}.${tag}`
    keys.push(pathReal)
    const pathSearch = parentIsArray ? `${parentSearch}[*]` : `${parentSearch}.${tag}`
    if (typeof value === 'object') {
      const isArray = Array.isArray(value)
      const treeDataWrap = toTreeData(value, renderTitle, pathReal, pathSearch, isArray)
      keys = keys.concat(treeDataWrap.keys)
      const titleData = { text: tag, tag, value, path: `$${pathSearch}`, isArray }
      treeDatas.push({ key: pathReal, title: renderTitle(titleData), children: treeDataWrap.treeDatas })
    } else {
      const titleData = { text: `${tag} : ${value}`, tag, value, path: `$${pathSearch}`, realPath: pathReal, isArray: false }
      treeDatas.push({ key: pathReal, title: renderTitle(titleData), children: undefined })
    }
  }
  return { keys, treeDatas }
}
