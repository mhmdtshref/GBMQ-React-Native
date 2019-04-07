import React, { Component } from "react";
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
        };
    }

    componentDidMount(){
        this.getQuestionData(this.props.questionId)
            .then((questionData) => {
                this.setState(questionData);
            })
            .catch((err) => {
                alert("Error with loading the question: " + err.message);
            });
    }

    getQuestionData(){
        return new Promise((resolve, reject) => {
            const imgName = 'question1.jpg';
            const choices = [
                {
                    text: 'Savings Account',
                    id:"1",
                },
                {
                    text: 'Credit Card',
                    id:"2",
                },
                {
                    text: 'Mortgage',
                    id:"3",
                },
                {
                    text: 'Pension',
                    id:"4",
                }
            ];
            const text = 'What term describes a common way to buy a house?';
            const questionNumber = '1';
            const questionData = { imgName, text, choices, questionNumber };
            if(!questionData){
                reject(new Error('No Question Data!'));
            } else {
                resolve(questionData);
            }
        });
    }

    onCheckChoice = (choiceId) => {
        console.log("State is: ", this.state);
        this.setState({ choiceId });
    };


    render() {
        return (
            <StyledQuestion>
                <Image url={`/public/images/questions/${this.state.imgName}`} />
                <StyledSign>
                    <StyledSignImg src={signImage} />
                    <StyledSignText>{this.props.questionNumber}/20</StyledSignText>
                </StyledSign>
                <StyledText>{this.state.text}</StyledText>
                <StyledChoicesList type={true} choices={this.state.choices} onCheck={this.onCheckChoice} questionId={this.props.questionId} />
                <StyledButton onClick={() => {this.props.onClickButton(this.state.choiceId);}}> {this.props.buttonValue} </StyledButton>
            </StyledQuestion>
        );
    }
}
export default Question;
