let numbers = [1,2,3,4];
// console.log(...numbers)
// console.log(Math.max(...numbers))
let copyedArray = [...numbers]; //  
numbers.push(10)
console.log(copyedArray)

// spread objcet
const student = {
    name: "Meghla",
    isSingle: true
}

let student2 = {...student};
console.log(student2);