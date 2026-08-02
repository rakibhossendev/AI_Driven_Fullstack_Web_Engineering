function smallestAndLarge(array){
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let largeValue = array[0];
    let smallValue = array[0];
    let resultArray = []
    for(let i =0; i< array.length; i++){
        if(typeof array[i] !== "number"){
            return "Invalid";
        }else if(array[i] > largeValue){
            largeValue = array[i];
        }else if(array[i] < smallValue){
            smallValue = array[i];
        } 
    }
    resultArray.push(largeValue);
    resultArray.push(smallValue);
    return resultArray
}

let value = smallestAndLarge(["1","2"]);
if(Array.isArray(value)){
    console.log("Largest: ",value[0]);
    console.log("Smallest: ",value[1]);
}else{
    console.log(value)
}