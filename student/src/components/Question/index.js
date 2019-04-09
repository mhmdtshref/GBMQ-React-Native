import React, { Component } from "react";
import axios from "axios";
import { StyledText, StyledChoicesList, StyledQuestion, StyledSign, StyledSignImg, StyledSignText, StyledButton } from "./index.style";
import Image from "../Image";
import signImage from "./questionNoImg.png";

class Question extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            imgName: '',
            questionNumber: '',
            choices: [],
            choiceId: '',
            checked: false,
        };
    }



    componentDidMount(){
        this.getQuestionData();
    }

    getQuestionData = () => {
    return  axios.get('/getQuestion/'+this.props.id)
            .then(({ data }) => {
                const { question } = data.data;
                question.choices=question.choices.map(choice=>{
                choice.checked=false;
                return choice;
                })
                this.setState({ text: question.text, image:question.imageUrl, choices: question.choices,choiceId: '', checked: false, });
            })
            .catch((err) => {
                alert("Error with loading the question: " + err.message);
            });

    }

  onCheckChoice = (choiceId) => {
    this.setState((prevState)=>{
          let {choices}=prevState;
          choices=choices.map(choice=>{
             if(choice.id===choiceId){
               choice.checked=true
             }else{
               choice.checked=false;
             }
            return choice
          })
          return ({choices,choiceId})
        });
      };


    render() {
        return (
            <StyledQuestion>
                <Image url={this.state.image} />
                <StyledSign>
                    <StyledSignImg src={signImage} />
                    <StyledSignText>{this.props.questionNumber}/{this.props.quizQuestionsNumber}</StyledSignText>
                </StyledSign>
                <StyledText>{this.state.text}</StyledText>
                <StyledChoicesList checked={this.state.checked} type={true} choices={this.state.choices} onCheck={this.onCheckChoice} questionId={this.props.questionId} />
                <StyledButton onClick={() => {this.props.onClickButton(this.state.choiceId, this.getQuestionData);}}> {this.props.buttonValue} </StyledButton>
            </StyledQuestion>
        );
    }
}
export default Question;
