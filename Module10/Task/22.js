// 1. Given an array of numbers, remove duplicates and log the unique values only.

const numbers = [1,1,2,2,3,4,3,3,5,5,9,8,4];
const uniqueArray = [];

for(let number of numbers){
    if(uniqueArray.includes(number) == false){
        uniqueArray.push(number)
    }
}

console.log(uniqueArray);