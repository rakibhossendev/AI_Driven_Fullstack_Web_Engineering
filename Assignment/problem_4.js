function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0){
        return "Invalid";
    }
    for(let el of scores){
        if(typeof el !== 'number' || Number.isNaN(el)){
            return "Invalid";
        }
    }
    let afterSumArray = scores.map((value)=> value+10);
    let totalScore = afterSumArray.reduce((accumulator,value)=>accumulator + value,0);

    return totalScore;
}

console.log(bonusScore([null,undefined]));