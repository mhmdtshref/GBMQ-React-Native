import React, { Component } from "react";
import MainForm from "../../Form";
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledSpan,
  StyledLink,
  StyledDiv
} from "./index.style";
import bg from "./login-bg.png";

class Login extends Component {
  onSubmitAction = () => {
    return 0;
  };

  render() {
    const initialValues = { name: "", password: "" };
    const fields = [
      {
        type: "text",
        name: "name",
        placeholder: "Name"
      },
      {
        type: "text",
        name: "password",
        placeholder: "Password"
      }
    ];
    return (
      <React.Fragment>
        <StyledPage>
          <StyledBk src={bg} />
          <Title>Great British Money</Title>
          <Title1>Quiz</Title1>
          <MainForm
            fields={fields}
            action={this.onSubmitAction}
            operationName="Login"
            initialValues={initialValues}
          />
          <StyledDiv>
            <StyledSpan>New User ?</StyledSpan>
            <StyledLink> Signup </StyledLink>
          </StyledDiv>
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default Login;
