'use strict';

var KARMA_ROUTE_FILE = config.path.join('./', 'karma.conf.js');

var karma = function karma(done) {
  var karmaConfigFile = config.path.resolve(KARMA_ROUTE_FILE);

  new config.karma.Server({
    browsers: [process.env.KARMA_BROWSER],
    configFile: karmaConfigFile,
    singleRun: process.env.KARMA_RUN !== 'false'
  })
  .start(karmaConfigFile, function (exitCode) {
    config.gutil.log('Karma has exited with ' + colors.red(exitCode));
    done();
    process.exit(exitCode);
  });
};

config.gulp.task('karma', karma);