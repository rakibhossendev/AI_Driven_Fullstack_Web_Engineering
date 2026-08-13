// Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

let sum = 0;
let i = 1;

while(i <= 50){
    if(i%2!=0){
        sum += i;
    }

    i += 1;
}
console.log(sum)