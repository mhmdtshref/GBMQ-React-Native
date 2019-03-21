import React, { Component } from "react";
import ChoicesList from "../ChoicesList";

class Question extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            imgUrl: '',
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
                    text: 'This is first choice!',
                    id:"1",
                },
                {
                    text: 'This is second choice!',
                    id:"2",
                },
                {
                    text: 'This is third choice!',
                    id:"3",
                },
                {
                    text: 'This is fourth choice!',
                    id:"4",
                }
            ];
            const questionData = { imgUrl: '', text: 'This is the first question', choices };
            if(!questionData){
                reject(new Error('No Question Data!'));
            } else {
                resolve(questionData);
            }
        });
    };

    render() {
        return (
            <React.Fragment>
                <img src={this.state.imgUrl} />
                <p>{this.state.text}</p>
                <ChoicesList type={true} choices={this.state.choices}/>
            </React.Fragment>
        );
    };
}
export default Question;
