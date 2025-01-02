
function lastDigitMax(num1, num2){
    let d1 = num1%10
    let d2 = num2%10
    
    return d1 > d2 ? num1 : num2
}

console.log(lastDigitMax(127, 872));
