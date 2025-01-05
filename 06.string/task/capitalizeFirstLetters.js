var text = "hello, how are you?";

function capitalizeFirstChar(text){
    let result = "";
    let capitalize = true;
    for(let ch of text){
        if(ch === " "){
            result += ch;
            capitalize = true;
        }
        else if(capitalize){
            result += ch.toUpperCase();
            capitalize = false;
        }
        else{
            result += ch
        }
    }
    return result
}


console.log(capitalizeFirstChar(text))