'use strict';

var SCRIPTS = [
  config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.js',
  '!' + config.buildEnv.APP_SRC + '/!(' + process.env.APP_NAME + '.js' + ')',
  '!' + config.buildEnv.APP_FULL_DIR + '/!(' + process.env.APP_NAME + ')' + process.env.APP_SUFIX + '.js'
];

var scripts = function scripts() {
  return config.gulp.src(SCRIPTS)
  .pipe(config.changed(config.buildEnv.TEMP_DIR), {extension: 'js'})
  .pipe(config.changed(config.buildEnv.DEV_DIR), {extension: 'js'})
  .pipe(config.jsHint(config.buildEnv.JS_HINT_FILE))
  .pipe(config.annotate())
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR))
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

config.gulp.task('scripts', scripts);