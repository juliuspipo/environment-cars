(function () {
  'use strict';

  configCore.$inject = ["$compileProvider", "$controllerProvider", "$provide"];
  var core = angular.module('core', ['coreConstants', 'coreDirectives', 'coreFactories', 'coreFilters', 'coreServices'])
    .config(configCore);

  function configCore($compileProvider, $controllerProvider, $provide) {
    core.controller = $controllerProvider.register;
    core.directive = $compileProvider.directive;
    core.factory = $provide.factory;
    core.service = $provide.service;
  }
})();