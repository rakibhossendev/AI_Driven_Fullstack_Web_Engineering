class User{
    private _name: string
    private _age: number
    private _email: string
    constructor(name: string, age: number, email: string){
        this._name = name
        this._age = age
        this._email = email
    }
    set age(value: number){
        if(value < 0){
            throw new Error("Age cant assign")
        }
        this._age = value
    }
    get userName(): string{
        return this._name
    }
}

class Student extends User{

}
const MAFUZA = new Student("Mafuza",18,"megh@gmail.com")