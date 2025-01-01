var weightInKg = 68
var heightInCm = 168

var heightInM = heightInCm/100
var heightInMsqr = heightInM ** 2

var bmi = weightInKg / heightInMsqr

if(bmi<19){
    console.log("Under weight");
}
else if(bmi<25){
    console.log("Normal weight");
}
else if(bmi<35){
    console.log("Over weight")
}
else{
    console.log("Obesity")
}