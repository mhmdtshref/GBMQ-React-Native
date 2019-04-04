const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;

const checkStudentAuth = (req, res, next) => {
  const hashedId = req.cookies.id;

  if (!hashedId) {
    res.json({
      success: false,
      data: {
        error: 'Unauthenticated',
      },
    });
  } else {
    jwt.verify(hashedId, SECRET, (verifyError, decoded) => {
      if (verifyError || !decoded) {
        res.json({
          success: true,
          data: {
            studentState: 0,
          },
        });
      } else {
        req.studentId = decoded.id;
        next();
      }
    });
  }
};

module.exports = {
  checkStudentAuth,
};
