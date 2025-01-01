var num = 15

if (num%3 == 0 && num%5 == 0){
    console.log("PINGPONG"); 
}
else if (num%3 == 0){
    console.log("PING")
}
else if (num%5 == 0){
    console.log("PONG")
}
else{
    console.log(num)
}
