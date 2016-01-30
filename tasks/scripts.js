'use strict';

function scripts() {
  return config.gulp.src(config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.js')
  //.pipe(config.changed(config.buildEnv.TEMP_DIR))
  .pipe(config.jsHint(config.buildEnv.JS_HINT_FILE))
  .pipe(config.annotate(config.buildEnv.TEMP_DIR))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('scripts', scripts);