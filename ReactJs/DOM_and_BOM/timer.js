// console.log("A");
// // console.log("B")
// // console.log("Loading....");
// // setTimeout(()=>{
// //     console.log("B")
// // },4000);

// let count = 0;

// setInterval(()=> {
//     count +=1;
//     console.log(`Interval executed ${count}`);
// },100)

let count = 0;
const intervalId = setInterval(()=>{
    const date = new Date();
    console.log(date.toLocaleTimeString())
    count++;
    // console.log('Count => ',count)
    if(count === 5){
        clearInterval(intervalId)
    }
},1000)
