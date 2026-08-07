// Fix The code 
// var status = "Order Placed";

// for(var i = 0; i<=3; i++){
//     var status = "Proccessing Item" + i;
//     console.log(status);
// }

// console.log("Final Status: ",status)

let status = "Order Placed";

for(let i = 0; i<=3; i++){
    let status = `Proccessing ${i}`;
    console.log(status);
}

console.log("Final Status: ",status)
