'use strict';

var ASSETS = process.env.APP_SRC + config.buildEnv.ASSETS_DIR + process.env.APP_SUFIX;
var ASSETS_DEV = config.buildEnv.DEV_DIR  + process.env.APP_DIR + '/' + process.env.APP_NAME + config.buildEnv.ASSETS_DIR;
var ASSETS_TEMP = config.buildEnv.TEMP_DIR  + process.env.APP_DIR + '/' + process.env.APP_NAME + config.buildEnv.ASSETS_DIR;

var copyAssets = function copyAssets() {
  return config.gulp.src(ASSETS)
  .pipe(config.gulp.dest(ASSETS_DEV))
  .pipe(config.gulp.dest(ASSETS_TEMP));
};

config.gulp.task('copyAssets', copyAssets);