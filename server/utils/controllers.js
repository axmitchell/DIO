const db = require('../../database/model.js');

getUser = (req, res) => {
  db.User.findOne({where: {id: req.params.id}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getSets = (req, res) => {
  db.User.hasMany(db.Set, {foreignKey: 'userId'})
  db.Set.belongsTo(db.User, {foreignKey: 'userId'})
  if (req.query.date && !req.params.userId) {
    db.Set.findAll({
      where: {date: req.query.date},
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => res.status(500).send(err));
  } else if (req.params.userId) {
    if (req.query.date) {
      db.Set.findOne({
        where: {date: req.query.date, userId: req.params.userId},
      })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
    } else {
      db.Set.findAll({
        where: {userId: req.params.userId},
        include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
      })
        .then(data => {
          res.send(data)
        })
        .catch(err => res.status(500).send(err));
    }
  } else {
    db.Set.findAll({
      include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
  }
};

getShows = (req, res) => {
  db.User.hasMany(db.Show, {foreignKey: 'userId'})
  db.Show.belongsTo(db.User, {foreignKey: 'userId'})
  if (req.query.date && !req.params.userId) {
    db.Show.findAll({
      where: {date: req.query.date},
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => res.status(500).send(err));
  } else if (req.params.userId) {
    if (req.query.date) {
      db.Show.findOne({
        where: {date: req.query.date, userId: req.params.userId},
      })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
    } else {
      db.Show.findAll({
        where: {userId: req.params.userId},
        include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
      })
        .then(data => {
          res.send(data)
        })
        .catch(err => res.status(500).send(err));
    }
  } else {
    db.Show.findAll({
      include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
  }
};

addSets = (req, res) => {
  db.Set.create(req.body)
    .then(() => res.send('set added'))
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

deleteSet = (req, res) => {
  db.Set.destroy({ where: { id: req.params.postId } })
    .then(() => res.send('post deleted'))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

deleteShow = (req, res) => {
  db.Show.destroy({ where: { id: req.params.postId } })
    .then(() => res.send('post deleted'))
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

addShows = (req, res) => {
  db.Show.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
};

addConnection = (req, res) => {
  db.Connection.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
}

getConnections = (req, res) => {
  // db.Connection.belongsTo(db.User, {foreignKey: 'userId'})
  if (req.query.bandId) {
    db.Connection.findAll({
      where: {bandId: req.query.bandId},
      // include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
  }
  if (req.query.venueId) {
    db.Connection.findAll({
      where: {venueId: req.query.venueId},
      // include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
  }
}

module.exports = {
  getUser,
  getShows,
  getSets,
  addSets,
  deleteSet,
  deleteShow,
  addShows,
  addConnection,
  getConnections
};
