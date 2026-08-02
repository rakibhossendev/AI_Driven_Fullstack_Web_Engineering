function weeklyStepsSummary(array){
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let total = 0;
    for(let i =0; i<array.length; i++){
        if(typeof array[i] !== "number"){
            return "Invalid";
        }
        total += array[i];
    }
    
    let goalReached = false;
    if(total >= 50000){
        goalReached = true;
    }

    return {
        totalStep: total,
        goalReached: goalReached
    }
}

console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]))