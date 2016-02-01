'use strict';

config.gulp.task('dev', function dev(cb) {
  return config.runSequence('clean', 'scripts', 'copyViews', 'copyAssets', 'copyVendors', 'less', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'devServer', cb);
});

config.gulp.task('prod', function prod(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-prod', 'prod-one-script', 'prod-vendors', 'prod-scripts', 'prod-html', 'prod-css', 'prod-server', cb);
});

config.gulp.task('dist', function dist(cb) {
  return config.runSequence('clean', 'scripts', 'copy', 'less', 'vendors', 'copy-prod', 'prod-one-script', 'prod-vendors', 'prod-scripts', 'prod-html', 'prod-css', 'prod-server', cb);
});

config.gulp.task('test', function test(cb) {
  return config.runSequence('clean', 'scripts', 'copyViews', 'copyAssets', 'copyVendors', 'less', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'karma', cb);
});

config.gulp.task('test-complexity', function testComplexity(cb) {
  return config.runSequence('clean', 'scripts', 'copyViews', 'copyAssets', 'copyVendors', 'less', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'metrics', cb);
});

//'templatesCore', 'templatesApp', 'less', 'vendors', 'copy-dev', 'dev-server',