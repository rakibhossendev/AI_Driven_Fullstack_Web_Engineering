function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid";
    }
    let totalWeight = 0;
    for(let i =0; i<weights.length; i++){
        totalWeight += weights[i];
    }
    if(totalWeight <= 400){
        return true
    }else{
        return false
    }
}

console.log(isElevatorSafe(["401"]))