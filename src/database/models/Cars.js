const Sequelize =  require('sequelize');
const db = require('../index');

const Model = Sequelize.Model;
class Car extends Model {}
Car.init({
  // attributes
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize: db,
  modelName: 'car',
  underscored: true
});

module.exports = Car;