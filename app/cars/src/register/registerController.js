'use strict';

angular.module('cars.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'RegisterController'
  });
}])

.controller('RegisterController', [function() {

}]);