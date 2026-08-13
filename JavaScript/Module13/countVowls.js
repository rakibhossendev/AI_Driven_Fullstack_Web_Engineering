
function vowelCounter(word){
    let vowels = ["a","e","i","o","u"];
    let totalVowel = 0;
    for(let i =0; i<word.length; i++){
        // for(let j =0; j<word.length; j++){
        //     if(word[i] === vowels[j]){
        //         totalVowel+=1
        //     }
        // }
        if(word.includes(vowels[i])){
            totalVowel+=1;
        }
    }
    return totalVowel

}
console.log(vowelCounter("meghla"))