import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {RouteWithFooter,RouteWithNavbar,RouteWithNavbarFooter,PlainRoute} from "./route"

import Home from './components/home/home'
import Navbar from './components/home/navbar'
import Landing from './components/auth/landing'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

class App extends PureComponent {
  render () {
    return (
      <Router>
        <div className="App">
          <RouteWithFooter exact path="/" component={Landing} />
          <RouteWithNavbarFooter exact path="/home" component={Home} />
        </div>
      </Router>
    )
  }
}
export default App;

