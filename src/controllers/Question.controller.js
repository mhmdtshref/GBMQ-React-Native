const {
  Question, Choice
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


const getQuestionById = (req, res) => {
    const {questionId} = req.params;

    Question.findOne({where: { id: questionId }, include: [{ model: Choice,attributes:['id', 'text'] }], attributes: [ 'id', 'text', 'imageUrl', 'type', 'quizNo' ] })
        .then((question) => {
            res.json({ success: true, data: { question }});
        })
        .catch((err) => {
            res.json({ success: false, error: err.message });
        })
};


module.exports = {
  createQuestion, getQuestionById
};
