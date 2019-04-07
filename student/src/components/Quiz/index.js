import React, { Component } from "react";
import Question from "../Question";
import axios from "axios";

class Quiz extends Component {

    constructor(props){
        super(props);
        this.state = {
            questionsIds: [],
            questionCounter: 0,
            buttonValue: 'Next',
            checkedChoices: [],
        };
    }

    getQuestionsIDs = (quizId) => {
        return new Promise((resolve, reject) => {
            axios.get('/quizQuestionsIds')
                .then(({ data }) => {
                    resolve(data.data.quizQuestionsIds);
                })
                .catch((err) => {
                    alert("Error: ", err);
                })
        });
    };

    componentDidMount() {
        this.getQuestionsIDs(this.props.quizId).then((questionsIds) => {
            this.setState({ questionsIds });
        }).catch(() => {
            alert("Error getting questions!")
        })
    }

    onClickNext = (choiceId, cb) => {
        this.setState((prevState) => ({questionCounter: ++prevState.questionCounter, checkedChoices: prevState.checkedChoices.concat([choiceId]), }), () => {
            cb();
        });
    };


    render(){
        if((this.state.questionsIds).length === 0){
            return <h2>Loading...</h2>;
        } else {
            console.log("Sent question id:: ", (this.state.questionsIds)[this.state.questionCounter]);
            return (
                <React.Fragment>
                    <Question id={(this.state.questionsIds)[this.state.questionCounter]} questionNumber={this.state.questionCounter+1} buttonValue={this.state.buttonValue} onClickButton={this.onClickNext} />
                </React.Fragment>
            );
        }
    }

}

export default Quiz;
