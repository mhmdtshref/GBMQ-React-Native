import React, { Component } from "react";
import Question from "../Question";

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {
            questionsIds: [],
            questionCounter: 0,
            buttonValue: 'Next',
        };
    }

    getQuestionsIDs = (quizId) => {
        return new Promise((resolve, reject) => {
            if(quizId){
                resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
            } else {
                reject(new Error('No questions on the list!'));
            }
        });
    };

    componentDidMount() {
        this.getQuestionsIDs(this.props.quizId).then((questionsIds) => {
            this.setState({ questionsIds });
        }).catch(() => {
            alert("Error getting questions!")
        })
    }

    onClickNext = () => {
        this.setState((state) => ({questionCounter: ++state.questionCounter}) );
    };


    render(){
        if((this.state.questionsIds).length === 0){
            return <h2>Loading...</h2>;
        } else {
            return (
                <React.Fragment>
                    <Question id={(this.state.questionsIds)[this.state.questionCounter]} questionNumber={this.state.questionCounter+1} buttonValue={this.state.buttonValue} onClickButton={this.onClickNext} />
                </React.Fragment>
            );
        }
    }

}

export default Quiz;
