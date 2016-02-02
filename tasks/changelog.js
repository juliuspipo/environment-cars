'use strict';

var changelog = function changelog(done) {
  var pack = require('../package.json');

  return config.changelog({
    repository: pack.repository.url,
    version: pack.version
  })
  .pipe(config.fs.createWriteStream('CHANGELOG.md'));
};

config.gulp.task('changelog', changelog);