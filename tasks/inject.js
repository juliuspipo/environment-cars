'use strict';

var inject = function inject() {
  var sources = config.gulp.src([
      config.buildEnv.TEMP_DIR + process.env.APP_DIR + '/' + process.env.APP_NAME +  process.env.APP_SUFIX + '.js',
      '!' + config.buildEnv.TEMP_DIR + process.env.APP_DIR + '/' + process.env.APP_NAME +  process.env.APP_SUFIX + '*Controller.js',
      '!' + config.buildEnv.TEMP_DIR + process.env.APP_DIR + '/' + process.env.APP_NAME +  process.env.APP_SUFIX + '*Service.js',
      config.buildEnv.TEMP_DIR + '/styles/' + process.env.APP_NAME + '.css'
    ], { read: false });

  return config.gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(config.inject(sources, { relative: true }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
};

config.gulp.task('inject', inject);