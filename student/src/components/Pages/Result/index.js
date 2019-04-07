import React, { Component } from "react";
import axios from 'axios';

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

  getResult = () => new Promise((resolve, reject) => {
      axios
          .get('/getResult')
          .then((data)=>{
              if (data.success && data.mark >= 0) {
                      this.setState({ score: 18, percentage: 45, rank: 56}, () => {
                          resolve(data.data.studentState);
                      });
              } else {
                  reject(data.error)
              }
          })
          .catch((axiosErr) => {
              reject(axiosErr);
          })
  });

  goHome = () => {
    this.props.history.push("/")
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
              <StyledButton onClick = {this.goHome} >Home</StyledButton>
          </StyledContent>
        </React.Fragment>
    );
  }
}

export default Result;
