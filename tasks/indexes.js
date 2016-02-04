'use strict';

var copyIndexes = function copyIndexes() {
  return config.gulp.src(config.buildEnv.TEMP_DIR + '/' + process.env.APP_NAME + '.html')
  .pipe(config.rename('index.html'))
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

config.gulp.task('copyIndexes', copyIndexes);