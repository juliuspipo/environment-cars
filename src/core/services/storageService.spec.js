describe("Storage service", function(){

  var storageService;

  beforeEach(module("coreServices"));

  beforeEach(inject(function(_StorageService_){
     storageService = _StorageService_
  }));

  it("it should be null", function(){
    var result = storageService.getItem("greeting");
    expect(result).toBe(null)
  });

  it("it should be Hello", function(){
      var greeting = "Hello "
      storageService.setItem("greeting", greeting);
      var result = storageService.getItem("greeting");
      expect(result).toEqual(greeting);
    });

});