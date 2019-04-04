const Question = require('../models/Question.model');


const getQuizQuestionsIds = (req, res) => {
    Question.findAll({ where: { quizNo: 1 }, attributes: [ 'id' ] })
        .then((questions) => {
            return questions.map((question) => question.id);
        }).then((ids) => {
            res.json({ success: true, data: { quizQuestionsIds: ids } });
    })
        .catch((err) => {
            res.json({ success: false, error: err.message });
        })
};


module.exports = {
    getQuizQuestionsIds,
};
