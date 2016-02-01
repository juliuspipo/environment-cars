'use strict'

var COMPONENTS = config.buildEnv.APP_SRC + '/core/components' + process.env.APP_SUFIX + '.html';
var INDEXES = config.buildEnv.APP_SRC + '/*.html';
var SCRIPTS = config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.js';
var STYLES = config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.less';
var VIEWS = [config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.html', '!' + config.buildEnv.APP_SRC + '/*.html', '!' + COMPONENTS];

var indexes = function indexes() {
  return config.runSequence('copyViews', 'vendors', 'inject', 'copyIndexes');
};

config.gulp.watch(COMPONENTS, ['templatesCore']).on('change', function(file) {
  config.gutil.log(config.gutil.colors.blue('HTML COMPONENT changed' + ' (' + file.path + ')'));
});

config.gulp.watch(INDEXES, indexes).on('change', function(file) {
  config.gutil.log(config.gutil.colors.blue('INDEX changed' + ' (' + file.path + ')'));
});

config.gulp.watch(SCRIPTS, ['scripts']).on('change', function(file) {
  config.gutil.log(config.gutil.colors.red('JS changed' + ' (' + file.path + ')'));
});

config.gulp.watch(STYLES, ['less']).on('change', function(file) {
  config.gutil.log(config.gutil.colors.yellow('LESS changed' + ' (' + file.path + ')'));
});

config.gulp.watch(VIEWS, ['copyViews']).on('change', function(file) {
  config.gutil.log(config.gutil.colors.yellow('HTML changed' + ' (' + file.path + ')'));
});
