'use strict';

function injectScripts() {

  return config.gulp.src([process.env.APP_SRC + '/**/*.js'])
  .pipe(config.inject(gulp.src(fileDir, {read: false}), {relative: true}))
  .pipe(config.gulp.dest(config.build));
}

config.gulp.task('injectScripts', injectScripts);