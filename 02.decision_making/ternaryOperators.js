// instead of if-else condition we can use ternary operators to check condition and return value

// Syntax:
// condition ? true expression : false expression


var num1 = 10
var num2 = 20

// check for max number
var maxNum = num1>num2 ? num1 : num2
console.log(maxNum)

// check for min number
var minNum = num1<num2 ? num1 : num2
console.log(minNum)

// Odd or ever
var num = 23

var result = num%2 == 0 ? 'Even' : 'Odd'
console.log(result)