import React from 'react'
import { Carousel, Flex } from 'antd-mobile'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Nav1 from 'assets/images/nav-1.png'
import Nav2 from 'assets/images/nav-2.png'
import Nav3 from 'assets/images/nav-3.png'
import Nav4 from 'assets/images/nav-4.png'

export default class Home extends React.Component {
  state = {
    data: [],
    // 当轮播图没渲染之前给外面的盒子一个高度
    imgHeight: 212,
    // 轮播图 不自动不放 给他一个阀门 数据回来了就打开阀门渲染轮播图 没回来之前就关闭不渲染轮播图
    isLoaded: false
  }
  async fetchSwiper() {
    const res = await Axios.get('http://localhost:8080/home/swiper')
    const { body } = res.data
    this.setState({
      data: body,
      isLoaded: true
    })
  }
  componentDidMount() {
    this.fetchSwiper()
  }
  renderSwiper() {
    return (
      this.state.isLoaded && (
        <Carousel autoplay infinite>
          {this.state.data.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{
                display: 'inline-block',
                width: '100%'
              }}
            >
              <img
                src={`http://localhost:8080${val.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
      )
    )
  }
  render() {
    return (
      <div className="homes">
        <div className="swiper" style={{ height: this.state.imgHeight }}>
          {this.renderSwiper()}
        </div>

        <div className="nav">
          <Flex>
            <Flex.Item>
              <Link to="/home/house">
                <img src={Nav1} alt="" />
                <p>整租</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/home/house">
                <img src={Nav2} alt="" />
                <p>合租</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/map">
                <img src={Nav3} alt="" />
                <p>地图找房</p>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/rent">
                <img src={Nav4} alt="" />
                <p>去出租</p>
              </Link>
            </Flex.Item>
          </Flex>
        </div>

        <div className="group">
          <h3>
            <span style={{ float: 'right' }}>更多</span>租房小组
          </h3>
          <div className="grid">
            <ul>
              <li>
                <Flex>
                  <div className="left">
                    <p>家族回龙观</p>
                    <p>家族回龙观</p>
                  </div>
                  <div className="right">
                    <img src={Nav4} alt="" style={{ width: 55, height: 55 }} />
                  </div>
                </Flex>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
