function averageCounter(number){
    let lengthOfArray = number.length;
    let sumOfElement = 0;
    for(let i =0; i<number.length; i++){
        sumOfElement += number[i];
    }
    let average = sumOfElement/lengthOfArray;
    return average;
}
console.log(averageCounter([10,20,30]))