const student = {
    name: "Meghla",
    age: 17,
    favoriteSubjects: ["Python programming","Math - 2","Chemistry"] 
}

for(const key in student){
    
    console.log(key," : ",student[key])
}