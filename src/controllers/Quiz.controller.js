const Question = require('../models/Question.model');
const StudentChoice = require('../models/StudentsChoice.model');
const Quiz1Mark = require('../models/Quiz1Mark.model');

const getQuizQuestionsIds = (req, res) => {
    const { quizId } = req.params;
    Question.findAll({ where: { quizNo: quizId }, attributes: [ 'id' ] })
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

const getStudentQuiz1MarkById = (studentId) => new Promise((resolve, reject) => {
    Quiz1Mark.findOne({ where: { "stdid": studentId }, attributes: [ "stdid", "date" ]  })
        .then((quiz1Mark) => {
            resolve(quiz1Mark);
        })
        .catch((err) => {
            reject(err);
        });
});

module.exports = {
    getQuizQuestionsIds,
    postQuiz,
    getStudentQuiz1MarkById,
};
