import React, { Component } from "react";
import axios from 'axios';
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
    StyledHeader,
    StyledLoading,
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


 checkStudentState = () => new Promise((resolve, reject) => {
     axios
         .get('/checkState')
         .then(({data})=>{
             if (data.success && data.data.studentState >= 0) {
                     this.setState({ studentState: data.data.studentState }, () => {
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

 componentDidMount() {
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
                     case 3:
                         history.push('/Comparison');
                         break;
                 }
             })
     }
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
                <StyledQuizButton onClick = {this.onSecondQuiz} disabled = {!this.state.Quiz2Enabled} > Go to Second Quiz </StyledQuizButton>
            </StyledHome>
            { this.state.activitiesPopup ? <Activities/> : null}
        </StyledContent>
      </React.Fragment>
    );
    }
}
export default Home;
