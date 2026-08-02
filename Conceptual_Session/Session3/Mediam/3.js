function removeDuplicates(array){
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let uniqueValue = [];
    for(let i =0; i< array.length; i++){
        if(!uniqueValue.includes(array[i])){
            uniqueValue.push(array[i])
        }
    }
    return uniqueValue;
}

console.log(removeDuplicates([1,2,3,4,1,2]))