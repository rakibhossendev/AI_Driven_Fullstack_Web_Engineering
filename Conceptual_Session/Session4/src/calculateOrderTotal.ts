interface OrderItem{
    name: string;
    price: number;
}

const calculateOrderTotal = (orderItemObject: OrderItem[]): number => {
    const totalPrice = orderItemObject.reduce((accumulator,value)=> accumulator + value.price,0);
    return totalPrice
}

console.log(calculateOrderTotal([]));