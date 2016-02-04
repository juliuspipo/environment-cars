describe("Loading", function(){

  beforeEach(module("coreDirectives"));

  beforeEach(inject(function(_$compile_, _$rootScope_){
                 // The injector unwraps the underscores (_) from around the parameter names when matching
                 $compile = _$compile_;
                 $rootScope = _$rootScope_;
               }));

  it("should be contain Cargando datos", function (){
        	 element = $compile('<loading></loading>')($rootScope);
           $rootScope.$digest();
          console.log(element.html());
          expect(element.html()).toContain('Cargando datos');
  });
});