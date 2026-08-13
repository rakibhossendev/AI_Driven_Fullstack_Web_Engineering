const userObjectData = {
    user:{
        age:22
    }, 
    hobbies:[]
}

let extractUserInfo = (userObject) =>{
    let {
        hobbies,
        user:{
            name:userName,
            age: userAge
        } 
    } = userObject;
    if(!userObject.user.name){
        return "Invalid";
    }else if(hobbies.length <= 0){
        return `${userName} (${userAge}) likes nothing yet`;
    }

    return `${userName} (${userAge}) likes ${hobbies[0]}`;
}

console.log(extractUserInfo(userObjectData))