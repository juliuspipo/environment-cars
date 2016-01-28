'use strict';

config.gulp.task('start', function (cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'stylus', 'vendors', 'copy-dev', 'dev-server', cb);
});

config.gulp.task('dist', function (cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'stylus', 'vendors', 'copy-prod', 'prod-one-script', 'prod-vendors', 'prod-scripts', 'prod-html', 'prod-css', 'prod-server', cb);
});

config.gulp.task('test', function (cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'stylus', 'vendors', 'copy-dev', 'karma', cb);
});

config.gulp.task('metrics', function (cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'stylus', 'vendors', 'copy-dev', 'plato', cb);
});