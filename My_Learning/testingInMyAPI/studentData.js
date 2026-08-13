const studentData = async (roll) =>{
    let studentData = await fetch(`http://127.0.0.1:5000/api/students/roll/${roll}`);
    let rawStudentData = await studentData.json();

    return rawStudentData
}
 console.log(studentData(322031))