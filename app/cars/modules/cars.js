(function wrapper() {
  'use strict';

  var app = angular
    .module('cars', ['appCommons', 'carsDirectives', 'carsServices', 'carsFilters', 'carsConstants', 'carsFactories'])
    .config(configProviders);

  function configProviders($controllerProvider, $provide) {
    app.controller = $controllerProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
  }
})();