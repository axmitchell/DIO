const paths = require('../PATHS.js');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/model.js');
const controllers = require('./controllers.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(paths.DIST_DIR));

app.get('/user/:id', controllers.getUserInfo);

app.post('/bandPosts', controllers.addBandPost);
module.exports = app;