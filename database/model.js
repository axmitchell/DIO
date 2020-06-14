const Sequelize = require('sequelize');
const sequelize = require('./connection.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: Sequelize.STRING,
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
    type: Sequelize.DATE,
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

const Show = sequelize.define('shows', {
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
  date: {
    type: Sequelize.DATE,
  },
  description: {
    type: Sequelize.STRING,
  },
},
{
  timestamps: false,
});

Show.associate = models => {
  Show.belongsTo(models.User);
};

const Connection = sequelize.define('connections', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bandId: {
    type: Sequelize.INTEGER,
  },
  venueId: {
    type: Sequelize.INTEGER,
  },
  setId: {
    type: Sequelize.INTEGER,
  },
  showId: {
    type: Sequelize.INTEGER,
  },
  messengerId: {
    type: Sequelize.INTEGER,
  },
  conversation: {
    type: Sequelize.JSON,
  },
  messengerStatus: {
    type: Sequelize.ENUM('requested', 'cancelled'),
  },
  recipientStatus: {
    type: Sequelize.ENUM('recieved', 'accepted','denied'),
  },
  collaboration: {
    type: Sequelize.BOOLEAN,
  },
},
{
  timestamps: false,
});

Connection.associate = models => {
  Connection.belongsTo(models.User);
};

module.exports = {
  User,
  Set,
  Show,
  Connection,
};