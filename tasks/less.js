'use strict';

function less() {
  return config.gulp.src(config.buildEnv.APP_SRC +  process.env.APP_SUFIX + '.less')
  .pipe(config.less({
    paths: ['includes', 'components', 'layout', 'layouts']
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('less', less);