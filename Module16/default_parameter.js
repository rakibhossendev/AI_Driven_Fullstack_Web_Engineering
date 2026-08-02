// Problem Code
// function sayHello(name){
//     return `Hello, ${name}`;
// }

// console.log(sayHello("Rakib")) // Hello, Rakib
// console.log(sayHello()) // Hello, undefined 

// Fix undefine problem using default parameter

function sayHello(name = "Guest"){
    return `Hello, ${name}`
}
console.log(sayHello())