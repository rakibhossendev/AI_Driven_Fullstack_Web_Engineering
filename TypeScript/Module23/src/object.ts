interface Student{
    id: number;
    name: string;
    age: number;
}
function studentData(id: number,name: string,age: number): Student{
    return {id: id, name: name, age: age};
}
let Meghla = studentData(1, "Meghla", 18);
console.log(Meghla);