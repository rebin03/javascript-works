var text = "ABCCDDEEF"

cc = {}

for(let ch of text){
    if(ch in cc){
        console.log(ch);
        break;
    }else{
        cc[ch] = 1
    }
}