const paths = require('../PATHS.js');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/model.js');
const controllers = require('./controllers.js');

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(paths.DIST_DIR));

app.get('/users/:id', controllers.getUserInfo);

app.get('/sets/:userId', controllers.getUserSets);
app.get('/shows/:userId', controllers.getUserShows);

app.post('/sets', controllers.addUserShows);

app.post('/shows', controllers.addUserShows);

module.exports = app;