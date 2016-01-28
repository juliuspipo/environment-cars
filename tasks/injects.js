'use strict'

function injects(resource) {
  var assets = injects.useref().assets();

  return gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(injects.useref())
  .pipe(gulp.dest(config.build));
}

config.gulp.task('injects', injects);