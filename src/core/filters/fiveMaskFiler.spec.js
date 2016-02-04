describe("Five Mask", function(){

  beforeEach(module("coreFilters"));

  it("it should not be null", inject(function($filter){
    expect($filter("fiveMaskFilter")).not.toBeNull();
  }));

  it("it should be undefined ", inject(function (fiveMaskFilterFilter){
      var digit = 123;
      expect(fiveMaskFilterFilter(digit)).not.toBeDefined();
    }));

  it("it return ***** in the beginning", inject(function (fiveMaskFilterFilter){
    var word = "Five mask filter";
    expect(fiveMaskFilterFilter(word)).toMatch("\\*{5}");
    expect(fiveMaskFilterFilter(word)).toEqual("*****" + word.substring(5));
  }));
})