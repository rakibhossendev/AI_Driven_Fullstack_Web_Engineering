function filterEvenPosition(sentance){
    if(typeof sentance !== "string"){
        return "Please Enter String";
    }
    let wordArray = sentance.split(" ");
    let afterCutWord = [];
    for(let i =0; i<wordArray.length; i++){
        if(i%2===0){
            afterCutWord.push(wordArray[i]);
        }
    }
    return afterCutWord.join(" ");
}
console.log(filterEvenPosition(123))
