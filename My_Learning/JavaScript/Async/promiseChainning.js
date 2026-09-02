let promiseChainingOne = new Promise((res,rej)=>{
    return res("Promise One Done");
});

let promiseChainingTwo = promiseChainingOne.then((data)=>{
    console.log(data);
    return new Promise((res,rej)=>{
        return res("Promise Two done")
    });
});

promiseChainingTwo.then((data)=>{
    console.log(data);
})
