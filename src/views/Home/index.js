import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Homes from './Homes'
import House from './House'
import News from './News'
import Mine from './Mine'
import NotFound from '../../common/404'

// 因为底部导航是差不多一致的 可以提取出不同的参数然后使用循环创建
// 不能写在state中  会增加state的负重  写死一个数据列表 把导航不同的数据提取到列表中
const getList = [
  { title: '首页', icon: 'icon-ind', path: '/home' },
  { title: '找房', icon: 'icon-findHouse', path: '/home/house' },
  { title: '资讯', icon: 'icon-infom', path: '/home/news' },
  { title: '我的', icon: 'icon-my', path: '/home/mine' }
]

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: props.location.pathname
    }
  }
  // 把底部导航的渲染封装到函数里面 需要时调用
  navList() {
    return getList.map(v => (
      <TabBar.Item
        title={v.title}
        key={v.title}
        icon={<i className={`iconfont ${v.icon}`} />}
        selectedIcon={<i className={`iconfont ${v.icon}`} />}
        selected={this.state.selectedTab === v.path}
        onPress={() => {
          this.props.history.push(v.path)
        }}
      />
    ))
  }

  componentDidUpdate(props) {
    // 这是home组件更新前的props
    // console.log(props)
    // 这是home组件更新后的props
    // 因为props的改变 所以底部的高亮不能跟随地址栏而改变
    // 但是在componentDidUpdate 生命周期之中不建议设置state 如果要设置需要给一个条件
    // console.log(this.props)
    // 当两个pathname 不同时 就改变state的selectedTab的值
    props.location.pathname !== this.props.location.pathname &&
      this.setState({
        selectedTab: this.props.location.pathname
      })
  }
  render() {
    return (
      <div className="home">
        <Switch>
          <Route exact path="/home" component={Homes} />
          <Route path="/home/house" component={House} />
          <Route path="/home/news" component={News} />
          <Route path="/home/mine" component={Mine} />
          <Route component={NotFound} />
        </Switch>
        <div className="tabar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            noRenderContent
          >
            {this.navList()}
          </TabBar>
        </div>
      </div>
    )
  }
}
