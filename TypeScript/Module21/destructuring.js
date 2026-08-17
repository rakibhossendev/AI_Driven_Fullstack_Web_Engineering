"use strict";
// const user:{name: string; age: number} = {
//     name: "Meghla",
//     age: 15
// };
// const {age} = user;
const studentsName = ["Rakib", "Meghla"];
const [rakib, meghla] = studentsName;
const product = {
    name: "POCO M2",
    price: 18000,
    color: 'blue',
    storage: '64GB'
};
const { name: productName, ...productInfo } = product;
console.log(`Product Name: ${productName}`);
console.log(`Product Info ${productInfo}`);
