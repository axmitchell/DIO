const Sequelize = require('sequelize');
const sequelize = require('./connection.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

const Set = sequelize.define('sets', {
  userId: {
    type: Sequelize.INTEGER,
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  photo: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
},
{
  timestamps: false,
});

Set.associate = models => {
  Set.belongsTo(models.User);
};

module.exports = {
  User,
  Set,
};