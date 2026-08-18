
class Student{
    id: number
    name: string
    age: number
    mark: number
    constructor(id: number, name: string, age: number, mark: number){
        this.id = id
        this.name = name
        this.age = age
        this.mark = mark
    }
}

const Meghla = new Student(101,"MST. MAFUZA KHATUN",17,100);
console.log(Meghla)