let calculateBMI = (weight,height) => {
    if((typeof weight !== 'number') || (typeof height !== 'number') || (weight < 0) || (height <0)){
        return "Invalid"
    }

    return weight/(height*height).toFixed(2);
};
console.log(calculateBMI(70,-1.75));
