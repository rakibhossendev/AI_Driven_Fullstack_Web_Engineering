const polytechnic = {
    name : "Jashore Polytechnic Institute",
    location : "Jashore High Coad Mor",
    shift: ["Day","Morning"],
    'total student': 1600,
    people:{
        totalPeople: 300,
        principal: {
            name: "Babu Saha",
            age: 47,
            exprience: 10,
            degree: "Cvil Engineering"
        }
    } 
}

console.log(polytechnic["people"]["principal"]["name"])
console.log(Object.entries(polytechnic))