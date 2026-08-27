/**
 * @param {number} a
 * @param {number} b
 * @return {number[]}
 */
function gcdAndLcm(a, b) {
    // ====== DO NOT MODIFY SIGNATURE ======
    
    // Write your code her
    let i = 2;
    let lcd = 1;
    while(i<=a && i <= b){
        if(a%i===0 && b%i===0){ // 
            lcd *= i
        }

        i+= 1
    }
    return lcd;
}

console.log(gcdAndLcm(12,8))