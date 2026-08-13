function filterByConditions(array,number){
    for(let i =0; i<array.length; i++){
        if(array[i] > number){
            console.log(array[i]);
        }
    }
}
filterByConditions([10,20,40,80,100,30,70],20)