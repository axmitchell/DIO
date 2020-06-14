const db = require('../../database/model.js');

getUser = (req, res) => {
  db.User.findOne({where: {id: req.params.id}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getSets = (req, res) => {
  db.User.hasMany(db.Set, {foreignKey: 'userId'})
  db.Set.belongsTo(db.User, {foreignKey: 'userId'})

  if (req.params.userId) {
    db.Set.findAll({
      where: {userId: req.params.userId },
      include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
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

  if (req.params.userId) {
    db.Show.findAll({
      where: {userId: req.params.userId},
      include: {model: db.User, attributes: { exclude: ["type", "id", "about", "photo"], required: false }}
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => res.status(500).send(err));
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
    .then(() => res.sendes.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
}

module.exports = {
  getUser,
  getShows,
  getSets,
  addSets,
  deleteSet,
  deleteShow,
  addShows,
  addConnection
};
