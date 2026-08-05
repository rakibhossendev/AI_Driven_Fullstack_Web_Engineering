let prices = [100,200,300,400,500,6000,700,800];

let expensivePrice = prices.filter((el) => {
    if(el > 500){
        return true
    }
})

console.log(expensivePrice)