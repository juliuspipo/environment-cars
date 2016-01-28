'use strict';

config.gulp.task('scripts', function () {
  return config.gulp.src([config.buildEnv.APP_DIR + '/**/*.js'])
  .pipe(config.changed(config.buildEnv.TEMP_DIR))
  .pipe(config.jsHint(config.buildEnv.JS_HINT_FILE))
  .pipe(config.annotate(config.buildEnv.TEMP_DIR))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
});

//gulp.task('scripts-build', function () {
//    return gulp.src(['./tmp/**/*.js', '!./tmp/**/*.spec.js', '!./tmp/guide/**/*.data.js']).pipe(ngAnnotate()).pipe(gulp.dest('./build'));
//});


/*gulp.task('scripts', function (cb) {
    return runSequence('scripts-tmp', 'scripts-build', cb);
});
*/
