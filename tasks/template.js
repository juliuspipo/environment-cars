'use strict';

var COMPONENTS = '/components';
var COMPONENTS_DEST = 'src' + COMPONENTS;
var TEMPLATE_APP = process.env.APP_SRC + '/src' + COMPONENTS + process.env.APP_SUFIX + '.html';
var TEMPLATE_CORE = config.buildEnv.APP_DIR + '/core/src' + COMPONENTS + process.env.APP_SUFIX + '.html';

function templatesApp() {
  return config.gulp.src(TEMPLATE_APP)
  .pipe(config.templateCache(
    process.env.APP_NAME + 'Templates.js',
    {
      module:  process.env.APP_NAME + 'Templates',
      root: COMPONENTS_DEST
    }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

function templatesCore() {
  return config.gulp.src(TEMPLATE_CORE)
  .pipe(config.templateCache(
    'coreTemplates.js',
    {
      module: 'coreTemplates',
      root: (process.env.APP_NAME === 'core') ? COMPONENTS_DEST : 'core/' + COMPONENTS_DEST
    }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('templatesApp', templatesApp);
config.gulp.task('templatesCore', templatesCore);