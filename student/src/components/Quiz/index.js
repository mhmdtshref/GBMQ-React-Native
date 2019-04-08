import React, { Component } from "react";
import axios from "axios";
import Question from "../Question";

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

    getQuestionsIDs = () => {
        return new Promise((resolve, reject) => {
            axios.get('/quizQuestionsIds')
                .then(({ data }) => {
                    resolve(data.data.quizQuestionsIds);
                })
                .catch((err) => {
                    alert("Error: ", err);
                    reject(err);
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

    postQuiz = () => {
        axios.post('/postQuiz', { choices: this.state.checkedChoices })
            .then(({ data }) => {
                if(data.success){
                    this.props.history.push('/result');
                } else {
                    alert(`Posting Error: ${data.err}`);
                }
            });
    };

    onClickNext = (choiceId, cb) => {
        this.setState((prevState) => ({questionCounter: ++prevState.questionCounter, checkedChoices: prevState.checkedChoices.concat([choiceId]), }), () => {
            if(this.state.questionCounter === (this.state.questionsIds).length){
                this.postQuiz();
            } else {
                cb();
            }
        });
    };


    render(){
        if((this.state.questionsIds).length === 0){
            return <h2>Loading...</h2>;
        } else {
            return (
                <React.Fragment>
                    <Question id={(this.state.questionsIds)[this.state.questionCounter]} quizQuestionsNumber={this.state.questionsIds.length} questionNumber={this.state.questionCounter+1} buttonValue={this.state.buttonValue} onClickButton={this.onClickNext} />
                </React.Fragment>
            );
        }
    }

}

export default Quiz;
