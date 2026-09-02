interface Product{
    title: string;
    price: number;
    isStack?: boolean;
}
const product1: Product = {
    title: "Laptop",
    price: 30000,
}
const product2: Product ={
    title: "Mouse",
    price: 400,
    isStack: true
}

const showPrice = (obj1: Product,obj2: Product): number[] => {
    const {price: price1} = obj1;
    const {price: price2} = obj2;
    return [price1,price2];
}

console.log(showPrice(product1,product2))