const { sequelize, Quiz1Mark, Quiz2Mark } = require('./models/');
const app = require('./app');
require('env2')('config.env');

app.set('PORT', process.env.PORT);
Quiz2Mark.drop()
  .then(() => {
    Quiz1Mark.drop().then(() => {
      sequelize.sync().then(() => {
        app.listen(app.get('PORT'), () => {
          // eslint-disable-next-line no-console
          console.log(`The Server Is Up And Running On http://localhost:${app.get('PORT')}`);
        });
      });
    });
  });
