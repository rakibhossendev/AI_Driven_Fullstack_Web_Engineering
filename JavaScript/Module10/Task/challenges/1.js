const numbers = [2,2,3,4,5,3,3,5,5];
const uniqueArray = [];

for(let el in numbers){
    let isFound = false;

    for(let item in numbers){
        if(item == el){
            isFound = true
            break;
        }
    }
    if(!isFound){
        uniqueArray.push(el);
    }
}
console.log(uniqueArray);