// Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

let username = "rakibmeghla";
let password = "RakibMeghla";

const isAdmin = true;

if(username === "rakibmeghla" && password==="RakibMeghla"){
    isAdmin ? console.log("Welcome to Admin Dashboard") : console.log("Welcome to user dashboard");
}else{
    console.log("Invalid username or password");
}