function happyNumber(num){
    let seen = new Set();
    while(num !== 1 && !seen.has(num)){
        seen.add(num)
        let sum = 0;
        
        while(num != 0){
            let digit = num % 10;
            sum += digit ** 2;
            num = Math.floor(num/10);
        }

        num = sum;
    }
    return num === 1;
}

console.log(happyNumber(13))