const Sequelize = require('sequelize');

const sequelize = new Sequelize('hello', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// testing connnection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

