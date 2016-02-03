module.exports = {
  buildEnv: {
    APP_DIR: './apps',
    APP_FULL_DIR: './src/apps',
    APP_SRC: './src',
    ASSETS_DIR: '/assets',
    BUILD_DIR: './tasks',
    CORE_DIR: './core',
    COVERAGE_DIR: './coverage',
    DEFAULT_KARMA_BROWSER: 'PhantomJS',
    DEFAULT_SERVER_PORT: 5101,
    DEV_DIR: './dev',
    JS_HINT_FILE: '.jshintrc',
    METRICS_DIR: './metrics',
    PROD_DIR: './prod',
    TEMP_DIR: './tmp',
    VENDOR_DIR: './vendor'
  },
  tasksEnv: {
    stylesPaths: ['includes', 'components', 'layout', 'layouts'],
    stylesSufix: 'less'
  },
  annotate: require('gulp-ng-annotate'),
  args: require('yargs').argv,
  changed: require('gulp-changed'),
  changelog: require('conventional-changelog'),
  fs: require('fs'),
  gulp: require('gulp'),
  gulpIf: require('gulp-if'),
  gutil: require('gulp-util'),
  inject: require('gulp-inject'),
  jsHint: require('gulp-jshint'),
  karma: require('karma'),
  karmaConfig: require("karma/lib/config").parseConfig,
  less: require('gulp-less'),  
  minifyCSS: require('gulp-cssnano'),
  minifyHTML: require('gulp-htmlmin'),
  open: require('open'),
  path: require('path'),
  plato: require('plato'),
  rimraf: require('gulp-rimraf'),
  runSequence: require('run-sequence'),
  sass: require('gulp-sass'),
  templateCache: require('gulp-angular-templatecache'),
  uglify: require('gulp-uglify'),
  useref: require('gulp-useref'),
  webServer: require('gulp-webserver'),
  wiredep: require('wiredep').stream
};