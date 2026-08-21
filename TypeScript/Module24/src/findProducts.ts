interface Product{
    name: string;
    price: number;
    category: string;
}

const findProducts = (product: Product[],category: string): Product[] => {
    return product.filter((el) => el.category === category);
}

const products = [ 
    { name: "iPhone 15", price: 90000, category: "phone" }, 
    { name: "Galaxy S24", price: 85000, category: "phone" }, 
    { name: "MacBook Air", price: 120000, category: "laptop" }, 
    { name: "Dell XPS", price: 110000, category: "laptop" } 
];

console.log(findProducts(products,"laptop"))