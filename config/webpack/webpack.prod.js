const helpers = require('./helpers');
const common = require('./webpack.common');

const merge = require('webpack-merge');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = merge(common, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: 'js/[name].[hash:4].js'
  },

  plugins: [
    new UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});
