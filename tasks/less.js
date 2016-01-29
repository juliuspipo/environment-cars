'use strict';

function less() {
  return config.gulp.src(process.env.APP_SRC +  process.env.APP_SUFIX + '/.less')
  .pipe(config.less({
    paths: [config.path.join(__dirname, 'less', 'includes')]
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('less', less);