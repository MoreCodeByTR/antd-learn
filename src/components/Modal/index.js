import React, { useState } from 'react'
import { Button, Modal } from 'antd'

function ModalDemo() {
  const [isVisible, setVisible]=useState(false)

  const showMadal =() => {
    setVisible(true)
  }

  const handleOk=() => {
    setVisible(false)
  }

  const handleCancel=() => {
    setVisible(false)
  }
    return (
     <>
     <Button type='primary' onClick={showMadal}>显示Modal</Button>
     <Modal title='对话框' visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
       <p>madal 内容</p>
     </Modal>
     </>
    )

}

export default ModalDemo
