import React, { Component } from 'react'
import {Rate} from 'antd'
export default class MyRate extends Component {

  onValueChange=(value) => {
    console.log(value)
  }

  render() {
    return (
      <div>
        <Rate allowHalf character='Ss' onChange={this.onValueChange} />
      </div>
    )
  }
}
