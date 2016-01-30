(function () {
  'use strict';

  loginRouter.$inject = ["$stateProvider", "LazyLoaderProvider"];
  angular.module('cars')
    .config(loginRouter);

  function loginRouter($stateProvider, LazyLoaderProvider) {
    var LOGIN = '/login';
    var ROUTE_LOGIN = LOGIN + '/';

    $stateProvider
    .state('login', {
      url: LOGIN,
      templateUrl: ROUTE_LOGIN + 'login.html',
      controller: 'LoginController as loginController',
      resolve: {
        load: LazyLoaderProvider.add([ROUTE_LOGIN + 'ctrl.js'])
      }
    });
  }
})();