'use strict'

var SCRIPTS = [
  config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.js',
  '!' + config.buildEnv.TEMP_DIR + config.buildEnv.APP_DIR.split('.').pop() + '/' + process.env.APP_NAME + '/modules' + process.env.APP_SUFIX + '.js',
  '!' + config.buildEnv.TEMP_DIR + '/*.js',
  '!' + config.buildEnv.TEMP_DIR + config.buildEnv.VENDOR_DIR.split('.').pop() + process.env.APP_SUFIX,
  '!' + config.buildEnv.TEMP_DIR + '/' + config.buildEnv.CORE_DIR + process.env.APP_SUFIX,
  '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + 'spec.js',
  '!' + config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + 'Router.js'
];

var VENDORS_HTML = [
  config.buildEnv.TEMP_DIR + process.env.APP_SUFIX + '.html',
  '!' + config.buildEnv.TEMP_DIR + config.buildEnv.VENDOR_DIR.split('.').pop() + process.env.APP_SUFIX + '.html',
  '!' + config.buildEnv.TEMP_DIR + '/*.html'
];

var minifyIndex = function minifyIndex() {
  return config.gulp.src(config.buildEnv.PROD_DIR + '/*.html')
  .pipe(config.minifyHTML({
    collapseWhitespace: true
  }))
  .pipe(config.rename('index.html'))
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
};

var minifyHtml = function minifyHtml() {
  return config.gulp.src(VENDORS_HTML)
  .pipe(config.minifyHTML({
    collapseWhitespace: true
  }))
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR))
};

var minifyOneScript = function minifyOneScript() {
  var assets = config.useref({
    searchPath: config.buildEnv.TEMP_DIR
  });

  return config.gulp.src([config.buildEnv.TEMP_DIR + '/*.html', '!' + config.buildEnv.TEMP_DIR + '/core.html'])
  .pipe(assets)
  .pipe(config.gulpIf('*.js', config.uglify()))
  .pipe(config.gulpIf('*.css', config.minifyCSS()))
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
};

var minifyScripts = function minifyScripts() {
  return config.gulp.src(SCRIPTS)
  .pipe(config.uglify())
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
};

config.gulp.task('minifyHtml', minifyHtml);
config.gulp.task('minifyIndex', minifyIndex);
config.gulp.task('minifyOneScript', minifyOneScript);
config.gulp.task('minifyScripts', minifyScripts);