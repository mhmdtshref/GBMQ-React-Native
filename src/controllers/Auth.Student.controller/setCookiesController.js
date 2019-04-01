const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;

const setCookies = username => new Promise((resolve) => {
  const token = jwt.sign({ username }, SECRET);
  if (token) {
    resolve(token);
  }
});

module.exports = { setCookies };
