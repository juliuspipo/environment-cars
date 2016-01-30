(function () {
  'use strict';

  configProviders.$inject = ["$compileProvider", "$controllerProvider", "$provide", "$urlRouterProvider"];
  var cars = angular.module('cars', [
    'carsConstants',
    'carsDirectives',
    'carsFactories',
    'carsFilters',
    'carsServices'
  ])
    .config(configProviders);

  function configProviders($compileProvider, $controllerProvider, $provide, $urlRouterProvider) {
    cars.controller = $controllerProvider.register;
    cars.directive = $compileProvider.directive;
    cars.factory = $provide.factory;
    cars.service = $provide.service;

    $urlRouterProvider.otherwise('/');
  }
})();