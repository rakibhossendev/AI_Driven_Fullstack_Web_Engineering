let applyDiscount = (array,discountParcent=0) => {
    let appledDiscountPrice = array.map((value) => value - (value * (discountParcent/100)));
    return appledDiscountPrice;
}

let prices = [500,900,1000,250]
console.log(applyDiscount(prices,10))

console.log(prices)