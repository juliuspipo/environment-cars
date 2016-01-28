(function () {
  'use strict';

  var cars;

  cars = angular.module('cars', [
    'carsConstants',
    'carsDirectives',
    'carsFactories',
    'carsFilters',
    'carsServices'
  ])
    .config(configProviders);

  function configProviders($controllerProvider, $provide, $urlRouterProvider) {
    cars.controller = $controllerProvider.register;
    cars.directive = $compileProvider.directive;
    cars.factory = $provide.factory;
    cars.service = $provide.service;

    $urlRouterProvider.otherwise('/');
  }
})();