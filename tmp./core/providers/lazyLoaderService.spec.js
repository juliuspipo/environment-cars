'use strict';

describe('core', function () {
  beforeEach(function() {
    angular.module('core');
  });

  describe('LazyLoader', function () { 
    var ctrlAlias;
    var element;
    var nextState;
    var scope;

    beforeEach(inject(function ($injector) {
      scope = $injector.get('$rootScope').$new();
    }));

    it('carga inicial', function () {
      expect(true).toBe(true);
    });
  });
});
