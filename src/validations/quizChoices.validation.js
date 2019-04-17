const { Question, Choice } = require('../models/');

const CheckQuizChoices = (req, res, next) => {
    const { quizId } = req.params;
    const { choices } = req.body;
        Choice.findAll({ attributes: ['id'], include: [{model: Question, where: { quizNo: quizId }}] })
            .then((validChoices) => {
                const validChoicesIds = validChoices.map((el) => el.dataValues.id);
                choices.forEach((choice) =>{
                    if(!validChoicesIds.includes(choice)){
                        res.json({ success: false, error: 'Choices is not valid!' });
                    }
                });
                next();
            })
};

module.exports = CheckQuizChoices;
