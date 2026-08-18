// Access modifier: public, private, protected

class BikasAccount{
    phone: string
    private balance: number
    pin: number
    history: string[] = [];

    constructor(phone: string, balance: number, pin: number){
        this.phone = phone
        this.balance = balance
        this.pin = pin
    }

    getBalance(pin: number): number{
        if(pin === this.pin){
            return this.balance
        }
        return 0
    }
}

const account1 = new BikasAccount("01234567891",100, 124);
console.log(account1.getBalance(124))