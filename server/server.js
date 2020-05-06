const paths = require('../PATHS.js');
const express = require('express');
const app = express();

app.use(express.static(paths.DIST_DIR));
module.exports = app;