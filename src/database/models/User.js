const Sequelize =  require('sequelize');
const db = require('../index');

const Model = Sequelize.Model;
class User extends Model {}
User.init({
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
  modelName: 'user',
  underscored: true
});

module.exports = User;