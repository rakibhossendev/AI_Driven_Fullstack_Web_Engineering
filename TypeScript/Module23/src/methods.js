"use strict";
class Student {
    id;
    name;
    age;
    mark;
    constructor(id, name, age, mark) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.mark = mark;
    }
    getInformation() {
        return `Id: ${this.id} \nName: ${this.name} \nAge: ${this.age} \nMark: ${this.mark}`;
    }
}
// const Meghla = new Student(101,"MST. MAFUZA KHATUN",17,100);
// console.log(Meghla.getInformation())
class CakeShop {
    title;
    sellProduct = [];
    constructor(title) {
        this.title = title;
    }
    buyProduct(productName, price) {
        this.sellProduct.push({ productName: productName, price: price });
        return this.sellProduct;
    }
}
const shop1 = new CakeShop("ABC");
shop1.buyProduct("Vanila", 400);
console.log(shop1);
