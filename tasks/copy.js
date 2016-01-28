'use strict';

var copy = function (src, dest) {
  return function () {
      return config.gulp.src(src).pipe(config.gulp.dest(dest));
  };
};

config.gulp.task('copy-index', copy(process.env.APP_SRC + '/*.html', config.buildEnv.TEMP_DIR));

config.gulp.task('copy-html', copy(process.env.APP_SRC + '/**/*.html', config.buildEnv.TEMP_DIR));

config.gulp.task('copy-views', copy(process.env.APP_SRC + '/src/**/*.html', config.buildEnv.TEMP_DIR + '/src'));

config.gulp.task('copy-assets', copy(process.env.APP_SRC + '/assets/**/*', config.buildEnv.TEMP_DIR + '/assets'));

config.gulp.task('copy-vendors', copy(config.buildEnv.VENDOR_DIR + '/**/*', config.buildEnv.TEMP_DIR + '/vendor'));

config.gulp.task('copy', function copy(cb) {
  return config.runSequence('copy-index', 'copy-html', 'copy-views', 'copy-assets', 'copy-vendors', cb);
});

config.gulp.task('copy-dev', function copyDev() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + '/**/*', '!' + config.buildEnv.TEMP_DIR + '/**/*.spec.js'])
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
});

config.gulp.task('copy-prod', function copyProd() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + '/**/*.*', '!' + config.buildEnv.TEMP_DIR + '/**/*.spec.js'])
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
});