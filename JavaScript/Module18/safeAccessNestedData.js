const userData1 = {
    name: "Meghla",
    address:{
        city: "Jashore",

    }
}
const userData2 = {
    name: "Mafuza",

}
const userInformation = (userData) => {
    return userData?.address?.city
}

console.log(userInformation(userData2))