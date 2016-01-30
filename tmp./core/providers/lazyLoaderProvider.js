(function () {
  'use strict';

  angular.module('coreServices')
    .provider("LazyLoader", LazyLoader);

  function LazyLoader() {
    return {
      add: function add(resources) {
        return function ($q) {
          var deferred = $q.defer();

          $script(resources, function resolve() {
            deferred.resolve();
          });

          return deferred.promise;
        };
      },
      $get: function $get() {}
    };
  }
})();