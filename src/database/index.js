const Sequelize = require('sequelize');

const sequelize = new Sequelize('hello', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;