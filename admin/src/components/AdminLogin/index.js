import React, { Component } from "react";
import {
  Title,
  StyledForm,
  StyledBg,
  StyledButton
} from "./index.style";
import Field from "../Field";
import axios from "axios";
import bg from "./bg.png";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: {},
        };
    };

    onInputChange = (name, value) => {
        this.setState((prevState) => ({ values: { ...prevState.values, [name]: value } }));
    };

    onSubmitAction = (event) => {
        event.preventDefault();
        const { username, password } = this.state.values;
        axios.post('/admin/login', { username, password })
            .then(({ data }) => {
                if(!data.success){
                    this.props.setLoginState(false);
                } else {
                    this.props.setLoginState(true);
                }
            })
    };

  render() {
      return <React.Fragment>
          <StyledBg src={bg}/>
          <Title>GBMQ Login</Title>
          <StyledForm>
              <Field type="text" name="username" placeholder="Enter Username..." label="Username" onChange={this.onInputChange} />
              <Field type="password" name="password" placeholder="Enter Password..." label="Password" onChange={this.onInputChange} />
              <StyledButton onClick={this.onSubmitAction}>Login</StyledButton>
          </StyledForm>
      </React.Fragment>;
  }
}
export default Login;
