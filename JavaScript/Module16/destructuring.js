let numbers = [10,20,30,40];
const [num1,num2,,num3] = numbers
// console.log(num1)
// Object Destructuring

const student = {
    id: 322112,
    name: "Meghla",
    age: 17,
    marks:{
        Python: 99,
        Math2: 100,
    }
}

const {id,name,age,marks:{Python}} = student
console.log(Python)