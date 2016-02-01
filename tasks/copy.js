'use strict';

var COPY_DEV = [config.buildEnv.TEMP_DIR + process.env.APP_SUFIX, '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.spec.js'];
var COPY_PROD = [config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.*', '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.spec.js'];

var copy = function copy(src, dest) {
  return function () {
    return config.gulp.src(src)
    .pipe(config.gulp.dest(dest));
  };
};

var copyDev = function copyDev() {
  return config.gulp.src(COPY_DEV)
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

var copyProd = function copyProd() {
  return config.gulp.src(COPY_PROD)
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
};

config.gulp.task('copyDev', copyDev);
config.gulp.task('copyProd', copyProd);