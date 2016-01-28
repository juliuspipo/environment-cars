'use strict'

module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: 'tmp/',
    dieOnError: false,
    singleRun: true,

    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: '../coverage/',
      includeAllSources: true,
      type: 'html'
    },
    exclude: [],
    files: [
      '../vendor/angular/angular.js',
      '../vendor/angular-ui-router/release/angular-ui-router.min.js',
      '../vendor/angular-mocks/angular-mocks.js',
      '../vendor/angular-sanitize/angular-sanitize.min.js',
      '../vendor/script.js/dist/script.min.js',
      '../vendor/ramda/dist/ramda.min.js',
      '../vendor/angular-strap/dist/angular-strap.min.js',
      '../vendor/angular-strap/dist/angular-strap.tpl.min.js',
      '../vendor/ui-router/release/angular-ui-router.min.js',
      'scripts/main.js',
      'scripts/**/*.js',
      'index.html',
      'views/**/*.html'
    ],
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ]
  });
};