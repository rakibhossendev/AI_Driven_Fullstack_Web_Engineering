let calculateTotal = (discount=0,...prices) => {
    let totalPrice = prices.reduce((accumulator,currentValue) => accumulator + currentValue,0);
    let discountPrice = totalPrice * (discount / 100);
    let finalAmmount = totalPrice - discountPrice;

    return finalAmmount;
}

console.log(calculateTotal(10,100,200));