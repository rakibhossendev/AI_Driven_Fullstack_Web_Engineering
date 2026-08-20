interface SummaryDetails{
    total: number;
    average: number;
}
const getDistanceSummary = (distanceArray: number[]): SummaryDetails=>{
    let arrayLength = distanceArray.length;
    let total = distanceArray.reduce((accumulator,value)=> accumulator+value,0);
    let average = total/arrayLength

    return {total: total, average: average | 0}
}

console.log(getDistanceSummary([10,10]))