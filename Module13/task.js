const student = {
    name: "utsho",
    age: 26,
    university: "DIU",
    department: "CSE"
}

const allKeys = Object.keys(student);
console.log(allKeys.join(' '))
const allValues = Object.values(student);
console.log("\n")
console.log(allValues.join(' '));
console.log("\n");
let totalProperty = 0;
for(let key in student){
    console.log(key, ": ",student[key]);
    totalProperty += 1;
}
console.log("\n");
console.log("Total Property: ",totalProperty);
if(!allKeys.includes("email")){
    console.log("Has Email",false)
}else{
    console.log("Has Email: ",true);
}