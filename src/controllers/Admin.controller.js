const {
  Question,
} = require('../models');

const createQuestion = (question) => {
  const {
    text, imageUrl, type, quizNo,
  } = question;
  return Question.create({
    text, imageUrl, type, quizNo, raw: true,
  });
};

const postQuestion = (req, res) => {
  const question = req.body;
  createQuestion(question)
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = {
  createQuestion,
  postQuestion,
};
