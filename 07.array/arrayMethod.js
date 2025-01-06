// map()
// filter()
// reduce()
// sort()

var arr = [11, 13, 10, 15, 14];

// map()
// -----
var addFive = arr.map((num) => num + 5);
console.log(addFive);

var square = arr.map((num) => num**2);
console.log(square);

var cubes = arr.map(cube);
console.log(cubes);

function cube(num){
    return num**3;
}


// filter()
// --------
var oddNumbers = arr.filter((num) => num%2 !== 0);
console.log(oddNumbers);

var numGtEleven = arr.filter((num) => num > 11);
console.log(numGtEleven);

var evenNumbers = arr.filter(evenNum);
console.log(evenNumbers);

function evenNum(num){
    return num%2 == 0;
}


// reduce() - max, min, sum, avg
// --------
var total = arr.reduce((n1, n2) => n1 + n2);
console.log(total);

var product = arr.reduce((n1, n2) => n1 * n2)
console.log(product)

var maxNum = arr.reduce((n1, n2) => n1 > n2 ? n1 : n2);
console.log(maxNum);

var minNum = arr.reduce((n1, n2) => n1 < n2 ? n1 : n2);
console.log(minNum);

var avgNum = arr.reduce(average)
console.log(avgNum)

function average(n1, n2){
    return (n1 + n2)/2
}

// console.log(sum(arr)/arr.length)


arr.sort((num1, num2) => num1 - num2)
console.log(arr)

arr.sort((num1, num2) => num2 - num1)
console.log(arr)