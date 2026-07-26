function countWord(word){
    let arrayOfWord = word.split(" ");
    let totalWord = 0;
    for(let i =0; i<arrayOfWord.length; i++){
        totalWord +=1;
    }
    return totalWord
}
console.log(countWord("Meghla is my ...."))