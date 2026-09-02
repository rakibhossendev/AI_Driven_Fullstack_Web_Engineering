"use strict";
const product1 = {
    title: "Laptop",
    price: 30000,
};
const product2 = {
    title: "Mouse",
    price: 400,
    isStack: true
};
const showPrice = (obj1, obj2) => {
    const { price: price1 } = obj1;
    const { price: price2 } = obj2;
    return [price1, price2];
};
console.log(showPrice(product1, product2));
