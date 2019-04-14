const { Question, Choice } = require('../models');

const createQuestion = (question) => {
  const {
    text, imageUrl, type, quizNo, category,
  } = question;
  return Question.create({
    text,
    imageUrl,
    type,
    quizNo,
    category,
    raw: true,
  });
};

const postQuestion = (req, res) => {
  const {
    choice1, choice2, choice3, choice4, ...question
  } = req.body;
  console.log('the body is ', req.body);
  createQuestion(question)
    .then((createdEquestion) => {
      console.log(createdEquestion.get('id'));
      return Promise.all(
        [choice1, choice2, choice3, choice4].map((choice) => {
          const choiceObj = JSON.parse(choice);
          choiceObj.questionId = createdEquestion.get('id');
          return Choice.create(choiceObj);
        }),
      );
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

const getStatisticsFile = (req, res) => {

};

module.exports = {
  createQuestion,
  postQuestion,
};
