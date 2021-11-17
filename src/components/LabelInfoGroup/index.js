import React, { Component } from 'react'
import { Descriptions, Image } from 'antd'
import html2canvas from 'html2canvas'

const text='京东科技融合了原京东数科技云与AI（原京东智联云）两大技术业务板块，现已成为整个京东集团对外提供技术服务的核心输出平台，拥有丰富的产业理解力、深厚的风险管理能力、用户运营能力和企业服务能力，能面向不同行业为客户提供行业应用、产品开发与产业数字化服务。'
const imageUrl=['https://storage.360buyimg.com/xihe-admin/xihe_home_new_one.png',
'https://storage.360buyimg.com/xihe-admin/beijing_one.jpg',
'https://storage.360buyimg.com/xihe-admin/jk_two.jpg',
'https://storage.360buyimg.com/xihe-admin/suzhou_three.jpg'

]

const merchantReply='谢谢亲的光顾，您的支持是我们前进的最大动力，祝您购物愉快'
export default class Info extends Component {

  constructor(props) {
    super(props)
    this.state={
      bkgUrl: null
    }
  }

   componentDidMount() {
    var opts = {
   useCORS: true, // 【重要】开启跨域配置
   scale: window.devicePixelRatio,
   dpi: 300
      }
    html2canvas(document.getElementById('img_container'), opts).then((canvas) => {
      let url=canvas.toDataURL("image/jpeg", 1.0)
      console.log(url)
      this.setState({
        bkgUrl: url
      })
  })
   }
  render() {
    return (
  <div id="img_container">
  <Descriptions title="评价详情">
    <Descriptions.Item label="商户名称">一点点</Descriptions.Item>
    <Descriptions.Item label="评价时间">2021-09-12</Descriptions.Item>
    <Descriptions.Item label="评价人">会飞的鱼</Descriptions.Item>
  </Descriptions>
  <p>评分：</p>
  <p>口味</p>
  <p>服务：</p>
  <InfoWithTitle title='评价内容' text={text} />
  <InfoWithTitle title='评价照片' imgs={imageUrl} />
  <InfoWithTitle title='商家反馈' text={merchantReply} />
  <img src={this.state.bkgUrl} style={{width: "50%"}} />
  </div>
    )
  }
}

function InfoWithTitle(props) {
  const images=props.imgs&&props.imgs.map((item) => {
   return (<div key={item} style={{marginRight: '40px', display: 'inline-block'}}>
<Image width={320} height={240} src={item} />
   </div>)
   
  })

  console.log(props.imgs)
  return(
    <div>
      <p style={{color: 'red'}}>{props.title}:</p>
      <p>{props.text}</p>
      <ul>{images}</ul>
    </div>
  )
}
