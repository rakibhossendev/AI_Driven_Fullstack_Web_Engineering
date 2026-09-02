class UserInformation{
    private _fullName: string
    private _address: string
    private _email: string
    private _phone: string

    constructor(fullName: string, address: string, email: string, phone: string){
        this._fullName = fullName
        this._address = address
        this._email = email
        this._phone = phone
    }
    
}
class CreateAccount extends UserInformation{
    private _accountNumber
    private _pinNumber
    private _totalAmount
    private _transactionHistory: string[] = []
    private _creditBalance: number[] = []
    private _debitBalance: number[] = []

    constructor(fullName: string, address: string, email: string, phone: string, accountNumber: number, pinNumber: number,totalAmount: number){
        super(fullName,address,email,phone)
        this._accountNumber = accountNumber
        this._pinNumber = pinNumber
        this._totalAmount = totalAmount
    }

    creditBalance(pinNumber: number,creditedAmount: number): number[] | string{
        if(pinNumber !== this._pinNumber){
            return "Invalid Pin";
        }
        if(this._totalAmount > 0 && this._totalAmount >= creditedAmount){
            this._creditBalance.push(this._totalAmount - creditedAmount)
        }
    }
}

const Account1 = new CreateAccount("MST. MAFUZA KHATUN","JASHORE","mafuzakhtun.com@gmail.com","01983214123",1220312,1234,100)

console.log(Account1)