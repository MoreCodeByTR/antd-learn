import React, { Component } from 'react'
import { Skeleton } from 'antd'
export default class MySkeleton extends Component {
  render() {
    return (
      <div>
        <Skeleton avatar active paragraph={{ rows: 4 }} />
      </div>
    )
  }
}
