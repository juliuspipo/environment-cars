'use strict';

var copyIndexes = function copyIndexes() {
  return config.gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

config.gulp.task('copyIndexes', copyIndexes);