import React, { Component } from "react";
import {
  BackgroundImage,
  StyledContent,
  CongratsImg,
  StyledHeader,
  MessageText,
  SmallTitle,
  BigTitle,
  StyledButton,
  Results,
  ResultLine,
} from "./index.style";
import CongratsImage from "./congratulations.png";
import BGImage from "./bg.png";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      percentage: 0,
      rank: 0
    };
  }

  getResult = () => {
    this.setState({
      score: 9,
      percentage: 45,
      rank: 56
    });
  };

  componentDidMount() {
    this.getResult();
  }

  render() {
    return (
        <React.Fragment>
          <BackgroundImage src={BGImage} />
          <StyledContent>
            <CongratsImg src={CongratsImage} />
            <StyledHeader>
              <MessageText>You have finished the</MessageText>
              <SmallTitle>Great British Money</SmallTitle>
              <BigTitle>Quiz</BigTitle>
            </StyledHeader>
            <Results>
              <ResultLine>
                Score: <span>{this.state.score}/20</span>
              </ResultLine>
              <ResultLine>
                Percentage: <span>{this.state.percentage}%</span>
              </ResultLine>
              <ResultLine>
                Rank: <span>{this.state.rank} of your age</span>
              </ResultLine>
            </Results>
              <StyledButton>Home</StyledButton>
          </StyledContent>
        </React.Fragment>
    );
  }
}

export default Result;
