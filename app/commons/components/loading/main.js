"use strict";

(function () {
  angular.module("ProjectName").directive("loading", loading);

  function loading($window) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'scripts/commons/directives/loading/main.html'
    };
  }
})();
