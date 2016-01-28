'use strict'

config.gulp.watch(config.buildEnv.APP_DIR + '/**/*.html', function watch() {
  return config.runSequence('copy', 'copy-dev', 'vendors')
});
config.gulp.watch(config.buildEnv.APP_DIR + '/**/*.js', ['scripts']);
config.gulp.watch(config.buildEnv.APP_DIR + '/**/*.styl', ['stylus']);