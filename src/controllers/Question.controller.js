const {
  Question,
} = require('../models');
const ChoiceController = require('./Choice.controller');
const createQuestion = (question) => {
  const {
    text, imageUrl, type, quizNo,
  } = question;
  return Question.create({
    text, imageUrl, type, quizNo, raw: true,
  });
};

const addQuestionChoices = (question) => new Promise((resolve, reject) => {
    if(question){
        ChoiceController.getChoiceByQuestionId(question.id)
            .then((choices) => {
                resolve({ question, choices });
            })
            .catch((err) => {
                reject(err);
            })
    } else {
        reject(new Error('No question found'));
    }

});


const getQuestionById = (req, res) => {
    const {questionId} = req.params;
    Question.findOne({where: {id: questionId}})
        .then(addQuestionChoices)
        .then(({ question, choices }) => {
            res.json({ success: true, data: { question, choices } });
        })
        .catch((err) => {
            res.json({ success: false, error: err.message });
        });
};


module.exports = {
  createQuestion, getQuestionById
};
