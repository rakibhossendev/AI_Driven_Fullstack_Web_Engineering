const userData = {
    user:{
        name: "Her Name",
    }
}
const userDataDestructure = (objectData) =>{
    let {
        user:
        {
            name:userName,
            age:userAge=18
        }
    } = objectData;
    console.log("Name: ",userName);
    console.log("Age: ",userAge);
    
}

userDataDestructure(userData)