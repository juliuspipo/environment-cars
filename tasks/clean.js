'use strict';

var dirs = [config.buildEnv.DEV_DIR, config.buildEnv.TEMP_DIR, config.buildEnv.PROD_DIR, config.buildEnv.METRICS_DIR, config.buildEnv.COVERAGE_DIR];

//Process variables for the general scope of all the gulp tasks

process.env.APP_CORE = config.buildEnv.CORE_DIR.split('.').pop();
process.env.APP_DIR = config.buildEnv.APP_DIR.split('.').pop();
process.env.APP_ENV = config.args.env || 'dev';
process.env.APP_NAME = config.args.name || process.env.APP_CORE;
process.env.APP_PORT = config.args.port || config.buildEnv.DEFAULT_SERVER_PORT;
process.env.APP_SRC = config.buildEnv.APP_FULL_DIR + '/' + process.env.APP_NAME;
process.env.APP_SUFIX = '/**/*';
process.env.APP_VENDOR = config.buildEnv.VENDOR_DIR.split('.').pop();
process.env.KARMA_BROWSER = config.args.browser || config.buildEnv.DEFAULT_KARMA_BROWSER
process.env.KARMA_RUN = config.args.run;

var clean = function clean() {
  return config.gulp.src(dirs, { read: false })
  .pipe(config.rimraf().on('error', function error(error) {
    console.log(error);
  }));
};

config.gulp.task('clean', clean);