'use strict';

var VIEWS = config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.html';

var copyViews = function copyViews() {
  return config.gulp.src(VIEWS)
  .pipe(config.changed(config.buildEnv.TEMP_DIR), {extension: 'html'})
  .pipe(config.changed(config.buildEnv.DEV_DIR), {extension: 'html'})
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
};

config.gulp.task('copyViews', copyViews);