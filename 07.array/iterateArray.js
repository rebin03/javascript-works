var arr = [2, 4, 5, 7, 8, 12]

// length
console.log("using length")

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


// in keyword
console.log("using in keyword")

for(let i in arr){
    console.log(arr[i])
}


// of keyword
console.log("using of keyword")

for(let num of arr){
    console.log(num)
}