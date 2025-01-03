function isPrime(num){
    for(let i=2; i<num; i++){
        if(num%i === 0){
            return false;
        }
    }
    return true;
}


function nextPrime(num){
    while(1){
        num += 1;
        if(isPrime(num)){
            return num
        }
    }
}

console.log(nextPrime(13))