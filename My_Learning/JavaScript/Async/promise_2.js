const step1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Step 1 Done")
    },2000);
})

const step2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Step 2 Done");
    },3000);
})

// step1.then((res)=>{
//     console.log(res);
// })

// All promise
Promise.all([step1,step2]).then(res=> console.log(res));