describe("Storage service", function(){

  var storageService;

  beforeEach(module("coreServices"));

  beforeEach(inject(function(_StorageService_){
    storageService = _StorageService_;
    storageService.clear();
  }));

  it("it should be null", function(){
    var result = storageService.getItem("greeting");
    expect(result).toBe(null)
  });

  it("it should be Hello", function(){
    var greeting = "Hello";
    storageService.setItem("greeting", greeting);
    expect(storageService.getItem("greeting")).toEqual(greeting);
  });

});