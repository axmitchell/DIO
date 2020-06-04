const paths = require('./utils/PATHS.js');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/model.js');
const controllers = require('./utils/controllers.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/band', express.static(paths.BAND_DIST_DIR));
app.use('/venue', express.static(paths.VENUE_DIST_DIR));
app.use('/admin', express.static(paths.ADMIN_DIST_DIR));
app.use('/fan', express.static(paths.FAN_DIST_DIR));

app.get('/users/:id', controllers.getUser);

app.get('/sets', controllers.getSets);
app.get('/sets/:userId', controllers.getSets);

app.get('/shows', controllers.getShows);
app.get('/shows/:userId', controllers.getShows);

app.post('/sets', controllers.addSets);
app.post('/shows', controllers.addShows);

app.delete('/sets/:postId', controllers.deleteSet);
app.delete('/shows/:postId', controllers.deleteShow);

module.exports = app; 