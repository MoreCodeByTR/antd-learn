import React, { Component } from 'react'
import {createStore} from 'redux'
import { Button } from 'antd'

const reducer=(state=0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state+1
    case 'DECREMENT': return state-1
    default: return state
  }
}

const store=createStore(reducer)

store.subscribe(() => {
  console.log(store.getState(), 'state')
})

export default class ReduxCount extends Component {
  constructor() {
    super()
    this.state={
      value: store.getState()
    }
    store.subscribe(() => {
      this.setState({value: store.getState()})
    })
  }

  render() {
    const {value}=this.state
    return (
      <div>
        <h2>{value}</h2>
        <Button onClick={() => {store.dispatch({type: 'INCREMENT'})}}>+</Button>
        <Button onClick={() => {store.dispatch({type: 'DECREMENT'})}}>-</Button>
      </div>
    )
  }
}
