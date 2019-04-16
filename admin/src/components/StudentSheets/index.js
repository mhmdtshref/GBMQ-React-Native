import React, { Component } from "react";
import {
  Title,
  StyledButton
} from "./index.style";

class StdSheets extends Component {



  downloadSheets = () => {
    window.open("/getStatisticsFile", "_blank");
  }

  render() {
        return <React.Fragment>
          <Title>GBMQ Students Sheets</Title>
          <StyledButton onClick={this.downloadSheets}>Download Sheets</StyledButton>
        </React.Fragment>
    }
}

export default StdSheets;
