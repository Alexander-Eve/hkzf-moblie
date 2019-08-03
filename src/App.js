import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './views/Home'
import City from './views/City'
import Map from './views/Map'
import NotFound from './common/404'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Redirect exact from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/city" component={City} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
