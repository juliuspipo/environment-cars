(function () {
  'use strict';

  var cars = angular.module('cars', [
    'carsConstants',
    'carsDirectives',
    'carsFactories',
    'carsFilters',
    'carsServices'
  ])
    .config(configProviders);

  function configProviders($compileProvider, $controllerProvider, $locationProvider, $provide, $urlRouterProvider) {
    cars.controller = $controllerProvider.register;
    cars.directive = $compileProvider.directive;
    cars.factory = $provide.factory;
    cars.service = $provide.service;

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  }
})();