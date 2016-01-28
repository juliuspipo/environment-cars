'use strict';

config.gulp.task('clean', function clean() {
  return config.gulp.src([config.buildEnv.DEV_DIR, config.buildEnv.TEMP_DIR, config.buildEnv.PROD_DIR, config.buildEnv.METRICS_DIR], {
    read: false
  })
  .pipe(config.rimraf().on('error', function error(error) {
    console.log(error);
  }));
});