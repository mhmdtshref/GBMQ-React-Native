const { Activity, } = require("../models");
const QuizController = require("../controllers/Quiz.controller");
const moment = require("moment");

const getActivities = (req, res) => {
    const { studentId } = req;
    QuizController.getStudentQuiz1MarkById(studentId)
        .then(getActivitiesByDate)
        .then(({ activities, fullCount}) => {
            res.json({ success: true, data: { activities, fullCount } });
        })
        .catch((err) => {
            res.json({ success: false, error: err.message });
        });

};

const getActivitiesByDate = (quiz1Mark) => new Promise((resolve, reject) => {
    Activity.findAll()
        .then((activities) => {
            const activitiesNumber = activities.length;
            const filteredActivities = activities.filter((activity) => {
                const now = moment();
                const end = moment(quiz1Mark.dataValues.date.toUTCString());
                const durationAsDays = (moment.duration(now.diff(end))).asDays();
                return durationAsDays >= activity.day;
            });
            resolve({ activities: filteredActivities, fullCount: activitiesNumber});
        })
        .catch((err) => {
            reject(err);
        })
});

module.exports = { getActivities };
