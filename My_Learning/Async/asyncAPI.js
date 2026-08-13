// async function myFunc(){
//     return "Hello";
// }

// console.log(myFunc())

// function myFunc(){
//     return Promise.resolve("Hello");
// }
// console.log(myFunc())

async function randomUser() {
    let userData = await fetch(`https://randomuser.me/api/`);
    let rawData = await userData.json();
}

let showUserData = (userObj) => {
    console.log(userObj);
}

showUserData(randomUser())