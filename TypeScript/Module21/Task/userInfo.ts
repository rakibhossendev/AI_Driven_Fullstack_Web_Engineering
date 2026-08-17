const userInfo = {
  name: "Amina",
  age: 22,
  email: "amina@email.com",
  skills: ["HTML", "CSS", "TypeScript"],
  active: true
}

interface userInfoType{
    name: string,
    age: number,
    email: string,
    skills: string[],
    active: boolean
}
const showUserDetails = (userInfoObj: userInfoType): void =>{
    const {name:userName,age,email,skills,active} = userInfoObj;
    console.log(`Name: ${userName}`);
    console.log(`Age: ${age}`)
    console.log(`Email: ${email}`)
    console.log(`Skills: ${[...skills]}`);
    console.log(`Active: ${active}`)
}
showUserDetails(userInfo)