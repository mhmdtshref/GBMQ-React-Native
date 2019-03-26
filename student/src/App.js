import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './components/Pages/Login';



class App extends Component {
  render() {
  return (
    <Router>
    <div>
    <Route exact path='/'/>
    <Route path='/Login' component={Login}/>
    </div>
    </Router>

  );
}
}


export default App;
