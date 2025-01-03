// Syntax

//(params) => return value

// (param1, param2..) => {
//     statm1
//     statm2
//     return value
// }


var cube = (num) => num ** 3

console.log(cube(4))

var addNumbers = (num1, num2) => num1 + num2

console.log(addNumbers(100, 200))

// max of two num
var maxTwo = (num1, num2) => num1>num2 ? num1 : num2
console.log(maxTwo(20,10))

// min of two num
var minTwo = (num1, num2) => num1<num2 ? num1 : num2
console.log(minTwo(20,10))