function largestNumber(number){
    let largestNumber = number[0];
    for(let i = 0; i<number.length; i++){
        if(largestNumber < number[i]){
            largestNumber = number[i]
        }
    }
    return largestNumber
}
console.log(largestNumber([1,2,3,4,8,2]))