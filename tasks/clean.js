'use strict';

var dirs = [config.buildEnv.DEV_DIR, config.buildEnv.TEMP_DIR, config.buildEnv.PROD_DIR, config.buildEnv.METRICS_DIR];

process.env.APP_ENV = config.args.env ||'dev';
process.env.APP_LIVE_PORT = config.args.live || 35729;
process.env.APP_NAME = config.args.name || 'core';
process.env.APP_PORT = config.args.port || 5101;
process.env.APP_SRC = config.buildEnv.APP_DIR + '/' + process.env.APP_NAME;

function clean() {
  return config.gulp.src(dirs, { read: false })
  .pipe(config.rimraf().on('error', function error(error) {
    console.log(error);
  });
}

config.gulp.task('clean', clean);