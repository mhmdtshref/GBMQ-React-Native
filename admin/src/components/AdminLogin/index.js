import React, { Component } from "react";
import axios from 'axios';
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledCenteredDiv,
} from "./index.style";
import bg from "./bg.png";


class AdminLogin extends Component {
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
      .post("/admin/login", { username, password })
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

  PasswordhandleChange = ({ target: { name, value } }) => {
   this.setState({ username: { ...this.state.username, [name]: value } });
  };

 UsernamehandleChange = ({ target: { name, value } }) => {
  this.setState({ password: { ...this.state.username, [name]: value } });
  };

  handleSubmitForm = event => {
    event.preventDefault();
  };


  render() {
  return (
    <React.Fragment>
      <StyledPage>
        <StyledBk src={bg} />
          <StyledCenteredDiv>
              <Title>GBMQ Login</Title>
          </StyledCenteredDiv>
          <form onSubmit={this.handleSubmitForm}>
            <Label>USERNAME</Label>
            <input
              className="login-input"
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
            />
            <Label>PASSWORD</Label>
            <input
              className="login-input"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="btn1" onClick={this.onSubmitAction}>
              Log in
            </button>
          </form>
      </StyledPage>
    </React.Fragment>
  );
  }
}

export default AdminLogin;
