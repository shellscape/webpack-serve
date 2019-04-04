const { resolve } = require('path');

module.exports = {
  context: __dirname,
  entry: ['./app.js'],
  mode: 'development',
  output: {
    filename: './output.js',
    path: resolve(__dirname, './output'),
    publicPath: 'output/'
  }
};
