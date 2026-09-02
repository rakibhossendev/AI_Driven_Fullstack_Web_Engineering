const addId = <T extends {name: string, age: number}>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return {...obj, id}
};

let user = addId({
    name: "Meghla",
    age: 15,
    city: "Jashore"
});

