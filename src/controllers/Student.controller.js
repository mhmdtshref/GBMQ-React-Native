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

  bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
    if (hashErr) res.send(hashErr.message);
    else {
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
          res.json({ success: 'Student has been added' });
        })
        .catch(() => res.status(500).json({ error: 'Something wrong in addition query' }));
    }
  });
};

module.exports = { signup };
