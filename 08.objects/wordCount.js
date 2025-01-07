var text = "python programming java programming"

var words = text.split(" ")
var wordCount = {}

for(let word of words){
    if(word in wordCount){
        wordCount[word] += 1;
    }
    else{
        wordCount[word] = 1
    }
}

console.log(wordCount);
