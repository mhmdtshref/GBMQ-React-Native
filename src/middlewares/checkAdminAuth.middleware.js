const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { ADMINSECRET } = process.env;

const checkAdminAuth = (req, res, next) => {
  const hashedId = req.cookies.id;

  if (!hashedId) {
    res.json({
      success: false,
      error: 'Unauthenticated',
    });
  } else {
    jwt.verify(hashedId, ADMINSECRET, (verifyError, decoded) => {
      if (verifyError || !decoded) {
        res.json({
          success: true,
          data: {
            Logged: false,
          },
        });
      } else {
        next();
      }
    });
  }
};

module.exports = {
  checkAdminAuth,
};
