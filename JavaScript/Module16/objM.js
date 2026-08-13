const student = {
    id: 322112,
    name: "Meghla",
    age: 17
}

const entries = Object.entries(student);

for(let el of entries){
    const [key,value] = el
    console.log(`${key}: ${value}`);
}
