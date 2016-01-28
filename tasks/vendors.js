'use strict'

function vendors() {
  return config.gulp
    .src(config.buildEnv.VENDOR_DIR)
    .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('vendors', vendors);
