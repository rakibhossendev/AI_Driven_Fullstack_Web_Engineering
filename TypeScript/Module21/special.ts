function calculateTax(amount: number | string, taxRate: number): number{
    if(typeof amount === 'string'){
        amount = parseInt(amount)
    }
    return amount * taxRate;
}

const myTax = calculateTax(100,0.5)
