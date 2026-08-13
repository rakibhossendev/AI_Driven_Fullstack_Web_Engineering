//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if(typeof student !== 'object' || student === null || !student.name || !student.age || !student.course){
        return "Invalid";
    }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
}

//Problem-02: Active User Filter

function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length === 0){
        return "Invalid";
    }
    for(let user of users){
        if(user === null || typeof user !== 'object' || typeof user.isActive !== 'boolean'){
            return "Invalid";
        }
    }
    let activeUsers = users.filter((user,index)=>user.isActive);
    return activeUsers;
}


//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if(typeof caption !== 'string'){
        return "Invalid"
    }
    let captionArray = caption.split(" ");
    
    let totalHashTag = captionArray.reduce((accumulator,value)=> {
        if(value.startsWith("#")){
            return accumulator + 1;
        }
        return accumulator;
    },0);

    let longestTag = captionArray.filter((value) => value.startsWith("#"))
    .map((value)=> value.slice(1,))
    .reduce((accumulator,value)=>{
        if(value.length > accumulator.length){
            accumulator = value;
        }
        return accumulator;
    },"")

    return {hashtagCount: totalHashTag, longestTag: longestTag}
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0){
        return "Invalid";
    }
    for(let el of scores){
        if(typeof el !== 'number' || Number.isNaN(el)){
            return "Invalid";
        }
    }
    let afterSumArray = scores.map((value)=> value+10);
    let totalScore = afterSumArray.reduce((accumulator,value)=>accumulator + value,0);

    return totalScore;
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
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

