'use strict'

var VENDORS = config.buildEnv.VENDOR_DIR + process.env.APP_SUFIX;

var copyVendors = function copyVendors() {
  return config.gulp.src(VENDORS)
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR + process.env.APP_VENDOR))
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR + process.env.APP_VENDOR));
};

var vendors = function vendors() {
  return config.gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(config.wiredep({
    directory: config.buildEnv.TEMP_DIR + process.env.APP_VENDOR
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
};

config.gulp.task('copyVendors', copyVendors);
config.gulp.task('vendors', vendors);