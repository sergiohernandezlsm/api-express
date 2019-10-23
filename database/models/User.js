import Sequelize, { Model } from 'sequelize';
import db from '../index';

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize: db,
  modelName: 'user'
  // options
});

export default User;