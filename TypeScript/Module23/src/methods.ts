
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

    getInformation(): string{
        return `Id: ${this.id} \nName: ${this.name} \nAge: ${this.age} \nMark: ${this.mark}`
    }
}

// const Meghla = new Student(101,"MST. MAFUZA KHATUN",17,100);
// console.log(Meghla.getInformation())

class CakeShop{
    title: string
    sellProduct: object[] = [];

    constructor(title: string){
        this.title = title
    }
    buyProduct(productName: string, price: number): object[]{
        this.sellProduct.push({productName: productName, price: price});
        return this.sellProduct;
    }
}

const shop1 = new CakeShop("ABC");
shop1.buyProduct("Vanila",400)
console.log(shop1)

