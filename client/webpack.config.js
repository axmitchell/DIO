const path = require('path');

module.exports = {
  entry: {
    'band/dist/bundle': path.resolve(__dirname,'band/src/index.jsx'), 
    'venue/dist/bundle': path.resolve(__dirname,'venue/src/index.jsx'),
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname),
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