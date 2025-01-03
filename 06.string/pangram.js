var text = "The quick brown fox jumps over the lazy dog".toLowerCase()
var alphebets = "abcdefghijklmnopqrstuvwxyz"

var isPangram = true

for(let ch of alphebets){
    if(!text.includes(ch)){
        isPangram = false
        break
    }
}

console.log(isPangram)