// Basic Example Test Cases

const errorHandler = require('./index');
const fetchData = require('./index');
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


  // Using extend method 
  expect.extend({
    toBeDivisibleBy(received, argument) {
      const pass = (received % argument == 0);
      if (pass) {
        return {
          pass: true,
          message: () => `expected ${received} not to be divisible by ${argument}`,
        }
      } else {
        return {
          pass: false,
          message: () => `expected ${received} to be divisible by ${argument}`,
        }
      }
    }
  });
  
  test('even and odd numbers', () => {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
  });
})


// Promises 


const promisedOutput = require('./index')

describe('get promised data output', () => {
  test('get Promise', () => {
    return fetchData().then((obj) => {
      expect(obj.name).toEqual('Rahul')
    })
  })
  
})

// Checking array using arrayContaining
const arrayCheck = require('./index')

describe('check the given value in array', () => {
  test('check value of Array', () =>{
    expect(arrayCheck(100)).toEqual(expect.arrayContaining([1,2,3]))
  })
})


// checking string using stringmatching

describe('check the string with regex', () => {
  test('test given string', () => {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let email = "arunkumar@perfomatix.com"
    expect(email).toEqual(expect.stringMatching(regex))
  })
})

// checking object containing object containing
describe('check the object with object parameters', () => {
  let obj= {id:1,name:'Arun',age:23}
  test('test given object', () => {
    expect(obj).toEqual(expect.objectContaining({name:'Arun'}))  
  })
})


// Mock function called or not checking

describe('perfumecheck', () => {
  test('check smell lavendor', () => {
    let perfume  = jest.fn();
    perfumecheck(perfume, 'lavendor');
    expect(perfume).toHaveBeenCalled();
  })
})


// check a item which is present in array
describe('check a item in array', () => {
  let items = ["soap","deodrant", "mop"]
  test('check the item', () => {
    expect(items).toContain("mop")
  })
}) 



// throw using toThrow 
const drink = require('./index')

describe('checking drink fn', () => {
  test('drink choosed muskmilan', () => {
    expect(() => {
      drink("Musk Milan");
    }).toThrow()
  })
})