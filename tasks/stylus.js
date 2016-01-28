'use strict';

config.gulp.task('copy-stylus', function () {
  return config.gulp.src(config.buildEnv.APP_DIR + '/**/*.styl')
  .pipe(config.stylus())
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
});

config.gulp.task('stylus', function (cb) {
  config.runSequence('copy-stylus', cb)
});