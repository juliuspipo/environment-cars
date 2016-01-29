'use strict'

function coreScripts() {
  var assets = config.useref.assets({
    searchPath: config.buildEnv.TEMP_DIR
  });

  return config.gulp.src(config.buildEnv.TEMP_DIR + '/*.html')
  .pipe(assets)
  .pipe(assets.restore())
  .pipe(config.useref())
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR));
}

function deleteLibs() {
  return config.gulp.src([config.buildEnv.PROD_DIR + process.env.APP_VENDOR], {
    read: false
  })
  .pipe(config.rimraf().on('error', function (error) {
    console.log(error);
  }));
}

function distCss() {
  return config.gulp.src(config.buildEnv.PROD_DIR + process.env.APP_SUFIX + '.css')
  .pipe(config.minifyCSS())
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR))
}

function distHtml() {
  return config.gulp.src(config.buildEnv.PROD_DIR + process.env.APP_SUFIX + '.html')
  .pipe(config.minifyHTML({
    collapseWhitespace: true
  }))
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR))
}

function distScripts() {
  return config.gulp.src(config.buildEnv.PROD_DIR + process.env.APP_SUFIX + '.js')
  .pipe(config.uglify())
  .pipe(config.gulp.dest(config.buildEnv.PROD_DIR))
}

config.gulp.task('coreScript', coreScripts);
config.gulp.task('deleteLibs', deleteLibs);
config.gulp.task('distCss', distCss);
config.gulp.task('distHtml', distHtml);
config.gulp.task('distScripts', distScripts);