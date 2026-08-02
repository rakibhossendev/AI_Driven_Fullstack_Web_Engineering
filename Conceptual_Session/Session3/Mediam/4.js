function generateReportCard(studentObject){
    if(typeof studentObject !== 'object'){
        return "Invalid";
    }
    if((typeof studentObject.bangla !== 'number') || (typeof studentObject.english !== 'number') || (typeof studentObject.math !== "number")){
        return "Invalid";
    }
    let valueArray = Object.values(studentObject);
    let grade = "F";
    let total = 0;
    let avarge = 0;
    for(let i = 1; i <valueArray.length; i++){
        total += valueArray[i];
    }
    avarge = total/(valueArray.length - 1);
    if(avarge >= 90){
        grade = "A+";
    }else if(avarge >= 80){
        grade = "A";
    }else if(avarge >= 70){
        grade = "B";
    }
    return {name: studentObject.name, total: total, avarge: Number(avarge.toFixed(2)),grade: grade}
}

console.log(generateReportCard({ name:'Ayan', bangla:80, english:85, math:92 } ))
