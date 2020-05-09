const Sequelize = require('sequelize');
const sequelize = require('./connection.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
  },
  link: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  about: {
    type: Sequelize.STRING,
  },
  photo: {
    type: Sequelize.STRING,
  },
},
{
  timestamps: false,
});

module.exports = {
  User,
};