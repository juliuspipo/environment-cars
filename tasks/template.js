'use strict';

var COMPONENTS = '/components';
var COMPONENTS_DEST = 'src' + COMPONENTS;
var TEMPLATE_CORE = config.buildEnv.APP_SRC + '/core' + COMPONENTS + process.env.APP_SUFIX + '.html';

function templatesCore() {
  return config.gulp.src(TEMPLATE_CORE)
  .pipe(config.templateCache('coreTemplates.js', { 
  	module: 'coreTemplates',
  	root: 'core' + COMPONENTS
  }))
  .pipe(config.gulp.dest(config.buildEnv.TEMP_DIR));
}

config.gulp.task('templatesCore', templatesCore);