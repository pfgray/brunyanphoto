/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/',
    path: 'dist/assets/',
    filename: 'main.js'
  },

  debug: false,
  devtool: false,
  entry: './src/components/main.js',

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin({
      bail: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(eot.*|woff.*|ttf.*|svg.*|otf.*)$/,
      loader: "file-loader"
    }]
  }
};
