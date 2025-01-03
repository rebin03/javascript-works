var str1 = "PQRST"
var str2 = "ABC"


var smallestString = str1.length < str2.length ? str1: str2
var largestString = str1.length > str2.length ? str1: str2
var str = ""

for(let i=0; i<smallestString.length; i++){
    str += str1[i] + str2[i]
}

str += largestString.slice(smallestString.length)

console.log(str)