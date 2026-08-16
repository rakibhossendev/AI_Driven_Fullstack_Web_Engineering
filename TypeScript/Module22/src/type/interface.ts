interface Employee{
    id: number;
    name: string;
    age: number;
    department: string;
    salary: number;
}
const employee: Employee[] = [
    {
        id: 101,
        name: "Meghla",
        age: 18,
        department: "Software Engineering",
        salary: 100000
    }

]

function printEmployeeDetails(employee: Employee): void{
    console.log(`Name: ${employee.name}`)
    console.log(`Age: ${employee.age}`)
    console.log(`Department: ${employee.department}`)
}

printEmployeeDetails({
        id: 101,
        name: "Meghla",
        age: 18,
        department: "Software Engineering",
        salary: 100000
    }
)

function displayEmployeeDetails({name, age, department}: Employee): void{
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Department: ${department}`)
}
