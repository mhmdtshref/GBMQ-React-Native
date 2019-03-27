import React, { Component } from "react";
import {
  Title,
  Title1,
  Title2,
  StyledPage,
  StyledBk,
  StyledDiv,
  StyledButton,
  StyledDiv1
} from "./index.style";
import bg from "./result-bg.png";

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
        <StyledPage>
          <StyledBk src={bg} />
          <StyledDiv>
            <Title>You have finished the</Title>
            <Title1>Great British Money</Title1>
            <Title2>Quiz</Title2>
          </StyledDiv>
          <StyledButton>Home</StyledButton>
          <StyledDiv1>
            <p>
              Score: <span>{this.state.score}/20</span>
            </p>
            <p>
              Percentage: <span>{this.state.percentage}%</span>
            </p>
            <p>
              Rank: <span>{this.state.rank} of your age</span>
            </p>
          </StyledDiv1>
        </StyledPage>
      </React.Fragment>
    );
  }
}

export default Result;
