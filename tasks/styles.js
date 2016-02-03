'use strict';

var styles = function styles() {
  var compile = (config.tasksEnv.stylesSufix === 'less') ? config.less({paths: config.tasksEnv.stylesPaths}) : config.sass({includePaths: config.tasksEnv.stylesPaths});

  return config.gulp.src(config.buildEnv.APP_SRC +  process.env.APP_SUFIX + '.' + config.tasksEnv.stylesSufix)
  .pipe(config.changed(config.buildEnv.TEMP_DIR), {extension: 'css'})
  .pipe(config.changed(config.buildEnv.DEV_DIR), {extension: 'css'})
  .pipe(compile)
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR))
  .pipe(config.gulp.dest(config.buildEnv.DEV_DIR));
};

config.gulp.task('styles', styles);