import React, { Component } from "react";
import { StyledText, StyledChoicesList, StyledQuestion } from "./index.style";
import Image from "../Image";

class Question extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            imgName: '',
            choices: [],
        }
    };

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
            const questionData = { imgName: 'question1.jpg', text, choices };
            if(!questionData){
                reject(new Error('No Question Data!'));
            } else {
                resolve(questionData);
            }
        });
    };


    render() {
        return (
            <StyledQuestion>
                <Image url={`/public/images/questions/${this.state.imgName}`} />
                <StyledText>{this.state.text}</StyledText>
                <StyledChoicesList type={true} choices={this.state.choices}/>
            </StyledQuestion>
        );
    };
}
export default Question;
