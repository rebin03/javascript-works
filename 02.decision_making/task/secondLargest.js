var num1 = 23
var num2 = 53
var num3 = 43

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`Second largest number is ${num2}`)
    }
    else{
        console.log(`Second largest number is ${num3}`)
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log(`Second largest number is ${num1}`)
    }
    else{
        console.log(`Second largest number is ${num3}`)
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log(`Second largest number is ${num1}`)
    }
    else{
        console.log(`Second largest number is ${num2}`)
    }
}
else{
    console.log("Three numbers are equal")
}