const student = {
    id: 322112,
    name: "Meghla",
    age: 17,
    isSingle: true
}

// const arpaProperty = {
//     name: "Arpa",
//     nickname: ["Apra","Spra","dim","egg","andaV1.0.0","tiktiki"],
//     age: -10,
//     isPagol: true
// }

for(let key in student){
    console.log(key, ": ",student[key])
}