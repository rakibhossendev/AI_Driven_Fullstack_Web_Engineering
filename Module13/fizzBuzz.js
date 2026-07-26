// Problem 4: FizzBuzz
// Loop trough a number 1 to n. if a number is disible by 3 print "Fizz". If divisible by 5 print "Buzz". If divisible by both, print "FizzBuzz". otherwise print itself the number.

function fizzBuzz(number){
    for(let i = 1; i<=number; i++){
        if((i%5===0) && (i%3===0)){
            console.log("FizzBuzz");
        }else if(i%3===0){
            console.log("Fizz");
        }else if(i%5===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz(15)