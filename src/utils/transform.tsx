import { Tag } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { TreeData } from '../types';

export const toTreeData = (datas: object) => {
  const treeDatas: TreeData[] = []
  for (const [tag, children] of Object.entries(datas)) {
    const key = uuidv4()
    if (typeof children === 'object') {
      const treeData = toTreeData(children)
      const title = <Tag>{tag}</Tag>
      treeDatas.push({ key, title, children: treeData, })
    } else {
      const title = <Tag>{tag}={children}</Tag>
      treeDatas.push({ key, title, children: [], })
    }
  }
  return treeDatas
}
