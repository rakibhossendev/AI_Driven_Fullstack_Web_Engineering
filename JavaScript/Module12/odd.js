function allOdd(number){
    let oddNumberArray = [];
    for(let i =1; i<=number; i++){
        if(i%2!=0){
            oddNumberArray.push(i);
        }
    }
    return oddNumberArray
}
console.log(allOdd(10));