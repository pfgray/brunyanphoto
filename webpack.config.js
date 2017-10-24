/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

  output: {
    publicPath: '/wp-content/themes/brunyanphoto/', //dunno why public_path don't work...
    filename: '[name].js'
  },

  entry: {
    main: './src/components/main.js',
    portfolio: './src/components/portfolio.js',
    gallery: './src/components/gallery.js'
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.less/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|eot.*|woff.*|ttf.*|svg.*|otf.*)$/,
      use: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new ExtractTextPlugin("custom_styles.css")
  ]

};
