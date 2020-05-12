const db = require('../database/model.js');

getUserInfo = (req, res) => {
  db.User.findOne({where: {id: Number(req.params.id)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getUserSets = (req, res) => {
  db.Set.findAll({where: {userId: Number(req.params.userId)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getUserShows = (req, res) => {
  db.Show.findAll({where: {userId: Number(req.params.userId)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

addUserSets = (req, res) => {
  db.Set.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
};

addUserShows = (req, res) => {
  db.Show.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUserInfo,
  getUserShows,
  getUserSets,
  addUserSets,
  addUserShows
};
