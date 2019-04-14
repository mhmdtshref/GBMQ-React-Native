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
          .then(({data})=>{
              if (data.success) {
                      this.setState({ score: data.data.score, percentage: (((data.data.score)/16)*100),rank: 0}, () => {
                          resolve(this.state.score,this.state.percentage);
                      });
              }
              else {
                  reject(new Error(data.error))
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
    this.getResult()
    .then((result)=>{
        return result;
    })
    .catch((err)=>{
      alert(`Error: ${err.message}`);
      this.props.history.push('/start');
    })
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
                Score: <span>{this.state.score}/16</span>
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
