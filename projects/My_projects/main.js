
const userInput = require("readline-sync");

// Banner
function loginBanner(){
    console.log("-----------------------------");
    console.log("WELCOME TO LOGIN PAGE")
    console.log("-----------------------------");
}

function menuBanner(...items){
    console.clear();
    console.log("-----------------------------");
    for(let i = 0; i<items.length; i++){
        console.log("  ",i+1," ",items[i]);
    }
    console.log("-----------------------------");   
}

function loginAdmin(){
    console.clear();
    loginBanner()

    const adminUserName = "admin";
    const adminPassword = "admin123";
    let isLogged = false;

    const userInputAdminUserName = userInput.question("Enter username: ");
    const userInputAdminPassword = userInput.question("Enter password: ");

    if(userInputAdminUserName.toLowerCase().trim() === adminUserName && userInputAdminPassword === adminPassword){
        isLogged = true;
    }

    return isLogged;
}

function inputOption(){
    let inputUserOption = userInput.question("Enter option: ");
    return inputUserOption;
}

function addStudent(){
    // menuBanner("Add Student")
    const howManyStudentAdd = userInput.question("Enter how many studet add: ");
    const students = {}
    for(let i=0; i < howManyStudentAdd; i++){
        console.log("\n");
        console.log("Enter student data of ", i+1);
        students[`student${i+1}`]={
            roll: userInput.question("Enter student roll: "),
            name: userInput.question("Enter student name: "),
            department: userInput.question("Enter department: "),
            marks:{}
        }
        const howManySubject = userInput.question("Enter how many subject: ");
        for(let j =0; j<howManySubject; j++){
            console.log("\n");
            const subjectName = userInput.question(`Enter subjects ${j+1} Name: `);
            const mark = Number(userInput.question(`Enter ${subjectName} marks: `));

            students[`student${i+1}`].marks[subjectName] = mark;  
        }
    } 
    return students;
}

// const students = addStudent();

function showStudentData(){
    for(const [studentKey,studentData] of Object.entries(students)){
        console.log("\n");
        console.log(studentKey);
        console.log("-------------------------------");
        console.log("Student Roll: ",studentData.roll);
        console.log("Student Name: ",studentData.name);
        console.log("department: ",studentData.department);
    }
}

function home(){
    while(loginAdmin()){
        menuBanner("  Add student","  show studnet");
        const userOptionChoices = inputOption();

        if(userOptionChoices == 1){
            addStudent();
        }else if(userOptionChoices == 2){
            showStudentData();
        }
    }
}

home()