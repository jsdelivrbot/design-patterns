const helpers = require('./helpers');
const common = require('./webpack.common');

const merge = require('webpack-merge');

module.exports = merge(common, {
  devtool: 'cheap-inline-module-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js'
  },

  devServer: {
    stats: 'minimal',
    port: 3000
  }
});
