/* eslint-disable no-unused-vars */
import { Form, Input, Button, Checkbox, message } from 'antd'

const ReactDemo = () => {

  const functionClick=(e) => {
    e.preventDefault()
    message.info('点击了', 1, () => {console.log(e)})
  }


  

  return (
    <form onSubmit={functionClick}>
      <label>
        名字:<input type='text' name='name' />
      </label>
      <label>
        密码:<input type='password' name='password' />
      </label>
      <input type="submit" value='提交' />
    </form>
  )
}

export default ReactDemo