let numbers = [1,2,3,4,5,6];

let sum = numbers.reduce((accumulator,el,index) =>{
    return accumulator + el;
},0)

console.log(sum)