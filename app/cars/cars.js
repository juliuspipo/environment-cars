(function () {
  'use strict';

  var cars;

  cars = angular.module('cars', ['carsConstants', 'carsDirectives', 'carsFactories', 'carsFilters', 'carsServices'])
    .config(configProviders);

  function configProviders($controllerProvider, $provide, $urlRouterProvider) {
    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.factory = $provide.factory;
    app.service = $provide.service;

    $urlRouterProvider.otherwise('/');
  }
})();