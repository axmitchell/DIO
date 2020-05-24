const path = require('path');
const paths = require('./PATHS.js');

module.exports = {
  entry: {
    'band/dist/bundle': `${paths.BAND_SRC_DIR}/index.jsx`, 
    'venue/dist/bundle': `${paths.VENUE_SRC_DIR}/index.jsx`,
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      }
    ]
  }
};