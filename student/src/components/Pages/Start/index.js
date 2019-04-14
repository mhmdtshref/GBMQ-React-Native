import React, { Component } from "react";
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledImg,
  StyledBtn
} from "./index.style";
import cookie from "react-cookies";
import bg from "./start-bg.png";
import startImg from "./start-img.png";

class Start extends Component {

   constructor(props){
     super(props)
   }


   onClickStart = () => {
       const { history } = this.props;
       this.props.onStartAction(1,history);
   };

    onClickLogout = () => {
       cookie.remove("id");
       this.props.history.push("/login");
    };

  render() {
    return (
      <React.Fragment>
        <StyledPage>
          <StyledBk src={bg} />
          <Title>Great British Money</Title>
          <Title1>Quiz</Title1>
          <StyledImg src={startImg} />
          <StyledBtn onClick = {this.onClickStart}> Start first Quiz </StyledBtn>
            <StyledBtn onClick={this.onClickLogout}>Logout</StyledBtn>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Start;
