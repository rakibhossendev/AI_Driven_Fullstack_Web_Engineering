const calculateWeeklySteps = (steps: number[]): number => {
    const totalSteps = steps.reduce((accumulator,value)=> accumulator + value,0)
    return totalSteps;
}

console.log(calculateWeeklySteps([]))