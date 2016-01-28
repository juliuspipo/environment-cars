'use strict';

angular.module('cars.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', [function() {

}]);