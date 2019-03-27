import React, { Component } from "react";
import {
  Title,
  Title1,
  StyledPage,
  StyledBk,
  StyledImg,
  StyledBtn
} from "./index.style";
import bg from "./start-bg.png";
import startImg from "./start-img.png";

class Start extends Component {

   constructor(props){
     super(props)
   }


  onStartAction = () => {
    this.props.history.push("/quiz")
  }
  render() {
    return (
      <React.Fragment>
        <StyledPage>
          <StyledBk src={bg} />
          <Title>Great British Money</Title>
          <Title1>Quiz</Title1>
          <StyledImg src={startImg} />
          <StyledBtn onClick = {this.onStartAction}> Start first Quiz </StyledBtn>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Start;
