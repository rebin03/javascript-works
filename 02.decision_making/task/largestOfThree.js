var num1 = 11
var num2 = 34
var num3 = 21

if(num1>num2 && num1>num3){
    console.log(`Largest number is ${num1}`)
}
else if(num2>num1 && num2>num3){
    console.log(`Largest number is ${num2}`)
}
else if(num3>num1 && num3>num2){
    console.log(`Largest number is ${num3}`)
}
else{
    console.log("Three numbers are equal")
}