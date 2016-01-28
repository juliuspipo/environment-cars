var webServerProxies = {
  'real': 'http://tomasa-adesis.noip.me:8001/nsaf_mult_web_nsaffrontwebapp_01/api/',
  'mocks': 'http://127.0.0.1:8882/api'
};

var proxyParam = (config.args.proxy && config.args.proxy === 'mocks') ? 'mocks' : 'real';

config.gulp.task('dev-server', function dev() {
  return config.gulp.src(config.buildEnv.DEV_DIR)
  .pipe(config.webServer({
    livereload: true,
    directoryListing: false,
    open: 'http://localhost:' + config.buildEnv.DEV_PORT + '/',
    port: config.buildEnv.DEV_PORT,
    proxies: [{
      'source': '/api',
      'target': webServerProxies[proxyParam]
    }]
  }));
});

config.gulp.task('prod-server', function prod() {
  return config.gulp.src(config.buildEnv.PROD_DIR)
  .pipe(config.webServer({
    livereload: true,
    directoryListing: false,
    open: 'http://localhost:' + config.buildEnv.PROD_PORT + '/',
    port: config.buildEnv.PROD_PORT,
    proxies: [{
      'source': '/api',
      'target': webServerProxies[proxyParam]
    }]
  }));
});