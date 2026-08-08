let array1 = [1,2,3];
let array2 = [3,3,1,2,6,4,5];

let mergeArray = (array1,array2) =>{
    let mergedArray = [...array1,...array2];
    return [...new Set(mergedArray)];
}

console.log(mergeArray(array1,array2));