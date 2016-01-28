'use strict';

function less() {
  return config.gulp.src(process.env.APP_SRC + '/**/*.less')
  .pipe(config.less({
    paths: [config.path.join(__dirname, 'less', 'includes')]
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('less', less);