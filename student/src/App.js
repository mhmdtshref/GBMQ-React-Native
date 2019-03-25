import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';



class App extends Component {
  render() {
  return (
    <Router>
    <div>
    <Route exact path='/'/>
    </div>
    </Router>

  );
}
}


export default App;
