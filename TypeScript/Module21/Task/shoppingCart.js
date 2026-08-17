"use strict";
// একটি shopping cart object বানাও।
// একটি function দিয়ে user login check করো।
// array থেকে even numbers filter করো।
// nested object থেকে country বের করো।
// type-safe function দিয়ে total price calculate করো।
const shoppingCart = {
    "shoppingCart": {
        "items": [
            {
                "id": "prod-101",
                "name": "Wireless Mouse",
                "price": 25.99,
                "quantity": 2
            },
            {
                "id": "prod-102",
                "name": "Mechanical Keyboard",
                "price": 89.99,
                "quantity": 1
            }
        ],
        "couponCode": "SAVE10",
    },
    "userSession": {
        "isLoggedIn": true,
        "authToken": "abc123xyz",
        "profile": {
            "name": "Rahat Khan",
            "address": {
                "street": "12 Dhaka Road",
                "city": "Uttara",
                "country": "Bangladesh"
            }
        }
    },
    "numbersDataset": {
        "originalArray": [12, 22, 34, 50],
    }
};
const authenticationCheck = (userObject) => {
    const { userSession: { isLoggedIn } } = userObject;
    return isLoggedIn;
};
const userFilteredData = (userObject) => {
    if (!authenticationCheck(userObject)) {
        return "Invalid User";
    }
    let { numbersDataset: { originalArray }, shoppingCart: { items }, userSession: { profile: { name: userName, address: { country } } } } = userObject;
    const filteredEvenNumber = originalArray.filter((el => el % 2 == 0));
    const totalPrice = items.reduce((accumulator, value) => accumulator + value.price, 0);
    return {
        userName: userName,
        evenNumber: filteredEvenNumber,
        country: country,
        totalPrice: parseInt(totalPrice.toFixed(3))
    };
};
console.log(userFilteredData(shoppingCart));
