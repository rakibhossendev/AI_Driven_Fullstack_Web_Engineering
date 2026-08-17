// const user:{name: string; age: number} = {
//     name: "Meghla",
//     age: 15
// };

// const {age} = user;

const studentsName: string[] = ["Rakib","Meghla"];
const [rakib,meghla] = studentsName;

interface productType{
    name: string,
    price: number,
    color: string,
    storage: string
}
const product: productType = {
    name: "POCO M2",
    price: 18000,
    color: 'blue',
    storage: '64GB'
}


const {name: productName, ...productInfo} = product;
console.log(`Product Name: ${productName}`);
console.log(`Product Info ${productInfo}`);
