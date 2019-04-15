const Sequelize = require('sequelize-views-support');
const sequelize = require('./sequelize');

const StudentsView = sequelize.define("studentsviews", {
        username: Sequelize.STRING,
        age: Sequelize.INTEGER,
        postcode: Sequelize.INTEGER,
        gender: Sequelize.BOOLEAN,
        english: Sequelize.BOOLEAN,
        quiz1mark: Sequelize.INTEGER,
        quiz2mark: Sequelize.INTEGER,
    },
    {
        treatAsView: false,
        viewDefinition: `
            CREATE VIEW studentsviews AS (
            select students.username, students.age, students.gender, students.english, students.postcode, quiz1marks.mark as q1mark, quiz2marks.mark as q2mark, quiz1marks.date from students
            LEFT OUTER JOIN
                (SELECT students.id as stdid, students.username, students.age, students.postcode, students.gender, students.english, COUNT(questions.id) as mark, max("studentsChoices"."createdAt") as date
                FROM students
                INNER JOIN "studentsChoices" on students.id = "studentsChoices"."studentId"
                INNER JOIN choices on choices.id = "studentsChoices"."choiceId"
                INNER JOIN questions on questions.id = choices."questionId"
                WHERE choices."isRight" = true AND questions."quizNo" = 1
                GROUP BY students.id, students.username, students.age, students.postcode, students.gender, students.english) as quiz1marks
                on quiz1marks.stdid = students.id
            LEFT OUTER JOIN
                (SELECT students.id as stdid, students.username, students.age, students.postcode, students.gender, students.english, COUNT(questions.id) as mark, max("studentsChoices"."createdAt") as date
                FROM students
                INNER JOIN "studentsChoices" on students.id = "studentsChoices"."studentId"
                INNER JOIN choices on choices.id = "studentsChoices"."choiceId"
                INNER JOIN questions on questions.id = choices."questionId"
                WHERE choices."isRight" = true AND questions."quizNo" = 2
                GROUP BY students.id, students.username, students.age, students.postcode, students.gender, students.english) as quiz2marks
                on quiz2marks.stdid = students.id
            );
        `,
    });

module.exports = StudentsView;
