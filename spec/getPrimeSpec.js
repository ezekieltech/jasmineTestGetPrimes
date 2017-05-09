describe("The factorial", function() {
  
  it("output [2,3]", function() {
    expect(getPrimes(5)).toEqual([2,3]);
  });
  
  it("output [2,3,5,7]", function() {
    expect(getPrimes(10)).toEqual([2,3,5,7]);
  });
  
  it("output []", function() {
    expect(getPrimes(1)).toEqual([]);
  });
  
  it("output [2,3]", function() {
    expect(getPrimes(5)).toEqual([2,3]);
  });

  it("output 'Your input should be a positive number'", function() {
  expect(getPrimes(-3)).toEqual('Your input should be a positive number');
  });

  it("output 'Your input should be a positive number'", function() {
  expect(getPrimes(-500)).toEqual('Your input should be a positive number');
  });

   it("output 'Your input should be a positive number'", function() {
   expect(getPrimes(0)).toEqual('Your input should be a positive number');
   });

  it("output [2,3,5,7]", function() {
    expect(getPrimes(10.6)).toEqual([2,3,5,7]);
  });

  it("output 'Your input should be a positive number'", function() {
  expect(getPrimes(-8.9)).toEqual('Your input should be a positive number');
  });

  it("output [2,3,5,7,11,17,19]", function() {
    expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
  });
});