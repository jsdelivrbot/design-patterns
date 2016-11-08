const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: helpers.root('src'),

  entry: {
    vendor: [
      // Polyfills
      'core-js/es6',
      'core-js/es7/reflect',
      'zone.js/dist/zone',
      // Angular2
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/core',
      '@angular/common',
      '@angular/compiler',
      '@angular/http',
      '@angular/router',
      // RxJS
      'rxjs/add/operator/map',
      'rxjs/add/operator/mergeMap'
    ],
    'app': './main'
  },

  resolve: {
    extensions: ['', '.ts', '.js'],
    root: helpers.root('src')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'raw'
    },{
      test: /\.sass$/,
      loader: "raw!sass"
    },{
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/img/[name].[hash].[ext]'
    },{
      test: /\.ts?$/,
      loader: 'ts',
      query: {
        'ignoreDiagnostics': []
      }
    }]
  }
}
