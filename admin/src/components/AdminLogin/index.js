import React, { Component } from "react";
import {
  Title,
  StyledForm,
  StyledField,
  StyledBg,
  StyledLabel,
  StyledPage,
  Button
} from "./index.style";
import bg from "./bg.png";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
          <StyledBg src={bg} />
          <StyledForm>
            <Title>GBMQ Login</Title>
            <StyledLabel>Admin</StyledLabel>
            <StyledField
              type="text"
              name="admin"
              placeholder="Enter your name"
            />
            <StyledLabel>Password</StyledLabel>

             <StyledField
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <Button>Login</Button>
          </StyledForm>
      </React.Fragment>
    );
  }
}
export default Login;
