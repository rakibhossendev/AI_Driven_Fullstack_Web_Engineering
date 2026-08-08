let shippingFee = (ammount,orderAmmount=60) => ammount >= 1000 ? "Free Shipping":`Shipping Fee: ${orderAmmount} Taka.`;

console.log(shippingFee(100,100))