import React, { Component } from 'react'
import { Checkbox } from 'antd'

function onChange(e) {
  console.log(e)
  console.log(`checked=${e.target.checked}`)
}

export default class MyCheckbox extends Component {
  render() {
    return (
      <div>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </div>
    )
  }
}
