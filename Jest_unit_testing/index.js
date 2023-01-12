function fizz_buzz(numbers){
let result = []
    
for (number of numbers) {
    if (number % 15 === 0) {
        result.push('fizzbuzz')
    } else if (number % 3 === 0) {
        result.push('fizz')
    } else if (number % 5 === 0) {
        result.push('buzz')
    }else if(number % 7 === 0){
        result.push(0)
    }
    // else if(number % 7 === 0){
    //     result.puh
    // }
     else {
        result.push('wrong test input')
    }
}

return result.join(', ')
}
// Use when Fn required
// module.exports = fizz_buzz;



// For Boolean operations
function exampleTest(value){
//  For toBe condition it returns true `~~ direct boolean i.e exact value has to return
    let result1 = false

//  For toBeTruthy it returns zero or one ~~ Number
    let result2 = 0

//  For toBeTrue it returns either true or false ~~ Boolean operator
    let result3 = false
    
    if(value % 7 == 0){
        return result1 = true
    }
    else if(value % 25 === 0){
        return result2 = 1
    }
    else if(value % 12 === 0){
        return result3 = true
    }

}
// Use Fn when required
// module.exports = exampleTest;



// For Handling errors
function errorHandler(data){
    let errValue = '2'
    if(data == null){
        return errValue = null
    }
    else if(data !== null){
        return errValue
    }
    else if(data = 'check defined'){
        return errValue = 'checked value'
    }
    else{
        return errValue = undefined
    }
}
// Use below
// module.exports = errorHandler;





function fetchData(){
    let data = [{name:'Rahul',age:23},{name:'Altof',age:25}]
}
// module.exports = fetchData;



// Using arraycontaining 
function checkArray(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(Math.random() * 6 + 1));
    }
    return answer;
  }

//   module.exports = checkArray;


// Error throwing
function checkDrink(drink){
    if(drink === 'Musk Milan'){
        throw new drinkError("called musk millan")
    }
} 
module.exports = checkDrink;
