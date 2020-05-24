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

// const checkUserType = (req, res, next) => {
//   // validate user and type
//   req.url = '/venueApp';
//   next();
// };

// app.use(checkUserType);
app.use('/bandApp', express.static(paths.BAND_DIST_DIR));
app.use('/venueApp', express.static(paths.VENUE_DIST_DIR));

app.get('/users/:id', controllers.getUser);

app.get('/sets', controllers.getSets);
app.get('/sets/:userId', controllers.getSets);

app.get('/shows', controllers.getShows);
app.get('/shows/:userId', controllers.getShows);


app.post('/sets', controllers.addSets);
app.post('/shows', controllers.addShows);

module.exports = app; 