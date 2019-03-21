const express = require('express');
const path = require('path');
// const controllers = require('./controllers');
// const validations = require('./validations');

const router = express.Router();


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
