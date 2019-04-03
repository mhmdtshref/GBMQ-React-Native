const Choice = require('../models/Choice.model');

const createChoice = (choice) => {
  const {
    questionId, text, isRight,
  } = choice;

  return Choice.create({
    questionId, text, isRight, raw: true,
  });
};
module.exports = { createChoice };
