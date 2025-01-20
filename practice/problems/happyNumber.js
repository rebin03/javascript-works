function isHappyNumber(num) {
    let seenNumbers = new Set();

    while (num !== 1 && !seenNumbers.has(num)) {
        seenNumbers.add(num);
        num = getSumOfSquares(num);
    }

    return num === 1;
}

function getSumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => {
        return sum + Math.pow(parseInt(digit), 2);
    }, 0);
}


console.log(isHappyNumber(19)); // true
console.log(isHappyNumber(2));  // false