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

module.exports = {
  createQuestion,
};
