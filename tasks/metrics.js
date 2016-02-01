'use strict';

var SCRIPTS = [config.buildEnv.DEV_DIR + '/apps' + process.env.APP_SUFIX, config.buildEnv.DEV_DIR + '/core' + process.env.APP_SUFIX, config.buildEnv.DEV_DIR + '/*.js'];
var PLATO_FILE = config.path.join(__dirname, '../' + config.buildEnv.METRICS_DIR.split('.').pop().replace('/', ''), config.path.sep + 'index.html');

var metrics = function metrics() {
  return config.plato.inspect(SCRIPTS, config.buildEnv.METRICS_DIR, {}, function report(report) {
    config.open(PLATO_FILE);

    return report;
  });
};

config.gulp.task('metrics', metrics);