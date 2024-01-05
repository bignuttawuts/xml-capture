/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Input, Layout, List, Row, Space, Tooltip, Tree, Typography } from 'antd'
import { XMLParser } from 'fast-xml-parser'
import jp from 'jsonpath'
import { useState } from 'react'

import { initialForm } from './constants/constants'
import { toTreeData } from './utils/transform'
import { CheckCircleTwoTone, CloseCircleTwoTone, PlusOutlined } from '@ant-design/icons'
import type { DataNode } from 'antd/es/tree'

const { Content } = Layout
const { TextArea } = Input
const { Title, Text } = Typography

type FormProps = {
  rawXml: string
}

function App() {
  // const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [jsonPaths, setJsonPaths] = useState<any[]>([])
  const [rawJson, setRawJson] = useState<any>({})
  const [treeData, setTreeData] = useState<DataNode[]>([])
  const [output, setOutput] = useState<DataNode[]>([])

  const renderTitle = (titleData: any) => {
    const { text, path, isArray } = titleData
    const index = jsonPaths.findIndex((jsonPath) => jsonPath.path === path)
    if (index > 0) {
      console.log('jsonPaths', jsonPaths)
      console.log('path', path)
      console.log('index', index)
    }
    return <div>
      <Space>
        <Tooltip title={path}>
          <Text style={{ color: isArray > 0 ? 'orange' : 'green' }}>{text}</Text>
          {/* <Tag color={isArray > 0 ? 'orange' : 'green'} icon={isArray ? <OrderedListOutlined /> : <FileOutlined />}>{text}</Tag> */}
        </Tooltip>
        <Button
          type='text'
          size='small'
          onClick={() => handleMoreButton(path)}
        >
          <PlusOutlined />
        </Button>
      </Space>
    </div>
  }

  const handleMoreButton = (path: string) => {
    console.log('rawJson', rawJson)
    const matched = jp.query(rawJson, path).length > 0
    setJsonPaths(current => [...current, { path, matched }])
  }

  const handleParseXML = (args: FormProps) => {
    const options = {
      ignoreAttributes: false,
      attributeNamePrefix: "Attr_",
      allowBooleanAttributes: true,
      removeNSPrefix: true,
      textNodeName: 'Text'
    };
    const xmlParser = new XMLParser(options)
    const rawJson = xmlParser.parse(args.rawXml)
    setRawJson(rawJson)
    console.log(rawJson)

    console.log('query', jp.query(rawJson, "$.TransactionLogLookupResponse.LogDocuments.Transaction.RetailTransaction.LineItem[*].OperatorBypassApproval[*].PolicyRuleManager.Policy.PolicyRule.BusinessAction[?(@.Attribute_IsApproved=='Yes' && @.Attribute_ActionType == 'AgeConfirmation')]"))
    console.log('query', jp.query(rawJson, "$.TransactionLogLookupResponse.LogDocuments.Transaction.RetailTransaction.LineItem[*].OperatorBypassApproval[*].PolicyRuleManager.Policy.PolicyRule[?(@.Attribute_IsApproved=='Yes' && @.Attribute_ActionType == 'AgeConfirmation')]"))
    const treeData = toTreeData(rawJson, renderTitle)
    setTreeData(treeData.treeDatas)

    // setExpandedKeys(treeData.keys)
  }

  const handleDelete = (removePath: string) => {
    setJsonPaths(jsonPaths.filter(jsonPath => jsonPath !== removePath))
  }

  return (
    <Layout>
      <Content style={{ height: '100vh', padding: 8 }}>
        <Title>XML Mapper</Title>
        <Row gutter={8}>
          <Col span={12} >
            <div style={{ marginBottom: 8 }}>
              <Text strong>Input XML</Text>
            </div>
            <Form
              initialValues={initialForm}
              layout='vertical'
              onFinish={handleParseXML}
            >
              <Form.Item name="rawXml">
                <TextArea rows={4} />
              </Form.Item>
              <Button type="primary" htmlType="submit">Parse XML</Button>
            </Form>
            <div style={{ marginBottom: 8 }}>
              <Text strong>XML Tree</Text>
            </div>
            <Tree showLine treeData={treeData} />
          </Col>
          <Col span={12}>
            <div style={{ marginBottom: 8 }}>
              <Text strong>JSON Path</Text>
            </div>
            <List
              dataSource={jsonPaths}
              renderItem={(jsonPath) => (
                <List.Item>
                  <Text>{jsonPath.matched ? <CheckCircleTwoTone twoToneColor='#52c41a' /> : <CloseCircleTwoTone twoToneColor='#eb2f96' />} {jsonPath.path}</Text>
                  <Button size='small' onClick={() => handleDelete(jsonPath)}>Delete</Button>
                </List.Item>
              )}
            />
            <div style={{ marginBottom: 8 }}>
              <Text strong>Query</Text>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Text strong>Projection</Text>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Text strong>Output</Text>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default App
