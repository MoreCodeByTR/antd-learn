import { Form, Input, Button, Checkbox } from 'antd'

const FormDemo = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
        name="basic"
        labelCol={{
        span: 8
      }}
        wrapperCol={{
        span: 8
      }}
        initialValues={{
        remember: true,
        username: 'mysite'
      }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
      <Form.Item
          label="Username"
          name="username"
          rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        {/* <Input /> */}
        <Input addonBefore="http://" addonAfter=".com" />
      </Form.Item>

      <Form.Item
          label="Password"
          name="password"
          rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
          wrapperCol={{
          offset: 8,
          span: 16
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormDemo