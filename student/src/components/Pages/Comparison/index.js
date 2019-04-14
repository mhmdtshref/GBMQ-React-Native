import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import {
  StyledContent,
  CongratsImg,
  StyledHeader,
  MessageText,
  SmallTitle,
  BigTitle,
  StyledButton,
  Results,
  FirstColumn,
  Column
} from "./index.style";
import CongratsImage from "./congratulations.png";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {
        score: 0,
        rank: 0,
        score2: 0,
        rank2: 0,
        scoreImprovement: 0,
        percentageImprovement: 0,
        rankImprovement: 0
      }
    };
  }
  getComparisonResult = () => {
    return new Promise((resolve, reject) => {
      axios
      .get('/getComparison')
      .then(({data}) =>{
        if (data.success & data.data.score>=0 & data.data.score2>=0) {
              const Mark1 = (data.data.score/16).toFixed(2);
              const Mark2 = (data.data.score2/15).toFixed(2);

              const results = {
                score: Mark1*100,
                rank: 0,
                score2: Mark2*100,
                rank2:0,
                scoreImprovement: (Mark2*100)-(Mark1*100),
                rankImprovement: 0,
              };
              resolve(results);
            }
        else {
              reject(data.error)
          }
      })
      .catch((axiosErr) => {
          reject(axiosErr);
      })
  });
};
  setComparisonResult = results => {
    return new Promise((resolve, reject) => {
      this.setState({ results }, () => {
        if (results) {
          resolve();
        } else {
          reject(new Error("No results found!"));
        }
      });
    });
  };

  onClickLogout = () => {
      cookie.remove('id');
      this.props.history.push('/');
  };

  componentDidMount() {
    this.getComparisonResult()
      .then(this.setComparisonResult)
      .catch((err) => {
        alert(`Loading results error: ${err.message}`);
      });
  }

  render() {
    return (
      <React.Fragment>
        <StyledContent>
          <CongratsImg src={CongratsImage} />
          <StyledHeader>
            <MessageText>You have finished the</MessageText>
            <SmallTitle>Great British Money</SmallTitle>
            <BigTitle>Quiz</BigTitle>
          </StyledHeader>
          <Results>
            <FirstColumn>
              <p>Score</p>
              <p>Rank of age</p>
            </FirstColumn>
            <Column>
              <p>Quiz 1</p>
              <p>{this.state.results.score}%</p>
              <p>{this.state.results.rank}</p>
            </Column>
            <Column>
              <p>Quiz 2</p>
              <p>{this.state.results.score2}%</p>
              <p>{this.state.results.rank2}</p>
            </Column>
            <Column>
              <p>Progress</p>
              <p>{this.state.results.scoreImprovement}%</p>
              <p>{this.state.results.rankImprovement}</p>
            </Column>
          </Results>
          <StyledButton onClick={this.onClickLogout}>Logout</StyledButton>
        </StyledContent>
      </React.Fragment>
    );
  }
}

export default Result;
