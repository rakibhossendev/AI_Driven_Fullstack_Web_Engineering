interface UserInfo{
    name: string;
    age: number;
    city: string;
}

const formatUserProfile = (userInfoObject: UserInfo): string => {
    return `${userInfoObject.name} is ${userInfoObject.age} years old and lives in ${userInfoObject.city}`;
}

console.log(formatUserProfile({ 
    name: "Fahim", 
    age: 22, 
    city: "Dhaka" 
}));

