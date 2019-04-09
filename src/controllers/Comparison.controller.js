const {
  Quiz1Mark, Quiz2Mark,
} = require('../models');

const getStdFinalResultById = (req, res) => {
  const { studentId } = req;

  Quiz1Mark.findOne({ where: { stdid: studentId }, attributes: ['mark'] })
    .then((result) => {
      Quiz2Mark.findOne({ where: { stdid: studentId }, attributes: ['mark'] })
        .then((result2) => {
          res.json({ success: true, data: { score: result.mark, score2: result2.mark } });
        });
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = getStdFinalResultById;
