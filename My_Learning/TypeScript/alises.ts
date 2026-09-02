
type strOrNumb = string | number;
type userType = {name: string, age: number};

const userDetails = (
    id: strOrNumb,
    user: userType
) => {
    console.log(`User id is: ${id}, Username is: ${user.name}`);
}

const sayHello = (user: userType) =>{
    console.log(`Hello ${user.age > 50 ? "Sir": "Mr. "} ${user.name}`);
}
