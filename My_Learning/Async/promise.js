// let coffee = new Promise((res,rej)=> {
//     if(false) return res()
//     return rej()
// });

// coffee.then(()=>{
//     console.log("Resolved");
// }).catch(()=> {
//     console.log("Rejected");
// })

let mathAnser = new Promise((res,rej)=>{
    let n = Math.floor(Math.random() *10);
    if(n < 5){
        return res();
    }else{
        return rej();
    }
});

mathAnser.then(()=>{
    console.log("Below");
}).catch(()=>{
    console.log("Above")
})

