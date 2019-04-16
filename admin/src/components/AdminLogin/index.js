import React, { Component } from "react";
import {
  Title,
  StyledForm,
  StyledBg,
  StyledButton
} from "./index.style";
import Field from "../Field";
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
        console.log("VALUES: ", this.state.values);
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
