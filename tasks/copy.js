'use strict';

var ASSETS = process.env.APP_SRC + config.buildEnv.ASSETS_DIR.split('.').pop() + process.env.APP_SUFIX;
var CORE_SRC = config.buildEnv.APP_DIR + '/core' + process.env.APP_SUFIX;
var CORE = [CORE_SRC, '!' + CORE_SRC + '.spec.js', '!' + config.buildEnv.APP_DIR + '/core/*.html'];
var CORE_TEMPLATE = config.buildEnv.APP_DIR + '/core' + '/template.html';
var INDEXES = process.env.APP_SRC + '/*.html';
var SCRIPTS = config.buildEnv.APP_DIR + process.env.APP_SUFIX + '.js';
var STYLES = config.buildEnv.APP_DIR + process.env.APP_SUFIX + '.less';
var VENDORS = config.buildEnv.VENDOR_DIR + process.env.APP_SUFIX;
var VIEWS = process.env.APP_SRC + '/src' +  process.env.APP_SUFIX + '.html';
var DEV_LOCAL = (process.env.APP_NAME === 'core') ? config.buildEnv.DEV_DIR : config.buildEnv.DEV_DIR + '/core';

var copy = function copy(src, dest) {
  return function () {
    return config.gulp.src(src)
    .pipe(config.gulp.dest(dest));
  };
};

config.gulp.task('copy-assets', copy(ASSETS, config.buildEnv.TEMP_DIR + '/assets'));
config.gulp.task('copy-core', copy(CORE, config.buildEnv.TEMP_DIR));
config.gulp.task('copy-core-templates', copy(CORE_TEMPLATE, config.buildEnv.TEMP_DIR + '/core'));
config.gulp.task('copy-indexes', copy(INDEXES, config.buildEnv.TEMP_DIR));
config.gulp.task('copy-styles', copy(STYLES, config.buildEnv.TEMP_DIR + '/styles'));
config.gulp.task('copy-vendors', copy(VENDORS, config.buildEnv.TEMP_DIR + process.env.APP_VENDOR));
config.gulp.task('copy-views', copy(VIEWS, config.buildEnv.TEMP_DIR + '/src'));

config.gulp.task('watch-assets', copy(ASSETS, DEV_LOCAL));
config.gulp.task('watch-views', copy(VIEWS, DEV_LOCAL));
config.gulp.task('watch-indexes', copy(INDEXES, DEV_LOCAL));
config.gulp.task('watch-scripts', copy(SCRIPTS, DEV_LOCAL));
config.gulp.task('watch-styles', copy(STYLES, DEV_LOCAL));

if (process.env.APP_NAME === 'core') {
  config.gulp.task('copy', function copy(cb) {
    return config.runSequence('copy-views', 'copy-vendors', 'copy-indexes', cb);
  });
} else {
  config.gulp.task('copy', function copy(cb) {
    return config.runSequence('copy-assets', 'copy-views', 'copy-vendors', 'copy-indexes', 'copy-core', cb);
  });
}

config.gulp.task('copy-dev', function copyDev() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + process.env.APP_SUFIX, '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.spec.js'])
  .pipe(config.gulp.dest(DEV_LOCAL));
});

config.gulp.task('copy-prod', function copyProd() {
  return config.gulp.src([config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.*', '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.spec.js'])
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
});