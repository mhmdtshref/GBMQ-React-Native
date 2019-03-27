import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Start from './components/Pages/Start';
import Home from './components/Pages/Home';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">

    <Route exact path='/' component={Home}/>
    <Route path='/Login' component={Login}/>
    <Route exact path='/signup' component = {Signup}/>
    <Route exact path='/start' component = {Start}/>
    <Route exact path='/activities' component = {Start}/>
    <Route path="/quiz/" render={(props) => <Quiz {...props} /> }  />
    </div>
    </Router>

  );
}
}


export default App;
