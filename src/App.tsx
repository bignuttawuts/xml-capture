/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Tree } from 'antd'
import { useState } from 'react'

import { XMLParser } from 'fast-xml-parser'
import { initialForm } from './constants/constants'
import { toTreeData } from './utils/transform'
import { TreeData } from './types'
// import { TreeData, toTreeData } from './utils/transform'

const { TextArea } = Input

type FormProps = {
  rawXml: string
}
function App() {

  // const [conditions, setConditions] = useState<Condition[]>([
  //   {
  //     //key: 'TransactionLogLookupResponse.LogDocuments.Transaction.RetailTransaction.LineItem.OperatorBypassApproval.PolicyRuleManager.Policy.PolicyRule.BusinessAction',
  //     key: 'TransactionLogLookupResponse.LogDocuments.Transaction.RetailTransaction',
  //     operator: 'contain',
  //     value: ''
  //   }
  // ])
  const [treeData, setTreeData] = useState<TreeData[]>([])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormValueChange = (args: FormProps) => {
    const options = {
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      allowBooleanAttributes: true,
    };
    const parser = new XMLParser(options)
    const rawJson = parser.parse(args.rawXml)

    const treeData = toTreeData(markMatched(rawJson))
    setTreeData(treeData)
  }

  const markMatched = (rawJson: any) => {
    // conditions.forEach((condition: Condition) => {
    //   const paths = condition.key.split('.')
    //   let pointer = rawJson
    //   paths.forEach((path: string) => {
    //     // console.log('path', path, typeof pointer[path], pointer[path])
    //     if (typeof pointer[path] === 'object') {
    //       pointer = pointer[path]
    //       console.log('pointer', pointer)
    //       pointer.matched = true
    //       // if (Array.isArray(pointer[path])) {
    //       //   pointer[path].forEach((element:any)=>{
    //       //     element[path]
    //       //   })
    //       // }
    //     }// else if (typeof pointer[path])
    //   })
    // })
    return rawJson
  }

  return (
    <>
      <Form
        initialValues={initialForm}
        layout='vertical'
        onValuesChange={handleFormValueChange}
      >
        <Form.Item label="Raw XML" name="rawXml">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
      <Tree
        showLine
        treeData={treeData}
      />
    </>
  )
}

export default App
