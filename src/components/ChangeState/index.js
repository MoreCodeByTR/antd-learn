import  { Component } from 'react'
import { Button } from 'antd'

class ChangeState extends Component {
  constructor(props) {
    super(props)
    this.state={
      counter: 10
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
   if(prevState.counter>30) 
     return 'state>30'
   

   return null
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot)
  }

  handleClick=() => {
    this.setState((state, props) => {
      return{counter: state.counter+props.steps}
    }, () => {
      console.log(this.state)
    })
  }

  createMarkup=() => {
    return {__html: 'First &middot; Second'}
  }
  

  render() {
    return (<>
    <div dangerouslySetInnerHTML={this.createMarkup()} />
    <div>This is valid HTML &amp; JSX at the same time.</div>
    <h1>{this.state.counter}</h1>
    <Button type='primary' onClick={this.handleClick}>改变</Button>
    </>)
  }

}

export default ChangeState
