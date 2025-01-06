var arr = [1, 2, 2, 5, 7]

// var missingNum = Infinity

// for(let i = 0; i < arr.length-1; i++){
//     let j = i+1
//     let difference = arr[j] - arr[i]
//     if(difference === 0){
//         console.log("Duplicate: ", arr[i])
//     }
//     else if(difference > 1){
//         let nextNum = arr[i] + 1
//         if(nextNum < missingNum){
//             missingNum = nextNum
//         }
//     }
// }

// if(missingNum != Infinity){
//     console.log("smallest missing number: ", missingNum)
// }

var arrayLength=arr.length

for(let i=0;i<arrayLength;i++){
    let j=i+1
    let difference=arr[j]- arr[i]
    if(difference==0){
        console.log("duplicate",arr[i]);
        
    }
    if(difference > 1){
        let missing=arr[i]+1
        console.log(missing);
        
        arr.splice(i+1, 0, missing)
        arrayLength++

    }
}