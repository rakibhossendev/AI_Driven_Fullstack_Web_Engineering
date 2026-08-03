function registerStudent(callBackFunction){
    callBackFunction()
    return "Student is Registering data needed! "
}

function studentBasicInformation(){
    const student = {
        id: 322112,
        fullName: "Mafuza Khatun",
        age: 15
    }
    // return student
    console.log(student)
}
function studentPersonalInformation(){
    const student = {
        mobile: "01xxxxxxxx",
        isSingle: true
    }
    console.log(student);
}

console.log(registerStudent(studentBasicInformation))
console.log(registerStudent(studentPersonalInformation))