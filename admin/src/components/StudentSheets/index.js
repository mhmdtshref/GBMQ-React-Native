import React, { Component } from "react";
import cookie from "react-cookies";
import {
  Title,
  StyledButton,
  StyledLogoutButton
} from "./index.style";

class StdSheets extends Component {



  downloadSheets = () => {
    window.open("/getStatisticsFile", "_blank");
  };

  logout = () => {
      cookie.remove("id");
      this.props.setLoginState(1);
  };

  render() {
        return <React.Fragment>
          <Title>GBMQ Students Sheets</Title>
            <StyledButton onClick={this.downloadSheets}>Download Sheets</StyledButton>
            <StyledLogoutButton onClick={this.logout}>Logout</StyledLogoutButton>
        </React.Fragment>
    }
}

export default StdSheets;
