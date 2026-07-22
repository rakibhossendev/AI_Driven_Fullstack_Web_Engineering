const emailUserProvided = "      example@gmail.com   ";
const emailSavedInDatabase = "example@gmail.com";

if(emailUserProvided.toLowerCase().trim() === emailSavedInDatabase.toLowerCase().trim()){
    console.log("Email is current");
}else{
    console.log("Email is wrong");
}

// Testing

console.log("Remove start space: ",emailUserProvided.trimStart());