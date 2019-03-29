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
import homeImg from "./home-img.png";

class Home extends Component {

  constructor(props){
     super(props);
     this.state = {
       Quiz2Enabled: true,
       activitiesPopup: false,
   };
 }
  openActivities = () => {
      this.setState({ activitiesPopup: true });
  };
  onSecondQuiz = () => {
    this.props.history.push("/quiz")
  };

    pageClicked = () => {
        if(this.state.activitiesPopup){
            this.setState({ activitiesPopup: false });
        }
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
            { this.state.activitiesPopup ? <Activities/> : null}
        </StyledContent>
      </React.Fragment>
    );
  }

}
export default Home;
