'use strict';

config.gulp.task('metrics', function metrics() {
  config.plato.inspect([config.buildEnv.DEV_DIR + '/scripts/**/*'], config.buildEnv.METRICS_DIR, {}, function report(report) {
    return report;
  })
});