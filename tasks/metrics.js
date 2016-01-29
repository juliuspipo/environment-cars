'use strict';

function metrics() {
  config.plato.inspect([config.buildEnv.DEV_DIR + process.env.APP_SUFIX], config.buildEnv.METRICS_DIR, {}, function report(report) {
    return report;
  });
}

config.gulp.task('metrics', metrics);