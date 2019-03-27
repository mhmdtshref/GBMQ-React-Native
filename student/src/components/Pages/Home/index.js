import React, { Component } from "react";
import Popup from 'reactjs-popup';
import Activities from "../Activities";

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

class Home extends Component {

  constructor(props){
     super(props)
     this.state = {
       Quiz2Enabled: true,
       open: false
   }
   this.openActivities = this.openActivities.bind(this)
 }
  openActivities (){ this.setState((prevState) => { return {open: !prevState.open} })}
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
          <StyledActivityBtn onClick = {this.openActivities}> Watch Course Videos </StyledActivityBtn>
          <StyledSecondQuizBtn onClick = {this.onSecondQuiz} disabled = {!this.state.Quiz2Enabled} > Go to Second Quiz </StyledSecondQuizBtn>

          <Popup open={this.state.open} closeOnDocumentClick>
            <Activities />
          </Popup>
        </StyledPage>
      </React.Fragment>
    );
  }
}
export default Home;
