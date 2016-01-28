config = require('./config')

require('require-dir')(config.buildEnv.BUILD_DIR, {
  recurse: true
});