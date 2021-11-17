import React, { Component } from 'react'
import { DatePicker, Space } from 'antd'

const {RangePicker}=DatePicker

export default class MyDatePicker extends Component {
  onChange = (data, dataString) => {
    console.log(data, dataString)
  }

  render() {
    return (
      <Space direction="vertical">
        <DatePicker onChange={this.onChange} showTime />
        <DatePicker picker="week" onChange={this.onChange} />
        <DatePicker picker="month" onChange={this.onChange} />
        <DatePicker picker="quarter" onChange={this.onChange} />
        <DatePicker picker="year" onChange={this.onChange} />
        <RangePicker onChange={this.onChange} />
      </Space>
    )
  }
}
