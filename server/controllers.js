const db = require('../database/model.js');

getUserInfo = (req, res) => {
  db.User.findOne({where: {id: Number(req.params.id)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

getBandPosts = (req, res) => {
  db.Set.findAll({where: {userId: Number(req.params.userId)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

addBandPost = (req, res) => {
  db.Set.create(req.body)
    .then(() => res.send(201))
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUserInfo,
  addBandPost,
  getBandPosts,
};
