let shippingFee = (orderAmmount=60,ammount) => {
    if(ammount >= 1000){
        return "Free shipping";
    }
    return`Shipping Fee: ${orderAmmount}`;
}

console.log()