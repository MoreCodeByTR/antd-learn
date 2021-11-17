import React, { Component } from 'react'
import { Pagination } from 'antd'

export default class MyPaginatin extends Component {

  onShowSizeChange=(current, pageSize) => {
    console.log(current, pageSize)
  }

  render() {
    return (
      <div>
        <Pagination defaultCurrent={1} total={45} showQuickJumper showTotal={(total) => `共计${total}条`} onShowSizeChange={this.onShowSizeChange} />
      </div>
    )
  }
}
