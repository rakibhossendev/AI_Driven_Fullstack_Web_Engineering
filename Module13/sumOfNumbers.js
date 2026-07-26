// Problem 2: Sum of range number 1 to n

function sumOfNumber(n){
    let sum = 0;
    for(let i=0; i<= n; i++){
        sum += i;
    }
    return sum
}

console.log(sumOfNumber(7))