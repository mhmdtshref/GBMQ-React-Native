import React, { Component } from "react";
import {
  Title,
  Title1,
  Description,
  StyledActivityBtn,
  StyledSecondQuizBtn,
  StyledPage,
  StyledBk,
  StyledImg,
} from "./index.style";
import bg from "./home-bg.png";
import homeImg from "./home-img.png";

class Start extends Component {

   constructor(props){
     super(props)
     this.state = {
       Quiz2Enabled: true
   };
   }


  goActivities = () => {
    this.props.history.push("/activities")
  }
  onSecondQuiz = () => {
    this.props.history.push("/quiz")
  }
  render() {
    return (
      <React.Fragment>
        <StyledPage>
          <StyledBk src={bg} />
          <Title>Great British Money</Title>
          <Title1>Quiz</Title1>
          <Description> Now, you need to view tutorials videos click on the button below </Description>
          <StyledImg src={homeImg} />
          <StyledActivityBtn onClick = {this.goActivities}> Watch Course Videos </StyledActivityBtn>
          <StyledSecondQuizBtn onClick = {this.onSecondQuiz} disabled = {!this.state.Quiz2Enabled} > Go to Second Quiz </StyledSecondQuizBtn>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Start;
