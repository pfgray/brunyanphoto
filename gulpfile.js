const fs = require('fs');
const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const merge = require('merge-stream');
const gulpWebpack = require('gulp-webpack');
const concat = require('gulp-concat');
const clone = require('gulp-clone');
const zip = require('gulp-zip');

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
    gulp.src(['src/php/*.php'])
  )

  // PHP
  const randomFiles = gulp.src([
    'src/style.css',
    'src/screenshot.png'
  ]);

  const allAssets =
    merge(webpackBundle, randomFiles, phpFiles)

  const zipAssets = allAssets.pipe(clone());

  return merge(
    zipAssets
      .pipe(zip(`brunyanphoto.zip`))
      .pipe(gulp.dest('./')),
    allAssets
      .pipe(gulp.dest('./dist'))
  )
});
