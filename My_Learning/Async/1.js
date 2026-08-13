// function greet(){
//     console.log("Hello");
// }

// console.log("End");
// greet()

const myFunc = function (){
    console.log("Function is working...");

    let myFuncTime = new Date().getTime();
    console.log(myFuncTime);

    while(myFuncTime + 5000 >= new Date().getTime());
    console.log("Complete");
}
console.log("First Line");
myFunc();
console.log("Last Line");