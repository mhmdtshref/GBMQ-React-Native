import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Pages/Login';
import Result from './components/Pages/Result';
import Signup from './components/Pages/Signup';
import Start from './components/Pages/Start';
import Home from './components/Pages/Home';
import Quiz from './components/Quiz';
import Comparison from './components/Pages/Comparison';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">

    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route exact path='/signup' component = {Signup}/>
    <Route exact path='/start' component = {Start}/>
    <Route path="/quiz/" render={(props) => <Quiz {...props} /> }  />
    <Route path='/result' component={Result}/>
    <Route exact path='/activities' component = {Start}/>
    <Route exact path='/comparison' component = {Comparison}/>
    </div>
    </Router>

  );
}
}


export default App;
