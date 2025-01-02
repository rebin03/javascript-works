var num = 742

// while(num!=0){

//     if(num%2 != 0){
//         console.log(num)
//         break
//     }

//     num = Math.floor(num/10)
// }

while(num%2==0){
    num = Math.floor(num/10)
}

console.log(num)