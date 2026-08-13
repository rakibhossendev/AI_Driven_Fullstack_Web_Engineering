let mergeInventory = (arr1,arr2) => {
    let mergedArray = [...arr1,...arr2];

    for(let el of mergedArray){
        if(typeof el !== 'number'){
            return "Invalid";
        }
    }

    let maxNumber = Math.max(...mergedArray);
    return [maxNumber,mergedArray];
}

console.log(mergeInventory(["1",2],[3,4]))