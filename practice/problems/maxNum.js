function findMaxNum(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}


const numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
console.log(findMaxNum(numbers));