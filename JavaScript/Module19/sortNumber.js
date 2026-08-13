const desending = (nums) => {
    let newArray = [...nums];
    const sortedNumber = newArray.sort((a,b) => {
        return b - a;
    })

    return sortedNumber;
}

let numbers = [1,2,3,4,5,6];

console.log(desending(numbers))

console.log(numbers)
