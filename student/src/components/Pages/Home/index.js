import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import Activities from "../Activities";

import {
    StyledContent,
    StyledHome,
    StyledActivitiesButton,
    StyledQuizButton,
    DisabledStyledQuizButton,
    StyledImg,
    BigTitle,
    MessageText,
    SmallTitle,
    StyledHeader,
    StyledLoading,
    StyledLogoutButton,
} from "./index.style";
import homeImg from "./home-img.png";

class Home extends Component {

  constructor(props){
     super(props);
     this.state = {
       activitiesPopup: false,
       Quiz2ButtonText: 'Quiz 2',
   };
 }


 checkStudentState = () => new Promise((resolve, reject) => {
     axios
         .get('/checkState')
         .then(({data})=>{
             if (data.success && data.data.studentState >= 0) {
                     this.setState({ studentState: data.data.studentState, remainingDays: data.data.remainingDays }, () => {
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

  redirectByState = () => new Promise((resolve) => {
      if(this.state.studentState !== 2){
          this.checkStudentState()
              .then((studentState) => {
                  const {history} = this.props;
                  switch (studentState) {
                      case 0:
                          history.push('/login');
                          break;
                      case 1:
                          history.push('/start');
                          break;
                      case 2:
                          resolve();
                          break;
                      case 3:
                          history.push('/Comparison');
                          break;
                  }
              })
      }
  });

  quiz2ButtonEvent = () => {
      if(this.state.remainingDays <= 0){
          this.props.onStartAction(2,this.props.history);
      } else {
          this.setState((prevState) => ({ Quiz2ButtonText: `${prevState.remainingDays} Days remaining` }), () => {
              setTimeout(() => {
                  this.setState({ Quiz2ButtonText: 'Quiz 2' });
              }, 2000);
          });
      }
  };

  onClickLogout = () => {
      cookie.remove("id");
      this.props.history.push("/login");
  };

  componentDidMount() {
      this.redirectByState()
          .catch((err) => { alert(`Loading Error: ${err.message}`) })
  }

  openActivities = () => {
      this.setState({ activitiesPopup: true });
  };

  pageClicked = () => {
        if(this.state.activitiesPopup){
            this.setState({ activitiesPopup: false });
        }
    };

  render() {
    if (this.state.studentState !== 2) {
        return <StyledLoading> Loading... </StyledLoading>
        }
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
                {this.stateremainingDays <= 0 ?
                    (<StyledQuizButton onClick = {this.quiz2ButtonEvent} > Go to Second Quiz </StyledQuizButton>)
                    : (<DisabledStyledQuizButton onClick={this.quiz2ButtonEvent}> { this.state.Quiz2ButtonText } </DisabledStyledQuizButton>)}
                <StyledLogoutButton onClick={this.onClickLogout}>Logout</StyledLogoutButton>
            </StyledHome>
            { this.state.activitiesPopup ? <Activities/> : null}
        </StyledContent>
      </React.Fragment>
    );
    }
}
export default Home;
