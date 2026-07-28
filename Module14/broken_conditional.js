function checkAdult(age){
    if(age = 18){ // Logical error
        return "adult";
    }
    return "Minor"; 
}

// console.log(checkAdult(16))

// After fix bugs
function checkAdult(age){
    if(age>=18){
        return "Adult";
    }else{
        return 'Minor';
    }
}
// console.log(checkAdult(18))

function canApplay(age,hasNid){
    if(age == 18 || hasNid){ // Logical Error 
        return "enable";
    }
    return "Not Eliligable";
}
// console.log(canApplay(15,true))

function canApplay(age,hasNid){
    if(age >= 18 && hasNid){ // Logical Error 
        return "enable";
    }
    return "Not Eliligable";
}
// console.log(canApplay(15,true))

function canAttendFinalExam(attendance,assignmentMark){
    if(attendance <= 90 && assignmentMark <= 80){ // Logical Error
        return "Eligible with scholarship";
    }else if(attendance <= 80 && assignmentMark <= 50){ // Logicl Error
        return "Attend exam";
    }else{
        return "Not eligable";
    }
}

console.log(canAttendFinalExam(90,100))