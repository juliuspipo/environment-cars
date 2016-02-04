'use strict';

var LOCALS = process.env.APP_SRC + '/' + config.buildEnv.LOCALS_DIR + '/es-MX' + process.env.APP_SUFIX;
var COMPILER = (config.tasksEnv.viewLocals) ? config.jade({locals: LOCALS, pretty: true}) : config.jade({pretty: true});
var VIEWS = [
  config.buildEnv.APP_SRC + process.env.APP_SUFIX + '.' + config.tasksEnv.viewsSufix,
  '!' + config.buildEnv.APP_SRC + '/!(' + process.env.APP_NAME + '.' + config.tasksEnv.viewsSufix + ')',
  '!' + config.buildEnv.APP_FULL_DIR + '/!(' + process.env.APP_NAME + ')' + process.env.APP_SUFIX + '.' + config.tasksEnv.viewsSufix
];

var views = function views() {
  var src = config.gulp.src(VIEWS)
  .pipe(config.changed(config.buildEnv.TEMP_DIR), {extension: 'html'})
  .pipe(config.changed(config.buildEnv.DEV_DIR), {extension: 'html'});

  if (config.tasksEnv.viewsSufix === 'jade') {
    src = src.pipe(config.jade(COMPILER));
  }

  src
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
};

config.gulp.task('views', views);