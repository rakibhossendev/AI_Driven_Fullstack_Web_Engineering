// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

const arrayOfMixed = [1,2,3,4,"Rakib","Meghla"];
const stringArray = [];
const numberArray = [];
for(let elelemnt of arrayOfMixed){
    if(typeof elelemnt == 'string'){
        stringArray.push(elelemnt);
    }else if(typeof elelemnt == 'number'){
        numberArray.push(elelemnt)
    }
}
console.log("String Array: ",stringArray);
console.log("Number Array: ",numberArray);