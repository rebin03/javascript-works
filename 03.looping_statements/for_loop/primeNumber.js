var num = 7
var isPrime = true

for(let i=2; i<num; i++){
    if(num%i==0){
        isPrime = false
    }
}

if(isPrime){
    console.log("Prime number")
}
else{
    console.log("Note a prime number")
}