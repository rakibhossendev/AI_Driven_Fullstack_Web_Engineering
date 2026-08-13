const studentNames = ["Rakib","Meghla","Spra","Rahul","Rakib","Meghla"];
const studentNameObject = {};
for(const name of studentNames){
    studentNameObject[name] = (studentNameObject[name] || 0) + 1;
}
console.log(studentNameObject)