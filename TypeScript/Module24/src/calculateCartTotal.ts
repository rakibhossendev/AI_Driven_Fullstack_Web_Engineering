interface ProductType{
    name: string;
    price: number;
}

const calculateCartTotal = (productArray: ProductType[]): number => {
    return productArray.reduce((accumulator,value) => accumulator + value.price,0);
}

const products = [ 
    { name: "Keyboard", price: 1500 }, 
    { name: "Mouse", price: 800 }, 
    { name: "USB Cable", price: 300 } 
]; 
console.log(calculateCartTotal(products))