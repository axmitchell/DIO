const db = require('../database/model.js');

getUser = (req, res) => {
  db.User.findOne({where: {id: req.params.id}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getSets = (req, res) => {
  if (req.params.userId) {
    db.Set.findAll({where: {userId: req.params.userId }})
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
  } else {
    db.Set.findAll()
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
  }
};

getShows = (req, res) => {
  if (req.params.userId) {
    db.Show.findAll({where: {userId: req.params.userId}})
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
  } else {
    db.Show.findAll()
      .then(data => res.send(data))
      .catch(err => res.status(500).send(err));
  }
};

addSets = (req, res) => {
  db.Set.create(req.body)
    .then(() => res.send(201))
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

addShows = (req, res) => {
  db.Show.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUser,
  getShows,
  getSets,
  addSets,
  deleteSet,
  addShows
};
