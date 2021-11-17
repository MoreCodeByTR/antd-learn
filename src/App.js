/* eslint-disable no-unused-vars */
import React, { Component, Profiler } from 'react'
import { Table, Tag, Space, Switch, message } from 'antd'
import ModalDemo from './components/Modal'
import FormDemo from './components/Form'
import ChangeState from './components/ChangeState'
import EssayForm from './components/ReactForm'
import FilterableProductTable from './components/ProductTable'
import ContextDemo from './components/ReactContext'
import FragementDemo from './components/ReactFragements'
import { PRODUCTS } from './config/products'
import ReactHook from './components/ReactHook'
import MyGrid from './components/Antd/MyGrid'

import './App.css'
import MyBreadcrumb from './components/Antd/MyBreadcrumb'
import MyDropdown from './components/Antd/MyDropdown'
import MyMenu from './components/Antd/MyMenu'
import MyPaginatin from './components/Antd/MyPaginatin'
import MyCheckbox from './components/Antd/MyCheckbox'
import MyDatePicker from './components/Antd/MyDatePicker'
import MyRate from './components/Antd/MyRate'
import MySkeleton from './components/Antd/MySkeleton'
import MyBackTop from './components/Antd/MyBackTop'
import ReduxCount from './components/ReduxDemo/ReduxCount'
import Info from './components/LabelInfoGroup'
import HTML2Img from './components/HTML2Img'
import ReactDemo from './components/ReactDemo'

let handleChange = (checked, record) => {
  console.log('checked=>', checked)
  console.log('record=>', record)
  let status = checked ? '上架' : '下架'
  message.info({ content: `${record.name}${status}成功`, duration: 1 })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text, record) => (
      <Switch
          checkedChildren="上架"
          unCheckedChildren="下架"
          defaultChecked={text === 1}
          onChange={(checked) => {
          handleChange(checked, record)
        }}
      />
    )
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') color = 'volcano'

          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const data = [
  {
    id: 123,
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    status: 1
  },
  {
    id: 456,
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    status: 0
  },
  {
    id: 789,
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    status: 1
  }
]

class App extends Component {
  onRenderCallback = (
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) => {
    // 合计或记录渲染时间。。。
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    )
  }

  render() {
    return (
      <>
      <ReactDemo />
      {/* <HTML2Img />
      <Info />
       <ReduxCount />
        <MyBackTop />
        <MySkeleton />
        <MyRate />
        <MyDatePicker />
        <MyCheckbox />
        <MyPaginatin />
        <MyMenu />
        <MyDropdown />
        <MyBreadcrumb />
        <MyGrid />
        <Table columns={columns} dataSource={data} />
        <ModalDemo />
        <FormDemo />
        <Profiler id="ChangeState" onRender={this.onRenderCallback}>
          <ChangeState steps={parseInt(Math.random() * 10)} />
        </Profiler>
        <ReactHook name="reacthook" />
        <EssayForm />
        <FilterableProductTable products={PRODUCTS} />
        <ContextDemo />
        <FragementDemo /> */}
      </>
    )
  }
}

export default App
