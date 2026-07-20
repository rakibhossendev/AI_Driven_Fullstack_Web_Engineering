// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

const numbers = [1,2,3,4,56,9];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));

// Whithout functions

let maxNumber = numbers[0];
let minNumbers = numbers[0];
for(let elelemnt of numbers){
    if(maxNumber < elelemnt){
        maxNumber = elelemnt;
    }
    if(minNumbers > elelemnt){
        minNumbers = elelemnt;
    }
}
console.log(maxNumber);
console.log(minNumbers)