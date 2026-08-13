const userInput = require("readline-sync");

const student = {
    studen1:{
        student_roll: 322212,
        name: "Mafuza khatun",
        age: 19,
        department: "CST",
        semester: "2nd",
        shift: "Day",
        marks: {
            'bangla-2': 90,
            'english-2': 80,
            'mathmathics-2': 90,
            'basic electronics': 98,
            'python programming': 100
        }
    }
}

let isLogged = false;
const adminUserName = "admin";
const adminPassword = "admin123";

console.log("------------------Welcome----------------------");

const userInputUserName = userInput.question("Enter username: ");
const userInputPassword = userInput.question("Enter Password: ");

if(userInputUserName.toLowerCase().trim() == adminUserName && userInputPassword.trim() == adminPassword){
    isLogged = true;
}else{
    console.log("Enter currnet password");
}

if(isLogged){
    console.log("----Menu------");
    console.log("1. show student");
    
}