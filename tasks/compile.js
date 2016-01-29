'use strict';

config.gulp.task('dev', function start(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-dev', 'dev-server', cb);
});

config.gulp.task('prod', function dist(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-prod', 'prod-one-script', 'prod-vendors', 'prod-scripts', 'prod-html', 'prod-css', 'prod-server', cb);
});

config.gulp.task('dist', function dist(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-prod', 'prod-one-script', 'prod-vendors', 'prod-scripts', 'prod-html', 'prod-css', 'prod-server', cb);
});

config.gulp.task('test', function test(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-dev', 'karma', cb);
});

config.gulp.task('metrics', function metrics(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-dev', 'plato', cb);
});