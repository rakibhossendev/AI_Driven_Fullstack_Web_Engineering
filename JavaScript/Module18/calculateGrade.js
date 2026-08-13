const getGrade = (mark) =>{
    if(typeof mark !== 'number'){
        return "Invalid";
    }
    if(mark >= 90){
        return "A+";
    }else if(mark >= 80){
        return "A"
    }else if(mark >= 70){
        return "B";
    }else{
        return "Fail";
    }
} 

console.log(getGrade(null))