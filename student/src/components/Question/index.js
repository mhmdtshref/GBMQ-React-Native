import React, { Component } from "react";
import { StyledText, StyledChoicesList, StyledQuestion, StyledSign, StyledSignImg, StyledSignText } from "./index.style";
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
        }
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


    render() {
        return (
            <StyledQuestion>
                <Image url={`/public/images/questions/${this.state.imgName}`} />
                <StyledSign>
                    <StyledSignImg src={signImage} />
                    <StyledSignText>{this.state.questionNumber}/20</StyledSignText>
                </StyledSign>
                <StyledText>{this.state.text}</StyledText>
                <StyledChoicesList type={true} choices={this.state.choices} onCheck={this.props.onCheck} questionId={this.props.questionId} />
            </StyledQuestion>
        );
    }
}
export default Question;
