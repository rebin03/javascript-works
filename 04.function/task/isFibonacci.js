function isFibanocci(num){

    let prev = 0;
    let curr = 1;
    let next = prev + curr;

    if(num === 0 || num === 1){
        return true;
    }

    while(next<=num){

        next = prev + curr;
        prev = curr;
        curr = next;

        if(num === next){
            return true;
        }

    }

    return false;
}

console.log(isFibanocci(5))