const bcrypt = require('bcryptjs');
const Student = require('../models/Student.model.js');

const signup = (req, res) => {
  const {
    username,
    password,
    age,
    gender,
    english,
    postcode,
  } = req.body;

  bcrypt.hash(password, 10, (hashError, hashedPassword) => {
    if (hashError) {
      res.json({
        success: false,
        error: hashError.message,
      });
    } else {
      Student.create({
        username,
        password: hashedPassword,
        age,
        gender,
        english,
        postcode,
        raw: true,
      })
        .then(() => {
          res.json({ success: true });
        })
        .catch((err) => {
          res.json({ success: false, error: err.message });
        });
    }
  });
};

module.exports = { signup };
