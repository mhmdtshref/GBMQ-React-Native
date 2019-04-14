const {
  Quiz1Mark,
} = require('../models');

const getStdResultById = (req, res) => {
  const { studentId } = req;

  Quiz1Mark.findOne({ where: { stdid: studentId }, attributes: ['mark'] })
    .then((result) => {
      if (!result) {
        res.json({ success: false, error: 'Quiz-1 is not completed' });
      } else {
        res.json({ success: true, data: { score: result.mark } });
      }
    })
    .catch((err) => {
      res.json({ success: false, error: err.message });
    });
};

module.exports = getStdResultById;
