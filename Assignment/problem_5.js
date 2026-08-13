/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students) || students.length === 0) {
        return "Invalid";
    }

    for(let el of students){
        if(el === null || !el.name || typeof el.score !== 'number' || Number.isNaN(el.score)){
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70); 
    const names = qualified.map((value) => value['name'].toUpperCase());

    return names.slice(0,3);
}

console.log(generateLeaderboard([{name:"Rafi"},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75},{name:"Nafis",score:0}]))