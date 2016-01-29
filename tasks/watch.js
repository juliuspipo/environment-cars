'use strict'

function watchIndexes() {
  return config.runSequence('copy-indexes', 'vendors', 'watch-indexes');
}

function watchScripts() {
  return config.runSequence('less', 'watch-styles');
}

function watchStyles() {
  return config.runSequence('scripts', 'watch-scripts');
}

function watchViews() {
  return config.runSequence('copy-views', 'watch-views');
}

config.gulp.watch(config.buildEnv.APP_DIR + process.env.APP_SUFIX + '.js', watchScripts);
config.gulp.watch(config.buildEnv.APP_DIR + process.env.APP_SUFIX + '.less', watchStyles);
config.gulp.watch([config.buildEnv.APP_DIR + process.env.APP_SUFIX + '.html', '!' + process.env.APP_SRC + '/*.html' ], watchViews);
config.gulp.watch(process.env.APP_SRC + '/*.html', watchIndexes);