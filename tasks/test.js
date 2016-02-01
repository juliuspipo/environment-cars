'use strict';

var KARMA_ROUTE_FILE = config.path.join('./', 'karma.conf.js');

var runKarma = function (configFilePath, options, cb) {
  configFilePath = config.path.resolve(configFilePath);

  var colors = config.util.colors;
  var configuration = config.karmaConfig(configFilePath, options);
  var log = config.util.log;
  var server = config.karma.server;

  server.start(configuration, function (exitCode) {
    log('Karma has exited with ' + colors.red(exitCode));
    cb();
    process.exit(exitCode);
  });
};

config.gulp.task('karma', function (done) {

  runKarma(KARMA_ROUTE_FILE, {
    browsers: [process.env.KARMA_BROWSER],
    singleRun: process.env.KARMA_RUN !== 'false'
  }, done);
});