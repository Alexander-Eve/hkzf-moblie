import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Homes from './Homes'
import House from './House'
import News from './News'
import Mine from './Mine'
import NotFound from '../../common/404'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: props.location.pathname
    }
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
            <TabBar.Item
              title="首页"
              key="首页"
              icon={<i className="iconfont icon-ind" />}
              selectedIcon={<i className="iconfont icon-ind" />}
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home'
                })
                this.props.history.push('/home')
              }}
            />
            <TabBar.Item
              icon={<i className="iconfont icon-findHouse" />}
              selectedIcon={<i className="iconfont icon-findHouse" />}
              title="找房"
              key="找房"
              selected={this.state.selectedTab === '/home/house'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/house'
                })
                this.props.history.push('/home/house')
              }}
            />
            <TabBar.Item
              icon={<i className="iconfont icon-infom" />}
              selectedIcon={<i className="iconfont icon-infom" />}
              title="资讯"
              key="资讯"
              dot
              selected={this.state.selectedTab === '/home/news'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/news'
                })
                this.props.history.push('/home/news')
              }}
            />
            <TabBar.Item
              icon={<i className="iconfont icon-my" />}
              selectedIcon={<i className="iconfont icon-my" />}
              title="我的"
              key="我的"
              selected={this.state.selectedTab === '/home/mine'}
              onPress={() => {
                this.setState({
                  selectedTab: '/home/mine'
                })
                this.props.history.push('/home/mine')
              }}
            />
          </TabBar>
        </div>
      </div>
    )
  }
}
