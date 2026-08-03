function cashRegister(){
    let ammount = 0;
    return function (payAmmount){
        ammount += payAmmount;
        return ammount;
    }
}

let coffeShopCashCounterr = cashRegister();
let restaturentCashCounter = cashRegister();
let juiceBarCashCounter = cashRegister()

console.log("Coffe Shop Ammount: ",coffeShopCashCounterr(100));
console.log("Restaturant Shop Ammount: ",restaturentCashCounter(500));
console.log("Juice Bar Ammount: ",juiceBarCashCounter(150));