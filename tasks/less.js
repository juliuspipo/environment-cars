'use strict';

var less = function less() {
  return config.gulp.src(config.buildEnv.APP_SRC +  process.env.APP_SUFIX + '.less')
  .pipe(config.changed(config.buildEnv.TEMP_DIR), {extension: 'css'})
  .pipe(config.changed(config.buildEnv.DEV_DIR), {extension: 'css'})
  .pipe(config.less({
    paths: ['includes', 'components', 'layout', 'layouts']
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR))
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

config.gulp.task('less', less);