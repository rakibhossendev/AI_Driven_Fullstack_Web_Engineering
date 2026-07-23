const person = {
    name : "Meghla",
    age: 17,
    isSingle: true
}

delete person["isSingle"];
console.log(person)

// const allKeys = Object.keys(person);
// console.log(allKeys)
// const allValues = Object.values(person);
// console.log(allValues);