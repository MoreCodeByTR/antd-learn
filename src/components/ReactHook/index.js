import React, {useState, useEffect}from 'react'
import {Button} from 'antd'

function ReactHook(props) {
  const [count, setCount]=useState(1)

  useEffect(() => {
    console.log('excute effect')
    document.title='React 学习'
    console.log(props)
  })

  return(
    <div>
      <h1>{count}</h1>
      <Button type='primary' onClick={() => setCount(count+1)}>改变</Button>
    </div>
  )
}

export default ReactHook