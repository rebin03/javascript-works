

function displayNumber(event){

    // document.querySelector("#result").value += event.terget.value

    let btnValue = event.target.value
    let op = result.value.slice(-1)
    if(btnValue == "+" || btnValue == "-" || btnValue == "*" || btnValue == "/"){
        if(op != "+" && op != "-" && op != "*" && op != "/"){
            result.value += event.target.value
        }
    }
    else{
        result.value += event.target.value
    }

    

}


function clearBox(){
    result.value = ""
}


function evaluteExpression(){
    let currentExpression = result.value
    let outPut = eval(currentExpression)

    result.value = outPut
}


function backSpace(){
    result.value = result.value.slice(0, -1)
}