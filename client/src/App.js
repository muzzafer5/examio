import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/home/home'
import Navbar from './components/home/navbar'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route exact path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;

