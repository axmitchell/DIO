const db = require('../database/model.js');

getUserInfo = (req, res) => {
  db.User.findOne({where: {id: Number(req.params.id)}})
    .then(data => res.send(data))
    .catch(err => res.status(500).send(err));
};

addBandPost = (req, res) => {
  res.send('post success!')
};

module.exports = {
  getUserInfo,
  addBandPost
};
