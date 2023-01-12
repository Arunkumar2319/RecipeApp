// Basic Example Test Cases

const errorHandler = require('./index');
const fizz_buzz = require('./index');
 
describe("FizzBuzz", () => {
    test('[3] should result in "fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });
 
    test('[5] should result in "buzz"', () => {
      expect(fizz_buzz([5])).toBe('buzz');
    });
 
    test('[15] should result in "fizzbuzz"', () => {
      expect(fizz_buzz([15])).toBe('fizzbuzz');
    });
 
    test('[1,2,3] should result in "1, 2, fizz"', () => {
      expect(fizz_buzz([3])).toBe('fizz');
    });
    test('1 should result in a wrong test input',() => {
      expect(fizz_buzz([1])).toBe('wrong test input')
    })
    test('add two numbers',() => {
      expect(fizz_buzz([49])).toBeTruthy()
    })
   
 
});



// Boolean Operations

const exampleTest = require('./index')

describe("exampleTest", () => {
  // For testing toBe Bool
  test('checking boolean parameters toBe', () =>{
    expect(exampleTest(49)).toBe(true);
  })

  //  For testing toBeTruthy Bool
  test('checking boolean parameters toBeTruthy', () =>{
    expect(exampleTest(125)).toBeTruthy();
  })

  //  For testing toBeTrue Bool
  test('checking boolean parameters toBeTrue', () =>{
    expect(exampleTest(72)).toBeTrue();
  })
})



// Error Handling Operations

describe("errorHandler", () => {
  test('check the value is null', () => {
    expect(errorHandler(null)).toBeNull()
  })
  test('check the value is not null', () =>{
    expect(errorHandler('stringValue')).not.toBeNull()
  })
  test('check the value is defined',() => {
    expect(errorHandler('check defined')).toBeDefined()
  })
  test('check the value is not defined ', () => {
    var value;
    expect(value).not.toBeDefined()
  })
})


// Comparison Operations

describe("comparionHandler", () => {
  test('toBeLessThan works', () => {
    minVal =35
    maxVal = 75
    expect(minVal).toBeLessThan(maxVal)
  })
  test('toBeGreaterThan works', () => {
    minVal =35
    maxVal = 75
    expect(maxVal).toBeGreaterThan(minVal)
  })
})