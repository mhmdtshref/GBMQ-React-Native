import React, { Component } from 'react';
import './App.css';
import AdminLogin from './components/AdminLogin';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginState: null,
        };
    }

    setLoginState = (loginState) => {
        this.setState({ loginState }, console.log("State:: ", this.state));
    };

    render() {
        return <AdminLogin setLoginState={this.setLoginState} />;
    }
}

export default App;
