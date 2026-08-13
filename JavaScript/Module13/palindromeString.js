
// function checkPalindrome(word){
//     let arrayOfWord = word.split('');
//     let reversedWordArray = [];
    
//     for(let i = arrayOfWord.length -1; i>=0; i--){
//         reversedWordArray.push(word[i]);
//     }
//     const reversedWord = reversedWordArray.join('');
//     if(word===reversedWord){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(checkPalindrome("madam"))

function checkPalindrome(word){
    let reversedString = "";
    for(let i = word.length-1; i >=0; i--){
        reversedString += word[i];
    }
    if(word===reversedString){
        return true;
    }else{
        return false
    }
}
console.log(checkPalindrome("madam"))