const reciptgenarator = (item,price,howMany) => `${item} x${howMany} - ${price*howMany} Taka`;

console.log(reciptgenarator("Pen",20,3));