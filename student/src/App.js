import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Pages/Login';
import Result from './components/Pages/Result';



class App extends Component {
  render() {
  return (
    <Router>
    <div>
    <Route exact path='/'/>
    <Route path='/Login' component={Login}/>
    <Route path='/Result' component={Result}/>
    </div>
    </Router>

  );
}
}


export default App;
