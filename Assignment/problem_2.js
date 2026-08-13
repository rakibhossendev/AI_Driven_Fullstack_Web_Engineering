
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

console.log(filterActiveUsers("users"))

