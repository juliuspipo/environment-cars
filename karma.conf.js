'use strict'

module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: './tmp',
    dieOnError: false,
    singleRun: true,
    exclude: [
      'core.html'
    ],
    files: [
      'vendor/angular/angular.js',
      'vendor/angular-ui-router/release/angular-ui-router.min.js',
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/angular-bootstrap/ui-bootstrap-tpls.js',
      'vendor/angular-sanitize/angular-sanitize.min.js',
      'vendor/script.js/dist/script.min.js',
      'vendor/angular-messages/angular-messages.min.js',
      'vendor/angular-ui-scroll/dist/ui-scroll.js',
      'vendor/angular-ui-scrollpoint/dist/scrollpoint.js',
      'vendor/angular-ui-event/dist/event.js',
      'vendor/angular-ui-mask/dist/mask.js',
      'vendor/angular-ui-validate/dist/validate.js',
      'vendor/angular-ui-indeterminate/dist/indeterminate.js',
      'vendor/angular-ui-uploader/dist/uploader.js',
      'vendor/angular-ui-utils/index.js',
      'vendor/angular-cookies/angular-cookies.js',
      'vendor/i18next/bin/index.js',
      'vendor/ng-i18next/dist/ng-i18next.js',
      'core/modules/coreTemplates.js',
      'core/modules/coreCommons.js',
      'core/modules/coreDirectives.js',
      'core/modules/coreConstants.js',
      'core/modules/coreServices.js',
      'core/modules/coreFactories.js',
      'core/modules/coreFilters.js',
      'coreTemplates.js',
      'core/**/*.js',
      'cars.js',
      'cars.html',
      'apps/cars/**/*.js'
    ],
    coverageReporter: {
      dir: '../coverage/',
      includeAllSources: true,
      type: 'html'
    },
    frameworks: ['jasmine'],
    reporters: ['progress', 'coverage'],
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-coverage'
    ],
    preprocessors: {
      '**/*spec.js': ['coverage']
    }
  });
};