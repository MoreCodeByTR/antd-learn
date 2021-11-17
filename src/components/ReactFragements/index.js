import React, { Component } from 'react'

class FragementDemo extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <Cloums />
          </tr>
        </thead>
        <tbody>
          <tr>
            <Cloums />
            <Cloums />
          </tr>
        </tbody>
      </table>
    )
  }
}

// 由于有时额外的DOM节点会与原来的不匹配，例如tr、td与div
// 之间，Fragments允许你将子列表分组，无需生成多余的节点，
// 使用React.Fragment或者短语法<></>
function Cloums() {
  return (
    <React.Fragment>
      <td>汉口</td>
      <td>武昌</td>
    </React.Fragment>
  )
}

export default FragementDemo
