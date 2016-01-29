'use strict'

function vendors(resource) {
  return config.gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(config.wiredep({
    directory: config.buildEnv.TEMP_DIR + process.env.APP_VENDOR
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR))
}

config.gulp.task('vendors', vendors);