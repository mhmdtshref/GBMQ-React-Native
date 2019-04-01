# Great British Money Quiz
It's an app to test kids financial knowledgement level before give them 5-days training. Then, test thair level again. Testing their level is done by multiple choice quizzes.

# Functional Requirements
### For students
- Students sign-up
- Students login.
- Students first and second quizzes.
- 5-days training (1 training per day).
- View results for first quiz.
- View result as a comparance between first and second quiz.

### For Admin
- Login.
- View quizzes statistics.

# Key technologies
### Backend: 
- Framework: [Express.js](https://expressjs.com/en/4x/api.html)
- Database: [SequelizeJS](http://docs.sequelizejs.com/manual/getting-started.html)

### Frontend: 
- Framework: [React.js](https://reactjs.org/docs/getting-started.html)
- Statistcs: [CanvasJS](https://canvasjs.com/react-charts/pie-chart/)
- Routing: [React Router](https://reacttraining.com/react-router/)

# Database Schema

![Database-Schema](https://user-images.githubusercontent.com/41734542/55286797-12b5e600-53a9-11e9-89a4-b29b2acb5653.png)

# How to run the app on local machine:

#### To run the app on your local machine, you need these technologies to be installed:
  - [Node.js](https://nodejs.org/en/download/)
  - [PostgreSQL Database](https://www.postgresql.org)
 
#### Then, go on with these steps to run the app:
1. clone this app by: `git clone https://github.com/FACK1/GBMQ.git`, or using SSH: `git clone git@github.com:FACK1/GBMQ.git`.
2. Enter the cloned app folder `cd GBMQ/`.
3. Run the command `npm install`.
4. Enter the student folder using `cd students/`.
5. Run the command `npm install` in it.
6. Get back to the parent (root) directory using command `cd ..`.
7. Add new file and call it: `config.env`, add these variables in it:
```dotenv
PORT=[TYPE LOCAL HOST PORT HERE]
DATABASE_URL=[TYPE PostgreSQL DB URL HERE]
```

7. Run the commands: `npm start`.
8. Wait until the build finished.
9. Go to your browser, go to the link: `https://localhost:[TYPE PORT # HERE]/`
