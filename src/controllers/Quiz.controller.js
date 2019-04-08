const Question = require('../models/Question.model');
const StudentChoice = require('../models/StudentsChoice.model');

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

const postQuiz = (req, res) => {
    const { choices } = req.body;
    const choicesPromises = (choices).map((choiceId) => {
        return StudentChoice.create({ choiceId, studentId: req.studentId });
    });
    Promise.all(choicesPromises)
        .then(() => {
            res.json({ success: true });
        })
        .catch((err) => {
            res.json({ success: false, error: err.message });
        });
};



module.exports = {
    getQuizQuestionsIds,
    postQuiz
};
