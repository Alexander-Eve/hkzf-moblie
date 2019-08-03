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

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/home" component={Home} />
            <Route path="/map" component={Map} />
            <Route path="/city" component={City} />
            <Redirect from="/" to="/home/homes" />
          </Switch>
        </div>
      </Router>
    )
  }
}
