const { Quiz1Mark, Quiz2Mark } = require('../models/');
const ActivitiesController = require('../controllers/Activity.controller');

const checkQ2AvailableDays = (studentId) => new Promise((resolve, reject) => {
    Quiz1Mark.find({ where: { stdid: studentId }, attributes: ['stdid', 'date', 'mark'] })
        .then((studentMark) => {
            if(!studentMark){
                res.json({ success: false, error: 'Student should did quiz-1 before 2' })
            } else {
                ActivitiesController.getActivitiesByDate(studentMark)
                    .then(({ activities, fullCount }) => {
                        if((activities.length - fullCount) === 0){
                            resolve();
                        } else {
                            reject(new Error(`Quiz 2 is not available for this student, ${fullCount-activities.length} days remaining`));
                        }
                    })
            }
        })
});

const checkQ1Availability = (req, res, next) => {
    const { quizId } = req.params;
    console.log(typeof  quizId);
    if(quizId === String(1)){
        Quiz1Mark.find({ where: { stdid: req.studentId }, attributes: ['stdid', 'date', 'mark'] })
            .then((student) => {
                console.log("I'm HERE!!!");
                if(!student){
                    next();
                } else {
                    res.json({ success: false, error: 'Student already did quiz-1' });
                }
            });
    } else if(quizId === String(2)){
        Quiz2Mark.find({ where: { stdid: req.studentId }, attributes: ['stdid', 'date', 'mark'] })
            .then((student) => {
                if(!student){
                    checkQ2AvailableDays(req.studentId)
                        .then(() => {
                            next();
                        }).catch((err) => {
                            res.json({ success: false, error: err.message });
                    })
                } else {
                    res.json({ success: false, error: 'Student already did quiz-2' });
                }
            });
    } else {
        res.json({ success: false, error: `No quiz with id: ${quizId}` });
    }
};

module.exports = checkQ1Availability;
