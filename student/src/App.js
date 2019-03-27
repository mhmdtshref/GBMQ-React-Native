import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import Start from './components/Pages/Start';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">

    <Route exact path='/'/>
    <Route path='/Login' component={Login}/>
    <Route exact path='/signup' component = {Signup}/>
    <Route exact path='/start' component = {Start}/>
    <Route path="/quiz/" render={(props) => <Quiz {...props} quizId={1} /> }  />
    </div>
    </Router>

  );
}
}


export default App;
