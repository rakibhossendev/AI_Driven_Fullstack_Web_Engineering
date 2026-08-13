const numbers = [1,2,3,4]

// console.log(numbers.reverse())

const reversedArray = [];

// for(const number in numbers){
//     reversedArray.unshift(number)
// }
// console.log(reversedArray)

for(let i = 0; i<numbers.length; i++){
    reversedArray.unshift(numbers[i]);
}
console.log(reversedArray)