import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import AdminLogin from './components/AdminLogin';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route path='/adminLogin' component={AdminLogin}/>
      </div>
      </Router>
    );
  }
}

export default App;
