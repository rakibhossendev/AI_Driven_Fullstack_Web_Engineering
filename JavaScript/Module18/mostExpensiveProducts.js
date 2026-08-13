const productPrice = {
    pen: 20,
    book: 150,
    beg: 500
}

let mostExpensiveProduct = (objectPrice) => {
    let keys = Object.keys(objectPrice)
    let mostExpensiveValue = 0;
    let mostExpensiveProduct = 0;

    keys.forEach((value) => {
        if(mostExpensiveValue < objectPrice[value]){
            mostExpensiveValue = objectPrice[value];
            mostExpensiveProduct = value;
        }
    });

    return mostExpensiveProduct;
};

console.log(mostExpensiveProduct(productPrice))