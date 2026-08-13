const studnetData = [
    {id: 1001, name: "RAKIB HOSSEN",mark: 90},
    {id: 1002, name: "ARONNO RAHAMAN SPRA",mark: 20},
    {id: 1003, name: "MST. MAFUZA KHATUN",mark: 100}
]

const getStudentPassing = (arrayOfObjStudent, threshold) => {
    let paasedStudents = arrayOfObjStudent.filter((value) => value.mark >= threshold);
    return paasedStudents;
}

console.log(getStudentPassing(studnetData,70));