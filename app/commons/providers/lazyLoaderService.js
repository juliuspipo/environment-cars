(() => {
  angular.module("ProjectName").provider("LazyLoaderService", function () {
    return {
      add: function add(resources) {
        return function ($q) {
          var deferred = $q.defer();

          $script(resources, function () {
            deferred.resolve();
          });

          return deferred.promise;
        };
      },
      $get: function $get() {}
    };
  });
})