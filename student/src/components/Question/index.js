import React, { Component } from "react";
import { StyledText, StyledChoicesList, StyledQuestion, StyledSign, StyledSignImg, StyledSignText, StyledButton } from "./index.style";
import axios from "axios";
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

    updateQuestionData = () => {
        this.getQuestionData(this.props.questionId)
            .then((questionData) => {
                this.setState(questionData);
            })
            .catch((err) => {
                alert("Error with loading the question: " + err.message);
            });
    };

    componentDidMount(){
        this.updateQuestionData();
    }

    getQuestionData(){

        axios.get('/getQuestion/'+this.props.id)
            .then(({ data }) => {
                console.log("Request for question done!, and responsed data:: ", data.data);
                const { question } = data.data;
                this.setState({ text: question.text, choices: question.choices });
            });

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
        console.log("now question is:", this.props.id);
        return (
            <StyledQuestion>
                <Image url={`/public/images/questions/${this.state.imgName}`} />
                <StyledSign>
                    <StyledSignImg src={signImage} />
                    <StyledSignText>{this.props.questionNumber}/20</StyledSignText>
                </StyledSign>
                <StyledText>{this.state.text}</StyledText>
                <StyledChoicesList type={true} choices={this.state.choices} onCheck={this.onCheckChoice} questionId={this.props.questionId} />
                <StyledButton onClick={() => {this.props.onClickButton(this.state.choiceId, this.updateQuestionData);}}> {this.props.buttonValue} </StyledButton>
            </StyledQuestion>
        );
    }
}
export default Question;
