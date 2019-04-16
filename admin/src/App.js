import React, { Component } from 'react';
import './App.css';
import { StyledLoading } from './App.style.js';
import AdminLogin from './components/AdminLogin';
import DownloadSheet from './components/StudentSheets';
import axios from 'axios';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginState: 0,
        };
    }

    setLoginState = (loginState) => {
        this.setState({ loginState }, console.log("State:: ", this.state));
    };

    componentDidMount(){
        axios.get('/admin/checkAuth')
            .then(({ data }) => {
                if(!data.success){
                    this.setLoginState(1);
                } else {
                    this.setLoginState(2);
                }
            });
    };

    render() {
        switch (this.state.loginState) {
            case 0:
                return <StyledLoading>Loading...</StyledLoading>;
            case 1:
                return <AdminLogin setLoginState={this.setLoginState}/>;
            case 2:
            default:
                return <DownloadSheet setLoginState={this.setLoginState}/>;
        }
    }
}

export default App;
