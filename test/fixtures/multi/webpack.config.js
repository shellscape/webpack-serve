const { resolve } = require('path');

module.exports = [
  {
    context: __dirname,
    entry: './app.js',
    mode: 'development',
    output: {
      filename: './dist-app.js',
      path: resolve(__dirname, './output'),
      publicPath: 'output/'
    },
    watch: true
  },
  {
    context: __dirname,
    entry: ['./worker.js'],
    mode: 'development',
    output: {
      filename: './dist-worker.js',
      path: resolve(__dirname, './output'),
      publicPath: 'output/'
    }
  }
];
