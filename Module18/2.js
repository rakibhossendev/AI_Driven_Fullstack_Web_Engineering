let calculateTotal = (...prices) => {
    let totalPrice = 0;
    for(let i =1; i<prices.length; i++){
        totalPrice += prices[i];
    }
    let discountPrice = totalPrice * (prices[0]/ 100);
    let finalAmmount = totalPrice - discountPrice;

    return finalAmmount;
}

console.log(calculateTotal(10,100,200));