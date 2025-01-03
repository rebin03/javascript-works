// Array methods

// push()
// pop()
// shift()
// unshift()
// include()





var colors = ["red", "blue", "green"]

console.log(colors) // [ 'red', 'blue', 'green' ]

colors.pop()
console.log(colors) // [ 'red', 'blue' ]

colors.push("yellow")
console.log(colors) // [ 'red', 'blue', 'yellow' ]

colors.shift()
console.log(colors) // [ 'blue', 'yellow' ]

colors.unshift("violet")
console.log(colors);  // [ 'violet', 'blue', 'yellow' ]

console.log((colors.includes("blue"))); // true
