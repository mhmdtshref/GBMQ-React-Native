const Choice = require('../models/Choice.model');

const createChoice = (choice) => {
  const {
    questionId, text, isRight,
  } = choice;

  return Choice.create({
    questionId, text, isRight, raw: true,
  });
};

const getChoiceByQuestionId = (id) => new Promise((resolve, reject) => {
    Choice.findAll({ where: { questionId: id }, attributes: [ 'id', 'questionId', 'text' ] })
        .then((choices) => {
            resolve(choices);
        })
        .catch((err) => {
            reject(new Error('Find choices error'));
        });
});

module.exports = { createChoice, getChoiceByQuestionId };
