'use strict';

describe('ProjectName', function() {
  beforeEach(function(){
    angular.module('ProjectName');
  });

  describe('LazyLoaderService', function() {
    var ctrlAlias;
    var element;
    var nextState;
    var scope;

    beforeEach(inject(function($injector) {
      scope = $injector.get('$rootScope').$new();
    }));

    it('carga inicial', function() {
      expect(true).toBe(true);
    });
  });
});
