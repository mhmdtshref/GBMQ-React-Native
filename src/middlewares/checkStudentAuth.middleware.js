const Student = require('../models/Student.model');
const jwt = require('jsonwebtoken');
require('env2')('config.env');

const { SECRET } = process.env;

const checkStudentAuth = (req, res, next) => {
    console.log("REQUEST IS: ", req);
    const hashedId = req.cookies.id;

    if(!hashedId){
        res.json({
            success: true, data: {
            studentState: 0,
            },
        });
    } else {
        jwt.verify(hashedId, SECRET, (verifyError, decoded) => {
            if(verifyError || !decoded){
                res.json({
                    success: true,
                    data: {
                        studentState: 0,
                    },
                });
            } else {
                req.userId = decoded;
                next();
            }
        });
    }
};

module.exports = {
    checkStudentAuth,
};
