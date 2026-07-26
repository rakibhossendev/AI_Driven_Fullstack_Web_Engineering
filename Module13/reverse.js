function reverseWord(word){
    let reversedString = "";
    for(let i = word.length-1; i >=0; i--){
        reversedString += word[i];
    }

    return reversedString;
}

console.log(reverseWord("arpa"))