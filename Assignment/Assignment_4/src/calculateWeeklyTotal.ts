const calculateWeeklyTotal = (arrayOfAmount: number[]): number => {
    return arrayOfAmount.reduce((accumulator,value) => accumulator + value,0);
}

console.log(calculateWeeklyTotal([200, 450, 100]));