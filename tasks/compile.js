'use strict';

var exit = function exit(error) {
  if (error) {
    console.log('[ERROR] gulp build task failed', err);
    return process.exit(0);
  } else {
    return process.exit(0);
  }
};

config.gulp.task('changelogs', function changelogs(cb) {
  return config.runSequence('clean', 'changelog', exit);
});

config.gulp.task('dev', function dev(cb) {
  return config.runSequence('clean', 'scripts', 'views', 'copyAssets', 'copyVendors', 'styles', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'devServer', cb);
});

config.gulp.task('dist', function dist(cb) {
  return config.runSequence('clean', 'scripts', 'views', 'copyAssets', 'copyVendors', 'styles', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'minifyOneScript', 'minifyHtml', 'minifyScripts', 'karma', cb);
});

config.gulp.task('prod', function prod(cb) {
  return config.runSequence('clean', 'scripts', 'views', 'copyAssets', 'copyVendors', 'styles', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'minifyOneScript', 'minifyHtml', 'minifyScripts', 'prodServer', cb);
});

config.gulp.task('test', function test(cb) {
  return config.runSequence('clean', 'scripts', 'views', 'copyAssets', 'copyVendors', 'styles', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'karma', cb);
});

config.gulp.task('test-complexity', function testComplexity(cb) {
  return config.runSequence('clean', 'scripts', 'views', 'copyAssets', 'copyVendors', 'styles', 'vendors', 'inject', 'copyIndexes', 'templatesCore', 'metrics', cb);
});