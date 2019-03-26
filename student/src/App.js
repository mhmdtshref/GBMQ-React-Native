import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';




class App extends Component {
  render() {
  return (
    <Router>
    <div>

    <Route exact path='/'/>
    <Route path='/Login' component={Login}/>
    <Route exact path='/signup' component = {Signup}/>

    </div>
    </Router>

  );
}
}


export default App;
