type isPassed = "Passed" | "Fail";
interface StudentInfo {
    name: string;
    marks: number[];
}
interface ResultInfo{
    name: string;
    average: number;
    result: isPassed;
}

const getStudentResult = (studentDataObj: StudentInfo): ResultInfo => {
    const {name:studentName, marks: studentMarks} = studentDataObj;

    const totalMarks = studentMarks.reduce((accumulator,value)=> accumulator + value,0);
    const average = totalMarks/studentMarks.length;
    let result: isPassed = "Fail";
    if(average > 40){
        result = "Passed";
    }

    return {name: studentName, average: average,result: result}
}

const student = { 
    name: "Rafi", 
    marks: [80, 75, 90, 85] 
}; 
console.log(getStudentResult(student))