'use strict';

var webServerProxies = {
  'real': 'http://tomasa-adesis.noip.me:8001/nsaf_mult_web_nsaffrontwebapp_01/api/',
  'mocks': 'http://127.0.0.1:8882/api'
};

var proxyParam = (config.args.proxy && config.args.proxy === 'mocks') ? 'mocks' : 'real';

config.gulp.task('devServer', function dev() {
  return config.gulp.src(config.buildEnv.DEV_DIR)
  .pipe(config.webServer({
    livereload: true,
    directoryListing: false,
    open: 'http://localhost:' + process.env.APP_PORT + '/',
    port: process.env.APP_PORT
  }));
});

config.gulp.task('prodServer', function prod() {
  return config.gulp.src(config.buildEnv.PROD_DIR)
  .pipe(config.webServer({
    livereload: false,
    directoryListing: false,
    open: 'http://localhost:' + process.env.APP_PORT + '/',
    port: process.env.APP_PORT
  }));
});