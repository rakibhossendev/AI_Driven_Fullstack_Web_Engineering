let studentData = [
    {name: "MST. MAFUZA KHATUN", mark: 100},
    {name: "RAKIB HOSSEN",mark: 40}
]

const addGrade = (students) => {
    let newData = students;
    let grade = 0;
    studentData.forEach((value,index) => {
        value["mark"] >= 90 ? newData[index].grade = "A+" : value["mark"] >= 80 ? newData[index].grade = "A" : value["mark"] >= 60 ? newData[index].grade = "B" : newData[index].grade = "fail";
    })

    return newData
}

console.log(addGrade());