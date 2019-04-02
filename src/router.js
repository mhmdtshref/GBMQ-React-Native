const express = require('express');
const path = require('path');
const AuthController = require('./controllers/Auth.controller');

// const validations = require('./validations');

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/login', AuthController.login);


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'student', 'build', 'index.html'));
});

/*
TODO: Route to run the admin app:
router.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'student', 'build', 'index.html'));
});
*/


module.exports = router;
