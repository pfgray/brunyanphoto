const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const merge = require('merge-stream');
const gulpWebpack = require('gulp-webpack');
const concat = require('gulp-concat');
const clone = require('gulp-clone');

const distWebpackConfig = require('./webpack.config.js');
const packageJson = require('./package.json');

gulp.task('build', function(){

  process.env.NODE_ENV = 'production';

  // Script Bundle
  const webpackBundle = gulp.src('src/components/main.js')
    .pipe(gulpWebpack(distWebpackConfig, webpack));

  const index = gulp.src('src/index.php');
  const phpFiles = merge(
    index,
    index.pipe(clone()).pipe(concat('portfolio.php')),
    index.pipe(clone()).pipe(concat('pricing.php')),
    index.pipe(clone()).pipe(concat('about.php')),
    gulp.src('src/functions.php')
  )

  // PHP
  const randomFiles = gulp.src([
    'src/style.css',
    'src/screenshot.png'
  ]);

  const allAssets =
    merge(webpackBundle, randomFiles, phpFiles)
      .pipe(gulp.dest('./dist'));

});
