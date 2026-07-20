// 4. Check two variables (one array, one not) and log whether each is an array.

const numbersOfArray = [1,2,3,4];
const numberOfVariable = 2;

console.log("Array: ",Array.isArray(numbersOfArray));
console.log("Variable: ",Array.isArray(numberOfVariable));