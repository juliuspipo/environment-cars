'use strict';

var copy = function (src, dest) {
  return function () {
      return config.gulp.src(src).pipe(config.gulp.dest(dest));
  };
};

config.gulp.task('copy-index', copy(config.buildEnv.APP_DIR + '/index.html', config.buildEnv.TEMP_DIR));

config.gulp.task('copy-html', copy(config.buildEnv.APP_DIR + '/**/*.html', config.buildEnv.TEMP_DIR));

config.gulp.task('copy-views', copy(config.buildEnv.APP_DIR + '/views/**/*', config.buildEnv.TEMP_DIR + '/views'));

config.gulp.task('copy-assets', copy(config.buildEnv.APP_DIR + '/assets/**/*', config.buildEnv.TEMP_DIR + '/assets'));

config.gulp.task('copy-libs', copy(config.buildEnv.VENDOR_DIR + '/**/*', config.buildEnv.TEMP_DIR + '/lib'));

config.gulp.task('copy', function copy(cb) {
  return config.runSequence('copy-index', 'copy-html', 'copy-views', 'copy-assets', 'copy-libs', cb);
});

config.gulp.task('copy-dev', function copyDev() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + '/**/*', '!' + config.buildEnv.TEMP_DIR + '/**/*.spec.js'])
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
});

config.gulp.task('copy-prod', function copyProd() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + '/**/*.*', '!' + config.buildEnv.TEMP_DIR + '/**/*.spec.js'])
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
});