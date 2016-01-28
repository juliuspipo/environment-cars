'use strict';

function metrics() {
  config.plato.inspect([config.buildEnv.DEV_DIR + '/scripts/**/*'], config.buildEnv.METRICS_DIR, {}, function report(report) {
    return report;
  }
}

config.gulp.task('metrics', metrics);