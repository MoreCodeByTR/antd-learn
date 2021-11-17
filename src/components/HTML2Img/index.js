/* eslint-disable no-debugger */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { Button, Modal, Input, Image, Radio } from "antd"
import html2canvas from "html2canvas"
import checkIcon from "../../assets/imgs/check.png"
import "./index.css"


function HTML2Img() {
  console.log('rerender')
  const activityImg =
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic38.nipic.com%2F20140302%2F13363337_203218298173_2.jpg&refer=http%3A%2F%2Fpic38.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636797152&t=031eeb1a1920a2f42b023a244946ae3f"

  const [isVisible, setVisible] = useState(false)
  const [bkgUrl, setBkgUrl] = useState(null)
  const [title, setTitle] = useState("会员卡优惠")
  const [content, setContent] = useState("每斤优惠99元")
  const [color, setColor] = useState("#000000")
  const [cardUrl, setCardUrl]=useState(activityImg)
  const[currentChooseUrl, setCurrentChooseUrl]=useState(null)
  // let currentChooseUrl=null
  let myName='tr'

  const [checkIndex, setCheckIndex] = useState(null)

  const imgList = [
    "https://storage.360buyimg.com/xihe-admin/xihe_home_new_one.png",
    "https://storage.360buyimg.com/xihe-admin/beijing_one.jpg",
    "https://storage.360buyimg.com/xihe-admin/jk_two.jpg",
    "https://storage.360buyimg.com/xihe-admin/suzhou_three.jpg",
    "https://storage.360buyimg.com/xihe-admin/xihe_home_new_one.png",
    "https://storage.360buyimg.com/xihe-admin/beijing_one.jpg",
    "https://storage.360buyimg.com/xihe-admin/jk_two.jpg",
    "https://storage.360buyimg.com/xihe-admin/suzhou_three.jpg"
  ]

  
  const radioArr = [
    {
      value: "123"
    },
    {
      value: "456"
    },
    {
      value: "789"
    },
    {
      value: "102"
    }
  ]

  const createImg = () => {
    var opts = {
      useCORS: true, // 【重要】开启跨域配置
      scale: window.devicePixelRatio,
      dpi: 300
    }
    html2canvas(document.getElementById("img-container"), opts).then(
      (canvas) => {
        let url = canvas.toDataURL("image/jpeg", 1.0)
        console.log(url)
        setBkgUrl(url)
      }
    )
  }

  const onTitleChange = (e) => {
    console.log(e)
    setTitle(e.target.value)
  }

  const onContentChange = (e) => {
    console.log(e)
    setContent(e.target.value)
  }

  const onColorChange = (e) => {
    console.log(e)
    setColor(e.target.value)
  }

  const onBkgChange = (e) => {
    console.log(e.target.value)
  }

  const onCheckIndexChange=(e) => {
    console.log(currentChooseUrl)
    console.log(e.currentTarget)
    setCheckIndex(e.currentTarget.dataset.index)
    // currentChooseUrl=e.currentTarget.dataset.url
    setCurrentChooseUrl(e.currentTarget.dataset.url)
    console.log(currentChooseUrl)
    myName='aa'
    console.log(myName)
   
  }

  const showMadal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    myName='bb'
    console.log(myName)
    console.log(currentChooseUrl)
    setCardUrl(currentChooseUrl)
    setCheckIndex(null)
    setVisible(false)
  }
  

  const handleCancel = () => {
    setCheckIndex(null)
    setVisible(false)
  }

  useEffect(() => {
    console.log('change:', imgList)
  }, [imgList])

  return (
    <>
      <div id="container">
        <div
            id="img-container"
            className="img-container"
            style={{ backgroundImage: `url(${cardUrl})` }}
        >
          <div className="activity-title">
            <h2>{title}</h2>
          </div>
          <div className="activity-content-container">
            <h1 style={{ color: `${color}` }}>办500元会员卡</h1>
            <h1 style={{ color: `${color}` }}>{content}</h1>
          </div>
          <div className="activity-time">
            <h2>活动时间：2021.10.11-2021.10.30</h2>
          </div>
        </div>
      </div>
      <div className="activity-form">
        <Input placeholder="输入活动标题" onChange={onTitleChange} />
        <Input placeholder="输入活动内容" onChange={onContentChange} />
        <Input
            type="color"
            placeholder="选择文字颜色"
            onChange={onColorChange}
        />
      </div>
      <Button type="primary" onClick={createImg}>
        生成海报
      </Button>
      <Button type="primary" onClick={showMadal}>
        更换背景图片
      </Button>

      <img src={bkgUrl} style={{ width: "50%" }} />
      <Modal
          width={500}
          title="活动卡片背景色选择:"
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
      >

        <div className="activity-card-container">
          {imgList.map((item, index) => (
            <div
                className="activity-background-item"
                style={{ backgroundImage: `url(${item})` }}
                data-index={index}
                data-url={item}
                onClick={onCheckIndexChange}
            >
              {checkIndex == index
                ? (
                  <div className="activity-check-mask">
                    <img
                        alt="选中"
                        src={checkIcon}
                        style={{ width: "24px", verticalAlign: "middle" }}
                    />
                  </div>
                )
                : null}
            </div>
          ))}
        </div>
      </Modal>
    </>
  )
}

export default HTML2Img
