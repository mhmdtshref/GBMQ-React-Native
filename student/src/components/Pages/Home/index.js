import React, { Component } from "react";
import Activities from "../Activities";

import {
    StyledContent,
    StyledHome,
    StyledActivitiesButton,
    StyledQuizButton,
    StyledImg,
    BigTitle,
    MessageText,
    SmallTitle,
    StyledHeader
} from "./index.style";
import bg from "./home-bg.png";
import homeImg from "./home-img.png";

class Home extends Component {

  constructor(props){
     super(props);
     this.state = {
       Quiz2Enabled: true,
       open: true,
   };
   this.openActivities = this.openActivities.bind(this)
 }
  openActivities (){ this.setState((prevState) => { return {open: !prevState.open} })}
  onSecondQuiz = () => {
    this.props.history.push("/quiz")
  };

    pageClicked = () => {
        this.setState({ open: false });
    };

  render() {
      console.log("State open:", this.state.open);
    return (
      <React.Fragment>
        <StyledContent>
            <StyledHome onClick={this.pageClicked}>
                <StyledHeader>
                    <SmallTitle>Great British Money</SmallTitle>
                    <BigTitle>Quiz</BigTitle>
                </StyledHeader>
                <MessageText> Now, you need to view tutorials videos click on the button below </MessageText>
                <StyledImg src={homeImg} />
                <StyledActivitiesButton onClick = {this.openActivities}> Watch Course Videos </StyledActivitiesButton>
                <StyledQuizButton onClick = {this.onSecondQuiz} disabled = {!this.state.Quiz2Enabled} > Go to Second Quiz </StyledQuizButton>
            </StyledHome>
            { this.state.open ? <Activities/> : null}
        </StyledContent>
      </React.Fragment>
    );
  }

}
export default Home;
