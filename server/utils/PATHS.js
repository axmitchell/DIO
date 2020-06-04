const path = require('path');

const BAND_SRC_DIR = path.join(__dirname, '../../client/band/src');
const VENUE_SRC_DIR = path.join(__dirname, '../../client/venue/src');
const BAND_DIST_DIR = path.join(__dirname, '../../client/band/dist');
const VENUE_DIST_DIR = path.join(__dirname, '../../client/venue/dist');
const ADMIN_DIST_DIR = path.join(__dirname, '../../client/admin');
const FAN_DIST_DIR = path.join(__dirname, '../../client/fan/dist');


module.exports = {
  BAND_SRC_DIR,
  VENUE_SRC_DIR,
  BAND_DIST_DIR,
  VENUE_DIST_DIR,
  ADMIN_DIST_DIR,
  FAN_DIST_DIR
};
