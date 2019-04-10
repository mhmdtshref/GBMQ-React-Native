import React, { Component } from "react";
import axios from 'axios';
import MainForm from "../../Form";
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledSpan,
  StyledLink,
  StyledDiv,
  StyledB,
} from "./index.style";
import bg from "./bg.png";
import b from "./b.png";



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
    onSubmitAction = (values) => new Promise ((resolve, reject) => {
      const { username, password } = values;
      const { history } = this.props;
      axios
        .post("/login", { username, password })
        .then(({ data }) => {
          if (data.success) {
            history.push("/");
            resolve();
          } else {
            reject(new Error('Username and password is not matched'));
          }
        })
        .catch(error => {
          this.setState({ error: error.message });
          reject();
        });
    });



  render() {
    const initialValues = { name: "", password: "" };
    const fields = [
      {
        type: "text",
        name: "username",
        placeholder: "Name"
      },
      {
        type: "password",
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
          <StyledB src={b} />
          <MainForm
            fields={fields}
            action={this.onSubmitAction}
            operationName="Login"
            initialValues={initialValues}
          />
          <StyledDiv>
            <StyledSpan>New User ?</StyledSpan>
            <StyledLink to="/signup"> Signup </StyledLink>
          </StyledDiv>
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default Login;
